import { appColors } from "@/theme/color.Config";
import { Box, Breadcrumbs, Button, Typography, } from "@mui/material";
import { Tab, TabList, TabPanel } from "react-tabs";
import ListIcon from "@mui/icons-material/List";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import styled from "styled-components";

export const SetIcon = styled(Box)`
    color:#fff;
    background:#E73C17;
    margin-top:20px;
    padding:8px;
    width:15%;
    cursor:pointer;
    @media(min-width:390px) and (max-width:767px){
       margin-left:0px;
       margin-top:0px;
       width:45%;
    }
    @media(min-width:768px) and (max-width:1023px){
       margin-left:0px;
       width:25%;
    }
    @media(min-width:1024px) and (max-width:1199px){
        width:20%; 
        margin-top:50px;
    }
    @media(min-width:1450px) and (max-width:1550px){
        width:12%
    }
`
export const TypoText = styled(Typography)`
    width:max-content;
`
export const IconList = styled(ListIcon)`
    position: relative;
    top: 5px;
    font-size: 20px;
    margin-right: 8px;
`
export const IconKeyDown = styled(KeyboardArrowDownIcon)`
    position: relative;
    top: 5px;
    font-size: 20px;
    margin-light: 8px;,
`
export const BoxContainer = styled(Box)`
    background:#F4F5F8; 
    height:200px; 
    text-align:center;
    font-family:Inter;
    font-weight:300;
    margin-top:30px;
`
export const TypographyContent = styled(Typography)`
    padding-top:50px;
    @media(min-width:390px) and (max-width:767px){
        font-size:23px;
    }
    @media(min-width:768px) and (max-width:1023px){
        font-size:27px;
    }
`
export const StyledDiv = styled(Box)`
    display:flex;
    margin-top:50px;
    margin-left:30px;
    @media(min-width:390px) and (max-width:767px){
        flex-direction:column;
    }
    @media(min-width:768px) and (max-width:1023px){
        flex-direction:column;
    }
`
export const TapListBox = styled(TabList)`
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 60px;
    list-style: none;
    outline:none;
    column-gap:20px;
`
export const StyledBox1 = styled(Box)`
    background:#F4F5F8;
    height:525px;
    width:410px;
    margin-left:30px;
    padding-top:110px;
    img{
        height:300px;
        width:300px;
        margin-left:35px;
    }
    @media(min-width:390px) and (max-width:767px){
        height:200px;
        width:330px;
        margin-left:0px;
        margin-right:10px;
        padding-top:0px;
        img{
            height:170px;
            width:200px;
            margin-left:65px;
            margin-top:16px;
        }
    }
    @media(min-width:768px) and (max-width:1023px){
        height:320px;
        width:95%;
        margin-left:0px;
        margin-right:0px;
        padding-top:0px;
        img{
            height:270px;
            width:500px;
            margin-left:100px;
            margin-top:25px;
        }
    }
    @media(min-width:1024px) and (max-width:1199px){
        margin-left:10px;
        width:70%;
        img{
            height:350px;
            width:350px;
            margin-left:40px;
            margin-top:-20px;
        }
    }
    @media(min-width:1440px) and (max-width:1451px){
        margin-left:10px;
        width:50%;
        img{
            height:350px;
            width:320px;
            margin-left:60px;
            margin-top:-20px;
        }
    }
`
export const RightTypo = styled(Typography)`
    color:#6F6F6F;
    font-size:13px;
    margin-top:140px;
    @media(min-width:390px) and (max-width:767px){
        margin-top:20px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-top:30px;
    }
`
export const RightBox = styled(Box)`
    margin-top:10px;
    margin-left:30px;
`
export const StyledBox = styled(Box)`
    @media(min-width:390px) and (max-width:767px){
          position:relative;
          top: 200px;
    }
    @media(min-width:768px) and (max-width:1023px){
        position:relative;
    }
`
export const ImageStyled1 = styled("div")`
    border:1px solid #E73C17;
    padding:5px;
    width:158px;
    img{
        height:89px;
        width:109px;
        margin-left:20px;
    }
    @media(min-width:390px) and (max-width:767px){
        display:none;
    }
    @media(min-width:768px) and (max-width:1023px){
        border:1px solid #E73C17;
        position:absolute;
        margin-top:370px;
        img{
            margin-top:15px;
            margin-left:5px;
        } 
    }
`
export const ImageStyled2 = styled("div")`
    border:1px solid #F0F0F0;
    padding:5px;
    width:158px;
    margin-top:35px;
    padding-left:20px;
    img{
        height:89px;
        width:109px;
    }
    @media(min-width:390px) and (max-width:767px){
        border:1px solid #E73C17;
        position:absolute;
        top:30px;
        left:0px;
        width:90px;
        height:89px;
        img{
            height:68px;
            width:78px;
            margin-top:5px;
            margin-left:-15px;
        }
    }
    @media(min-width:768px) and (max-width:1023px){
        border:2px solid #F0F0F0;
        position:absolute;
        margin-top:370px;
        left:210px;
        img{
            margin-top:15px;
            margin-left:5px;
        }
    }
`
export const ImageStyled3 = styled("div")`
    border:1px solid #F0F0F0;
    padding:5px;
    width:158px;
    margin-top:35px;
    padding-left:20px;
    img{
        height:89px;
        width:109px;
    }
    @media(min-width:390px) and (max-width:767px){
        border:2px solid #F0F0F0;
        position:absolute;
        top:30px;
        left:115px;
        width:83px;
        height:89px;
        img{
            height:68px;
            width:68px;
            margin-top:5px;
            margin-left:-15px;
        }
    }
    @media(min-width:768px) and (max-width:1023px){
        border:2px solid #F0F0F0;
        position:absolute;
        margin-top:370px;
        left:387px;
        img{
            margin-top:15px;
            margin-left:5px;
        }
    }
`
export const ImageStyled4 = styled("div")`
    border:1px solid #F0F0F0;
    padding:5px;
    width:158px;
    margin-top:35px;
    border:1px solid #F0F0F0;
    padding:5px;
    width:158px;
    margin-top:35px;
    padding-left:20px;
    img{
        height:89px;
        width:109px;
    }
    @media(min-width:390px) and (max-width:767px){
        border:2px solid #F0F0F0;
        position:absolute;
        top:30px;
        left:235px;
        width:83px;
        height:89px;
        img{
            height:68px;
            width:68px;
            margin-top:5px;
            margin-left:-15px;
        }
    }
    @media(min-width:768px) and (max-width:1023px){
        border:2px solid #F0F0F0;
        position:absolute;
        margin-top:370px;
        left:570px;
        img{
            margin-top:15px;
            margin-left:5px;
        }
    }
`
export const BrandTypography = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:13px;
    margin-top:5px;
    b{
        fontFamily: Inter;
        fontWeight: 500;
        color: #191919; 
     }
    @media(min-width:390px) and (max-width:767px){
        margin-top:200px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-top:200px;
        font-size:15px;
    }
    @media(min-width:1440px) and (max-width:1460px){
        font-size:20px;
    }
