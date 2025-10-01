import React from "react";
import Form from "../components/Form";
import GettingStarted from "../components/Intro";
import CostEstimate from "../components/Cost";

export default function Home() {
  return (
    <>
      <GettingStarted />
      <br />
      <Form />
      <br />
      <CostEstimate />
    </>
  );
}
