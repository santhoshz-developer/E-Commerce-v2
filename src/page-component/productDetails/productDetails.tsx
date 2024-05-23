import React, { useState } from "react";
import {
  Box,
  CardContent,
} from "@mui/material";
import { Tabs } from '@mui/base/Tabs';
import {
  BoxContainer,
  BrandTypography,
  DivCount,
  LgTypography,
  StyledDiv,
  TypographyLi,
  TypographyUl,
  TypographyContent,
  DivAmount,
  AmtTypo,
  ButtonDiv,
  DetailTypo,
  StyledBox,
  BreadcrumbsStyle,
  CardButton,
  CardDiv,
  CarouselBox,
  StyleTypo,
  TypoProducts,
  TypographyAmt,
  IconList,
  IconKeyDown,
  DetailLink,
  RightBox,
  StarImg,
  TapListBox,
  DescriptionLink,
  ShoppingIcon,
  CardMui,
  MediaCard,
  Navall,
  Navchild,
  ImageBag,
  StyledBoxMain,
  CountTypo,
  ButtonCart,
  ButtonBuy,
  ButtonCount,
  BagBack,
  BagFront,
  BagInside,
  ButtonAdd,
  ButtonLess,
  TypoHead,
  DescrptionSub,
  DescrptionSec,
  DescrptionTrd,
  DescrptionFrth,
  CardCart,
  CardStock,
  CardNew,
  CardPer,
  CardHot,
  CardOffer,
  ButtonStock,
  DetailBag,
  DetailName,
  CardAmt,
  ShoppingIconRed,
  DownTypo,
  BoxPanel,
} from "./ProductDetails.styled";
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { useQuery } from "@apollo/client";
import { api } from "@/service/backend-api";
import { GET_ID_PRODUCT, GET_PRODUCT_HEADER } from "@/service/query";
import { ProductDetailsProps } from "../type";

