// src/features/trading-chart/hooks/useMarketData.ts

import { useQuery } from '@tanstack/react-query';
import apiClient from '@/shared/api/apiClient';
import { Asset } from '@/shared/types/api';

// --- API Function ---
const fetchMarketData = async (symbol: string): Promise<Asset> => {
  // In a real application, you would fetch historical data, etc.
  // This is a simplified example.
  const { data } = await apiClient.get<Asset>(`/marketdata/${symbol}`);
  return data;
};

// --- Custom Hook ---
export const useMarketData = (symbol: string) => {
  return useQuery({
    queryKey: ['marketData', symbol], // Unique key for this query
    queryFn: () => fetchMarketData(symbol),
    // Optional: Configure refetching interval for real-time updates
    refetchInterval: 5000, // Refetch every 5 seconds
    enabled: !!symbol, // Only run the query if a symbol is provided
  });
};
