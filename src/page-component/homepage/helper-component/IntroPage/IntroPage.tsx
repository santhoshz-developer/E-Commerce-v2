import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import {
  BoxInline,
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

import { api } from "@/service/backend-api";
import { LeftFrameSvg } from "@/component/svg/LeftFrame";
import { RightFrameSvg } from "@/component/svg/RightFrame";
import { ShoppingBagBtnIcon } from "@/component/icon/ShoppingBagIcon";

const Intro = (props: any) => {
  const topmain = props;
  const [imageLoaded, setImageLoaded] = useState(false);

  const introButton =
    topmain?.[0]?.topbutton?.[0]?.color?.topButton?.[0]?.background;
  const introText = topmain?.[0]?.topbutton?.[0]?.color?.topButton?.[0]?.text;

  const imageUrl = api + topmain?.[0]?.image?.data?.[0]?.attributes?.url;

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
      <BoxInline>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <LeftColumn>
              <TypographyStyled>{topmain?.[0]?.title}</TypographyStyled>
              <TypographyContent>{topmain?.[0]?.description}</TypographyContent>
              <StyledButton
                variant="contained"
                sx={{
                  backgroundColor: introButton,
                  color: introText,
                }}
                bgcolor={introButton}
                textcolor={introText}
              >
                <ShoppingBagBtnIcon />
                {topmain?.[0]?.topbutton?.[0]?.title}
              </StyledButton>
            </LeftColumn>
          </Grid>
          <Grid item xs={12} sm={6}>
            <RightColumn>
              <ImageBorder>
                <ImageStyled src={imageUrl} alt="Mountains"  loading="lazy"/>
              </ImageBorder>
            </RightColumn>
          </Grid>
        </Grid>
      </BoxInline>
      <FrameRightStyled>
        <RightFrameSvg />
      </FrameRightStyled>
    </MainDiv>
  );
};

export default Intro;
