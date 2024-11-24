import { Product } from "../products/product.model";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (order: IOrder) => {
  const product = await Product.findById(order.product);

  if (!product) {
    throw new Error("Product not found");
  }
  if (!Number.isInteger(order.quantity) || order.quantity <= 0) {
    throw new Error("Order quantity must be a positive integer");
  }

  if (product.quantity === 0) {
    product.inStock = false;
    await product.save();
    throw new Error("Product out of stock");
  }

  if (product.quantity < order.quantity && product.inStock) {
    throw new Error("Insufficient quantity");
  }

  product.quantity = product.quantity - order.quantity;
  await product.save();

  const result = await Order.create(order);

  return result;
};

const getRevenue = async () => {
  const dataFromDB = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: { $multiply: ["$quantity", "$totalPrice"] } },
      },
    },
  ]);

  const result = {
    totalRevenue: dataFromDB[0]?.totalRevenue || 0,
  };
  return result;
};
export const OrderService = { createOrderIntoDB, getRevenue };
