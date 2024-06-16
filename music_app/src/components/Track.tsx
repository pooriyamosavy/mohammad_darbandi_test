import { Tmusic } from "@/@types/music";
import Image from "next/image";
import React from "react";

type Props = Tmusic;

export default function Track({
  album_name,
  artist_name,
  image,
  title,
}: Props) {
  return (
    <div className="flex items-center gap-6 p-2 border-gray-500 border rounded-3xl w-[500px] h-[90px]">
      <Image
        src={image}
        width={70}
        height={70}
        alt="artis pic"
        className="rounded-2xl size-[70px] p-0"
      />
      <div className="flex flex-col text-gray-300 text-[12px]">
        <h1 className="font-semibold">{title}</h1>
        <h2>
          <span className="text-[12px] text-gray-400">by:</span> {artist_name}
        </h2>
        <h2>
          <span className="text-[12px] text-gray-400">from: </span> {album_name}
        </h2>
      </div>
    </div>
  );
}
