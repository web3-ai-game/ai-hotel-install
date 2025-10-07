export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginationParams {
  page: number
  limit: number
  sort?: string
  order?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> extends ApiResponse<T> {
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}
