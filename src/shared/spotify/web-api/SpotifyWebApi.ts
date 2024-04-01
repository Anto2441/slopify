import { getServerSession } from "@/shared/auth/next";
import {
  HttpService,
  type HttpOptions,
  type HttpResource,
  type HttpResponse,
  type IHttpService,
} from "@/shared/http";

import { ISpotifyWebApi } from "./ISpotifyWebApi";

// TODO: Move it to and grab it from a AuthService instead?
type IAuthService = Promise<{ accessToken?: string } | null>;

interface SpotifyWebApiDeps {
  /**
   * The HTTP service to use for making HTTP requests.
   *
   * @see {@link IHttpService}
   */
  httpService: IHttpService;
  /**
   * The authentication service to use for obtaining the access token.
   *
   * This promise resolves to an object with an optional `accessToken` property.
   * The `accessToken` is used as the bearer token in the `Authorization` header
   * of the HTTP requests made by `httpService`.
   */
  authService: IAuthService;
}

/**
 * The `SpotifyWebApi` class is a client for making requests to the Spotify Web API.
 *
 * It uses an {@link IHttpService} to make HTTP requests and an {@link IAuthService} to pass
 * the Authorization token with each request.
 */
export class SpotifyWebApi implements ISpotifyWebApi {
  constructor(
    private readonly deps: SpotifyWebApiDeps = {
      httpService: new HttpService({ baseUrl: "https://api.spotify.com/v1" }),
      authService: getServerSession(),
    },
  ) {}

  /**
   * Sends an HTTP request and returns a promise that resolves to the response data.
   *
   * The `accessToken` property of the session object obtained using the auth service
   * is used as the bearer token in the `Authorization` header of the HTTP request.
   */
  private async request<TData>(
    resource: HttpResource,
    options: HttpOptions,
  ): Promise<HttpResponse<TData>> {
    const session = await this.deps.authService;

    if (!session?.accessToken) {
      return Promise.resolve({
        data: null,
        error: { status: 401, message: "Unauthorized" },
      });
    }

    return this.deps.httpService.request(resource, {
      ...options,
      credentials: "include",
      headers: {
        ...options?.headers,
        ...(session?.accessToken && {
          Authorization: `Bearer ${session?.accessToken}`,
        }),
      },
    });
  }

  /**
   * Sends an asynchronous GET request to the specified resource.
   */
  async get<TData>(
    resource: HttpResource,
    options?: Omit<HttpOptions, "body" | "method">,
  ) {
    return this.request<TData>(resource, { ...options, method: "GET" });
  }
}
