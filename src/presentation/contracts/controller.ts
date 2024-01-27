import { HttpResponse } from '@/presentation/contracts'

export interface Controller {
  handle: (req) => Promise<HttpResponse>
}
