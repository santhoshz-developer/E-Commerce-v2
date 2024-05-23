import { appColors } from "@/theme/color.Config";
import { Box, Button, Typography, styled} from "@mui/material";


export const MainDiv = styled("div")`
  background-color: rgba(30, 40, 50, 0.05);
  
  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 1020px;
    position: relative;
    zindex: 999;
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    position: relative;
    width: 100%;
    
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
 
  }
`;
export const RightColumn = styled("div")`
  padding: 30px;
  left: 50px;
  position: relative;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: relative;
    top: 100px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    left: -70px;
    position: relative;
    top: 50px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    position: relative;
    top: 20px;
    width: 500px;
    left: 0px;
  }
`;

export const LeftColumn = styled("div")`
  position: relative;
  left: -34px;
  bottom: 60px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: relative;
    zindex: 999;
    left: -190px;
    height: 25px;
    width: 350px;
    bottom: 150px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    position: relative;
    left: -160px;
    top: 50px;
    height: 25px;
    width: 250px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    position: relative;
    left: -100px;
  }
`;

export const ImageStyled = styled("img")`
  z-index: 1;
  width: 100%;
  height: 440px;
  max-width: 340px;
  border-radius: 120px 0px 120px 0px;
  position: relative;
  bottom: 10px;
  right: 10px;
  object-fit: cover;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    z-index: 1;
    width: 100%;
    height: 350px !important;
    border-radius: 120px 0px 120px 0px;
    position: relative;
    bottom: 17px;
    left: -10px;
    width: 250px !important;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    z-index: 1;
    width: 100%;
    height: 350px !important;
    border-radius: 120px 0px 120px 0px;
    position: relative;
    bottom: 17px;
    left: -10px;
    width: 230px !important;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    z-index: 1;
    width: 100%;
    height: 400px !important;
    border-radius: 120px 0px 120px 0px;
    position: relative;
    bottom: 20px;
    left: -10px;
    width: 280px !important;
  }
`;

export const ImageBorder = styled(Box)`
  border: 2px solid rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 342px;
  height: 450px;
  border-radius: 120px 0px 120px 0px;
  position: relative;
  bottom: 140px;
  border: 2px solid rgba(0, 0, 0, 0.25);

  ${({ theme }) => theme.breakpoints.down('sm')} {
    border: 2px solid rgba(0, 0, 0, 0.25);
    width: 255px !important;
    height: 350px !important;
    border-radius: 120px 0px 120px 0px;
    position: relative;
    top: 40px;
    left: -250px;
    border: 2px solid rgba(0, 0, 0, 0.25);
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    border: 2px solid rgba(0, 0, 0, 0.25);
    width: 235px !important;
    height: 350px !important;
    border-radius: 120px 0px 120px 0px;
    position: relative;
    border: 2px solid rgba(0, 0, 0, 0.25);
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    border: 2px solid rgba(0, 0, 0, 0.25);
    width: 290px !important;
    height: 400px !important;
    border-radius: 120px 0px 120px 0px;
    position: relative;
    border: 2px solid rgba(0, 0, 0, 0.25);
  }
`;
export const TypographyStyled = styled(Typography)`
  position: relative;
  font-weight: 200;
  font-size: 70px;
  font-family: 'Roboto', sans-serif;
  bottom: 25px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
  position: relative;
  font-weight: 300;
  font-size: 50px;
  font-family: sans-serif;
  bottom: 25px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    position: relative;
    font-weight: 300;
    font-size: 40px;
    font-family: sans-serif;
    bottom: 70px;
    }
  }

`;
export const TypographyContent = styled(Typography)`
  font-size: 20px;
  font-family: roboto;
  font-weight: 400;
  line-height: 38px;
  margin-left: 10px;
  line-height: 50px;
  position: relative;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 15px;
    font-family: roboto;
    display: flex;
    position: relative;
    line-height: 30px;
    flex-direction: row;
    left: 0px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    font-size: 15px;
    font-family: roboto;
    position: relative;
    line-height: 20px;
    flex-direction: row;
    left: -5px;
    bottom: 50px;
  }
`;

export const StyledButton = styled(Button)<{
  bgcolor: string;
  textcolor: string;
}>`
  margin-top: 40px;
  margin-left: 10px;
  background: ${({ bgcolor }) => bgcolor || appColors["white"]};
  color: ${({ textcolor }) => textcolor || appColors["black"]};
  line-height: 40px;
  gap: 10px;
  width: 170px;
  font-size: 18px;
  font-size: 1rem;

  &:hover {
    background-color: #ff6f61;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 40px;
    left: 5px;
    background: ${({ bgcolor }) => bgcolor || appColors["white"]};
    color: ${({ textcolor }) => textcolor || appColors["black"]};
    gap: 10px;
    position: relative;
    zindex: 999;
    font-size: 1rem;

    &:hover {
      background-color: #ff6f61;
    }
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    margin-top: 5px;
    left: 10px;
    background: ${({ bgcolor }) => bgcolor || appColors["white"]};
    color: ${({ textcolor }) => textcolor || appColors["black"]};
    gap: 10px;
    position: relative;
    font-size: 1rem;

    &:hover {
      background-color: #ff6f61;
    }
  }
  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    left: 0;
  }
`;
export const FrameStyled = styled("div")`
  position: relative;
  top: 430px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: relative;
    top: 300px;
    left: -10px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    position: relative;
    bottom: 350px;
    left: -10px;
  }
`;

export const BoxInline = styled(Box)`
   margin:90px 200px 0 220px;
`

export const FrameRightStyled = styled("div")`
  position: relative;
  bottom: 550px;
  float: right;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: relative;
    top: 35px;
    float: left;
    left: 175px;
  }

   ${({ theme }) => theme.breakpoints.between('sm','md')} {
    position: relative;
    bottom: 440px;
    float: right;
    left: 0px;
  }
`;
