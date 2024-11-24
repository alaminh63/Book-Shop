import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (product: IProduct) => {
  const result = await Product.create(product);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (productId: string) => {
  if (!productId) {
    throw new Error("Product id is required");
  }
  const result = await Product.findById(productId);
  if (!result) {
    throw new Error("Product not found");
  }
  return result;
};

const updateSingleProductFromDB = async (productId: string, data: IProduct) => {
  if (!productId) {
    throw new Error("Product id is required");
  }

  if (!data) {
    throw new Error("Product data is required");
  }

  const result = await Product.findByIdAndUpdate(productId, data, {
    new: true,
  });

  if (!result) {
    throw new Error("Product not found");
  }

  return result;
};

const deleteSingleProductFromDB = async (productId: string) => {
  if (!productId) {
    throw new Error("Product id is required");
  }
  const result = await Product.findByIdAndDelete(productId);

  if (!result) {
    throw new Error("Product not found");
  }
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
  deleteSingleProductFromDB,
};
