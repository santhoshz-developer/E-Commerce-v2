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
import { useState } from "react";
import { ShoppingBagIcon } from "@/component/icon/ShoppingBagIcon";
import UserIcon from "@/component/icon/UserIcon";
import SearchIcon from "@/component/icon/SearchIcon";

export const Header = (props: any) => {
  const { header, navbar } = props;
  const [isClick, setClick] = useState(false);
  const toggleBar = () => {
    setClick(!isClick);
  };

  const renderLinkList = () => {
    return (
      <>
        {navbar?.map((item: any, index: any) => (
          <LinkStyled key={index} href={item.link || "#"}>
            {item.title}
          </LinkStyled>
        ))}
      </>
    );
  };

  const renderToolbar = () => {
    return (
      <Toolbar>
        <SearchIcon />
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
    return (
      <LinkContainer isClick={isClick}>
        {renderLinkList()}
        <Button variant="text" color="inherit" className="icon-acc1">
          <ShoppingBagIcon />
          {header?.[0]?.headerbutton?.[1]?.title}
        </Button>
      </LinkContainer>
    );
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
