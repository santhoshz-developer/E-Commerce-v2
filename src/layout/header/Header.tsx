"use client";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {
  AppBarStyled,
  BoxStyled,
  DehazeIconStyled,
  FirstTypography,
  HeadLineStyled,
  IconBtn,
  LinkContainer,
  LinkStyled,
} from "./Header.styled";

import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ShoppingBagIcon } from "@/component/icon/ShoppingBagIcon";
import UserIcon from "@/component/icon/UserIcon";
import SearchIcon from "@/component/icon/SearchIcon";
import { QUERY } from "@/service/query";

export const Header = () => {
  const { data } = useQuery(QUERY);
  const { homes } = data || {};
  const { header, navbar } = homes?.data?.[0].attributes || {};
  const [isClick, setClick] = useState(false);
  const toggleBar = () => {
    setClick(!isClick);
  };

  const renderList = () => {
    return (
      <>
        {navbar?.map((item: any, index: any) => (
          <LinkStyled key={index} href={item.link} style={{ marginRight: "20px" ,marginTop:'20px'}}>
            {item.title}
          </LinkStyled>
        ))}
      </>
    );
  };
  

  return (
    <BoxStyled>
      <AppBarStyled position="static">
        <Toolbar>
          <SearchIcon />
          <HeadLineStyled>
            <FirstTypography>{header?.[0]?.title}</FirstTypography>
          </HeadLineStyled>
          <DehazeIconStyled
            style={{ position: "relative", right: "20px", zIndex: "999" }}
            onClick={toggleBar}
          />
          <IconBtn className="btn-icon" sx={{position:'relative',left:'170px'}}>
            <Button
              color="inherit"
              sx={{ gap: "8px", ":hover": { color: "#FF6F61" } }}
            >
              <UserIcon/>
              {header?.[0]?.headerbutton?.[0]?.title}
            </Button>
            <Button
              color="inherit"
              sx={{ gap: "8px", ":hover": { color: "#FF6F61" } }}
            >
              {" "}
              <ShoppingBagIcon />
              {header?.[0]?.headerbutton?.[1]?.title}
            </Button>
          </IconBtn>
        </Toolbar>
        <hr />
        <LinkContainer
          isClick={isClick}
          sx={{
            fontSize: "16px",
            color: "black",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          {renderList()}

          <Button variant="text" color="inherit" className="icon-acc1">
            <ShoppingBagIcon style={{ marginRight: "10px" }} />
            {header?.[0]?.headerbutton?.[1]?.title}
          </Button>
        </LinkContainer>
      </AppBarStyled>
    </BoxStyled>
  );
};
