/* eslint-disable @next/next/no-img-element */
import { api } from "@/service/backend-api";
import {
  BoxContainer,
  ContentWrapper,
  StyledButton,
  TextPara,
} from "./Banner.Styled";
import { Box } from "@mui/material";

export const Banner = (props: any) => {
  const brandbanner = props;
  const bannerButton =
    brandbanner?.[0]?.button?.[0]?.color?.button?.[0]?.backgroundColor;
  const bannerText = brandbanner?.[0]?.button?.[0]?.color?.button?.[0]?.color;

  const RightContent = () => {
    return (
      <ContentWrapper>
        <img
          src={
            api +
            brandbanner?.[0]?.image?.[0]?.image?.data?.[0]?.attributes?.url
          }
          alt="no Zara"
          width={"141px"}
          height={"71px"}
        />
        <TextPara>{brandbanner?.[0]?.description}</TextPara>
        <StyledButton
          variant="contained"
          bgcolor={bannerButton}
          textcolor={bannerText}
        >
          {brandbanner?.[0]?.button?.[0]?.title}
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
            brandbanner?.[0]?.backgroundimage?.[0]?.image?.data?.[0]?.attributes
              ?.url
          }
          alt="no Banner"
          width={"100%"}
          height={"80%"}
        />
        <img
          src={
            api +
            brandbanner?.[0]?.image2?.[0]?.image?.data?.[0]?.attributes?.url
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
