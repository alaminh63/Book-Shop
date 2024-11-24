import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { ApiSuccessResponse } from "../../../utils/ApiSuccessResponse";
import { ApiErrorResponse } from "../../../utils/ApiErrorResponse";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductService.createProductIntoDB(product);
    ApiSuccessResponse(res, 201, "Product created successfully!", result);
  } catch (error) {
    ApiErrorResponse(res, 500, "Failed to create product", error);
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductFromDB();
    ApiSuccessResponse(res, 200, "User fetched successfully!", result);
  } catch (error) {
    ApiErrorResponse(res, 500, "Failed to fetch products", error);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductService.getSingleProductFromDB(
      productId as string
    );
    ApiSuccessResponse(res, 200, "User fetched successfully!", result);
  } catch (error) {
    ApiErrorResponse(res, 500, "Failed to fetch product", error);
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const data = req.body;
    const result = await ProductService.updateSingleProductFromDB(
      productId,
      data
    );
    ApiSuccessResponse(res, 200, "Product updated successfully!", result);
  } catch (error) {
    ApiErrorResponse(res, 500, "Failed to update product", error);
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await ProductService.deleteSingleProductFromDB(productId);
    ApiSuccessResponse(res, 200, "Product deleted successfully!", {});
  } catch (error) {
    ApiErrorResponse(res, 500, "Failed to delete product", error);
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
