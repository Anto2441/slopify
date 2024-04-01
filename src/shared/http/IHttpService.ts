import type { HttpOptions, HttpResource, HttpResponse } from "./types";

/**
 * Represents a service for making HTTP requests.
 *
 * This interface defines the contract for a service that is responsible
 * for making HTTP requests and handling the response.
 */
export interface IHttpService {
  /**
   * Sends an asynchronous GET request to the specified resource.
   */
  get: <TData>(
    resource: HttpResource,
    options?: Omit<HttpOptions, "body" | "method">,
  ) => Promise<HttpResponse<TData>>;

  /**
   * Sends an HTTP request to the specified resource.
   */
  request: <TData>(
    resource: HttpResource,
    options: HttpOptions,
  ) => Promise<HttpResponse<TData>>;
}
