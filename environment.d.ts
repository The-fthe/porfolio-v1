interface ImportMetaEnv {
  readonly BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Fetcher {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>
}

type D1Database = object

declare module "cloudflare:workers" {
  export const env: {
    DB: D1Database
  }
}
