"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypeWriter = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Search by keywords 💫")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Combined searching 🌟")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Fast results 🪄")
          .pauseFor(1000)
          .deleteAll()
          .typeString("for people in instance of thesis ")
          .pauseFor(1000)
          .deleteAll()
          .typeString("practical,efficient and easy to use")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Read Thesis for fun")
          .pauseFor(1000)
          .deleteAll()
          .start();
      }}
    />
  );
};

export default TypeWriter;