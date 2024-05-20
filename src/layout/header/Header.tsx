import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {
  AppBarStyled,
  BagButtonStyled,
  BoxStyled,
  DehazeIconStyled,
  FirstTypography,
  HeadLineStyled,
  IconBtn,
  LinkContainer,
  LinkStyled,
  SearchIconStyled,
} from "./Header.styled";
import { useState } from "react";
import { ShoppingBagIcon } from "@/component/icon/ShoppingBagIcon";
import UserIcon from "@/component/icon/UserIcon";
import { NavbarItem } from "../type";

export const Header = (props: any) => {
  const { header, navbar } = props;

  const [isClick, setClick] = useState(false);
  const toggleBar = () => {
    setClick(!isClick);
  };

  const renderLinkList = () => {
    return (
      <>
        {navbar?.map((item: NavbarItem, index: number) => (
          <LinkStyled key={index} href={item.link || "#"}>
            {item.title}
          </LinkStyled>
        ))}
        <BagButtonStyled variant="text" color="inherit" className="icon-acc1">
          <ShoppingBagIcon />
          {header?.[0]?.headerbutton?.[1]?.title}
        </BagButtonStyled>
      </>
    );
  };

  const renderToolbar = () => {
    return (
      <Toolbar>
        <SearchIconStyled />
        <HeadLineStyled>
          <FirstTypography>{header?.[0]?.title}</FirstTypography>
        </HeadLineStyled>
        <DehazeIconStyled onClick={toggleBar} />
        <IconBtn className="btn-icon">
          <Button color="inherit" className="btn-user">
            <UserIcon />
            {header?.[0]?.headerbutton?.[0]?.title}
          </Button>
          <Button color="inherit" className="btn-shopping">
            <ShoppingBagIcon />
            {header?.[0]?.headerbutton?.[1]?.title}
          </Button>
        </IconBtn>
      </Toolbar>
    );
  };

  const renderLink = () => {
    return <LinkContainer isClick={isClick}>{renderLinkList()}</LinkContainer>;
  };

  return (
    <BoxStyled>
      <AppBarStyled position="static">
        {renderToolbar()}
        <hr />
        {renderLink()}
      </AppBarStyled>
    </BoxStyled>
  );
};
