import { appColors } from "@/theme/color.Config";
import { Box, Button, Typography, styled} from "@mui/material";
import { ShoppingBagBtnIcon } from "@/component/icon/ShoppingBagIcon";
import Link from "next/link";

export const GridContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  position: relative;
  right: 70px;
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    position: relative;
    left: 60px;
  } 
  ${({ theme }) => theme.breakpoints.between('sm','md')} { 
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    position: relative;
    right: 140px;
  }
  ${({ theme }) => theme.breakpoints.between('md','lg')} { 
    position: relative;
    display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 20px;
   right: 170px;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} { 
    position: relative;
    left: -80px;
  }
`;

export const TopTypography = styled(Typography)`
  text-align: center;
  position: relative;
  font-weight: 600;
  font-size: 32px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    text-align: center;
    position: relative;
    left: 60px;
    font-weight: 600;
    font-size: 18px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} { 
    text-align: center;
    position: relative;
    right: 100px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} { 
    position: relative;
    right: 100px;
  }
`;

export const ShoppingBagBtnIconStyled = styled(ShoppingBagBtnIcon)`
  font-size: 20px;
  position: relative;
  top: 3px;
  right: 5px;
`;
export const ImageStyled = styled("img")`
  width: 95%;
  marginbottom: 10px;
`;
export const SearchIconBox = styled(Box)`
  position: relative;
  left: 10px;
`;

export const BoxStyled = styled(Box)`
  margin-top: 25px;
  margin-bottom: 20px;
  font-size: 15px;
  position: relative;
  right: 30px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 25px;
    position: relative;
    font-size: 11px;
    left: 30px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} { 
    margin-top: 25px;
    position: relative;
    font-size: 20px;
    right: 140px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} { 
    margin-top: 30px;
    position: relative;
    font-size: 15px;
    right: 110px;
  }
`;

export const StyledLink = styled(Link)`
  margin-right: 20px;
  text-decoration: none;
  color: black;
  cursor: pointer;

  // ${({ theme }) => theme.breakpoints.down('sm')} {
  //   margin-right: 5px;
  //   margin-top: 10px;
  //   position: relative;
  //   text-decoration: none;
  //   color: black;
  //   cursor: pointer;
  // }

  // @media (min-width: 768px) and (max-width: 1023px) {
  //   margin-right: 10px;
  //   text-decoration: none;
  //   color: black;
  //   cursor: pointer;
  // }

  // @media (min-width: 1024px) and (max-width: 1199px) {
  //   text-decoration: none;
  //   color: black;
  //   position: relative;
  //   cursor: pointer;
  //   left: -200px;
  // }
  // @media (min-width: 1200px) and (max-width: 1439px) {
  //   position: relative;
  //   left: -140px;
  // }
  // @media (min-width: 1440px) and (max-width: 1449) {
  //   position: relative;
  //   left: -100px;
  // }
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

  // ${({ theme }) => theme.breakpoints.down('sm')} {
  //   margin-right: 5px;
  //   text-decoration: none;
  //   color: red;
  //   margin-top: 5px;
  // }

  // @media (min-width: 768px) and (max-width: 1023px) {
  //   margin-right: 10px;
  //   text-decoration: none;
  //   color: rgba(0, 0, 0, 0.5);
  //   cursor: pointer;
  // }

  // @media (min-width: 1024px) and (max-width: 1199px) {
  //   text-decoration: none;
  //   color: rgba(0, 0, 0, 0.5);
  //   position: relative;
  //   cursor: pointer;
  //   left: -200px;
  // }
  // @media (min-width: 1200px) and (max-width: 1439px) {
  //   position: relative;
  //   left: -140px;
  // }
  // @media (min-width: 1440px) and (max-width: 1449) {
  //   position: relative;
  //   left: -100px;
  // }
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

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-right: 0px;
    float: right;
    height: 20px;
    position: relative;
    bottom: 16px;
    font-size: 8px;
    left: 60px;
    width: 70px;
    gap: 5px;
 
  }

  // @media (min-width: 768px) and (max-width: 1023px) {
  //   margin-right: 0px;
  //   float: right;
  //   height: 29px;
  //   position: relative;
  //   bottom: 0px;
  //   font-size: 18px;
  //   left: 200px;
  //   gap: 10px;
  // }

  // @media (min-width: 1024px) and (max-width: 1199px) {
  //   float: right;
  //   height: 29px;
  //   position: relative;
  //   bottom: 0px;
  //   font-size: 15px;
  //   left: -40px;
  //   gap: 10px;
  // }
  // @media (min-width: 1200px) and (max-width: 1440px) {
  //   float: right;
  //   height: 29px;
  //   position: relative;
  //   bottom: 0px;
  //   font-size: 15px;
  //   left: -50px;
  //   gap: 10px;
  // }
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

  // @media (min-width: 768px) and (max-width: 1023px) {
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: space-between;
  // }
