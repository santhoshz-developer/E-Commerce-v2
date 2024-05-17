/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@apollo/client";

import { api } from "@/service/backend-api";
import {
  ContentTypography,
  ImgBox,
  ImgDiv,
  ImgDiv1,
  ImgDiv2,
  ImgDiv3,
  ImgDiv4,
  ImgDiv5,
  MainDiv,
  StyledBox,
  StyledButton,
  StyledText,
  TopDiv,
  TopTypography,
} from "./Follow.styled";
import { QUERY } from "@/service/query";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Follow = () => {
  const { data } = useQuery(QUERY);
  const { homes } = data || {};
  const feedback = homes?.data?.[0]?.attributes || {};

  const feedbackData = feedback?.feedback?.[0];
  console.log("feedback", feedbackData);
  console.log("feedback1", feedbackData?.button?.[0]?.title);

  return (
    <TopDiv>
      <StyledBox>
        <TopTypography variant="h4">{feedbackData?.title}</TopTypography>

        <MainDiv>
          <ImgBox>
            <img
              src={
                api +
                feedbackData?.cardItems?.[0]?.brandlogo?.data?.[0]?.attributes
                  ?.url
              }
              alt="Brand 1"
              style={{
                width: "200px",
                height: "200px",
                margin: "0 5px",
                color: "black",
              }}
            />
            <ImgDiv>
              <InstagramIcon />
            </ImgDiv>
          </ImgBox>
          <ImgBox>
            <img
              src={
                api +
                feedbackData?.cardItems?.[1]?.brandlogo?.data?.[0]?.attributes
                  ?.url
              }
              alt="Brand 2"
              style={{ width: "200px", height: "200px", margin: "0 5px" }}
            />
            <ImgDiv1>
              <InstagramIcon />
            </ImgDiv1>
          </ImgBox>
          <ImgBox>
            <img
              src={
                api +
                feedbackData?.cardItems?.[2]?.brandlogo?.data?.[0]?.attributes
                  ?.url
              }
              alt="Brand 3"
              style={{ width: "200px", height: "200px", margin: "0 5px" }}
            />
            <ImgDiv2>
              <InstagramIcon />
            </ImgDiv2>
          </ImgBox>
          <ImgBox>
            <img
              src={
                api +
                feedbackData?.cardItems?.[3]?.brandlogo?.data?.[0]?.attributes
                  ?.url
              }
              alt="Brand 4"
              style={{ width: "200px", height: "200px", margin: "0 5px" }}
            />
            <ImgDiv3>
              <InstagramIcon />
            </ImgDiv3>
          </ImgBox>
          <ImgBox>
            <img
              src={
                api +
                feedbackData?.cardItems?.[4]?.brandlogo?.data?.[0]?.attributes
                  ?.url
              }
              alt="Brand 5"
              style={{ width: "200px", height: "200px", margin: "0 5px" }}
            />
            <ImgDiv4>
              <InstagramIcon />
            </ImgDiv4>
          </ImgBox>
          <ImgBox>
            <img
              src={
                api +
                feedbackData?.cardItems?.[5]?.brandlogo?.data?.[0]?.attributes
                  ?.url
              }
              alt="Brand 6"
              style={{ width: "200px", height: "200px", margin: "0 5px" }}
            />
            <ImgDiv5>
              <InstagramIcon />
            </ImgDiv5>
          </ImgBox>
        </MainDiv>

        <ContentTypography variant="h4">{feedbackData?.heading}</ContentTypography>

        <StyledText
          id="standard-basic"
          label="Email Address..."
          variant="standard"
        />
        <StyledButton variant="outlined">
          {feedbackData?.button?.[0]?.title}
        </StyledButton>
      </StyledBox>
    </TopDiv>
  );
};
