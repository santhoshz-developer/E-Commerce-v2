import { Box, Button, TextField, Typography, styled } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

export const HoverContent = styled("div")`
  display: none;
  visibility: hidden;
  position: absolute;
  font-size: 30px;
  color: #fff;
  background-color: black;
  opacity: 0.5;
  width: 200px;
  height: 200px;
  padding-top: 60px;
  padding-left: 60px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImgBox = styled("div")`
  position: relative;
  display: inline-block;

`;

export const InstagramIconStyled = styled(InstagramIcon)`
  position: relative;
  left: 10px;
  font-size: 50px;
`;

export const TopDiv = styled("div")`
  background-color: rgba(30, 40, 50, 0.05);
  position: relative;
  top: 60px;
  height: 640px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: relative;
    top: 20px;
    height: 1900px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    position: relative;
    top: 60px;
    height: 1300px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    position: relative;
    top: 60px;
  }
`;
export const StyledBox = styled(Box)`
  position: relative;
  top: 60px;
`;
export const ImageStyled = styled("img")`
  width: 200px;
  height: 200px;
  margin: 0 5px;
`;

export const TopTypography = styled(Typography)`
  text-align: center;
  font-weight: 600;
  font-size: 45px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: relative;
    left: 0px;
    font-size: 15px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    position: relative;
    left: 0px;
    font-size: 33px;
  }
`;

export const MainDiv = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    margin-left: 70px;
    margin-top: 40px;
    position: relative;
    gap: 15px;

    img {
      height: 250px !important;
      width: 250px !important;
    }
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    display: grid;
    margin-left: 50px;
    margin-top: 40px;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    img {
      height: 300px !important;
      width: 300px !important;
    }
  }
  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    img {
      height: 150px !important;
      width: auto !important;
    }
  }
`;
export const StyledButton = styled(Button)`
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: black;
  border-radius: none;
  color: black;
  margin-top: 34px;
  margin-left: 50px;
  &:hover {
    color: #ff6f61;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 34px;
    margin-left: 50px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    margin-top: 34px;
    margin-left: 50px;
  }
`;

export const StyledText = styled(TextField)`
  width: 473px;
  height: 32px;
  margin-top: 22px;
  margin-left: 480px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 180px;
    margin-left: 40px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    margin-left: 80px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    width: 400px;
    height: 32px;
    margin-top: 22px;
    margin-left: 240px;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} {
    margin-left: 420px;
  }
`;

export const ContentTypography = styled(Typography)`
  text-align: center;
  margin-top: 50px;
  font-weight: 600;
  font-size: 38px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    position: relative;
    left: 0px;
    font-size: 20px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    position: relative;
    left: 0px;
    font-size: 40px;
  }
`;
