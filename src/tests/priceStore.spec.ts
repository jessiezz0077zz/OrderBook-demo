import { setActivePinia, createPinia } from 'pinia';
import { usePriceStore } from '../stores/priceStore';
import { LastPriceMessage } from '../types';

describe('priceStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("Init_State", () => {
    const store = usePriceStore();

    expect(store.currentPrice).toBeUndefined();
    expect(store.colorStyle).toBe('');
  });

  test("First_Price_ColorStyle_Is_Higher_Than_Zero", () => {
    const store = usePriceStore();
    store.handlePrice(givenPrice(21000));

    expect(store.currentPrice).toBe(21000);
    expect(store.colorStyle).toBe('higher');
  });

  test("Update_Price_Higher_Than_Init", () => {
    const store = usePriceStore();
    store.handlePrice(givenPrice(21000));
    store.handlePrice(givenPrice(22000));

    expect(store.currentPrice).toBe(22000);
    expect(store.colorStyle).toBe('higher');
  });

  test("Update_Price_Lower_Than_Init", () => {
    const store = usePriceStore();
    store.handlePrice(givenPrice(21000));
    store.handlePrice(givenPrice(20000));

    expect(store.currentPrice).toBe(20000);
    expect(store.colorStyle).toBe('lower');
  });

  test("Update_Price_Equal_To_Last", () => {
    const store = usePriceStore();
    store.handlePrice(givenPrice(21000));
    store.handlePrice(givenPrice(21000));

    expect(store.currentPrice).toBe(21000);
    expect(store.colorStyle).toBe('');
  });

  test("Invalid_Message_Does_Not_Update_State", () => {
    const store = usePriceStore();
    store.handlePrice(givenPrice(21000));
    store.handlePrice({ topic: 'tradeHistoryApi:BTCPFC', data: [] });

    expect(store.currentPrice).toBe(21000);
    expect(store.colorStyle).toBe('higher');
  });
});

function givenPrice(price: number): LastPriceMessage {
  return {
    topic: 'tradeHistoryApi:BTCPFC',
    data: [{
      symbol: 'BTCPFC',
      side: 'SELL',
      size: 0.007,
      price,
      tradeId: 118974885,
      timestamp: 1584446020295
    }]
  };
}
