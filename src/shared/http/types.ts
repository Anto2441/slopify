/**
 * Type for the HTTP resource.
 *
 * This type represents a string that represents the resource to be accessed
 * over HTTP. It should be a valid URI, including the path, query parameters,
 * and any other part of the URI.
 *
 * @example "/users"
 */
export type HttpResource = string;

/**
 * Options for making an HTTP request.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters Fetch API parameters}
 */
export type HttpOptions = {
  /**
   * The body contents of the request.
   */
  body?: BodyInit | null;
  /**
   * The credentials to use in the request.
   *
   * Defaults to `omit` which means the browser will not send or
   * include cookies or authentication information.
   *
   * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials Request.credentials}.
   */
  credentials?: RequestCredentials;
  /**
   * The headers to include in the request.
   *
   * The `Authorization` header, if included, will contain a bearer token.
   * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Headers HeadersInit}.
   */
  headers?: HeadersInit & { Authorization?: string };
  /**
   * The HTTP method to use in the request.
   *
   * Possible values are `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, or `PUT`.
   * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Request/method Request.method}.
   */
  method: "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT";
  /**
   * A signal which can be used to abort the request.
   *
   * See {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController AbortController}.
   */
  signal?: AbortSignal | null;
};

/**
 * Represents the error response of an HTTP request.
 */
export type HttpError = {
  /**
   * The HTTP status code of the response.
   */
  status: number;
  /**
   * A human-readable description of the error.
   */
  message: string;
};

/**
 * The type of the HTTP response.
 *
 * It represents the possible outcomes of an HTTP request.
 *
 * @template TData - The type of the data included in the response.
 */
export type HttpResponse<TData> =
  | { data: TData; error: null }
  | { data: null; error: HttpError };
