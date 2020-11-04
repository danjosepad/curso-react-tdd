import { HttpPostClient } from 'data/protocols/http/http-post-client'

// Export all classes based on HttpClient (POST, GET...)
export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post (url: string): Promise<void> {
    this.url = url
    return Promise.resolve()
  }
}
