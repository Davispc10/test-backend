export type HttpRequest = {
  body?: any
  query?: any
  params?: any
  headers?: any
}

export type HttpResponse<T = any> = {
  statusCode: number
  data?: {
    code: number
    data: T
  }
  headers?: any
}

export type ErrorResponse = {
  error: {
    type: string
    message: string
  }
}

export const ok = <T=any> (data: T, headers?: any): HttpResponse<T> => ({
  statusCode: 200,
  data: {
    code: 200,
    data
  },
  headers
})

export const serverError = (error: Error): HttpResponse<ErrorResponse> => ({
  statusCode: 500,
  data: {
    code: 500,
    data: {
      error: {
        type: error.name,
        message: error.message
      }
    }
  }
})
