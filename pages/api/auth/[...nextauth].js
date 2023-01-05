import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { API_URL } from "../../config";

async function refreshAccessToken(tokenObject) {
  try {
    // Get a new set of tokens with a refreshToken
    const tokenResponse = await axios.post(
      API_URL+"v1/token/refresh/",
      {
        token: tokenObject?.refreshToken,
      }
    );

    return {
      ...tokenObject,
      accessToken: tokenResponse?.data?.access,
      // accessTokenExpiry: tokenResponse.data.accessTokenExpiry,
      refreshToken: tokenResponse?.data?.refresh,
    };
  } catch (error) {
    return {
      ...tokenObject,
      error: "RefreshAccessTokenError",
    };
  }
}

const providers = [
  CredentialsProvider({
    name: "Credentials",
    authorize: async (credentials) => {
      try {
        const login_url = API_URL+"v1/login/";
        // Authenticate user with credentials
        const user = await axios.post(
          login_url,
          {
            password: credentials.password,
            email: credentials.email,
          }
        );
        if (user) {
          return user.data;
        }
        // alert("Invalid credentials");
        return null ;
      } catch (e) {
        return null
      }
    },
  }),
];
const callbacks = {
  jwt: async ({ token, user }) => {
    if (user) {
      // This will only be executed at login. Each next invocation will skip this part.
      token.accessToken = user?.access;
      // token.accessTokenExpiry = user.data.accessTokenExpiry;
      token.refreshToken = user?.refresh;
      // token.user = user_data?.data;
    }
    // If accessTokenExpiry is 24 hours, we have to refresh token before 24 hours pass.
    // const shouldRefreshTime = Math.round((token.accessTokenExpiry - 60 * 60 * 1000) - Date.now());
    const shouldRefreshTime = 1;

    // If the token is still valid, just return it.
    if (shouldRefreshTime > 0) {
      return Promise.resolve(token);
    }

    // If the call arrives after 23 hours have passed, we allow to refresh the token.
    token = refreshAccessToken(token);
    return Promise.resolve(token);
  },
  session: async ({ session, token }) => {
    // Here we pass accessToken to the client to be used in authentication with your API
    session.accessToken = token.accessToken;

    // session.accessTokenExpiry = token.accessTokenExpiry;
    session.error = token.error;
    return Promise.resolve(session);
  },
};

export const authOptions = {
  providers,
  callbacks,
  pages: {
    signIn: "/login",
  },
  secret: "your_secret",
};

const Auth = (req, res) => NextAuth(req, res, authOptions);
export default Auth;
