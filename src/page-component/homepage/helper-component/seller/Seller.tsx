import { Box, CardContent, Link} from "@mui/material";
import {
  BoxContainer,
  CustomCard,
  DetailDiv,
  HotTypography,
  ImageStyled,
  ImgDiv,
  ProductContent,
  ProductTypography,
  RateTypography,
  RowDiv,
  SaleTypography,
  SearchIconBox,
  ShoppingBagBtnIconStyled,
  StyledButton,
  StyledLink,
  StyledLink1,
  StyledTypography,
  TopTypography,
  TypographyIcon,
} from "./Seller.styled";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { api } from "@/service/backend-api";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Cards, NavbarItem } from "@/page-component/type";
import { useState } from "react";


const Seller = (props: any) => {
  const silderproduct = props;

  const sellerButton =
    silderproduct?.[0]?.sellerbutton?.[0]?.color?.button?.[0]?.backgroundColor;
  const sellerText =
    silderproduct?.[0]?.sellerbutton?.[0]?.color?.button?.[0]?.color;
  const hoverBg =
    silderproduct?.[0]?.cards?.[0]?.color?.hover?.[0]?.backgroundColor;
  const hoverText = silderproduct?.[0]?.cards?.[0]?.color?.hover?.[0]?.color;

  const renderNav = () => {
    return (
      <Box sx={{ marginLeft: "20px", marginTop: "25px" }}>
        {silderproduct?.[0]?.navbar?.map((item: NavbarItem, index: number) =>
          index === 0 ? (
            <StyledLink key={index} href="#">
              <b>{item.title}</b>
            </StyledLink>
          ) : (
            <StyledLink1 key={index} href="#">
              {item.title}
            </StyledLink1>
          )
        )}

        <StyledButton
          variant="contained"
          bgcolor={sellerButton}
          textcolor={sellerText}
        >
          <FilterAltIcon />
          {silderproduct?.[0]?.sellerbutton?.[0]?.title}
        </StyledButton>
      </Box>
    );
  };

  const renderHoverDetails = (card: Cards) => {
    return (
      <DetailDiv bgcolor={hoverBg} className="hover-cards">
        <FavoriteIcon />
        <SearchIconBox>
          <SearchIcon />
        </SearchIconBox>
        <TypographyIcon href="#" textcolor={hoverText}>
          <ShoppingBagBtnIconStyled /> 
          {card.link}
        </TypographyIcon>
      </DetailDiv>
    );
  };

  const renderImageLink = (card: Cards, index: number) => {
    return (
      <Link href={card.link}  key={index + 1}>
        {silderproduct?.[0]?.cardimage?.[index]?.image?.data?.[0]?.attributes
          ?.url && (
          <ImageStyled
            src={
              api +
              silderproduct[0].cardimage[index].image.data[0].attributes.url
            }
            alt={card.title}
          />
        )}
      </Link>
    );
  };

  const renderTags = (index: number) => {
    return (
      <>
        {index === 1 && <HotTypography> HOT</HotTypography>}
        {index === 3 && <SaleTypography> SALE </SaleTypography>}
      </>
    );
  };

  const renderProductContent = (card: Cards) => {
    return (
      <ProductContent>
        <ProductTypography variant="body2">{card.content}</ProductTypography>
        <RateTypography variant="body2">{card.prize}</RateTypography>
      </ProductContent>
    );
  };

  const renderImage = () => {
    return (
      <ImgDiv>
        {silderproduct?.[0]?.cards?.map((card: Cards, index: number) => (
          <CustomCard key={index}>
            <CardContent>
              {renderImageLink(card, index)}
              {renderHoverDetails(card)}
              {renderTags(index)}
              <StyledTypography variant="h6">{card.title}</StyledTypography>
              {renderProductContent(card)}
            </CardContent>
          </CustomCard>
        ))}
      </ImgDiv>
    );
  };

  return (
    <BoxContainer>
      <TopTypography variant="h4">{silderproduct?.[0]?.title}</TopTypography>
      {renderNav()}
      <RowDiv>{renderImage()}</RowDiv>
    </BoxContainer>
  );
};

export default Seller;
