import {
  baseCryptocurrency,
  baseWithCryptocurrency
} from "../database/base.js";

export class CryptoCurrencyController {
  async findAll(req, res) {
    try {
      const cryptoCurrency = baseCryptocurrency;

      return res.status(200).json(cryptoCurrency);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;

      const cryptoCurrency = await baseCryptocurrency.find(
        element => element.id === id
      );

      if (!cryptoCurrency) {
        return res.status(404).json({ message: "Publicação não encontrada!" });
      }

      return res.status(200).json(cryptoCurrency);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}