`
export const LgTypography = styled(Typography)`
    color:#191919;
    font-family:Inter;
    font-weight:500;
    margin-top:10px;
    font-size:25px;
    line-height:33px;
    @media(min-width:390px) and (max-width:767px){
        font-size:16px;
        font-weight:600;
    }
    @media(min-width:768px) and (max-width:1023px){
        font-size:30px;
        font-weight:500;
    }
    @media(min-width:1024px) and (max-width:1199px){
        font-size:20px;
    }
    @media(min-width:1440px) and (max-width:1460px){
        font-size:35px;
        font-weight:500;
        line-height:40px;
    }
`
export const StarImg = styled("div")`
    margin-top:10px;
    img{
       height:20px;
       width:20px;
       margin-left:5px; 
    }
`
export const TypographyUl = styled("ul")`
    margin-left:20px;
    margin-top:10px;
    line-height:25px;
    padding-bottom:30px;
    border-bottom:1px solid #F0F0F0;
    @media(min-width:390px) and (max-width:767px){
        margin-left:7px;
    }
`
export const TypographyLi = styled("li")`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    @media(min-width:390px) and (max-width:767px){
        font-size:11px;
    }
    @media(min-width:768px) and (max-width:1023px){
        font-size:17px;
    }
`
export const DivCount = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
  gap:15px;
`;
export const CountTypo1 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    border:1px solid #000;
    color:#000;
    padding:10px;
    padding-left:25px;
    height:45px;
    @media(min-width:390px) and (max-width:767px){
        padding-left:20px;
        padding:10px;
    }
    @media(min-width:1024px) and (max-width:1199px){
        padding-left:20px;
        padding:10px;
        margin-left:0px;
    }
