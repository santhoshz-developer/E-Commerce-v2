import { Grid, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { api } from "@/service/backend-api";
import {
  AbTypography,
  AbTypography1,
  BottomContainer,
  CatTypography,
  CatTypography1,
  CusTypography,
  CusTypography1,
  DivWrapper,
  FacebookIconStyled,
  InstraGramIconStyled,
  LinkedInIconStyled,
  LogDiv,
  StyledBox,
  StyledButton,
  TopicDiv,
  ToppDiv,
  TwitterIconStyled,
} from "./Footer.Styled";
import { FooterItem } from "../type";

export const Footer = (props: any) => {
  const { footer, bottom } = props;

  const renderCompanyInfo = () => {
    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        lg={3.2}
        sx={{ marginBottom: { xs: "20px", sm: 0 } }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "450",
            mb: "10px",
            marginTop: "10px",
          }}
        >
          CORAL
        </Typography>
        <Typography
          style={{
            color: "rgba(30, 40, 50, 0.75)",
            fontSize: "13px",
            lineHeight: "30px",
          }}
        >
          {footer?.[0]?.description}
        </Typography>
        <DivWrapper
          sx={{
            gap: "25px",
            mt: "30px",
            position: "relative",
            right: "20px",
          }}
        >
          <FacebookIconStyled />
          <TwitterIconStyled />
          <LinkedInIconStyled />
          <InstraGramIconStyled />
        </DivWrapper>
      </Grid>
    );
  };

  const renderCategories = () => {
    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        lg={1.5}
        sx={{
          marginBottom: { xs: "20px", sm: 0 },
          marginLeft: { xs: "50px", sm: "10px", md: "-40px", xl: "50px" },
          marginTop: { sm: "40px", md: 0 },
        }}
      >
        <CatTypography
          sx={{
            color: "black",
            fontWeight: "600",
            mb: "10px",
            mt: { sm: "-20px", md: "0px" },
          }}
        >
          {footer?.[1]?.title}
        </CatTypography>
        {footer?.[1]?.items.map((item: FooterItem, index: number) => (
          <CatTypography1 key={index} sx={{ mb: "5px" }}>
            {item.content}
          </CatTypography1>
        ))}
      </Grid>
    );
  };

  const renderAbout = () => {
    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        lg={4}
        sx={{
          marginBottom: { xs: "20px", sm: 0 },
          marginLeft: { xs: "180px", md: "30px" },
        }}
      >
        <Grid container spacing={0} sx={{ marginLeft: { lg: "90px" } }}>
          <Grid item xs={8} md={6} lg={7}>
            <AbTypography
              sx={{
                color: "black",
                fontWeight: "600",
                mb: "10px",
                mt: { sm: "20px", md: "0px", lg: "5px" },
              }}
            >
              {footer?.[2]?.title}
            </AbTypography>
            {footer?.[2]?.items.map((item: FooterItem, index: number) => (
              <AbTypography1 key={index} sx={{ mb: "5px" }}>
                {item.content}
              </AbTypography1>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const renderCustomerService = () => {
    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        lg={2.5}
        sx={{
          marginBottom: { xs: "20px", sm: 0 },
          marginLeft: { xs: "40px", md: "50px", lg: "50px", xl: "0px" },
          marginTop: {
            xs: "0px",
            sm: "-20px",
            md: "0px",
            lg: "-15px",
            xl: "0px",
          },
        }}
      >
        <CusTypography
          sx={{
            color: "black",
            fontWeight: "600",
            mb: { sm: "-138px", md: "10px" },
          }}
        >
          {footer?.[3]?.title}
        </CusTypography>
        {footer?.[3]?.items.map((item: FooterItem, index: number) => (
          <CusTypography1 key={index} sx={{ mb: { sm: "-180px", md: "8px" } }}>
            {item.content}
          </CusTypography1>
        ))}
      </Grid>
    );
  };

  const renderBottom = () => {
    const bottomBg = bottom?.[0]?.colors?.bottom?.[0]?.color?.backgroundcolor;
    const bottomText = bottom?.[0]?.colors?.bottom?.[0]?.color?.text;

    return (
      <BottomContainer bgcolor={bottomBg} textcolor={bottomText}>
        <TopicDiv>{bottom?.[0]?.content}</TopicDiv>
        <LogDiv>
          <img
            src={api + bottom?.[0]?.image?.data?.[0]?.attributes?.url}
            alt="no img"
          />
        </LogDiv>
        <StyledButton variant="text">
          {bottom?.[0]?.button?.[0]?.title}{" "}
          <ArrowUpwardIcon style={{ marginLeft: "10px" }} />
        </StyledButton>
      </BottomContainer>
    );
  };

  return (
    <ToppDiv>
      <StyledBox>
        <Grid
          container
          spacing={2}
          sx={{
            margin: "auto",
            padding: { md: "50px" },
            paddingLeft: { xs: "50px" },
            marginLeft: "80px",
          }}
        >
          {renderCompanyInfo()}
          {renderCategories()}
          {renderAbout()}
          {renderCustomerService()}
        </Grid>
      </StyledBox>
      {renderBottom()}
    </ToppDiv>
  );
};
