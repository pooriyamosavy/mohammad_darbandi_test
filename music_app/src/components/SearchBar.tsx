import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSeacrhToken } from "@/redux/slice/searchSlice";
import React from "react";

export default function SearchBar() {
  const { searchToken } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  return (
    <div className="col-span-2 place-self-start">
      <input
        className="text-[16px] w-[300px] p-3 bg-transparent border-gray-600 border rounded-xl text-white"
        value={searchToken}
        onChange={(e) => dispatch(setSeacrhToken(e.target.value))}
      />
    </div>
  );
}
