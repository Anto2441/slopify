import type { IHttpService } from "./IHttpService";
import type {
  HttpError,
  HttpOptions,
  HttpResource,
  HttpResponse,
} from "./types";

interface HttpServiceProps {
  /**
   * The base URL for the HTTP requests.
   *
   * All HTTP requests made by this service will be relative to this URL.
   *
   * @example "https://api.example.com"
   */
  baseUrl: string;
}

/**
 * Service for making HTTP requests.
 *
 * This service is responsible for making HTTP requests and
 * handling the response.
 */
export class HttpService implements IHttpService {
  constructor(private readonly props: HttpServiceProps) {}

  /**
   * Sends an HTTP request and returns a promise that resolves to the
   * response data.
   */
  async request<TData>(
    resource: HttpResource,
    options: HttpOptions,
  ): Promise<HttpResponse<TData>> {
    return fetch(this.props.baseUrl + resource, options)
      .then((response) => {
        if (!response.ok) {
          const httpError: HttpError = {
            status: response.status,
            message: response.statusText,
          };

          throw httpError;
        }

        return response.json();
      })
      .then((data: TData) => ({ data, error: null }))
      .catch((error: HttpError) => ({ data: null, error }));
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
