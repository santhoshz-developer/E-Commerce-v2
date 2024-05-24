import { CardContent } from "@mui/material";
import { api } from "@/service/backend-api";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";

import {
  BoxContainer,
  BoxStyled,
  CommonDiv,
  CustomCard,
  DetailDiv,
  GridContainer,
  HotTypography,
  ImageStyled,
  ProductContent,
  ProductNameTypography,
  RateTypography,
  SaleTypography,
  SearchIconBox,
  ShoppingBagBtnIconStyled,
  StyledButton,
  StyledLink,
  StyledLink1,
  StyledTypography,
  TopTypography,
  TypographyIcon,
} from "./Product.styled";
import { Card, NavbarItem } from "@/page-component/type";

const Products = (props: any) => {
  const productitems = props;

  const hoverBg =
    productitems?.[0]?.cards?.[0]?.color?.hover?.[0]?.backgroundColor;
  const hoverText = productitems?.[0]?.cards?.[0]?.color?.hover?.[0]?.color;

  const ProductNavbar = () => {
    const navbarItems = productitems?.[0]?.navbar || [];
    const filterButton = productitems?.[0]?.filterbutton?.[0];
    return (
      <BoxStyled>
        {navbarItems.map((item: NavbarItem, index: number) =>
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
        {filterButton && (
          <StyledButton
            variant="contained"
            bgcolor={filterButton?.color?.button?.[0]?.backgroundColor}
            textcolor={filterButton?.textcolor}
          >
            <FilterAltIcon />
            {filterButton?.title}
          </StyledButton>
        )}
      </BoxStyled>
    );
  };

  const renderCardImage = (cards: Card, productData: any, index: number) => {
    const cardImages = productData?.cardimage || [];
    return (
      <Link href={`/productDetails/${cards.id || index + 1}` || "#"}>
        <ImageStyled
          src={`${api}${cardImages?.[index]?.image?.data?.[0]?.attributes?.url}`}
          alt={`Brand ${index + 1}`}
        />
      </Link>
    );
  };

  const renderHoverDetails = (card: Card) => {
    return (
      <DetailDiv bgcolor={hoverBg}  className="hover-card">
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

  const renderTags = (index: number) => {
    return (
      <>
        {index === 3 && <SaleTypography>SALE</SaleTypography>}
        {index === 4 && <HotTypography>HOT</HotTypography>}
        {index === 5 && <SaleTypography>SALE</SaleTypography>}
      </>
    );
  };

  const renderProductContent = (card:Card) => {
    return (
      <ProductContent>
        <ProductNameTypography variant="body2">
          {card.content}
        </ProductNameTypography>
        <RateTypography variant="body2">{card.prize}</RateTypography>
      </ProductContent>
    );
  };
  
  const ProductFirstRow = () => {
    const productData = productitems?.[0];
    const cards = productData?.cards || [];

    return (
      <GridContainer>
        {cards.map((card: Card, index: number) => (
          <CustomCard key={index}>
            <CardContent>
              {renderCardImage(card, productData, index)}
              {renderHoverDetails(card)}
              {renderTags(index)}
              <StyledTypography variant="h6">{card.title}</StyledTypography>
              {renderProductContent(card)}
            </CardContent>
          </CustomCard>
        ))}
      </GridContainer>
    );
  };

  return (
    <BoxContainer>
      <TopTypography variant="h4">{productitems?.[0]?.title}</TopTypography>
      {ProductNavbar()}
      <CommonDiv>{ProductFirstRow()}</CommonDiv>
    </BoxContainer>
  );
};

export default Products;
