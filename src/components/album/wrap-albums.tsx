"use client";
import { fetchNewAlbums, fetchTopAlbums } from "@/store/features/album/slice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect } from "react";
import { TopAlbums } from "./top-albums";
import { NewAlbums } from "./new-albums";

export function WrapAlbums() {
  const dispatch = useDispatch<AppDispatch>();
  const { topAlbums, loadingTopAlbums } = useSelector(
    (state: RootState) => state.albumReducer,
  );
  const { newAlbums, loadingNewAlbums } = useSelector(
    (state: RootState) => state.albumReducer,
  );

  const loadNewAlbums = useCallback(
    () => dispatch(fetchNewAlbums()),
    [ dispatch],
  );
  const loadTopAlbums = useCallback(
    () => dispatch(fetchTopAlbums()),
    [ dispatch],
  );

  useEffect(() => {
    loadNewAlbums();
    loadTopAlbums();
  }, [loadNewAlbums, loadTopAlbums]);

  return (
    <>
      <NewAlbums albums={newAlbums} loading={loadingNewAlbums} />
      <TopAlbums albums={topAlbums} loading={loadingTopAlbums} />
    </>
  );
}
