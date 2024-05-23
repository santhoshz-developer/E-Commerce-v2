import { appColors } from "@/theme/color.Config";
import { Button, Typography, styled } from "@mui/material";

export const BoxContainer = styled("div")`
  overflow: hidden;
  position: realtive;
  margin-top: 90px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: relative;
    left: 0px;
    bottom: 0px;
  }
`;
export const ImageZara = styled("img")`
  width: 141px;
  height: 71px;
`;
export const ImageBanner = styled("img")`
  width: 100%;
  height: 80%;
`;
export const ImageZaraBackground = styled("img")`
  width: 332px;
  height: 301px;
  position: absolute;
  top: 51px;
  left: 1170px;
  opacity: 0.1;
`;

export const TextPara = styled(Typography)`
  color: white;
  font-size: 21px;
  padding-top: 40px;
  padding-right: 30px;
  font-family: serif;
  width: 430px;
  height: 187px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 10px;
    padding: 5px;
    width: 150px;
    height: 70px;
  }
  ${({ theme }) => theme.breakpoints.between('sm','md')} { 
    font-size: 18px;
    padding-right: 15px;
    width: 350px;
    height: 60px;
  }
`;
export const StyledButton = styled(Button)<{
  bgcolor: string;
  textcolor: string;
}>`
  font-size: 23px;
  font-weight: 400;
  background: ${({ bgcolor }) => bgcolor || appColors["white"]};
  color: ${({ textcolor }) => textcolor || appColors["black"]};
  text-transform: capitalize;
  font-family: Roboto;
  margin-top: 50px;
  padding: 10px;
  width: 200px;
  height: 50px;
  border-radius: none;
  &:hover {
    background-color: #ff6f61;
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 10px;
    font-weight: 20;
    width: 90px;
    height: 20px;
    margin: 20px;
    left: -14px;
  }
  ${({ theme }) => theme.breakpoints.between('sm','md')} { 
    font-size: 15px;
    width: 150px;
    height: 30px;
    margin: 120px;
    left: -120px;
  }
`;
export const ContentWrapper = styled("div")`
  position: absolute;
  top: 240px;
  left: 1020px;
  padding: 10px 20px;
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: absolute;
    top: 40px;
    left: 220px;
    padding: 0px;
    width: 150px;
    height: 70px;
    img {
      height: 20px !important;
      width: 40px;
    }
  }
  ${({ theme }) => theme.breakpoints.between('sm','md')} { 
    position: absolute;
    top: 40px !important;
    left: 420px !important;
  }
  ${({ theme }) => theme.breakpoints.between('md','lg')} { 
    position: absolute;
    top: 40px !important;
    left: 620px !important;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} { 
    position: absolute;
    top: 140px !important;
    left: 850px !important;
  }
`;
