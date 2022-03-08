import React, { useEffect } from "react";
import { connectAdvanced, useDispatch } from "react-redux";
import { getSuggestions } from "../../actions/suggestions";
import Header from "./Header/Header";
import Main from "./Main/Main";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
