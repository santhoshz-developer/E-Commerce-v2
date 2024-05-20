import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "styled-components";
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

  &:hover ${HoverContent} {
    display: flex;
    visibility: visible;
  }
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
  @media (min-width: 390px) and (max-width: 767px) {
    background-color: rgba(30, 40, 50, 0.05);
    position: relative;
    top: -270px;
    height: 1900px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    background-color: rgba(30, 40, 50, 0.05);
    position: relative;
    top: 60px;
    height: 1300px;
  }

  @media (min-width: 1024px) and (max-width: 1440 px) {
    background-color: rgba(30, 40, 50, 0.05);
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
  @media (min-width: 390px) and (max-width: 767px) {
    text-align: center;
    position: relative;
    left: 0px;
    font-weight: 600;
    font-size: 15px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    text-align: center;
    position: relative;
    left: 0px;
    font-weight: 300;
    font-size: 33px;
  }
`;

export const MainDiv = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  cursor: pointer;

  @media (min-width: 390px) and (max-width: 767px) {
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

  @media (min-width: 768px) and (max-width: 1023px) {
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
  @media (min-width: 1024px) and (max-width: 1440px) {
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

  @media (min-width: 390px) and (max-width: 767px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: black;
    border-radius: none;
    color: black;
    margin-top: 34px;
    margin-left: 50px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: black;
    border-radius: none;
    color: black;
    margin-top: 34px;
    margin-left: 50px;
  }
`;

export const StyledText = styled(TextField)`
  width: 473px;
  height: 32px;
  margin-top: 22px;
  margin-left: 480px;

  @media (min-width: 390px) and (max-width: 767px) {
    width: 180px;
    height: 32px;
    margin-top: 22px;
    margin-left: 40px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 473px;
    height: 32px;
    margin-top: 22px;
    margin-left: 80px;
  }

  @media (min-width: 1024px) and (max-width: 1199px) {
    width: 400px;
    height: 32px;
    margin-top: 22px;
    margin-left: 240px;
  }
  @media (min-width: 1200px) and (max-width: 1439px) {
    margin-left: 320px;
  }
  @media (min-width: 1440px) {
    margin-left: 420px;
  }
  @media (min-width: 1450px) {
    margin-left: 480px;
  }
`;

export const ContentTypography = styled(Typography)`
  text-align: center;
  margin-top: 50px;
  font-weight: 600;
  font-size: 38px;

  @media (min-width: 390px) and (max-width: 767px) {
    text-align: center;
    position: relative;
    left: 0px;
    font-weight: 600;
    font-size: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    text-align: center;
    position: relative;
    left: 0px;
    font-weight: 600;
    font-size: 40px;
  }
`;
