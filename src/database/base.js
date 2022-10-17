import { v4 as uuid } from "uuid";
const baseCryptocurrency = [
  {
    id: uuid(),
    name: "Bitcoin",
    tradingVolume: [
      {
        price: "103.036,52",
        lastPrice: "R$ 103.036,52",
        maximum: "103.622,93",
        minimum: "101.800,00",
        volume: "48,70"
      }
    ],
    image: "https://images.barrons.com/im-397116?width=1280&size=1",

    content:
      "A primeira e mais negociada cripto no mundo. O BTC possui alta volatilidade e valor determinado pelo mercado."
  },
  {
    id: uuid(),
    name: "Bitcoin Cash",
    tradingVolume: [
      {
        price: "103.036,52",
        lastPrice: "R$ 103.036,52",
        maximum: "103.622,93",
        minimum: "101.800,00",
        volume: "48,70"
      }
    ],
    image:
      "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy81NWNlZWFmMTE3MTEyNmI2YjkwNzlkNzViNWZmMDdhNy5qcGc=.jpg",
    content:
      "Uma modificação direta do blockchain do Bitcoin(BTC), oferecendo um sistema mais avançado e rápido."
  },
  {
    id: uuid(),
    name: "Ethereum",
    tradingVolume: [
      {
        price: "103.036,52",
        lastPrice: "R$ 103.036,52",
        maximum: "103.622,93",
        minimum: "101.800,00",
        volume: "48,70"
      }
    ],
    image:
      "https://classic.exame.com/wp-content/uploads/2021/11/Ethereum-coin.jpg?quality=70&strip=info&w=724",
    content:
      "Não é exatamente uma criptomoeda, mas sim, uma plataforma descentralizada capaz de executar contratos inteligentes e aplicações descentralizadas usando a tecnologia blockchain. Existe uma criptomoeoda chamada Ether, contectada à rede Ethereum."
  },
  {
    id: uuid(),
    name: "Litecoin",
    tradingVolume: [
      {
        price: "103.036,52",
        lastPrice: "R$ 103.036,52",
        maximum: "103.622,93",
        minimum: "101.800,00",
        volume: "48,70"
      }
    ],
    image:
      "https://renovainvest.com.br/wp-content/uploads/2022/05/O-que-e-Litecoin-Conheca-essa-moeda-digital-v2.png",
    content:
      "Transmite e valida transações por meio de uma rede descentralizada, como o BTC, no entando, é mais rápida. Essas cripto é popular entre comerciantes."
  },
  {
    id: uuid(),
    name: "Tether",
    tradingVolume: [
      {
        price: "103.036,52",
        lastPrice: "R$ 103.036,52",
        maximum: "103.622,93",
        minimum: "101.800,00",
        volume: "48,70"
      }
    ],
    image:
      "https://macrohive.com/wp-content/uploads/2022/05/shutterstock_1898032645.jpg",
    content:
      "Cripto com valor mais estável, já que é atrelado ao dólar. Esse tipo de relação leva o nome de Stablecoin. Ela conecta o setor financeiro e o criptomercado."
  },
  {
    id: uuid(),
    name: "Dogecoin",
    tradingVolume: [
      {
        price: "103.036,52",
        lastPrice: "R$ 103.036,52",
        maximum: "103.622,93",
        minimum: "101.800,00",
        volume: "48,70"
      }
    ],
    image:
      "https://einvestidor.estadao.com.br/wp-content/uploads/sites/715/2021/06/dogecoin_160620213256.jpg",
    content:
      "Semelhante ao bitcoin por também sser peer to peer, ou seja, negociada diretamente sem intermediários, e por usar o proof of work, como sistema de mineração. Criada como uma moeda pirata, a Dogecoin passou de meme para capitalização bilionária. "
  },
  {
    id: uuid(),
    name: "Cardano",
    tradingVolume: [
      {
        price: "103.036,52",
        lastPrice: "R$ 103.036,52",
        maximum: "103.622,93",
        minimum: "101.800,00",
        volume: "48,70"
      }
    ],
    image:
      "https://media.seudinheiro.com/uploads/2021/09/3351FE42EF96B1EE7A605FDF75D590289AAA20793E20DD65BF0B37159044D0F8.jpeg",
    content:
      "Essa plataforma executa o blockchain para criar a criptomoeda ADA. Diz-se que ela possui o sistema de blockchain mais seguro, prometendo mais inovações no segmento."
  },
  {
    id: uuid(),
    name: "Polkadot",
    tradingVolume: [
      {
        price: "103.036,52",
        lastPrice: "R$ 103.036,52",
        maximum: "103.622,93",
        minimum: "101.800,00",
        volume: "48,70"
      }
    ],
    image:
      "https://924234.smushcdn.com/2329743/wp-content/uploads/2022/08/polkadot-deve-superar-esta-resistencia-para-interromper-tendencia-de-baixa.jpg?lossy=1&strip=1&webp=1",
    content:
      "Outra rival da Ethereum, tem o objetivo de integrar sistemas de blockchain para uso simultâneo, operando com funções distintas."
  },
  {
    id: uuid(),
    name: "Binance Coin",
    tradingVolume: [
      {
        price: "103.036,52",
        lastPrice: "R$ 103.036,52",
        maximum: "103.622,93",
        minimum: "101.800,00",
        volume: "48,70"
      }
    ],
    image:
      "https://p7z2w8n8.rocketcdn.me/wp-content/uploads/2021/04/binance-coin-o-que-e-como-funciona-vantagens-e-desvantagens-1.jpg",
    content:
      "É a cripto utilizada dentro da Binance, uma Exchange e bolsa de criptoativos bastante popular, focada, também, em contratos inteligentes e aplicativos descentralizados. Com ela você negocia com mais de 100 criptomoedas na Exchange."
  }
];

const baseContentAboutCryptocurrency = [
  {
    title: "O que são CriptoMoedas?",
    content:
      "Criptomoeda é o nome genérico para moedas digitais descentralizadas, criadas em uma rede blockchain a partir de sistemas avançados de criptografia que protegem as transações, suas informações e os dados de quem transaciona."
  },
  {
    title: "O que significa o fato da Criptomoeda ser digital?",
    content:
      "Criptomoedas são moedas digitais porque, diferentemente do real, do dólar e de outras moedas que podem ser tocadas, elas só existem na internet. Ou seja, você sabe que elas são verdadeiras, mas não consegue pegá-las com as mãos – ou guardá-las na carteira, no cofre ou embaixo do colchão."
  },
  {
    title: "O que significa o fato da Criptomoeda ser Descentralizada?",
    content:
      "Descentralizadas porque não existe um órgão ou governo responsável por controlar, intermediar e autorizar emissões de moedas, transferências e outras operações. Quem faz isso são os próprios usuários."
  }
];

export { baseCryptocurrency, baseContentAboutCryptocurrency };
