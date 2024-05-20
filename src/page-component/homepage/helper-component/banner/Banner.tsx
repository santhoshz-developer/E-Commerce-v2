import { api } from "@/service/backend-api";
import {
  BoxContainer,
  ContentWrapper,
  ImageBanner,
  ImageZara,
  ImageZaraBackground,
  StyledButton,
  TextPara,
} from "./Banner.Styled";
import { Box } from "@mui/material";

export const Banner = (props: any) => {
  const brandbanner = props;
  const bannerButton =
    brandbanner?.[0]?.button?.[0]?.color?.button?.[0]?.backgroundColor;
  const bannerText = brandbanner?.[0]?.button?.[0]?.color?.button?.[0]?.color;

  const renderZaraImage = () => {
    return (
      <ContentWrapper>
        <ImageZara
          src={
            api +
            brandbanner?.[0]?.image?.[0]?.image?.data?.[0]?.attributes?.url
          }
          alt="no Zara"
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

  const renderBannerImage = () => {
    return (
      <Box style={{ position: "relative" }}>
        <ImageBanner
          src={
            api +
            brandbanner?.[0]?.backgroundimage?.[0]?.image?.data?.[0]?.attributes
              ?.url
          }
          alt="no Banner"
        />
        <ImageZaraBackground
          src={
            api +
            brandbanner?.[0]?.image2?.[0]?.image?.data?.[0]?.attributes?.url
          }
          alt="no zara-background"
        />
        {renderZaraImage()}
      </Box>
    );
  };

  return (
    <>
      <BoxContainer>{renderBannerImage()}</BoxContainer>
    </>
  );
};
