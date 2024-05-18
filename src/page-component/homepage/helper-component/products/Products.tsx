/* eslint-disable @next/next/no-img-element */
import { Box, CardContent, Link, Typography } from "@mui/material";

import {
  BoxContainer,
  BoxStyled,
  CommonDiv,
  CustomCard,
  DetailDiv,
  FirstDiv,
  HotTypography,
  ProductContent,
  SaleTypography,
  SecDiv,
  ShoppingBagBtnIconStyled,
  StyledButton,
  StyledLink,
  StyledLink1,
  StyledTypography,
  TopTypography,
  TypographyIcon,
  TypographySale,
} from "./Product.styled";
import { api } from "@/service/backend-api";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Products = (props: any) => {
  const productitems = props;

  const filterButton =
    productitems?.[0]?.filterbutton?.[0]?.color?.button?.[0]?.backgroundColor;
  const filterText =
    productitems?.[0]?.filterbutton?.[0]?.color?.button?.[0]?.olor;
  const hoverBg =
    productitems?.[0]?.cards?.[0]?.color?.hover?.[0]?.backgroundColor;
  const hoverText = productitems?.[0]?.cards?.[0]?.color?.hover?.[0]?.color;

  console.log("filterButton", productitems?.[0]?.cards?.[0].link);

  return (
    <BoxContainer>
      <TopTypography variant="h4"> {productitems?.[0]?.title}</TopTypography>
      <Box sx={{ position: "relative" }}>
        <BoxStyled>
          <StyledLink href={"#"}>
            <b>{productitems?.[0]?.navbar?.[0]?.title}</b>
          </StyledLink>
          <StyledLink1 href={"#"}>
            {productitems?.[0]?.navbar?.[1]?.title}
          </StyledLink1>
          <StyledLink1 href={"#"}>
            {productitems?.[0]?.navbar?.[2]?.title}
          </StyledLink1>
          <StyledLink1 href={"#"}>
            {productitems?.[0]?.navbar?.[3]?.title}
          </StyledLink1>
          <StyledButton
            variant="contained"
            bgcolor={filterButton}
            textcolor={filterText}
          >
            <FilterAltIcon />

            {productitems?.[0]?.filterbutton?.[0]?.title}
          </StyledButton>
        </BoxStyled>
        <CommonDiv>
          <FirstDiv>
            <CustomCard>
              <CardContent>
                <Link href="/productDetails/1">
                  {/* <img
                    src={
                      api +
                      productitems?.[0]?.cardimage?.[0]?.image?.data?.[0]
                        ?.attributes?.url
                    }
                    alt="Brand 1"
                    style={{ width: "95%", marginBottom: "10px" }}
                  /> */}
                  Pants
                </Link>
                <DetailDiv bgcolor={hoverBg}>
                  <FavoriteIcon />
                  <div style={{ position: "relative", left: "20px" }}>
                    <SearchIcon />
                  </div>
                  <TypographyIcon href="#" textcolor={hoverText}>
                    <ShoppingBagBtnIconStyled />{" "}
                    {productitems?.[0]?.cards?.[0].link}
                  </TypographyIcon>
                </DetailDiv>
                <StyledTypography variant="h6">
                  {productitems?.[0]?.cards?.[0]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography
                    variant="body2"
                    style={{ color: "rgba(0, 0, 0, 0.5)" }}
                  >
                    {productitems?.[0]?.cards?.[0]?.content}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginRight: "20px" }}
                    style={{ fontWeight: "bold" }}
                  >
                    {productitems?.[0]?.cards?.[0].prize}
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <Link href="/productDetails/2">
                  {/* <img
                    src={
                      api +
                      productitems?.[0]?.cardimage?.[1]?.image?.data?.[0]
                        ?.attributes?.url
                    }
                    alt="Brand 2"
                    style={{
                      width: "95%",
                      marginBottom: "10px",
                      position: "relative",
                    }}
                  /> */}
                  bags
                </Link>
                <DetailDiv bgcolor={hoverBg}>
                  <FavoriteIcon />
                  <div style={{ position: "relative", left: "20px" }}>
                    <SearchIcon />
                  </div>
                  <TypographyIcon href="#" textcolor={hoverText}>
                    <ShoppingBagBtnIconStyled />

                    {productitems?.[0]?.cards?.[0].link}
                  </TypographyIcon>
                </DetailDiv>
                <StyledTypography variant="h6">
                  {productitems?.[0]?.cards?.[1]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography
                    variant="body2"
                    style={{ color: "rgba(0, 0, 0, 0.5)" }}
                  >
                    {productitems?.[0]?.cards?.[1]?.content}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginRight: "30px" }}
                    style={{ fontWeight: "bold" }}
                  >
                    {productitems?.[0]?.cards?.[1]?.prize}
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <Link href="/productDetails/3">
                  {/* <img
                    src={
                      api +
                      productitems?.[0]?.cardimage?.[2]?.image?.data?.[0]
                        ?.attributes?.url
                    }
                    alt="Brand 3"
                    style={{
                      width: "95%",
                      marginBottom: "10px",
                      position: "relative",
                    }}
                  /> */}
                  scraf
                </Link>
                <DetailDiv bgcolor={hoverBg}>
                  <FavoriteIcon />
                  <div style={{ position: "relative", left: "20px" }}>
                    <SearchIcon />
                  </div>
                  <TypographyIcon href="#" textcolor={hoverText}>
                    <ShoppingBagBtnIconStyled />{" "}
                    {productitems?.[0]?.cards?.[0]?.link}
                  </TypographyIcon>
                </DetailDiv>
                <StyledTypography variant="h6">
                  {productitems?.[0]?.cards?.[2]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography
                    variant="body2"
                    style={{ color: "rgba(0, 0, 0, 0.5)" }}
                  >
                    {productitems?.[0]?.cards?.[2]?.content}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginRight: "40px" }}
                    style={{ fontWeight: "bold" }}
                  >
                    {productitems?.[0]?.cards?.[2]?.prize}
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <Link href="/productDetails/dress">
                  <img
                    src={
                      api +
                      productitems?.[0]?.cardimage?.[3]?.image?.data?.[0]
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
                    {productitems?.[0]?.cards?.[0].link}
                  </TypographyIcon>
                </DetailDiv>
                <SaleTypography> SALE</SaleTypography>
                <StyledTypography variant="h6">
                  {productitems?.[0]?.cards?.[3]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography
                    variant="body2"
                    style={{ color: "rgba(0, 0, 0, 0.5)" }}
                  >
                    {productitems?.[0]?.cards?.[3]?.content}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginRight: "55px" }}
                    style={{ fontWeight: "bold" }}
                  >
                    {productitems?.[0]?.cards?.[3]?.prize}
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>
          </FirstDiv>

          <SecDiv>
            <CustomCard>
              <CardContent>
                <Link href="/productDetails/greentop">
                  <img
                    src={
                      api +
                      productitems?.[0]?.cardimage?.[4]?.image?.data?.[0]
                        ?.attributes?.url
                    }
                    alt="Brand 5"
                    style={{ width: "95%", marginBottom: "10px" }}
                  />
                </Link>
                <DetailDiv bgcolor={hoverBg}>
                  <FavoriteIcon />
                  <div style={{ position: "relative", left: "20px" }}>
                    <SearchIcon />
                  </div>
                  <TypographyIcon href="#" textcolor={hoverText}>
                    <ShoppingBagBtnIconStyled />{" "}
                    {productitems?.[0]?.cards?.[0].link}
                  </TypographyIcon>
                </DetailDiv>
                <HotTypography> HOT </HotTypography>
                <StyledTypography variant="h6">
                  {productitems?.[0]?.cards?.[4]?.title}
                </StyledTypography>
                <ProductContent>
                  <Typography
                    variant="body2"
                    style={{ color: "rgba(0, 0, 0, 0.5)" }}
                  >
                    {productitems?.[0]?.cards?.[4]?.content}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ marginRight: "20px" }}
                    style={{ fontWeight: "bold" }}
                  >
                    {productitems?.[0]?.cards?.[4]?.prize}
                  </Typography>
                </ProductContent>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <Link href="/productDetails/shoe">
                  <img
                    src={
                      api +
                      productitems?.[0]?.cardimage?.[5]?.image?.data?.[0]
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
                    {productitems?.[0]?.cards?.[0].link}
                  </TypographyIcon>
                </DetailDiv>
                <TypographySale> SALE</TypographySale>
                <div style={{ position: "relative" }}>
                  <StyledTypography variant="h6">
                    {productitems?.[0]?.cards?.[5]?.title}
                  </StyledTypography>
                  <ProductContent>
                    <Typography
                      variant="body2"
                      style={{ color: "rgba(0, 0, 0, 0.5)" }}
                    >
                      {productitems?.[0]?.cards?.[5]?.content}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ marginRight: "30px" }}
                      style={{ fontWeight: "bold" }}
                    >
                      {productitems?.[0]?.cards?.[5]?.prize}
                    </Typography>
                  </ProductContent>
                </div>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <Link href="/productDetails/raple">
                  <img
                    src={
                      api +
                      productitems?.[0]?.cardimage?.[6]?.image?.data?.[0]
                        ?.attributes?.url
                    }
                    alt="Brand 7"
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
                    {productitems?.[0]?.cards?.[0].link}
                  </TypographyIcon>
                </DetailDiv>
                <div style={{ position: "relative" }}>
                  <StyledTypography variant="h6">
                    {productitems?.[0]?.cards?.[6]?.title}
                  </StyledTypography>
                  <ProductContent>
                    <Typography
                      variant="body2"
                      style={{ color: "rgba(0, 0, 0, 0.5)" }}
                    >
                      {productitems?.[0]?.cards?.[6]?.content}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ marginRight: "40px" }}
                      style={{ fontWeight: "bold" }}
                    >
                      {productitems?.[0]?.cards?.[6]?.prize}
                    </Typography>
                  </ProductContent>
                </div>
              </CardContent>
            </CustomCard>

            <CustomCard>
              <CardContent>
                <Link href="/productDetails/glass">
                  <img
                    src={
                      api +
                      productitems?.[0]?.cardimage?.[7]?.image?.data?.[0]
                        ?.attributes?.url
                    }
                    alt="Brand 8"
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
                    {productitems?.[0]?.cards?.[0].link}
                  </TypographyIcon>
                </DetailDiv>
                <div style={{ position: "relative" }}>
                  <StyledTypography variant="h3">
                    {productitems?.[0]?.cards?.[7]?.title}
                  </StyledTypography>
                  <ProductContent>
                    <Typography
                      variant="body2"
                      style={{ color: "rgba(0, 0, 0, 0.5)" }}
                    >
                      {productitems?.[0]?.cards?.[7]?.content}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ marginRight: "20px" }}
                      style={{ fontWeight: "bold" }}
                    >
                      {productitems?.[0]?.cards?.[7]?.prize}
                    </Typography>
                  </ProductContent>
                </div>
              </CardContent>
            </CustomCard>
          </SecDiv>
        </CommonDiv>
      </Box>
    </BoxContainer>
  );
};

export default Products;
