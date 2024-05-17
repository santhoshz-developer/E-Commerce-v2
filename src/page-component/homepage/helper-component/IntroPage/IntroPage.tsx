import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import {
  FrameRightStyled,
  FrameStyled,
  ImageBorder,
  ImageStyled,
  LeftColumn,
  MainDiv,
  RightColumn,
  StyledButton,
  TypographyContent,
  TypographyStyled,
} from "./IntroPage.styled";

import { useQuery } from "@apollo/client";

import { api } from "@/service/backend-api";

import { LeftFrameSvg } from "@/component/svg/LeftFrame";
import { RightFrameSvg } from "@/component/svg/RightFrame";
import { ShoppingBagBtnIcon } from "@/component/icon/ShoppingBagIcon";
import { QUERY } from "@/service/query";

const Intro = ({topmain}:any) => {
    const [imageLoaded, setImageLoaded] = useState(false);
  console.log("topmain", topmain);

  const leftFrameData = topmain?.[0]?.frame1?.data?.[0]?.attributes || {};
  const rightFrameData = topmain?.[0]?.frame2?.data?.[0]?.attributes || {};

  console.log("leftFrameData", leftFrameData);
  console.log("rightFrameData", rightFrameData);

  const introButton =
    topmain?.[0]?.topbutton?.[0]?.color?.topButton?.[0]?.background;
  const introText = topmain?.[0]?.topbutton?.[0]?.color?.topButton?.[0]?.text;

  const imageUrl = api + topmain?.[0]?.image?.data?.[0]?.attributes?.url;
console.log('introButton',introText);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setImageLoaded(true);
  }, [imageUrl]);

  return (
    <MainDiv>
      <FrameStyled>
        <LeftFrameSvg />
      </FrameStyled>
      <Box sx={{ margin: "90px 200px 0 220px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <LeftColumn>
              <TypographyStyled>{topmain?.[0].title}</TypographyStyled>
              <TypographyContent>{topmain?.[0].description}</TypographyContent>
              <StyledButton
                variant="contained"
                sx={{
                  backgroundColor: introButton,
                  color: introText,
                }}
                bgcolor={introButton} textcolor={introText}
              >
                <ShoppingBagBtnIcon />
                {topmain?.[0].topbutton?.[0]?.title}
              </StyledButton>
            </LeftColumn>
          </Grid>
          <Grid item xs={12} sm={6}>
            <RightColumn>
              <ImageBorder>
                <ImageStyled
                  src={imageUrl}
                  alt="Mountains"
                />
              </ImageBorder>
            </RightColumn>
          </Grid>
        </Grid>
      </Box>
      <FrameRightStyled>
        <RightFrameSvg />
      </FrameRightStyled>
    </MainDiv>
  );
};

export default Intro;
