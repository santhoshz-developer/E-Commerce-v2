"use client";
import { ReactNode } from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { useQuery } from "@apollo/client";
import { QUERY } from "@/service/query";

export type LayoutProps = {
  children: ReactNode;
};

const HomePageLayout = ({ children }: LayoutProps) => {
  const { data } = useQuery(QUERY);
   const { homes } = data || {};
   const { header,navbar,footer,bottom} = homes?.data?.[0]?.attributes || {};
  return (
    <>
      <Header header={header} navbar = {navbar}/>
      {children}
      <Footer footer = {footer} bottom={bottom} />
    </>
  );
};

export default HomePageLayout;
