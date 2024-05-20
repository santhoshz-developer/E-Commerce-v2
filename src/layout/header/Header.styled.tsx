import { Box, Typography, styled } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Link from "next/link";




export const BoxStyled = styled(Box)`
  background-color: rgba(30, 40, 50, 0.05);
  height: 120px;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 390px) and (max-width: 767px) {
    background-color: transparent;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    background-color: transparent;
    position: relative;
    z-index: 999;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
  }
`;

export const AppBarStyled = styled(Box)`
  height: 90px;
  margin: 0 auto;
  width: 72%;
  @media (min-width: 1200px) and (max-width: 1440px) {
    width: 80%;
  }
`;

export const HeadLineStyled = styled("div")`
  display: flex;
  @media (min-width: 390px) and (max-width: 767px) {
    font-size: 17px;
    position: relative;
    bottom: 10px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 16px;
    position: relative;
    right: 190px;
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 16px;
    position: relative;
    left: -100px;
  }
`;

export const FirstTypography = styled(Typography)`
  font-size: 35px;
  position: relative;
  left: 350px;
  @media (min-width: 390px) and (max-width: 767px) {
    font-size: 16px;
    position: relative;
    top: 10px;
    left: 60px;
    font-weight: 100;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 27px;
    position: relative;
    left: 280px;
  }
  @media (min-width: 1024px) and (max-width: 1199px) {
    font-size: 28px;
    position: relative;
  }
  @media (min-width: 1200px) {
    left: 450px;
  }
  @media (min-width: 1440px) {
    left: 550px;
  }
  @media (min-width: 1450px) {
    left: 350px;
  }
`;

export const IconBtn = styled(Box)`
  margin-left: 550px;
  font-size: 28px;
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: block;
    position: relative;
    left: 50px;
    z-index: 999;
  }
  @media (min-width: 1240px) {
    display: block;
  }

  .btn-user,
  .btn-shopping {
    gap: 8px;
    &:hover {
      color: #ff6f61;
    }
  }

  .btn-user {
    margin-right: 20px;
  }
`;

export const DehazeIconStyled = styled(DehazeIcon)`
  display: none;
  position: relative;
  right: 20px;
  z-index: 999;
  @media (min-width: 390px) and (max-width: 767px) {
    position: relative;
    left: 170px;
    display: block;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
`;

export const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none !important;
  cursor: pointer;
  margin-right: 20px;
  margin-top: 20px;
  &:hover {
    color: #ff6f61;
  }
  @media (min-width: 390px) and (max-width: 767px) {
    position: relative;
    z-index: 999;
    left: 20px;
    display: block;
    cursor: pointer;
    padding-top: 20px;
  }
`;

export const LinkContainer: any = styled("div")<{ isClick?: boolean }>`
  margin-right: 110px;
  font-family: "Open Sans", sans-serif;
  .icon-acc {
    display: none;
  }
  .icon-acc1 {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (min-width: 390px) and (max-width: 767px) {
    background-color: white;
    flex-direction: column;
    padding-top: 10px;
    position: absolute;
    margin-top: 30px;
    left: 45px;
    z-index: 999;
    top: 30px;
    width: 300px;
    display: ${(props) => (props.isClick ? "flex" : "none")};
    .icon-acc {
      position: relative;
      left: 20px;
      padding-top: 20px;
      display: block;
    }
    .icon-acc1 {
      position: relative;
      left: 20px;
      padding-top: 10px;
      display: block;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    color: black;
    justify-content: space-between;
    font-family: Open Sans;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    justify-content: space-between;
    a {
      margin-bottom: 10px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 16px;
    color: black;
    justify-content: space-between;
    font-family: Open Sans;
    display: flex;
    margin-right: 2px;
    gap: 10px;
    flex-wrap: wrap;
    font-size: 16px;
    justify-content: space-between;
    a {
      margin-bottom: 11px;
    }
  }
`;