"use client"
import { Toaster } from "@/components/ui/sonner";
import React from "react";


type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  return (
    <>
      {children}
      <Toaster  position="top-center"/>
    </>
  );
};

export default Provider;