`
export const DivAmount = styled(Typography)`
    color:#191919;
    font-family:Inter;
    font-weight:400;
    font-size:15px;
    margin-top:5px;
`
export const AmtTypo = styled(Typography)`
    color:#191919;
    font-family:Inter;
    font-weight:400;
    font-size:20px;
    margin-top:5px;
`
export const ButtonDiv = styled("div")`
    padding:5px;
    @media(min-width:767px) and (max-width:1023px){
        margin-top:15px;
    }
`
export const ButtonDiv1 = styled("button")`
    padding:5px;
    width:50px;
    border:1px solid #F0F0F0;
    background:#fff;
    font-size:20px;
    @media(min-width:390px) and (max-width:767px){
       width:30px; 
    }
    @media(min-width:768px) and (max-width:1023px){
       width:50px;
       font-size:20px; 
    }
    @media(min-width:1024pxpx) and (max-width:1199px){
        width:30px;
    }
`
export const ButtonDiv2 = styled("button")`
    padding:5px;
    width:50px;
    border:1px solid #F0F0F0;
    background:#fff;
    font-size:20px;
    @media(min-width:390px) and (max-width:767px){ 
       width:30px;
    }
    @media(min-width:768px) and (max-width:1023px){
       width:50px;
       font-size:20px; 
    }
    @media(min-width:1024pxpx) and (max-width:1199px){
        width:30px;
    }
`
export const ButtonDiv3 = styled("button")`
    padding:5px;
    width:50px;
    border:1px solid #F0F0F0;
    background:#fff;
    font-size:20px;
    @media(min-width:390px) and (max-width:767px){
       width:30px; 
    }
    @media(min-width:768px) and (max-width:1023px){
       width:50px;
       font-size:20px; 
    }
    @media(min-width:1024pxpx) and (max-width:1199px){
        width:30px;
    }
`
export const ButtonDiv4 = styled("button") <{ bgcolor: string; textcolor: string; }>`
    background: ${({ bgcolor }) => bgcolor || appColors["white"]};
    color: ${({ textcolor }) => textcolor || appColors["black"]};
    border:none;
    height:33px;
    width:150px;
    margin-left:30px;
    font-family:Inter;
    padding:5px;
    cursor:pointer;
    @media(min-width:390px) and (max-width:767px){
       margin-left:15px;
       width:100px;
    }
    @media(min-width:1024px) and (max-width:1199px){
       margin-left:10px;
       width:100px;
    }
`
export const ButtonDiv5 = styled("button")`
    background:#fff;
    color:#E73C17;
    border:1px solid #E73C17;
    height:33px;
    width:150px;
    margin-left:30px;
    font-family:Inter;
    padding:5px;
    cursor:pointer;
    @media(min-width:390px) and (max-width:767px){
       margin-left:15px;
       width:100px;
    }
    @media(min-width:1024px) and (max-width:1199px){
       margin-left:10px;
       width:100px;
    }
`
export const BoxDetails = styled(Box)`
    display:flex;
    text-align:center;
    justify-content:center;
    margin-top:80px;
    border-bottom:1px solid #F0F0F0;
    @media(min-width:390px) and (max-width:767px){
        border-bottom:2px solid #F0F0F0;
    }
`
export const Typography1 = styled(Tab)`
    color:#191919;
    font-family:Inter;
    font-weight:500;
    font-size:20px;
    text-decoration:none;
    padding-bottom:20px;
    // outline:2px solid #E73C17;
    cursor:pointer;
    @media(min-width:390px) and (max-width:767px){
        margin-left:0px;
        font-size:15px;
    }
`

export const BoxDetails1 = styled(TabPanel)`
    margin-top:50px;
    margin-left:200px;
    margin-right:200px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:15px;
        margin-right:0px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-left:20px;
        margin-right:20px;
    }
`
export const DescriptionLink = styled(Link)`
    font-family: Inter;
    font-weight: 300;
    color: red;
    text-decoration: none;
    display:none;
    @media(min-width:390px) and (max-width:767px){
        display:block;
    }
