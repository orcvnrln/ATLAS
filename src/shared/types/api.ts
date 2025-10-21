// src/shared/types/api.ts

export type AssetType = 'CRYPTO' | 'FX' | 'STOCKS' | 'COMMODITIES';

export interface Asset {
  id: string;
  symbol: string;
  name: string;
  assetType: AssetType;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
}
