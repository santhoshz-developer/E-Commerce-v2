import { appColors } from "@/theme/color.Config";
import { Box, Typography, styled} from "@mui/material";


export const MainDiv = styled("div")`
  // overflow: hidden;
  height: 690px;
  position: relative;
  left: 0px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: relative;
    left: 0px;
    height: 100%;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    position: relative;
    height: 100%;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    position:relative;
    height: 100%;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} {
    position:relative;
    left: 0px;
  }
`;

export const BoxStyled = styled(Box)`
  position: relative;
  top:100px;
  ${({ theme }) => theme.breakpoints.down('sm')} {

  }
`;
export const LadyDiv = styled("div") <{ bgcolor: string }>`
  // visibility: hidden;
  display: flex;
  background: ${({ bgcolor }) => bgcolor || appColors["white"]};
  color: #fff;
  justify-content: space-between;
  padding: 10px;
  position: relative;
  margin-top: -50px;
  cursor: pointer;
  z-index: 999;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: relative;
    margin-top: -72px;
    justify-content: space-between;
    padding: 5px;
    width: 300px;
  }
  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    padding: 15px;
    margin-top: -62px;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} {
    margin-top: -52px;
  }
`;

export const LadyimgDiv = styled("div")`
  margin-right: 15px;
  position: relative;
  left: 100px;

  img {
    height: 525px !important;
    width: 100%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    margin-top:-30px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: relative;
    left: 0px;
    margin-left: 40px;
    img {
      height: 400px !important;
      width: 300px !important;
      object-fit: contain;
    }
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    position: relative;
    left: 100px;
    margin-top: 40px;
    img {
      height: 50% !important;
      width: auto !important;
    }
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    position: realtive;
    left: 0px;
    margin-left: auto;
    margin-top: 50px;
    img {
      height: 100% !important;
      width: 100% !important;
      
    }
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} {
    position: realtive;
    left: 0px;
    margin-left: 200px;
    margin-top: 50px;
    img {
      height: 100% !important;
      width: 100% !important;
      
    }
  }
`;
export const PantsDiv = styled("div") <{ bgcolor: string }>`
  // visibility: hidden;
  display: flex;
  background: ${({ bgcolor }) => bgcolor || appColors["white"]};
  color: #fff;
  justify-content: space-between;
  padding: 10px;
  width: 250px;
  position: absolute;
  margin-top: -52px;
  cursor: pointer;
  z-index: 999;

  ${({ theme }) => theme.breakpoints.down('sm')} {

    width: 300px;
    padding: 5px;
    margin-top: -45px;
  }
  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    width: 300px;
    padding: 5px;
    margin-top: -40px;
  }
  ${({ theme }) => theme.breakpoints.between('md','lg')} { 
    width: 300px;
    padding: 10px;
    margin-top: -50px;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} { 
    margin-top: -55px;
  }
`;
export const CoatDiv = styled("div") <{ bgcolor: string }>`
  // visibility: hidden;
  display: flex;
  background: ${({ bgcolor }) => bgcolor || appColors["white"]};
  color: #fff;
  justify-content: space-between;
  padding: 10px;
  width: 250px;
  position: absolute;
  margin-top: -52px;
  cursor: pointer;
  z-index: 999;

 ${({ theme }) => theme.breakpoints.down('sm')} {
  position: relative;
    width: 300px;
    padding: 5px;
    margin-top: -68px;
  }
  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    width: 300px;
    padding: 5px;
    margin-top: -64px;
  }
  ${({ theme }) => theme.breakpoints.between('md','lg')} { 
    width: 300px;
    padding: 10px;
    margin-top: -74px;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} { 
    margin-top: -55px; 
  }
`;
export const ShirtDiv = styled("div") <{ bgcolor: string }>`
  // visibility: hidden;
  display: flex;
  background: ${({ bgcolor }) => bgcolor || appColors["white"]};
  color: #fff;
  justify-content: space-between;
  padding: 10px;
  width: 250px;
  position: absolute;
  margin-top: -52px;
  cursor: pointer;
  z-index: 999;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 300px;
    padding: 5px;
    margin-top: -45px;
  }
  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    width: 300px;
    padding: 5px;
    margin-top: -40px;
  }
  ${({ theme }) => theme.breakpoints.between('md','lg')} { 
    width: 300px;
    padding: 10px;
    margin-top: -50px;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} { 
    margin-top: -56px; 
  }
`;
export const JacketDiv = styled("div") <{ bgcolor: string }>`
  // visibility: hidden;
  display: flex;
  background: ${({ bgcolor }) => bgcolor || appColors["white"]};
  color: #fff;
  justify-content: space-between;
  padding: 10px;
  width: 250px;
  position: absolute;
  margin-top: -52px;
  cursor: pointer;
  z-index: 999;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 300px;
    padding: 5px;
    margin-top: -37px;
  }
  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    width: 300px;
    padding: 5px;
    margin-top: -37px;
  }
  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    width: 300px;
    padding: 10px;
    margin-top: -50px;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} { 
    margin-top: -55px; 
  }
`;
export const HoverDiv = styled("div")`
img{
      width: 100%;
      max-width: 250px;
      height: auto;
      margin-bottom: 5px;
    }
 
  ${({ theme }) => theme.breakpoints.down('sm')} {
    position:  relative;
    left: 7px;
    img {
      width: 100%;
      max-width: 300px;
      height: auto;
      object-fit: contain;
      margin-top: 30px;
      
    }
  }
  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    img {
      height: auto;
      width: 100%;
      max-width: 300px;
      margin-bottom: 0px;
    }
  }
  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    img {
      height: auto;
      width: 100%;
      max-width: 300px;
      margin-bottom: 0px;
    }
  }
`;

