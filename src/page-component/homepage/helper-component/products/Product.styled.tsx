import { appColors } from "@/theme/color.Config";
import { Box, Button, Link, Typography } from "@mui/material";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBagBtnIcon } from "@/component/icon/ShoppingBagIcon";

export const TopTypography = styled(Typography)`
  text-align: center;
  position: relative;
  font-weight: 600;
  font-size: 32px;

  @media (min-width: 390px) and (max-width: 767px) {
    text-align: center;
    position: relative;
    left: 50px;
    font-weight: 300;
    font-size: 16px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    text-align: center;
    position: relative;
    left: 100px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    position: relative;
    left: 150px;
  }
`;

export const ShoppingBagBtnIconStyled = styled(ShoppingBagBtnIcon)`
  font-size: 20px;
  position: relative;
  top: 5px;
`;

export const BoxStyled = styled(Box)`
  margin-left: 20px;
  margin-top: 25px;
  margin-bottom: 20px;
  font-size: 15px;
  @media (min-width: 390px) and (max-width: 767px) {
    left: 10px;
    margin-top: 25px;
    position: relative;
    font-size: 13px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-top: 25px;
    position: relative;
    font-size: 20px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-top: 30px;
    position: relative;
    font-size: 15px;
    left: 200px;
  }
`;

export const StyledLink = styled(Link)`
  margin-right: 20px;
  text-decoration: none;
  color: black;
  cursor: pointer;

  @media (min-width: 390px) and (max-width: 767px) {
    margin-right: 5px;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-right: 10px;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

  @media (min-width: 1024px) and (max-width: 1199px) {
    // margin-right: 30px;
    text-decoration: none;
    color: black;
    position: relative;
    cursor: pointer;
    left: -200px;
  }
  @media (min-width: 1200px) and (max-width: 1439px) {
    position: relative;
    left: -140px;
  }
  @media (min-width: 1440px) and (max-width: 1449) {
    position: relative;
    left: -100px;
  }
`;

export const StyledLink1 = styled(Link)`
  margin-right: 20px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #ff6f61;
  }

  @media (min-width: 390px) and (max-width: 767px) {
    margin-right: 5px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-right: 10px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  @media (min-width: 1024px) and (max-width: 1199px) {
    // margin-right: 30px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
    position: relative;
    cursor: pointer;
    left: -200px;
  }
  @media (min-width: 1200px) and (max-width: 1439px) {
    position: relative;
    left: -140px;
  }
  @media (min-width: 1440px) and (max-width: 1449) {
    position: relative;
    left: -100px;
  }
`;
export const StyledButton = styled(Button)<{
  bgcolor: string;
  textcolor: string;
}>`
  margin-right: 0px;
  float: right;
  height: 30px;
  position: relative;
  bottom: 4px;
  font-size: 12px;
  left: 50px;
  gap: 10px;
  background: ${({ bgcolor }) => bgcolor || appColors["white"]};
  color: ${({ textcolor }) => textcolor || appColors["black"]};
  &:hover {
    background-color: #ff6f61;
  }

  @media (min-width: 390px) and (max-width: 767px) {
    margin-right: 0px;
    float: right;
    height: 20px;
    position: relative;
    bottom: 18px;
    font-size: 11px;
    left: 100px;
    width: 80px;
    gap: 10px;
    background: ${({ bgcolor }) => bgcolor || appColors["white"]};
    color: ${({ textcolor }) => textcolor || appColors["black"]};
    &:hover {
      background-color: #ff6f61;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-right: 0px;
    float: right;
    height: 29px;
    position: relative;
    bottom: 0px;
    font-size: 18px;
    left: 200px;
    gap: 10px;
    background: ${({ bgcolor }) => bgcolor || appColors["white"]};
    color: ${({ textcolor }) => textcolor || appColors["black"]};
    &:hover {
      background-color: #ff6f61;
    }
  }

  @media (min-width: 1024px) and (max-width: 1199px) {
    float: right;
    height: 29px;
    position: relative;
    bottom: 0px;
    font-size: 15px;
    left: -40px;
    gap: 10px;
    background: ${({ bgcolor }) => bgcolor || appColors["white"]};
    color: ${({ textcolor }) => textcolor || appColors["black"]};
    &:hover {
      background-color: #ff6f61;
    }
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    float: right;
    height: 29px;
    position: relative;
    bottom: 0px;
    font-size: 15px;
    left: -50px;
    gap: 10px;
    background: ${({ bgcolor }) => bgcolor || appColors["white"]};
    color: ${({ textcolor }) => textcolor || appColors["black"]};
    &:hover {
      background-color: #ff6f61;
    }
  }
`;

