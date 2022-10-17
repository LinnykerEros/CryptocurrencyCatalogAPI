import {
  baseCryptocurrency,
  baseContentAboutCryptocurrency
} from "../database/base.js";

export class CryptoCurrencyController {
  async findAll(req, res) {
    try {
      const cryptoCurrency = baseCryptocurrency;

      if (!cryptoCurrency) {
        return res
          .status(404)
          .json({ message: "Lista de criptomoedas não encontrada!" });
      }

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
        return res.status(404).json({ message: "Criptomoeda não encontrada!" });
      }

      return res.status(200).json(cryptoCurrency);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async findAllContent(req, res) {
    try {
      const contentAboutCryptocurrency = await baseContentAboutCryptocurrency;

      if (!contentAboutCryptocurrency) {
        return res.status(404).json({ message: "Conteúdo não encontrado!" });
      }
      return res.status(200).json(contentAboutCryptocurrency);
    } catch (error) {
      return res.status(500).json({ message: err.message });
    }
  }

  async search(req, res) {
    try {
      const { nome } = req.body;

      const filter = baseCryptocurrency.filter(item => item.name === nome);

      if (!filter) {
        return res.status(404).json({ message: "Criptomoeda não encontrada!" });
      }

      return res.status(200).json(filter);
    } catch (error) {
      console.log(error);
    }
  }
}
