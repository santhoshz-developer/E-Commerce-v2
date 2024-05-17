"use client";
import { ReactNode } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

export type LayoutProps = {
  children: ReactNode;
};

const HomePageLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomePageLayout;