export const CommonDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 390px) and (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const FavoriteIconStyle = styled(FavoriteIcon)`
  font-size: 20px;
`;

export const SearchIconStyled = styled(SearchIcon)`
  font-size: 20px;
`;
export const ShoppingBagIconStyled = styled(ShoppingBagBtnIcon)`
  font-size: 20px;
  position: relative;
  right: 4px;
  top: 3px;
`;

export const DetailDiv = styled("div")<{ bgcolor: string }>`
  visibility: hidden;
  display: flex;
  background: ${({ bgcolor }) => bgcolor || appColors["white"]};
  color: #fff;
  padding: 10px;
  width: 21%;
  position: absolute;
  margin-top: -52px;
  display: flex;
  cursor: pointer;
  @media (min-width: 390px) and (max-width: 767px) {
    width: 85%;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 40%;
  }
  @media (min-width: 1024px) and (max-width: 1199px) {
    width: 20.5%;
  }
`;
export const TypographyIcon = styled(Link)<{ textcolor: string }>`
  margin-left: 30%;
  position: relative;

  color: #fff;
  text-decoration: none;

  &:hover {
    color: ${({ textcolor }) => textcolor || appColors["black"]};
  }
  @media (min-width: 1024px) and (max-width: 1199px) {
    margin-left: 30%;
  }
`;

export const CustomCard = styled("div")`
  width: 282px;
  &:hover {
    ${DetailDiv} {
      visibility: visible;
    }
  }
  @media (min-width: 390px) and (max-width: 767px) {
    width: 282px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 282px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 282px;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  @media (min-width: 390px) and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;
export const StyledTypography = styled(Typography)`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 21.79px;
  margin-top: 5px;

  @media (min-width: 390px) and (max-width: 767px) {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 21.79px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 21.79px;
  }
`;
export const BoxContainer = styled("div")`
  margin-left: 250px;
  margin-top: 130px;
  width: 69%;

  @media (min-width: 390px) and (max-width: 767px) {
    margin-left: 2px;
    bottom: 270px;
    width: 69%;
    position: relative;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 2px;
    width: 69%;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-left: 20px;
    margin-top: 130px;
    width: 80%;
  }
`;

export const FirstDiv = styled("div")`
  display: flex;
  position: relative;

  @media (min-width: 390px) and (max-width: 767px) {
    flex-direction: column;
    margin-left: 60px;
    margin-top: 0px;
    position: relative;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    margin-left: 90px;
    margin-top: 10px;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (min-width: 1024px) and (max-width: 1199px) {
    margin-left: 0px;
    margin-top: 10px;
    width: 1010px;
    height: 400px;
  }
  @media (min-width: 1200px) and (max-width: 1439px) {
    margin-left: 60px;
  }
  @media (min-width: 1440px) {
    margin-left: 200px;
  }
  @media (min-width: 1450px) {
    margin-left: 0px;
  }
`;
export const SecDiv = styled("div")`
  display: flex;
  position: relative;

  @media (min-width: 390px) and (max-width: 767px) {
    flex-direction: column;
    margin-left: 60px;
    margin-top: 30px;
    position: relative;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    margin-left: 90px;
    margin-top: 30px;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (min-width: 1024px) and (max-width: 1199px) {
    margin-left: 0px;
    margin-top: 10px;
    width: 1010px;
    height: 400px;
  }
  @media (min-width: 1200px) and (max-width: 1439px) {
    margin-left: 60px;
  }
  @media (min-width: 1440px) {
    margin-left: 200px;
  }
  @media (min-width: 1450px) {
    margin-left: 0px;
  }
`;
export const SaleTypography = styled(Typography)`
  position: absolute;
  top: 40px;
  right: 205px;
  background-color: black;
  color: white;
  width: 60px;
  text-align: center;

  @media (min-width: 390px) and (max-width: 767px) {
    position: absolute;
    top: 40px;
    right: 206px;
    background-color: black;
    color: white;
    width: 60px;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    top: 40px;
    right: 205px;
    background-color: black;
    color: white;
    width: 60px;
    text-align: center;
  }

  @media (min-width: 1024px) and (max-width: 1199px) {
    position: absolute;
    top: 40px;
    right: 176px;
    background-color: black;
    color: white;
    width: 60px;
    text-align: center;
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    position: absolute;
    top: 40px;
    right: 206px;
  }
`;

export const HotTypography = styled(Typography)`
  position: absolute;
  top: 40px;
  left: 17px;
  background-color: #ff6f61;
  color: white;
  width: 60px;
  text-align: center;
`;

export const TypographySale = styled(Typography)`
  position: absolute;
  top: 40px;
  left: 299px;
  background-color: #ff6f61;
  color: white;
  width: 60px;
  text-align: center;

  @media (min-width: 390px) and (max-width: 767px) {
    position: absolute;
    top: 440px;
    left: 17px;
    background-color: #ff6f61;
    color: white;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    top: 40px;
    left: 320px;
    background-color: #ff6f61;
    color: white;
    width: 60px;
    text-align: center;
  }

  @media (min-width: 1024px) and (max-width: 1199px) {
    position: absolute;
    top: 40px;
    left: 269px;
    background-color: #ff6f61;
    color: white;
    width: 60px;
    text-align: center;
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
  }
`;
