import NextAuthSpotifyProvider from "next-auth/providers/spotify";

/**
 * Spotify provider.
 *
 * @see https://next-auth.js.org/providers/spotify
 */
export const SpotifyProvider = NextAuthSpotifyProvider({
  /**
   * Spotify client ID.
   *
   * ⚠️ It should not be shared or exposed publicly, as it gives full access to the Spotify account
   *
   * @see https://developer.spotify.com/documentation/web-api/concepts/apps
   */
  clientId: String(process.env.SPOTIFY_ID),
  /**
   * Spotify client secret.
   *
   * ⚠️ It should not be shared or exposed publicly, as it gives full access to the Spotify account
   *
   * @see https://developer.spotify.com/documentation/web-api/concepts/apps
   */
  clientSecret: String(process.env.SPOTIFY_SECRET),
  authorization: {
    params: {
      /**
       * Scopes provide Spotify users using third-party apps the confidence that only the information
       * they choose to share will be shared, and nothing more.
       *
       * @see https://developer.spotify.com/documentation/web-api/concepts/scopes
       */
      scope: [
        "playlist-modify-private",
        "playlist-modify-public",
        "playlist-read-private",
        "streaming",
        "user-follow-read",
        "user-library-modify",
        "user-library-read",
        "user-modify-playback-state",
        "user-read-currently-playing",
        "user-read-email",
        "user-read-playback-state",
        "user-read-recently-played",
        "user-top-read",
      ].join(" "),
    },
  },
});
