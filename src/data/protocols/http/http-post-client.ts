import { HttpResponse } from '.'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

// T = body type  |  R = response type
export interface HttpPostClient<T, R> {
  post (params: HttpPostParams<T>): Promise<HttpResponse<R>>
}