export const LogoDiv = styled('div')`
  display: flex;
  justify-content: center;
  position: relative;
  top: 57px;
  left: 100px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    position: relative;
    left: 0px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    display: flex;
    position: relative;
    top: 57px;
    left: 100px;

    img {
      height: 50px !important;
      width: 20% !important;
    }
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    display: flex;
    justify-content: center;
    position: relative;
    top: 57px;
    left: 100px;
    img {
      height: 50px !important;
      width: 50% !important;
    }
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} {
    display: flex;
    justify-content: center;
    position: relative;
    top: 57px;
    left: 80px;
    img {
      height: 50px !important;
      width: 50% !important;
    }
  }
`;

export const ImageStyled = styled("img")`
  width: 200px;
  height: 70px;
  margin: 0 10px;
`;
export const StyledDiv = styled("div")`
   position: relative;
   left: 100px;
   gap:10px;
   margin-left: 20px;
   margin-bottom: 10px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-left: 10px;
    position: relative;
    left: 0px;
     img {
          height: 100% !important;
          width: auto !important;
         }
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    display: flex;
    gap: 35px;
    position: relative;
    left: 100px;
    margin-top: 30px;
    img {
      height: 100% !important;
      width: auto !important;
    }
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    gap: 40px;
    display: flex;
    left: 100px;
    position: relative;
    margin-top: 20px;
    img {
      height: 100% !important;
      width: auto !important;
    }
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} {
    position: relative;
    left: 0px;
    margin-top: 40px;
    img {
      height: 100% !important;
      width: auto !important;
    }
  }
`;

export const StyledTypography = styled(Typography)`
  transform: rotate(-90deg);
  position: absolute;
  left: 20px;
  color: black;
  margin-top: 380px;
  font-weight: 400;
  font-family: roboto;
  font-size: 23px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    left: -130px;
    margin-top: 670px;
    font-size: 18px;
    font-family: roboto;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    left: -130px;
    font-size: 25px;
    position: absolute;
    margin-top: 420px;
    font-family: roboto;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    margin-top: 430px;
    left: 10px;
    font-size: 28px;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} {
    left: -70px;
    margin-top: 420px;
    font-size: 27px;

  }
`;

export const SaleTypography = styled(Typography)`
  position: absolute;
  top: 20px;
  background-color: black;
  color: white;
  width: 60px;
  text-align: center;
  z-index: 1;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: relative;
    top: 60px;
    background-color: black;
    color: white;
    width: 50px;
    font-size: 15px;
    text-align: center;
    z-index: 1;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    position: relative;
    top: 50px;
    left: -335px;
    background-color: black;
    color: white;
    width: 60px;
    text-align: center;
    z-index: 1;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    position: relative;
    top: 40px;
    left: -340px;
  }


`;
