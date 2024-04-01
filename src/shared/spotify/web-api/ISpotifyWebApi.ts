import type { HttpOptions, HttpResource, HttpResponse } from "@/shared/http";

/**
 * Interface representing a Spotify Web API client.
 *
 * This interface defines the contract for a client that can make
 * requests to the Spotify Web API and handle the responses.
 */
export interface ISpotifyWebApi {
  /**
   * Sends an asynchronous GET request to the specified resource.
   */
  get<TData>(
    resource: HttpResource,
    options?: HttpOptions,
  ): Promise<HttpResponse<TData>>;
}
