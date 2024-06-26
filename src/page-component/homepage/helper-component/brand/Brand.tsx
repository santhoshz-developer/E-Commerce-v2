/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from "@mui/material";
import {
  BoxStyled,
  CoatDiv,
  HoverDiv,
  ImageStyled,
  JacketDiv,
  LadyDiv,
  LadyimgDiv,
  LogoDiv,
  MainDiv,
  PantsDiv,
  SaleTypography,
  ShirtDiv,
  StyledDiv,
  StyledTypography,
} from "./Brand.styled";
import { api } from "@/service/backend-api";

const Brand = (props: any) => {
  const { brands, categorey } = props;
  const hoverBg = categorey?.[0]?.images?.[0]?.color?.color?.[0]?.background;

  const renderLogoBrands = () => {
    return (
      <LogoDiv>
        {brands &&
          brands.map((brand: any, index: number) => (
            <ImageStyled
              key={index}
              src={api + brand?.brandlogo?.data?.[0]?.attributes?.url}
              alt={`Image ${index}`}
            />
          ))}
      </LogoDiv>
    );
  };

  const renderLadyImage = () => {
    return (
      <LadyimgDiv>
        <img
          src={
            api +
            categorey?.[0]?.images?.[0]?.brandlogo?.data?.[0]?.attributes?.url
          }
          alt="category-1"
        />
        <LadyDiv bgcolor={hoverBg} className="hover-lady">
          <Typography>{categorey?.[0]?.images?.[0]?.productname}</Typography>
          <Typography>{categorey?.[0]?.images?.[0]?.productcount}</Typography>
        </LadyDiv>
      </LadyimgDiv>
    );
  };

  const renderImage = () => {
    return (
      <BoxStyled>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "column", lg: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {renderLadyImage()}
          <StyledDiv>
            <HoverDiv>
              <img
                src={
                  api +
                  categorey?.[0]?.images?.[1]?.brandlogo?.data?.[0]?.attributes
                    ?.url
                }
                alt={`category`}
              />
              <PantsDiv bgcolor={hoverBg} className="hover-brand">
                <Typography>
                  {categorey?.[0]?.images?.[1]?.productname}
                </Typography>
                <Typography>
                  {categorey?.[0]?.images?.[1]?.productcount}
                </Typography>
              </PantsDiv>
            </HoverDiv>
            <HoverDiv>
              <img
                src={
                  api +
                  categorey?.[0]?.images?.[2]?.brandlogo?.data?.[0]?.attributes
                    ?.url
                }
                alt={`category`}
              />
              <SaleTypography>SALE</SaleTypography>
              <CoatDiv bgcolor={hoverBg} className="hover-brand">
                <Typography>
                  {categorey?.[0]?.images?.[2]?.productname}
                </Typography>
                <Typography>
                  {categorey?.[0]?.images?.[2]?.productcount}
                </Typography>
              </CoatDiv>
            </HoverDiv>
          </StyledDiv>
          <StyledDiv>
            <HoverDiv>
              <img
                src={
                  api +
                  categorey?.[0]?.images?.[3]?.brandlogo?.data?.[0]?.attributes
                    ?.url
                }
                alt={`category`}
              />
              <ShirtDiv bgcolor={hoverBg} className="hover-brand">
                <Typography>
                  {categorey?.[0]?.images?.[3]?.productname}
                </Typography>
                <Typography>
                  {categorey?.[0]?.images?.[3]?.productcount}
                </Typography>
              </ShirtDiv>
            </HoverDiv>
            <HoverDiv>
              <img
                src={
                  api +
                  categorey?.[0]?.images?.[4]?.brandlogo?.data?.[0]?.attributes
                    ?.url
                }
                alt={`category`}
              />
              <JacketDiv bgcolor={hoverBg} className="hover-brand">
                <Typography>
                  {categorey?.[0]?.images?.[4]?.productname}
                </Typography>
                <Typography>
                  {categorey?.[0]?.images?.[4]?.productcount}
                </Typography>
              </JacketDiv>
            </HoverDiv>
          </StyledDiv>
        </Box>
      </BoxStyled>
    );
  };
  return (
    <>
      <StyledTypography variant="h5">{categorey?.[0]?.title}</StyledTypography>
      <MainDiv>
        {renderLogoBrands()}
        {renderImage()}
      </MainDiv>
    </>
  );
};

export default Brand;
