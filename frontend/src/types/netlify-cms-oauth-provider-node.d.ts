declare module "netlify-cms-oauth-provider-node" {
  interface Config {
    origin: string;
    completeUrl: string;
    oauthClientID: string;
    oauthClientSecret: string;
    oauthProvider?: string;
    oauthScopes?: string;
  }

  interface Options {
    useEnv?: boolean;
  }

  export function createVercelBeginHandler(
    config?: Partial<Config>,
    options?: Options,
  ): unknown;

  export function createVercelCompleteHandler(
    config?: Partial<Config>,
    options?: Options,
  ): unknown;
}
