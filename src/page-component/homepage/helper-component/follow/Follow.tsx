import { api } from "@/service/backend-api";
import {
  ContentTypography,
  HoverContent,
  ImageStyled,
  ImgBox,
  InstagramIconStyled,
  MainDiv,
  StyledBox,
  StyledButton,
  StyledText,
  TopDiv,
  TopTypography,
} from "./Follow.styled";

export const Follow = (props: any) => {
  const feedback = props;

  const renderImage = () => {
    return (
      <MainDiv>
        {feedback?.[0]?.cardItems?.map((item: any, index: any) => (
          <ImgBox key={index}>
            <ImageStyled
              src={api + item?.brandlogo?.data?.[0]?.attributes?.url}
              alt={`Brand ${index + 1}`}
            />
            <HoverContent>
              <InstagramIconStyled />
            </HoverContent>
          </ImgBox>
        ))}
      </MainDiv>
    );
  };

  const renderContent = () => {
    return (
      <ContentTypography variant="h4">
        {feedback?.[0]?.heading}
      </ContentTypography>
    );
  };

  const renderEmailInput = () => {
    return (
      <StyledText
        id="standard-basic"
        label="Email Address..."
        variant="standard"
      />
    );
  };

  const renderButton = () => {
    return (
      <StyledButton variant="outlined">
        {feedback?.[0]?.button?.[0]?.title}
      </StyledButton>
    );
  };
  return (
    <TopDiv>
      <StyledBox>
        <TopTypography variant="h4">{feedback?.[0]?.title}</TopTypography>
        {renderImage()}
        {renderContent()}
        {renderEmailInput()}
        {renderButton()}
      </StyledBox>
    </TopDiv>
  );
};
