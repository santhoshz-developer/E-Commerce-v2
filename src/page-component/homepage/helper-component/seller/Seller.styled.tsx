import { ShoppingBagBtnIcon } from "@/component/icon/ShoppingBagIcon";
import { appColors } from "@/theme/color.Config";
import { Box, Button, Link, Typography, styled } from "@mui/material";

export const RateTypography = styled(Typography)`
  margin-right: 30px;
  font-weight: bold;
`;
export const SearchIconBox = styled(Box)`
  position: relative;
  left: 10px;
`;

export const ProductTypography = styled(Typography)`
  color: rgba(0, 0, 0, 0.5);
`;

export const ImageStyled = styled("img")`
  width: 95%;
  margin-bottom: 10px;

`;

export const BoxContainer = styled("div")`
  margin-left: 200px;
  margin-top: 130px;
  width: 69%;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-left: 2px;
    width: 69%;
    position: relative;
    margin-top:50px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} { 
    margin-left: 2px;
    margin-top:50px;
    width: 69%;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} { 
    margin-left: 2px;
    width: 100%;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} { 
    margin-left: 170px;
    width: 69%;
  }
`;

export const ShoppingBagBtnIconStyled = styled(ShoppingBagBtnIcon)`
  font-size: 20px;
  position: relative;
  top: 3px;
  right: 3px;
`;

export const TopTypography = styled(Typography)`
  text-align: center;
  position: relative;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    text-align: center;
    position: relative;
    left: 53px;
    font-weight: 600;
    font-size: 35px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} { 
    position: relative;
    left: 100px;
    font-weight: 600;
    font-size: 40px;
  }
`;

export const RowDiv = styled("div")`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  top: 20px;
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} { 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

`;
export const ImgDiv = styled("div")`
  display: flex;
  position: relative;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    margin-left: 60px;
    margin-top: 0px;
    position: relative;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} { 
    display: grid;
    margin-left: 100px;
    margin-top: 10px;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} { 
    margin-left: 0px;
    margin-top: 10px;
    width: 1010px;
    height: 400px;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} {
    // margin-left: 50px;
  }
`;
export const DetailDiv = styled("div")<{ bgcolor: string }>`
  // visibility: hidden;
  display: flex;
  background: ${({ bgcolor }) => bgcolor || appColors["white"]};
  color: #fff;
  padding: 10px;
  width: 237px;
  position: absolute;
  margin-top: -51px;
  display: flex;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.between('md','lg')} { 
    width: 20.5%;
    padding: 5px;
    font-size:13px;
   }
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
 
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 282px;
  }

`;

export const ProductContent = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

 ${({ theme }) => theme.breakpoints.down('sm')} {
    display: flex;
    justify-content: space-between;
  }

`;
export const StyledTypography = styled(Typography)`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 21.79px;
  margin-top: 5px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    margin-top: 10px;
    font-size: 15px;
    line-height: 20px;
  }

`;

export const StyledLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  color: black;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-right: 5px;
    margin-left: 5px;
    text-decoration: none;
    color: black;
    cursor: pointer;
    font-size: 12px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} { 
    margin-right: 10px;
    margin-left: 50px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    margin-right: 30px;
    position: relative;
    
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} { 
    position: relative;
    margin-left: 50px;
  }

`;
export const StyledLink1 = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    color: #ff6f61;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-right: 5px;
    cursor: pointer;
    font-size: 12px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} { 
    margin-right: 10px;
    margin-left: 20px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    margin-right: 30px;
    margin-left: 20px;
    position: relative;
    cursor: pointer;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} { 
    position: relative;
    margin-left: 30px;
  }

`;
export const StyledButton = styled(Button)<{
  bgcolor: string;
  textcolor: string;
}>`
  margin-right: 0px;
  float: right;
  height: 25px;
  position: relative;
  bottom: 0px;
  left: 60px;
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
    bottom: 18px;
    font-size: 8px;
    left: 60px;
    width: 70px;
    gap: 5px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} { 
    height: 29px;
    position: relative;
    bottom: 25px;
    font-size: 18px;
    left: 140px;
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} { 
    float: right;
    height: 29px;
    position: relative;
    font-size: 12px;
    right: 22px;
    top: 0px;
    left: -35px;
    gap: 10px;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} { 
    float: right;
    height: 29px;
    font-size: 12px;
    position: relative;
    left: 90px;
    right: 22px;
    top: 0px;
    gap: 10px;
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
export const SaleTypography = styled(Typography)`
  position: absolute;
  top: 40px;
  right: 205px;
  background-color: black;
  color: white;
  width: 60px;
  text-align: center;
  ${({ theme }) => theme.breakpoints.between('md','lg')} {
  position: absolute;
  top: 40px;
  right: 175px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: absolute;
    top: 40px;
    right: 206px;
    background-color: black;
    color: white;
    width: 60px;
    text-align: center;
  }

`;
