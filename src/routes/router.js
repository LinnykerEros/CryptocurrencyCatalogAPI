import { Router } from "express";
import { cryptoCurrencyRoutes } from "./crypto_currency/cryptoRoutes.js";

const router = Router();

router.use("/criptocurrency", cryptoCurrencyRoutes);

export { router };