`

export const DetailTypo = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    line-height:30px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:10px;
        margin-right:10px;
        font-size:13px;
    }
`
export const DetailTypo1 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    line-height:30px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:10px;
        margin-right:10px;
        font-size:13px;
    }
    @media(min-width:1450px){
        line-height:40px
    }
`
export const DetailTypo2 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    line-height:30px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:10px;
        margin-right:10px;
        font-size:13px;
    }
    @media(min-width:1450px){
        line-height:40px
    }
`
export const DetailTypo3 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    line-height:30px;
    @media(min-width:390px) and (max-width:767px){
        display:none;
    }
    @media(min-width:1450px){
        line-height:40px
    }
`
export const DetailTypo4 = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    line-height:30px;
    @media(min-width:390px) and (max-width:767px){
        display:none;
    }
    @media(min-width:1450px){
        line-height:40px
    }
`
export const BreadcrumbsStyle = styled(Breadcrumbs)`
     margin-left:540px;
     margin-top:15px;
     @media(min-width:390px) and (max-width:767px){
        margin-left:120px;
     }
     @media(min-width:768px) and (max-width:1023px){
        margin-left:285px;
     }
     @media(min-width:1024px) and (max-width:1199px){
        margin-left:400px;
     }
     @media(min-width:1439px){
        margin-left:600px;
     }
     @media(min-width:1450px) and (max-width:1550px){
        margin-left:620px;
    }
`

export const DetailLink = styled(Link)`
    font-family: Inter;
    font-size: 18px;
    text-decoration: none;
    color: inherit;
`

//bag relatives


