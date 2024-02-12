export interface ITickerDTO {
  BTCBRL: ICurrency;
  EURBRL: ICurrency;
  USDBRL: ICurrency;
}

export interface ICurrency {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}
