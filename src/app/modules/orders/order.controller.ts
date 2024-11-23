import { Request, Response } from "express";
import { ApiSuccessResponse } from "../../../utils/ApiSuccessResponse";
import { ApiErrorResponse } from "../../../utils/ApiErrorResponse";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrderService.createOrderIntoDB(order);
    ApiSuccessResponse(res, 201, "Order created successfully!", result);
  } catch (error) {
    ApiErrorResponse(res, 500, "Failed to create order", error);
  }
};

const getRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getRevenue();
    ApiSuccessResponse(res, 200, "Revenue fetched successfully!", result);
  } catch (error) {
    ApiErrorResponse(res, 500, "Failed to fetch revenue", error);
  }
};

export const OrderController = {
  createOrder,
  getRevenue,
};
