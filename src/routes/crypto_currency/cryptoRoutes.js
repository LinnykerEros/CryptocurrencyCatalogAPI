import { Router } from "express";

import { CryptoCurrencyController } from "../../controllers/CryptocurrencyController.js";

const cryptoCurrencyRoutes = Router();
const cryptoCurrencyController = new CryptoCurrencyController();

//GET
cryptoCurrencyRoutes.get("/", cryptoCurrencyController.findAll);
cryptoCurrencyRoutes.get("/:id", cryptoCurrencyController.findById);

export { cryptoCurrencyRoutes };
