import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRouters } from "./app/modules/products/product.router";
import { OrderRouters } from "./app/modules/orders/order.routeR";
const app: Application = express();

app.use(cors());

app.use(express.json());

app.use("/api/products", ProductRouters);
app.use("/api/orders", OrderRouters);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