`;

export const DetailDiv = styled("div")<{ bgcolor: string }>`
  visibility: hidden;
  display: flex;
  background: ${({ bgcolor }) => bgcolor || appColors["white"]};
  color: #fff;
  padding: 10px;
  width: 237px;
  position: absolute;
  margin-top: -57px;
  display: flex;
  cursor: pointer;

  // @media (min-width: 390px) and (max-width: 767px) {
  //   width: 85%;
  // }
  // @media (min-width: 768px) and (max-width: 1023px) {
  //   width: 40%;
  // }
  // @media (min-width: 1024px) and (max-width: 1199px) {
  //   width: 20.5%;
  // }
`;
export const TypographyIcon = styled(Link)<{ textcolor: string }>`
  margin-left: 30%;
  position: relative;
  top: 2px;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: ${({ textcolor }) => textcolor || appColors["black"]};
  }

`;

export const CustomCard = styled("div")`
  width: 282px;
  &:hover .hover-card {
    visibility: visible;
  }
`;

export const ProductContent = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  // @media (min-width: 390px) and (max-width: 767px) {
  //   display: flex;
  //   justify-content: space-between;
  // }

  // @media (min-width: 768px) and (max-width: 1023px) {
  //   display: flex;
  //   justify-content: space-between;
  // }

  // @media (min-width: 1024px) and (max-width: 1440px) {
  //   display: flex;
  //   justify-content: space-between;
  // }
`;

export const RateTypography = styled(Typography)`
  font-weight: bold;
  margin-right: 20px;
`;
export const ProductNameTypography = styled(Typography)`
  color: rgba(0, 0, 0, 0.5);
`;

export const StyledTypography = styled(Typography)`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 21.79px;
  margin-top: 5px;

  // @media (min-width: 390px) and (max-width: 767px) {
  //   font-family: "Open Sans", sans-serif;
  //   font-weight: 600;
  //   font-size: 15px;
  //   line-height: 20px;
  // }

  // @media (min-width: 768px) and (max-width: 1023px) {
  //   font-family: "Open Sans", sans-serif;
  //   font-weight: 600;
  //   font-size: 16px;
  //   line-height: 21.79px;
  // }

  // @media (min-width: 1024px) and (max-width: 1440px) {
  //   font-family: "Open Sans", sans-serif;
  //   font-weight: 600;
  //   font-size: 14px;
  //   line-height: 21.79px;
  // }
`;
export const BoxContainer = styled("div")`
  margin-left: 250px;
  margin-top: 130px;
  width: 69%;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-left: 2px;
    margin-top: 150px;
    width: 69%;
    position: relative;
  }

  // @media (min-width: 768px) and (max-width: 1023px) {
  //   margin-left: 2px;
  //   width: 69%;
  // }

  // @media (min-width: 1024px) and (max-width: 1440px) {
  //   margin-left: 20px;
  //   margin-top: 130px;
  //   width: 80%;
  // }
`;

export const SaleTypography = styled(Typography)`
  position: relative;

  bottom: 280px;
  background-color: black;
  color: white;
  width: 60px;
  text-align: center;

`;

export const HotTypography = styled(Typography)`
  position: relative;
  bottom: 280px;
  background-color: #ff6f61;
  color: white;
  width: 60px;
  text-align: center;
`;
