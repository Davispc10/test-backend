import { type HttpResponse, type HttpRequest } from '@/application/helpers'

export interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
