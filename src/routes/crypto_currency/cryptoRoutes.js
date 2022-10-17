import { Router } from "express";

import { CryptoCurrencyController } from "../../controllers/CryptocurrencyController.js";

const cryptoCurrencyRoutes = Router();
const cryptoCurrencyController = new CryptoCurrencyController();

//GET
cryptoCurrencyRoutes.get("/", cryptoCurrencyController.findAll);
cryptoCurrencyRoutes.get("/about", cryptoCurrencyController.findAllContent);
cryptoCurrencyRoutes.get("/:id", cryptoCurrencyController.findById);
cryptoCurrencyRoutes.get("/search", cryptoCurrencyController.search);

export { cryptoCurrencyRoutes };
