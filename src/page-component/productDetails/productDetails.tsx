import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
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
  DivAmount,
  AmtTypo,
  ButtonDiv,
  ButtonDiv1,
  ButtonDiv2,
  ButtonDiv3,
  ButtonDiv4,
  ButtonDiv5,
  Typography1,
  BoxDetails1,
  DetailTypo,
  DetailTypo1,
  StyledBox,
  StyledBox1,
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
  TypoText,
  IconList,
  IconKeyDown,
  DetailLink,
  RightTypo,
  RightBox,
  StarImg,
  TapListBox,
  DescriptionLink,
  ShoppingIcon,
  ShoppingIcon1,
} from "./ProductDetails.styled";

import { useQuery } from "@apollo/client";
import { Tabs } from "react-tabs";
import { api } from "@/service/backend-api";
import { GET_ID_PRODUCT, GET_PRODUCT_HEADER } from "@/service/query";
import { ProductDetailsProps } from "../type";
        
const ProductDetails = ({ productId }: ProductDetailsProps) => {
  console.log("idck", productId);

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const {
    data: productQuery,
  } = useQuery(GET_ID_PRODUCT, {
    variables: { id: productId },
  });

  const { data: headers } = useQuery(GET_PRODUCT_HEADER);
  const headerData = headers?.productheaders?.data?.[0]?.attributes;

  const productData = productQuery?.product?.data?.attributes;

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
  console.log('img', productData?.rightdetail?.[0]?.sideimage?.[0]?.image
    ?.data?.[0]?.attributes?.url);

  const navbread = () => {
    return (
      <>
        <SetIcon>
          <TypoText>
            <IconList />
            {headerData?.categories?.[0]?.title}
            <IconKeyDown />
          </TypoText>
        </SetIcon>
        <BoxContainer>
          <TypographyContent variant="h4">
            {headerData?.header?.[0]?.title}
          </TypographyContent>
          <BreadcrumbsStyle>
            {headerData?.header?.[0]?.breadcrum?.map((item: any, index: any) => (
              <DetailLink href="/" key={index}>
                {item.title}
              </DetailLink>
            ))}
          </BreadcrumbsStyle>
        </BoxContainer>
      </>
    )
  }


  const productdetail = () => {

    const sidecards = productData?.rightdetail?.[0]?.sideimage?.[0]?.image?.data || [] ;
    const Content = productData?.leftdetail?.[0]?.detail || [];
    
    return (
      <StyledDiv>
        <StyledBox>
            <ImageStyled1>
              {sidecards.map((item: any, index: any) => (
              <img key={index}
                src={item?.attributes?.url ? api + item?.attributes?.url : item?.attributes?.url}
                alt={"No img"}
              />
          ))}
          </ImageStyled1>
          <ImageStyled2>
            <img
              src={
                productData?.rightdetail?.[0]?.sideimage?.[1]?.image?.data?.[0]
                  ?.attributes?.url
              }
            />
          </ImageStyled2>
          <ImageStyled3>
            <img
              src={
                productData?.rightdetail?.[0]?.sideimage?.[2]?.image?.data?.[0]
                  ?.attributes?.url
              }
            />
          </ImageStyled3>
          <ImageStyled4>
            <img
              src={
                productData?.rightdetail?.[0]?.sideimage?.[3]?.image?.data?.[0]
                  ?.attributes?.url
              }
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
          <RightTypo>
            {productData?.rightdetail?.[0]?.content}
          </RightTypo>
        </StyledBox1>
        <RightBox>
          <BrandTypography>
          {Content.map((item:any,index:any) => (
            <Box key={index}>
            <b>
              {item.content1}
            </b>
             {item.content2}
            </Box>
          ))}
          </BrandTypography>
          <LgTypography>{productData?.leftdetail?.[0]?.name}</LgTypography>
          <StarImg>
            <img src="/img/Star 1.png" alt="star" />
            <img src="/img/Star 1.png" alt="star" />
            <img src="/img/Star 1.png" alt="star" />
            <img src="/img/Star 1.png" alt="star" />
            <img src="/img/Star 5.png" alt="star" />
          </StarImg>
          <TypographyUl>
            {productData?.leftdetail?.[0]?.list?.map((item: any, index: any) => (
              <TypographyLi key={index}>
                {item.content1}
              </TypographyLi>
            ))}
          </TypographyUl>
          <DivCount>
            {productData?.leftdetail?.[0]?.multiplesize?.map((item: any, index: any) => (
              <CountTypo1 key={index}>
                {item.size}
              </CountTypo1>
            ))}
          </DivCount>
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
        </RightBox>
      </StyledDiv>
    )
  }

  const producttabs = () => {
    const link = productData?.description?.[0]?.links || [];
    return (
      <Tabs>
        <TapListBox>
          {link.map((item:any,index:any) => (
            <Typography1 key={index}>
              {item.link}
            </Typography1>
          ))}
        </TapListBox>
        <BoxDetails1>
          <DetailTypo>{productData?.description?.[0]?.description} </DetailTypo>
          <DetailTypo1>
            {productData?.description?.[0]?.description1}
          </DetailTypo1>
          <DetailTypo2>
            {productData?.description?.[0]?.description2}
            <DescriptionLink href="#">
              {productData?.description?.[0]?.text}
            </DescriptionLink>
          </DetailTypo2>
          <DetailTypo3>
            {productData?.description?.[0]?.description3}
          </DetailTypo3>
          <DetailTypo4>
            {productData?.description?.[0]?.description4}
            <DescriptionLink href="#">
              {productData?.description?.[0]?.text}
            </DescriptionLink>
          </DetailTypo4>
        </BoxDetails1>
        <BoxDetails1>
          <DetailTypo>{productData?.description?.[0]?.description} </DetailTypo>
          <DetailTypo2>
            {productData?.description?.[0]?.description2}
            <DescriptionLink href="#">
              {productData?.description?.[0]?.text}
            </DescriptionLink>
          </DetailTypo2>
          <DetailTypo3>
            {productData?.description?.[0]?.description3}
          </DetailTypo3>
          <DetailTypo4>
            {productData?.description?.[0]?.description4}
            <DescriptionLink href="#">
              {productData?.description?.[0]?.text}
            </DescriptionLink>
          </DetailTypo4>
        </BoxDetails1>
        <BoxDetails1>
          <DetailTypo>{productData?.description?.[0]?.description}</DetailTypo>
          <DetailTypo1>
            {productData?.description?.[0]?.description1}
          </DetailTypo1>
          <DetailTypo2>
            {productData?.description?.[0]?.description2}
            <DescriptionLink href="#">
              {productData?.description?.[0]?.text}
            </DescriptionLink>
          </DetailTypo2>
          <DetailTypo4>
            {productData?.description?.[0]?.description4}
            <DescriptionLink href="#">
              {productData?.description?.[0]?.text}
            </DescriptionLink>
          </DetailTypo4>
        </BoxDetails1>
      </Tabs>
    )
  }

  const productrelated = () => {
    return (
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
                <ShoppingIcon />
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
                <ShoppingIcon />
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
                <ShoppingIcon />
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
                <ShoppingIcon1 />
                {productData?.cards?.[3]?.cardbutton?.[0].title}
              </CardButton1>
            </CardContent>
            <StyleTypo2>{productData?.cards?.[3]?.content}</StyleTypo2>
            <TypographyAmt1>{productData?.cards?.[3]?.prize1}</TypographyAmt1>
          </Card>
        </CarouselBox>
      </BoxStyled>
    )
  }

  return (
    <>
      {navbread()}
      {/* productData body */}
      {productdetail()}
      {producttabs()}
      {/* Bag Relatated */}
      {productrelated()}
    </>
  );
};

export default ProductDetails;
