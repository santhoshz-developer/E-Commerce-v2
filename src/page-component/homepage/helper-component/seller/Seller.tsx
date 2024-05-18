/* eslint-disable @next/next/no-img-element */
import { Box, CardContent, Link, Typography } from "@mui/material";
import {
  BoxContainer,
  BoxStyled,
  CustomCard,
  DetailDiv,
  HotTypography,
  ImgDiv,
  ProductContent,
  RowDiv,
  SaleTypography,
  StyledButton,
  StyledLink,
  StyledLink1,
  StyledTypography,
  TopTypography,
  TypographyIcon,
  TypographySale,
} from "./Seller.styled";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { api } from "@/service/backend-api";
import { ShoppingBagBtnIconStyled } from "./Seller.styled";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Seller = (props: any) => {
  const silderproduct = props;
  const sellerButton =
    silderproduct?.[0]?.sellerbutton?.[0]?.color?.button?.[0]?.backgroundColor;
  const sellerText =
    silderproduct?.[0]?.sellerbutton?.[0]?.color?.button?.[0]?.color;
  const hoverBg =
    silderproduct?.[0]?.cards?.[0]?.color?.hover?.[0]?.backgroundColor;
  const hoverText = silderproduct?.[0]?.cards?.[0]?.color?.hover?.[0]?.color;
  return (
    <BoxContainer>
      <TopTypography variant="h4">{silderproduct?.[0]?.title}</TopTypography>
      <BoxStyled sx={{ position: "relative" }}>
        <Box sx={{ marginLeft: "20px", marginTop: "25px" }}>
          <StyledLink href={"#"}>
            <b>{silderproduct?.[0]?.navbar?.[0]?.title}</b>
          </StyledLink>
          <StyledLink1 href={"#"}>
            {silderproduct?.[0]?.navbar?.[1]?.title}
          </StyledLink1>
          <StyledLink1 href={"#"}>
            {silderproduct?.[0]?.navbar?.[2]?.title}
          </StyledLink1>
          <StyledLink1 href={"#"}>
            {silderproduct?.[0]?.navbar?.[3]?.title}
          </StyledLink1>
          <StyledButton
            variant="contained"
            bgcolor={sellerButton}
            textcolor={sellerText}
          >
             <FilterAltIcon />
            {silderproduct?.[0]?.sellerbutton?.[0]?.title}
          </StyledButton>
        </Box>

        <RowDiv>
          <ImgDiv>
            <CustomCard>
              <CardContent>
                <Link href="/Greentop">
                  <img
                    src={
                      api +
                      silderproduct?.[0]?.cardimage?.[0]?.image?.data?.[0]
                        ?.attributes?.url
                    }
                    alt="Brand 5"
                    style={{ width: "95%", marginBottom: "10px" }}
                  />
                </Link>
                <DetailDiv bgcolor={hoverBg}>
                  <FavoriteIcon />
                  <div style={{ position: "relative", left: "10px",fontSize:'10px' }}>
                    <SearchIcon />
                  </div>
                  <TypographyIcon href="#" textcolor={hoverText}>
                    <ShoppingBagBtnIconStyled />{" "}
                    {silderproduct?.[0]?.cards?.[0]?.link}
                  </TypographyIcon>
                </DetailDiv>
                <HotTypography> HOT</HotTypography>
                <StyledTypography variant="h6">
                  {silderproduct?.[0]?.cards?.[0]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography
                    variant="body2"
                    style={{ color: "rgba(0, 0, 0, 0.5)" }}
                  >
                    {silderproduct?.[0]?.cards?.[0]?.content}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginRight: "20px" }}
                    style={{ fontWeight: "bold" }}
                  >
                    {silderproduct?.[0]?.cards?.[0]?.prize}
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <Link href="/Bags">
                  <img
                    src={
                      api +
                      silderproduct?.[0]?.cardimage?.[1]?.image?.data?.[0]
                        ?.attributes?.url
                    }
                    alt="Brand 2"
                    style={{
                      width: "95%",
                      marginBottom: "10px",
                      position: "relative",
                    }}
                  />
                </Link>
                <DetailDiv bgcolor={hoverBg}>
                  <FavoriteIcon />
                  <div style={{ position: "relative", left: "20px" }}>
                    <SearchIcon />
                  </div>
                  <TypographyIcon href="#" textcolor={hoverText}>
                    <ShoppingBagBtnIconStyled />{" "}
                    {silderproduct?.[0]?.cards?.[0]?.link}
                  </TypographyIcon>
                </DetailDiv>
                <StyledTypography variant="h6">
                  {silderproduct?.[0]?.cards?.[1]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography
                    variant="body2"
                    style={{ color: "rgba(0, 0, 0, 0.5)" }}
                  >
                    {silderproduct?.[0]?.cards?.[1]?.content}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginRight: "30px" }}
                    style={{ fontWeight: "bold" }}
                  >
                    {silderproduct?.[0]?.cards?.[1]?.prize}
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <Link href="/Dress">
                  <img
                    src={
                      api +
                      silderproduct?.[0]?.cardimage?.[2]?.image?.data?.[0]
                        ?.attributes?.url
                    }
                    alt="Brand 4"
                    style={{
                      width: "95%",
                      marginBottom: "10px",
                      position: "relative",
                    }}
                  />
                </Link>
                <DetailDiv bgcolor={hoverBg}>
                  <FavoriteIcon />
                  <div style={{ position: "relative", left: "20px" }}>
                    <SearchIcon />
                  </div>
                  <TypographyIcon href="#" textcolor={hoverText}>
                    <ShoppingBagBtnIconStyled />{" "}
                    {silderproduct?.[0]?.cards?.[0]?.link}
                  </TypographyIcon>
                </DetailDiv>
                <SaleTypography> SALE </SaleTypography>
                <StyledTypography variant="h6">
                  {silderproduct?.[0]?.cards?.[2]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography
                    variant="body2"
                    style={{ color: "rgba(0, 0, 0, 0.5)" }}
                  >
                    {silderproduct?.[0]?.cards?.[2]?.content}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginRight: "55px" }}
                    style={{ fontWeight: "bold" }}
                  >
                    {silderproduct?.[0]?.cards?.[2]?.prize}
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <Link href="/Shoe">
                  <img
                    src={
                      api +
                      silderproduct?.[0]?.cardimage?.[3]?.image?.data?.[0]
                        ?.attributes?.url
                    }
                    alt="Brand 6"
                    style={{
                      width: "95%",
                      marginBottom: "10px",
                      position: "relative",
                    }}
                  />
                </Link>
                <DetailDiv bgcolor={hoverBg}>
                  <FavoriteIcon />
                  <div style={{ position: "relative", left: "20px" }}>
                    <SearchIcon />
                  </div>
                  <TypographyIcon href="#" textcolor={hoverText}>
                    <ShoppingBagBtnIconStyled />{" "}
                    {silderproduct?.[0]?.cards?.[0]?.link}
                  </TypographyIcon>
                </DetailDiv>
                <TypographySale> SALE</TypographySale>
                <div style={{ position: "relative" }}>
                  <StyledTypography variant="h6">
                    {silderproduct?.[0]?.cards?.[3]?.title}
                  </StyledTypography>
                  <ProductContent>
                    <Typography
                      variant="body2"
                      style={{ color: "rgba(0, 0, 0, 0.5)" }}
                    >
                      {" "}
                      {silderproduct?.[0]?.cards?.[3]?.content}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ marginRight: "30px" }}
                      style={{ fontWeight: "bold" }}
                    >
                      {silderproduct?.[0]?.cards?.[3]?.prize}
                    </Typography>
                  </ProductContent>
                </div>
              </CardContent>
            </CustomCard>
          </ImgDiv>
        </RowDiv>
      </BoxStyled>
    </BoxContainer>
  );
};

export default Seller;
