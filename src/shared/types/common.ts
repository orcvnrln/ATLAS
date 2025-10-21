// src/shared/types/common.ts

// A generic paginated response structure from the API
export interface PaginatedResponse<T> {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  items: T[];
}

// A standardized API error response
export interface ApiError {
  statusCode: number;
  message: string;
  error: string;
}

// User role definitions
export type UserRole = 'RETAIL' | 'PROP_TRADER' | 'INSTITUTIONAL' | 'ADMIN';
