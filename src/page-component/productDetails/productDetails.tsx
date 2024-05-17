import React, { useEffect, useState } from "react";
import ListIcon from "@mui/icons-material/List";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import {
  BoxContainer,
  BrandTypography,
  DivCount,
  ImageStyled1,
  ImageStyled2,
  ImageStyled3,
  ImageStyled4,
  LgTypography,
  StyledDiv,
  TypographyLi,
  TypographyUl,
  TypographyContent,
  CountTypo1,
  CountTypo3,
  CountTypo2,
  CountTypo6,
  CountTypo5,
  CountTypo4,
  DivCount1,
  DivAmount,
  AmtTypo,
  ButtonDiv,
  ButtonDiv1,
  ButtonDiv2,
  ButtonDiv3,
  ButtonDiv4,
  ButtonDiv5,
  Typography1,
  Typography3,
  Typography2,
  BoxDetails1,
  DetailTypo,
  DetailTypo1,
  StyledBox,
  StyledBox1,
  BrandTypography1,
  BrandTypography2,
  DetailTypo2,
  DetailTypo3,
  DetailTypo4,
  SetIcon,
  BreadcrumbsStyle,
  BoxStyled,
  CardButton,
  CardButton1,
  CardDiv,
  CardTypo,
  CardTypo1,
  CardTypo2,
  CardTypo3,
  CarouselBox,
  StyleTypo,
  StyleTypo1,
  StyleTypo2,
  TypoProducts,
  TypographyAmt,
  TypographyAmt1,
} from "./ProductDetails.styled";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useQuery } from "@apollo/client";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { api } from "@/service/backend-api";
import { GET_PRODUCT } from "@/service/query";
import { useParams } from "next/navigation";

