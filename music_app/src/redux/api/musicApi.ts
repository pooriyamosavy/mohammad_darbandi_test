import { Action, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "../store";
import { Tmusic } from "@/@types/music";
import { TmusicsResponse } from "@/pages/api/musics";

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const musicApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getMusics: builder.query<Tmusic[], void>({
      query: () => ({
        url: "musics",
        method: "get",
      }),

      transformResponse: (res: TmusicsResponse) => res.musics,
    }),
  }),
});

export const {
  useGetMusicsQuery,
  util: { getRunningQueriesThunk },
} = musicApi;

export const { getMusics } = musicApi.endpoints;
