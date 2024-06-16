import React from "react";
import Track from "./Track";
import { useGetMusicsQuery } from "@/redux/api/musicApi";
import Fuse from "fuse.js";
import { useAppSelector } from "@/redux/hooks";

export default function TrackContainer() {
  const { data: musics, isLoading, isError } = useGetMusicsQuery();
  const { searchToken } = useAppSelector((state) => state.search);

  // this block of code logically should never be reached since we are hydrating the app
  if (isLoading) {
    return (
      <div className="animate-spin size-10 border-t border-l rounded-full border-gray-400  col-span-2 mt-10" />
    );
  }

  // idealy this should never be reached either
  if (isError || !musics) {
    return (
      <h1 className="text-center col-span-2 text-white">
        Something unknown went wrong, refresh might help ...
      </h1>
    );
  }

  const fuse = new Fuse(musics, {
    keys: ["title", "album_name", "artist_name"],
  });

  const serachResult =
    searchToken.length === 0
      ? musics
      : fuse.search(searchToken).map(({ item }) => item);

  return (
    <>
      {serachResult.map((music, index) => {
        return <Track {...music} key={index} />;
      })}
    </>
  );
}