const ProductDetails = ({ id }: any) => {
  console.log('ck',id);
  
  const [products, setProducts] = useState([]) as any;

  const productData = products?.data?.attributes;

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const {
    loading,
    error,
    data: productDatass,
  } = useQuery(GET_PRODUCT, {
    variables: { slug: id },
  });

  console.log("apicall", productDatass);

  const buttonBg =
    productData?.leftdetail?.[0]?.buy?.[0]?.color?.button?.[0]?.color
      ?.background;
  const buttonText =
    productData?.leftdetail?.[0]?.buy?.[0]?.color?.button?.[0]?.color?.text;

  const cardButton =
    productData?.cards?.[0]?.cardbutton?.[0]?.color?.button?.[0]?.color
      ?.background;
  const cardText =
    productData?.cards?.[0]?.cardbutton?.[0]?.color?.button?.[0]?.color?.text;

  return (
    <>
      <SetIcon>
        <Typography sx={{ width: "max-content" }}>
          <ListIcon
            sx={{
              position: "relative",
              top: "5px",
              fontSize: "20px",
              marginRight: "8px",
            }}
          />
          {productData?.nav}
          <KeyboardArrowDownIcon
            sx={{
              position: "relative",
              top: "5px",
              fontSize: "20px",
              marginLeft: "8px",
            }}
          />
        </Typography>
      </SetIcon>
      <BoxContainer>
        <TypographyContent variant="h4">
          {productData?.breadcrum?.[0]?.title}
        </TypographyContent>
        <BreadcrumbsStyle>
          <Link
            href="/"
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "13px", sm: "15px", md: "18px" },
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {productData?.breadcrum?.[0]?.links?.[0]?.link}
          </Link>
          <Link
            href="/"
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "13px", sm: "15px", md: "18px" },
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {productData?.breadcrum?.[0]?.links?.[1]?.link}
          </Link>
          <Link
            href="#"
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "13px", sm: "15px", md: "18px" },
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {productData?.breadcrum?.[0]?.links?.[2]?.link}
          </Link>
        </BreadcrumbsStyle>
      </BoxContainer>
      <StyledDiv>
        <StyledBox>
          <ImageStyled1>
            <img
              src={
                api +
                productData?.rightdetail?.[0]?.sideimage?.[0]?.image?.data?.[0]
                  ?.attributes?.url
              }
              alt={"No img"}
              style={{ height: "89px", width: "108px", marginLeft: "20px" }}
            />
          </ImageStyled1>
          <ImageStyled2>
            <img
              src={
                productData?.rightdetail?.[0]?.sideimage?.[1]?.image?.data?.[0]
                  ?.attributes?.url
              }
              height="89px"
              width="108px"
            />
          </ImageStyled2>
          <ImageStyled3>
            <img
              src={
                productData?.rightdetail?.[0]?.sideimage?.[2]?.image?.data?.[0]
                  ?.attributes?.url
              }
              height="89px"
              width="108px"
            />
          </ImageStyled3>
          <ImageStyled4>
            <img
              src={
                productData?.rightdetail?.[0]?.sideimage?.[3]?.image?.data?.[0]
                  ?.attributes?.url
              }
              height="89px"
              width="108px"
            />
          </ImageStyled4>
        </StyledBox>
        <StyledBox1>
          <div>
            <img
              src={
                productData?.rightdetail?.[0]?.image?.data?.[0]?.attributes?.url
                  ? api +
                    productData?.rightdetail?.[0]?.image?.data?.[0]?.attributes
                      ?.url
                  : ""
              }
              alt={"No image"}
            />
          </div>
          <Typography
            sx={{
              color: "#6F6F6F",
              fontSize: "13px",
              marginTop: { xs: "20px", sm: "30px", md: "140px" },
            }}
          >
            {productData?.rightdetail?.[0]?.content}
          </Typography>
        </StyledBox1>
        <Box
          sx={{
            marginLeft: { xs: "0px", md: "10px", lg: "30px" },
            marginTop: "10px",
          }}
        >
          <BrandTypography>
            <b
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
                color: "#191919",
              }}
            >
              {productData?.leftdetail?.[0]?.detail?.[0]?.content1}
            </b>
            {productData?.leftdetail?.[0]?.detail?.[0]?.content2}
          </BrandTypography>
          <BrandTypography1>
            <b
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
                color: "#191919",
              }}
            >
              {productData?.leftdetail?.[0]?.detail?.[1]?.content1}
            </b>
            {productData?.leftdetail?.[0]?.detail?.[1]?.content2}
          </BrandTypography1>
          <BrandTypography2>
            <b
              style={{
                fontFamily: "Inter",
                fontWeight: "500",
                color: "#191919",
              }}
            >
              {productData?.leftdetail?.[0]?.detail?.[2]?.content1}
            </b>
            {productData?.leftdetail?.[0]?.detail?.[2]?.content2}
          </BrandTypography2>
          <LgTypography>{productData?.leftdetail?.[0]?.name}</LgTypography>
          <div style={{ marginTop: "10px" }}>
            <img src="/img/Star 1.png" alt="star" height="20px" width="20px" />
            <img
              src="/img/Star 1.png"
              alt="star"
              height="20px"
              width="20px"
              style={{ marginLeft: "5px" }}
            />
            <img
              src="/img/Star 1.png"
              alt="star"
              height="20px"
              width="20px"
              style={{ marginLeft: "5px" }}
            />
            <img
              src="/img/Star 1.png"
              alt="star"
              height="20px"
              width="20px"
              style={{ marginLeft: "5px" }}
            />
            <img
              src="/img/Star 5.png"
              alt="star"
              height="20px"
              width="20px"
              style={{ marginLeft: "5px" }}
            />
          </div>
          <TypographyUl>
            <TypographyLi>
              {productData?.leftdetail?.[0]?.list?.[0]?.content1}
            </TypographyLi>
            <TypographyLi>
              {productData?.leftdetail?.[0]?.list?.[1]?.content1}
            </TypographyLi>
            <TypographyLi>
              {productData?.leftdetail?.[0]?.list?.[2]?.content1}
            </TypographyLi>
            <TypographyLi>
              {productData?.leftdetail?.[0]?.list?.[3]?.content1}
            </TypographyLi>
            <TypographyLi>
              {productData?.leftdetail?.[0]?.list?.[4]?.content1}
            </TypographyLi>
          </TypographyUl>
          <DivCount>
            <CountTypo1>
              {productData?.leftdetail?.[0]?.multiplesize?.[0]?.size}
            </CountTypo1>
            <CountTypo2>
              {productData?.leftdetail?.[0]?.multiplesize?.[1]?.size}
            </CountTypo2>
            <CountTypo3>
              {productData?.leftdetail?.[0]?.multiplesize?.[2]?.size}
            </CountTypo3>
          </DivCount>
          <DivCount1>
            <CountTypo4>
              {productData?.leftdetail?.[0]?.multiplesize?.[3]?.size}
            </CountTypo4>
            <CountTypo5>
              {productData?.leftdetail?.[0]?.multiplesize?.[4]?.size}
            </CountTypo5>
            <CountTypo6>
              {productData?.leftdetail?.[0]?.multiplesize?.[5]?.size}
            </CountTypo6>
          </DivCount1>
          <DivAmount>{productData?.leftdetail?.[0]?.taxname}</DivAmount>
          <AmtTypo>{productData?.leftdetail?.[0]?.prize2}</AmtTypo>
          <ButtonDiv>
            <ButtonDiv1 onClick={decrement}>-</ButtonDiv1>
            <ButtonDiv2>{count}</ButtonDiv2>
            <ButtonDiv3 onClick={increment}>+</ButtonDiv3>
            <ButtonDiv4 bgcolor={buttonBg} textcolor={buttonText}>
              {productData?.leftdetail?.[0]?.buy?.[0]?.title}
            </ButtonDiv4>
            <ButtonDiv5>
              {productData?.leftdetail?.[0]?.buy?.[1]?.title}
            </ButtonDiv5>
          </ButtonDiv>
        </Box>
      </StyledDiv>
      <Tabs>
        <TabList
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            marginTop: "60px",
            listStyle: "none",
          }}
        >
          <Typography1>
            {productData?.description?.[0]?.links?.[0]?.link}
          </Typography1>
          <Typography2>
            {productData?.description?.[0]?.links?.[1]?.link}
          </Typography2>
          <Typography3>
            {productData?.description?.[0]?.links?.[2]?.link}
          </Typography3>
        </TabList>
        <BoxDetails1>
          <DetailTypo>{productData?.description?.[0]?.description} </DetailTypo>
          <DetailTypo1>
            {productData?.description?.[0]?.description1}
          </DetailTypo1>
          <DetailTypo2>
            {productData?.description?.[0]?.description2}
            <Link
              href="#"
              sx={{
                fontFamily: "Inter",
                fontWeight: "300",
                color: "red",
                textDecoration: "none",
                visibility: { xs: "visible", md: "hidden" },
              }}
            >
              {productData?.description?.[0]?.text}
            </Link>
          </DetailTypo2>
          <DetailTypo3>
            {productData?.description?.[0]?.description3}
          </DetailTypo3>
          <DetailTypo4>
            {productData?.description?.[0]?.description4}
            <Link
              href="#"
              style={{
                fontFamily: "Inter",
                fontWeight: "300",
                color: "red",
                textDecoration: "none",
              }}
            >
              {productData?.description?.[0]?.text}
            </Link>
          </DetailTypo4>
        </BoxDetails1>
        <BoxDetails1>
          <DetailTypo>{productData?.description?.[0]?.description} </DetailTypo>
          <DetailTypo2>
            {productData?.description?.[0]?.description2}
            <Link
              href="#"
              sx={{
                fontFamily: "Inter",
                fontWeight: "300",
                color: "red",
                textDecoration: "none",
                visibility: { xs: "visible", md: "hidden" },
              }}
            >
              {productData?.description?.[0]?.text}
            </Link>
          </DetailTypo2>
          <DetailTypo3>
            {productData?.description?.[0]?.description3}
          </DetailTypo3>
          <DetailTypo4>
            {productData?.description?.[0]?.description4}
            <Link
              href="#"
              style={{
                fontFamily: "Inter",
                fontWeight: "300",
                color: "red",
                textDecoration: "none",
              }}
            >
              {productData?.description?.[0]?.text}
            </Link>
          </DetailTypo4>
        </BoxDetails1>
        <BoxDetails1>
          <DetailTypo>{productData?.description?.[0]?.description}</DetailTypo>
          <DetailTypo1>
            {productData?.description?.[0]?.description1}
          </DetailTypo1>
          <DetailTypo2>
            {productData?.description?.[0]?.description2}
            <Link
              href="#"
              sx={{
                fontFamily: "Inter",
                fontWeight: "300",
                color: "red",
                textDecoration: "none",
                visibility: { xs: "visible", md: "hidden" },
              }}
            >
              {productData?.description?.[0]?.text}
            </Link>
          </DetailTypo2>
          <DetailTypo4>
            {productData?.description?.[0]?.description4}
            <Link
              href="#"
              style={{
                fontFamily: "Inter",
                fontWeight: "300",
                color: "red",
                textDecoration: "none",
              }}
            >
              {productData?.description?.[0]?.text}
            </Link>
          </DetailTypo4>
        </BoxDetails1>
      </Tabs>

      {/* Bag Relatated */}

      <BoxStyled>
        <TypoProducts variant="h4">{productData?.title}</TypoProducts>

        <CarouselBox>
          <Card
            sx={{
              width: { xs: "232px", md: "300px" },
              height: { xs: "310px", sm: "361px" },
              background: "#F1F1F1",
              boxShadow: "none",
            }}
          >
            <CardDiv>
              <CardTypo>{productData?.cards?.[0]?.text}</CardTypo>
              <img
                src={
                  productData?.cards?.[0]?.subimage?.data?.[0]?.attributes?.url
                }
              />
            </CardDiv>
            <CardMedia
              sx={{
                height: { xs: "136px", sm: "170px", md: "200px" },
                width: { xs: "132px", sm: "190px", md: "200px" },
                marginLeft: { xs: "20px", sm: "12px", md: "10px", lg: "40px" },
                marginTop: { xs: "20px", md: "10px" },
              }}
              image={productData?.cards?.[0]?.image?.data?.[0]?.attributes?.url}
            />
            <CardContent>
              <CardButton bgcolor={cardButton} textcolor={cardText}>
                <ShoppingCartOutlinedIcon
                  sx={{ color: "#6F6F6F", fontSize: "15px" }}
                />
                {productData?.cards?.[0]?.cardbutton?.[0].title}
              </CardButton>
            </CardContent>
            <StyleTypo>{productData?.cards?.[0]?.content}</StyleTypo>
            <TypographyAmt>{productData?.cards?.[0]?.prize1}</TypographyAmt>
          </Card>
          <Card
            sx={{
              width: { xs: "232px", md: "300px" },
              height: { xs: "310px", sm: "361px" },
              background: "#F1F1F1",
              boxShadow: "none",
            }}
          >
            <CardDiv>
              <CardTypo1>{productData?.cards?.[1]?.text}</CardTypo1>
              <img
                src={
                  productData?.cards?.[1]?.subimage?.data?.[0]?.attributes?.url
                }
                alt="No img"
              />
            </CardDiv>
            <CardMedia
              sx={{
                height: { xs: "136px", sm: "170px", md: "200px" },
                width: { xs: "132px", sm: "190px", md: "200px" },
                marginLeft: { xs: "20px", sm: "12px", md: "10px", lg: "40px" },
                marginTop: { xs: "20px", md: "10px" },
              }}
              image={productData?.cards?.[1]?.image?.data?.[0]?.attributes?.url}
            />
            <CardContent>
              <CardButton bgcolor={cardButton} textcolor={cardText}>
                <ShoppingCartOutlinedIcon
                  sx={{ color: "#6F6F6F", fontSize: "15px" }}
                />
                {productData?.cards?.[1]?.cardbutton?.[0].title}
              </CardButton>
            </CardContent>
            <StyleTypo>{productData?.cards?.[1]?.content}</StyleTypo>
            <TypographyAmt>{productData?.cards?.[1]?.prize1}</TypographyAmt>
          </Card>
          <Card
            sx={{
              width: { sm: "232px", md: "300px" },
              height: { xs: "310px", sm: "361px" },
              background: "#F1F1F1",
              boxShadow: "none",
              display: { xs: "none", sm: "block" },
            }}
          >
            <CardDiv>
              <CardTypo2>{productData?.cards?.[2]?.text}</CardTypo2>
              <img
                src={
                  productData?.cards?.[2]?.subimage?.data?.[0]?.attributes?.url
                }
              />
            </CardDiv>
            <CardMedia
              sx={{
                height: { xs: "136px", sm: "170px", md: "200px" },
                width: { xs: "132px", sm: "190px", md: "200px" },
                marginLeft: { xs: "20px", sm: "12px", md: "10px", lg: "40px" },
                marginTop: { xs: "20px", md: "10px" },
              }}
              image={productData?.cards?.[2]?.image?.data?.[0]?.attributes?.url}
            />
            <CardContent>
              <CardButton bgcolor={cardButton} textcolor={cardText}>
                <ShoppingCartOutlinedIcon
                  sx={{ color: "#6F6F6F", fontSize: "15px" }}
                />
                {productData?.cards?.[2]?.cardbutton?.[0].title}
              </CardButton>
            </CardContent>
            <StyleTypo1>{productData?.cards?.[2]?.content}</StyleTypo1>
            <TypographyAmt1>{productData?.cards?.[2]?.prize1}</TypographyAmt1>
          </Card>
          <Card
            sx={{
              width: "300px",
              height: "361px",
              background: "#F1F1F1",
              boxShadow: "none",
              display: { xs: "none", md: "block" },
            }}
          >
            <CardDiv>
              <CardTypo3>{productData?.cards?.[3]?.text}</CardTypo3>
              <img
                src={
                  productData?.cards?.[3]?.subimage?.data?.[0]?.attributes?.url
                }
              />
            </CardDiv>
            <CardMedia
              sx={{
                height: "200px",
                width: "200px",
                marginLeft: { xs: "20px", sm: "6px", md: "10px", lg: "40px" },
                marginTop: "10px",
              }}
              image={productData?.cards?.[3]?.image?.data?.[0]?.attributes?.url}
            />
            <CardContent>
              <CardButton1>
                <ShoppingCartOutlinedIcon
                  sx={{ color: "#E73C17", fontSize: "15px" }}
                />
                {productData?.cards?.[3]?.cardbutton?.[0].title}
              </CardButton1>
            </CardContent>
            <StyleTypo2>{productData?.cards?.[3]?.content}</StyleTypo2>
            <TypographyAmt1>{productData?.cards?.[3]?.prize1}</TypographyAmt1>
          </Card>
        </CarouselBox>
      </BoxStyled>
    </>
  );
};

export default ProductDetails;
