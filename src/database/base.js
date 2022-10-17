import { v4 as uuid } from "uuid";
const baseCryptocurrency = [
  {
    id: uuid(),
    name: "Bitcoin",
    content:
      "A primeira e mais negociada cripto no mundo. O BTC possui alta volatilidade e valor determinado pelo mercado."
  },
  {
    id: uuid(),
    name: "Bitcoin Cash",
    content:
      "Uma modificação direta do blockchain do Bitcoin(BTC), oferecendo um sistema mais avançado e rápido."
  },
  {
    id: uuid(),
    name: "Ethereum",
    content:
      "Não é exatamente uma criptomoeda, mas sim, uma plataforma descentralizada capaz de executar contratos inteligentes e aplicações descentralizadas usando a tecnologia blockchain. Existe uma criptomoeoda chamada Ether, contectada à rede Ethereum."
  },
  {
    id: uuid(),
    name: "Litecoin",
    content:
      "Transmite e valida transações por meio de uma rede descentralizada, como o BTC, no entando, é mais rápida. Essas cripto é popular entre comerciantes."
  },
  {
    id: uuid(),
    name: "Tether",
    content:
      "Cripto com valor mais estável, já que é atrelado ao dólar. Esse tipo de relação leva o nome de Stablecoin. Ela conecta o setor financeiro e o criptomercado."
  },
  {
    id: uuid(),
    name: "Dogecoin",
    content:
      "Semelhante ao bitcoin por também sser peer to peer, ou seja, negociada diretamente sem intermediários, e por usar o proof of work, como sistema de mineração. Criada como uma moeda pirata, a Dogecoin passou de meme para capitalização bilionária. "
  },
  {
    id: uuid(),
    name: "Cardano",
    content:
      "Essa plataforma executa o blockchain para criar a criptomoeda ADA. Diz-se que ela possui o sistema de blockchain mais seguro, prometendo mais inovações no segmento."
  },
  {
    id: uuid(),
    name: "Polkadot",
    content:
      "Outra rival da Ethereum, tem o objetivo de integrar sistemas de blockchain para uso simultâneo, operando com funções distintas."
  },
  {
    id: uuid(),
    name: "Binance Coin",
    content:
      "É a cripto utilizada dentro da Binance, uma Exchange e bolsa de criptoativos bastante popular, focada, também, em contratos inteligentes e aplicativos descentralizados. Com ela você negocia com mais de 100 criptomoedas na Exchange."
  }
];

const baseWithCryptocurrency = {
  contentOne:
    "Criptomoeda é o nome genérico para moedas digitais descentralizadas, criadas em uma rede blockchain a partir de sistemas avançados de criptografia que protegem as transações, suas informações e os dados de quem transaciona.",

  contentTwo:
    "Criptomoedas são moedas digitais porque, diferentemente do real, do dólar e de outras moedas que podem ser tocadas, elas só existem na internet. Ou seja, você sabe que elas são verdadeiras, mas não consegue pegá-las com as mãos – ou guardá-las na carteira, no cofre ou embaixo do colchão.",
  contentThree:
    "Descentralizadas porque não existe um órgão ou governo responsável por controlar, intermediar e autorizar emissões de moedas, transferências e outras operações. Quem faz isso são os próprios usuários."
};

export { baseCryptocurrency, baseWithCryptocurrency };
