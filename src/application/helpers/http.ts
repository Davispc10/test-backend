import { type NotFoundError } from '@/domain/errors'

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

export const ok = <T=any> (data: T): HttpResponse<T> => ({
  statusCode: 200,
  data: {
    code: 200,
    data
  }
})

export const notFound = (error: NotFoundError): HttpResponse<ErrorResponse> => ({
  statusCode: 404,
  data: {
    code: 404,
    data: {
      error: {
        type: error.name,
        message: error.message
      }
    }
  }
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