export const BoxStyled = styled(Box)`
    position:relative;

    @media(min-width:390px) and (max-width:767px){
        position:relative;
        height: 90vh !important;
    }
    @media(min-width:768px) and (max-width:1023px){
        position:relative;
    }
`
export const TypoProducts = styled(Typography)`
    margin-top:100px;
    text-align:center;
    justify-content:center;
    font-family:Inter;
    font-weight:500;
    position:relative;
    @media(min-width:390px) and (max-width:767px){
         font-size:15px;
         margin-top:50px;
         position:relative;
    }
`
export const CarouselBox = styled(Box)`
    display:flex;
    margin-top:100px;
    margin-left:40px;
    margin-right:40px;
    position:relative;
    gap:20px;
    @media(min-width:390px) and (max-width:767px){
        margin-top:50px;
        margin-left:15px;
        margin-right:15px;
        position:relative;
    }
    @media(min-width:1440px) and (max-width:1460px){
        text-align:center;
        justify-content:center;
        position:relative;
    }
    @media(min-width:1450px){
        text-align:center;
        justify-content:center;
    }
`
export const CardDiv = styled("div")`

    img{
    border:1px solid #D7D7D7;
    padding:5px;
    border-radius:50%;
    height:25px;
    width:25px;
    margin-left:236px;
    margin-top:20px;
    cursor:pointer;
}
    @media(min-width:390px) and (max-width:767px){
        img{
        margin-left:135px; 
        position:relative;
        bottom: 40px;
    }
}
@media(min-width:768px) and (max-width:1023px){
        img{
            margin-left:175px;
            position:relative;
            bottom: 40px;
    }
}
`
export const CardTypo = styled(Typography)`
    color:#fff;
    background:#12A05C;
    border-radius:100px;
    font-size:13px;
    width:60px;
    position:absolute;  
    margin-top:20px;
    margin-left:10px;
    padding-left:13px;

    @media(min-width:390px) and (max-width:767px){
        position:relative;
    }
    @media(min-width:768px) and (max-width:1023px){
        position:relative;
    }
`
export const CardTypo1 = styled(Typography)`
    color:#fff;
    background:#E73C17;
    border-radius:100px;
    font-size:13px;
    width:60px;
    position:absolute;
    margin-top:20px;
    margin-left:10px;
    padding-left:13px;
    @media(min-width:390px) and (max-width:767px){
        position:relative;
    }
    @media(min-width:768px) and (max-width:1023px){
        position:relative;
    }
`
export const CardTypo2 = styled(Typography)`
    color:#fff;
    background:#FF9900;
    border-radius:100px;
    font-size:13px;
    width:60px;
    position:absolute;
    margin-top:20px;
    margin-left:10px;
    padding-left:15px;
     @media(min-width:390px) and (max-width:767px){
        position:relative;
    }
    @media(min-width:768px) and (max-width:1023px){
        position:relative;
    }
`
export const CardTypo3 = styled(Typography)`
    color:#fff;
    background:#7F7CF6;
    border-radius:100px;
    font-size:13px;
    width:90px;
    position:absolute;
    margin-top:20px;
    margin-left:10px;
    padding-left:20px;
    @media(min-width:390px) and (max-width:767px){
        position:relative;
    }
    @media(min-width:768px) and (max-width:1023px){
        position:relative;
    }
`
export const CardButton = styled("button") <{ bgcolor: string; textcolor: string; }>`
    background: ${({ bgcolor }) => bgcolor || appColors["white"]};
    color: ${({ textcolor }) => textcolor || appColors["black"]};
    font-family:Inter;
    font-weight:500;
    width:200px;
    padding:10px;
    border:none;
    margin-left: 25px;
    margin-top:35px;
    cursor:pointer;
    @media(min-width:390px) and (max-width:767px){
        width:120px;
        margin-left:7px;
        margin-top:25px;
    }
    @media(min-width:768px) and (max-width:1023px){
        width:150px;
        margin-left:7px;
        margin-top:10px;
    }
    @media(min-width:1024px) and (max-width:1199px){
        margin-left:0px; 
    }
    @media(min-width:1440px){
        margin-left:-20px;
    }
`
export const CardButton1 = styled("button")`
    color:#E73C17;
    font-family:Inter;
    font-weight:500;
    width:200px;
    padding:10px;
    background:#fff;
    border:none;
    margin-left: 25px;
    margin-top:35px;
    cursor:pointer;
    @media(min-width:1024px) and (max-width:1199px){
        margin-left: 0px;
    }
    @media(min-width:1440px){
        margin-left:-10px;
    }
`
export const StyleTypo = styled(Typography)`
    font-family:Inter;
    font-weight:400;
    color:#191919;
    font-size:14px;
    position:absolute;
    margin-top:30px;
    margin-left:40px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:0px;
        margin-top:20px;
        font-size:10px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-left:25px;
        margin-top:20px;
        font-size:12px;
    }
    @media(min-width:1024px) and (max-width:1199px){
         margin-left:23px;
         font-size:10px;
    }
`
export const StyleTypo1 = styled(Typography)`
    font-family:Inter;
    font-weight:400;
    color:#191919;
    font-size:14px;
    position:absolute;
    margin-top:30px;
    margin-left:70px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:0px;
        margin-top:20px;
        font-size:12px;
        position:relative;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-left:40px;
        margin-top:20px;
        font-size:12px;
    }
    @media(min-width:1024px) and (max-width:1199px){
         margin-left:26px;
         font-size:10px;
    }
`
export const StyleTypo2 = styled(Typography)`
    font-family:Inter;
    font-weight:400;
    color:#191919;
    font-size:14px;
    position:absolute;
    margin-top:30px;
    margin-left:70px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:0px;
        margin-top:20px;
        font-size:12px;
        position:relative;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-left:40px;
        margin-top:20px;
        font-size:12px;
        position:relative;
    }
    @media(min-width:1024px) and (max-width:1199px){
         margin-left:26px;
         font-size:10px;
    }
`
export const TypographyAmt = styled(Typography)`
    font-family:Inter;
    font-weight:600;
    color:#191919;
    position:absolute;
    margin-top:50px;
    margin-left:80px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:40px;
        margin-top:40px;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-left:70px;
        margin-top:40px;
    }
`
export const TypographyAmt1 = styled(Typography)`
    font-family:Inter;
    font-weight:600;
    color:#191919;
    position:absolute;
    margin-top:50px;
    margin-left:110px;
    @media(min-width:390px) and (max-width:767px){
        margin-left:40px;
        margin-top:40px;
        position:relative;
    }
    @media(min-width:768px) and (max-width:1023px){
        margin-left:80px;
        margin-top:40px;
        // position:relative;
    }
    @media(min-width:1024px) and (max-width:1199px){
         margin-left:66px;
    }
`
export const ShoppingIcon = styled(ShoppingCartOutlinedIcon)`
    color:#6F6F6F;
    font-size:15px;
`
export const ShoppingIcon1 = styled(ShoppingCartOutlinedIcon)`
    color:#E73C17;
    font-size:15px;
`