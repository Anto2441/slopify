import { IUserRepository, UserRepository } from "@/library/entities/user";
import { HttpResponse } from "@/shared/http/types";
import { ISpotifyWebApi } from "@/shared/spotify/web-api";
import { describe, expect, test } from "vitest";
import { GetProfilFeature } from "./GetProfilFeature";

class InMemoryUserRepository implements IUserRepository {
  constructor(private readonly status: 200 | 401 | 403 | 429 = 200) {}
  async getProfil() {
    switch (this.status) {
      case 401: {
        return Promise.resolve({
          data: null,
          error: {
            status: 401,
            message: "Unauthorized",
          },
        });
      }
      case 403: {
        return Promise.resolve({
          data: null,
          error: {
            status: 403,
            message: "Forbidden",
          },
        });
      }
      case 429: {
        return Promise.resolve({
          data: null,
          error: {
            status: 429,
            message: "Too many requests",
          },
        });
      }
      default: {
        return Promise.resolve({
          data: {
            display_name: "test",
            id: "test",
          },
          error: null,
        });
      }
    }
  }
  async getFollowedArtists() {
    return {
      data: {
        artists: {
          items: [
            {
              name: "test",
            },
          ],
        },
      },
      error: null,
    };
  }
}

class InMemorySpotifyWebApi implements ISpotifyWebApi {
  async get<TData>() {
    return Promise.resolve({
      data: {
        display_name: "test",
        id: "test",
      },
      error: null,
    }) as Promise<HttpResponse<TData>>;
  }
}

describe("GetProfilFeature", () => {
  test.only("It should return the user profil", async () => {
    const getProfilFeature = new GetProfilFeature({
      userRepository: new UserRepository({
        spotifyWebApi: new InMemorySpotifyWebApi(),
      }),
    });

    const { data, error } = await getProfilFeature.execute();

    expect(data).toEqual({
      display_name: "test",
      id: "test",
    });
    expect(error).toBe(null);
  });

  test("It should return an error 401", async () => {
    const getProfilFeature = new GetProfilFeature({
      userRepository: new InMemoryUserRepository(401),
    });

    const { data, error } = await getProfilFeature.execute();

    expect(data).toBe(null);
    expect(error).toEqual({
      status: 401,
      message: "Unauthorized",
    });
  });
});
