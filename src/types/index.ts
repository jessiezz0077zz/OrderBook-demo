export interface TradeData {
  symbol: string;
  side: 'BUY' | 'SELL';
  size: number;
  price: number;
  tradeId: number;
  timestamp: number;
}

export interface LastPriceMessage {
  topic?: string;
  data?: TradeData[];
}

export interface OrderBookData {
  bids: string[][];
  asks: string[][];
  seqNum: number;
  prevSeqNum: number;
  type: 'snapshot' | 'delta';
  timestamp: number;
  symbol: string;
}

export interface OrderBookMessage {
  topic?: string;
  data?: OrderBookData;
  event?: string;
  channel?: string[];
}

export interface OrderBookInfo {
  price: string;
  size: string;
  total: number;
  percentage: number;
  orderStyle: 'sizeUp' | 'sizeDown' | 'new' | '';
}

export interface SocketRequest {
  op: string;
  args: string[];
}