const ProductDetails = ({ productId }: ProductDetailsProps) => {

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
        <Navall>
          <Navchild>
            <IconList />
            {headerData?.categories?.[0]?.title}
            <IconKeyDown />
          </Navchild>
        </Navall>
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

    const sidecards = productData?.rightdetail?.[0]?.sideimage?.[0]?.image?.data || [];
    const Content = productData?.leftdetail?.[0]?.detail || [];

    return (
      <StyledDiv>
        <StyledBox>
          <ImageBag>
            {sidecards.map((item: any, index: any) => (
              <img key={index}
                src={item?.attributes?.url ? api + item?.attributes?.url : item?.attributes?.url}
                alt={"No img"}
              />
            ))}
          </ImageBag>
          <BagFront>
            <img
              src={
                productData?.rightdetail?.[0]?.sideimage?.[1]?.image?.data?.[0]
                  ?.attributes?.url
              }
            />
          </BagFront>
          <BagBack>
            <img
              src={
                productData?.rightdetail?.[0]?.sideimage?.[2]?.image?.data?.[0]
                  ?.attributes?.url
              }
            />
          </BagBack>
          <BagInside>
            <img
              src={
                productData?.rightdetail?.[0]?.sideimage?.[3]?.image?.data?.[0]
                  ?.attributes?.url
              }
            />
          </BagInside>
        </StyledBox>
        <StyledBoxMain>
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
          <DownTypo>
            {productData?.rightdetail?.[0]?.content}
          </DownTypo>
        </StyledBoxMain>
        <RightBox>
          <BrandTypography>
            {Content.map((item: any, index: any) => (
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
              <CountTypo key={index}>
                {item.size}
              </CountTypo>
            ))}
          </DivCount>
          <DivAmount>{productData?.leftdetail?.[0]?.taxname}</DivAmount>
          <AmtTypo>{productData?.leftdetail?.[0]?.prize2}</AmtTypo>
          <ButtonDiv>
            <ButtonLess onClick={decrement}>-</ButtonLess>
            <ButtonCount>{count}</ButtonCount>
            <ButtonAdd onClick={increment}>+</ButtonAdd>
            <ButtonBuy bgcolor={buttonBg} textcolor={buttonText}>
              {productData?.leftdetail?.[0]?.buy?.[0]?.title}
            </ButtonBuy>
            <ButtonCart>
              {productData?.leftdetail?.[0]?.buy?.[1]?.title}
            </ButtonCart>
          </ButtonDiv>
        </RightBox>
      </StyledDiv>
    )
  }

  const producttabs = () => {
    const description = productData?.description || [];

    return (
      <Tabs defaultValue={1}>
        <TapListBox>
          <TypoHead value={1}>{productData?.description?.[0]?.links?.[0]?.link}</TypoHead>
          <TypoHead value={2}>{productData?.description?.[0]?.links?.[1]?.link}</TypoHead>
          <TypoHead value={3}>{productData?.description?.[0]?.links?.[2]?.link}</TypoHead>
        </TapListBox>
        <BoxPanel value={1}>
          <DetailTypo>{productData?.description?.[0]?.description}</DetailTypo>
          <DescrptionSub>
            {productData?.description?.[0]?.description1}
          </DescrptionSub>
          <DescrptionSec>
            {productData?.description?.[0]?.description2}
            <DescriptionLink href="#">
              {productData?.description?.[0]?.text}
            </DescriptionLink>
          </DescrptionSec>
          <DescrptionTrd>
            {productData?.description?.[0]?.description3}
          </DescrptionTrd>
          <DescrptionFrth>
            {productData?.description?.[0]?.description4}
            <DescriptionLink href="#">
              {productData?.description?.[0]?.text}
            </DescriptionLink>
          </DescrptionFrth>
        </BoxPanel>
        <BoxPanel value={2}>
          <DetailTypo>{productData?.description?.[0]?.description}</DetailTypo>
          <DescrptionSec>
            {productData?.description?.[0]?.description2}
            <DescriptionLink href="#">
              {productData?.description?.[0]?.text}
            </DescriptionLink>
          </DescrptionSec>
          <DescrptionTrd>
            {productData?.description?.[0]?.description3}
          </DescrptionTrd>
          <DescrptionFrth>
            {productData?.description?.[0]?.description4}
            <DescriptionLink href="#">
              {productData?.description?.[0]?.text}
            </DescriptionLink>
          </DescrptionFrth>
        </BoxPanel>
        <BoxPanel value={3}>
          <DetailTypo>{productData?.description?.[0]?.description}</DetailTypo>
          <DescrptionSub>
            {productData?.description?.[0]?.description1}
          </DescrptionSub>
          <DescrptionSec>
            {productData?.description?.[0]?.description2}
            <DescriptionLink href="#">
              {productData?.description?.[0]?.text}
            </DescriptionLink>
          </DescrptionSec>
          <DescrptionFrth>
            {productData?.description?.[0]?.description4}
            <DescriptionLink href="#">
              {productData?.description?.[0]?.text}
            </DescriptionLink>
          </DescrptionFrth>
        </BoxPanel>
      </Tabs>
    )
  }

  const productrelated = () => {
    return (
      <Box>
        <TypoProducts variant="h4">{productData?.title}</TypoProducts>
        <CarouselBox>
          <CardMui>
            <CardDiv>
              <CardNew>{productData?.cards?.[0]?.text}</CardNew>
              <img
                src={
                  productData?.cards?.[0]?.subimage?.data?.[0]?.attributes?.url
                }
              />
            </CardDiv>
            <MediaCard
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
          </CardMui>
          <CardMui>
            <CardDiv>
              <CardPer>{productData?.cards?.[1]?.text}</CardPer>
              <img
                src={
                  productData?.cards?.[1]?.subimage?.data?.[0]?.attributes?.url
                }
                alt="No img"
              />
            </CardDiv>
            <MediaCard
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
          </CardMui>
          <CardCart>
            <CardDiv>
              <CardHot>{productData?.cards?.[2]?.text}</CardHot>
              <img
                src={
                  productData?.cards?.[2]?.subimage?.data?.[0]?.attributes?.url
                }
              />
            </CardDiv>
            <MediaCard
              image={productData?.cards?.[2]?.image?.data?.[0]?.attributes?.url}
            />
            <CardContent>
              <CardButton bgcolor={cardButton} textcolor={cardText}>
                <ShoppingIcon />
                {productData?.cards?.[2]?.cardbutton?.[0].title}
              </CardButton>
            </CardContent>
            <DetailBag>{productData?.cards?.[2]?.content}</DetailBag>
            <CardAmt>{productData?.cards?.[2]?.prize1}</CardAmt>
          </CardCart>
          <CardStock>
            <CardDiv>
              <CardOffer>{productData?.cards?.[3]?.text}</CardOffer>
              <img
                src={
                  productData?.cards?.[3]?.subimage?.data?.[0]?.attributes?.url
                }
              />
            </CardDiv>
            <MediaCard
              image={productData?.cards?.[3]?.image?.data?.[0]?.attributes?.url}
            />
            <CardContent>
              <ButtonStock>
                <ShoppingIconRed />
                {productData?.cards?.[3]?.cardbutton?.[0].title}
              </ButtonStock>
            </CardContent>
            <DetailName>{productData?.cards?.[3]?.content}</DetailName>
            <CardAmt>{productData?.cards?.[3]?.prize1}</CardAmt>
          </CardStock>
        </CarouselBox>
      </Box>
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
