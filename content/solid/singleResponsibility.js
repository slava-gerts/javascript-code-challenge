export class DataFetcher {
  get() {}
  post() {}
  put() {}
  delete() {}

  getUser(id) {
    this.get(`https://server-domain/users/${id}`)
  }

  getUsers() {
    this.get('https://server-domain/users')
  }

  getDocuments() {
    this.get('https://server-domain/documents')
  }
}

export class HttpClient {
  get() {}
  post() {}
  put() {}
  delete() {}
}

export class UserService {
  constructor(client) {
    this.client = client
  }

  getUser(id) {
    this.client.get(`https://server-domain/users/${id}`)
  }

  getUsers() {
    this.client.get('https://server-domain/users')
  }
}

export class DocumentService {
  constructor(client) {
    this.client = client
  }

  updateDocument(id) {
    this.client.put(`https://server-domain/documents/${id}`)
  }

  getDocuments() {
    this.client.get('https://server-domain/documents')
  }
}