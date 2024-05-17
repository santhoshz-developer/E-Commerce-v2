/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@apollo/client";

import { api } from "@/service/backend-api";
import {
  BoxContainer,
  ContentWrapper,
  StyledButton,
  TextPara,
} from "./Banner.Styled";
import { Box } from "@mui/material";
import { QUERY } from "@/service/query";

export const Banner = () => {
  const { data } = useQuery(QUERY);

  const { homes } = data || {};
  const brandbanner = homes?.data?.[0].attributes || {};
  const branner = brandbanner?.brandbanner;
  console.log(" brandBanner ", branner);
  const bannerButton =
  branner?.[0]?.button?.[0]?.color?.button?.[0]?.backgroundColor
  const bannerText =
  branner?.[0]?.button?.[0]?.color?.button?.[0]?.color

  console.log(
    "brandBanner1",
    branner?.[0]?.button?.[0]?.color?.button?.[0]?.backgroundColor
  );

  const RightContent = () => {
    return (
      <ContentWrapper>
        <img
          src={
            api + branner?.[0]?.image?.[0]?.image?.data?.[0]?.attributes?.url
          }
          alt="no Zara"
          width={"141px"}
          height={"71px"}
        />
        <TextPara>{branner?.[0]?.description}</TextPara>
        <StyledButton
          variant="contained"
          bgcolor={bannerButton}
          textcolor={bannerText}
        >
          {branner?.[0]?.button?.[0]?.title}
        </StyledButton>
      </ContentWrapper>
    );
  };
  return (
    <BoxContainer>
      <Box style={{ position: "relative" }}>
        <img
          src={
            api +
            branner?.[0]?.backgroundimage?.[0]?.image?.data?.[0]?.attributes
              ?.url
          }
          alt="no Banner"
          width={"100%"}
          height={"80%"}
        />
        <img
          src={
            api + branner?.[0]?.image2?.[0]?.image?.data?.[0]?.attributes?.url
          }
          alt="no zara-background"
          width={"332px"}
          height={"301px"}
          style={{ position: "absolute", top: "51px", left: "1170px" }}
        />
        {RightContent()}
      </Box>
    </BoxContainer>
  );
};
