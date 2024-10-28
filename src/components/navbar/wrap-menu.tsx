"use client";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { MenuLogin } from "./menu-login";
import { MenuDefault } from "./menu";
import React from "react";


export function WrapMenu() {
  const { currentUser } = useSelector((state: RootState) => state.userReducer);

  return <> {!!currentUser.name ? <MenuDefault /> : <MenuLogin />}</>;
}
