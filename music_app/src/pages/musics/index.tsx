import SearchBar from "@/components/SearchBar";
import TrackContainer from "@/components/TrackContainer";
import { getMusics, getRunningQueriesThunk } from "@/redux/api/musicApi";
import { wrapper } from "@/redux/store";
import React from "react";

export default function Page({}) {
  return (
    <div className="min-h-screen bg-slate-950  pt-60">
      <div>
        <div className="grid grid-cols-2 gap-x-8 mx-auto gap-y-4 justify-items-center w-fit">
          <SearchBar />
          <TrackContainer />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getMusics.initiate());

    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);
