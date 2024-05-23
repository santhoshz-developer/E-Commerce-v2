import { appColors } from "@/theme/color.Config";
import { Box, Breadcrumbs, Card, CardMedia, Typography, styled } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tab } from '@mui/base/Tab';

export const Navall = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    padding: "10px",
    marginTop: "50px",
    [theme.breakpoints.down('sm')]: {
        justifyContent: "center",
    },
}));

export const Navchild = styled(Box)`
    background:${appColors.red};
    padding:10px;
    ${({ theme }) => theme.breakpoints.up("sm")}{
        width:25%;
    }
    ${({ theme }) => theme.breakpoints.up("md")}{
        width:18%;
    }
    ${({ theme }) => theme.breakpoints.up("lg")}{
        width:15%;
    }
`
export const IconList = styled(ListIcon)`
    padding-top:5px;
    font-size: 20px;
`
export const IconKeyDown = styled(KeyboardArrowDownIcon)`
    padding-top:5px;
    font-size: 20px;
`
export const BoxContainer = styled(Box)`
    background:${appColors.grey}; 
    height:200px; 
    font-family:Inter;
    font-weight:300;
    margin-top:30px;
`
export const TypographyContent = styled(Typography)(({ theme }) => ({
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: "40px",
    [theme.breakpoints.down('sm')]: {
        fontSize: "23px"
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "27px"
    },
}));

export const StyledDiv = styled(Box)(({ theme }) => ({
    display: "flex",
    marginTop: "50px",
    marginLeft: "30px",
    [theme.breakpoints.down('md')]: {
        flexDirection: "column"
    },
}));

export const TapListBox = styled(TabsList)`
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 60px;
    list-style: none;
    column-gap:20px;
`
export const StyledBoxMain = styled(Box)(({ theme }) => ({
    background: appColors.grey,
    height: "525px",
    width: "410px",
    marginLeft: "30px",
    paddingTop: "110px",
    "img": {
        height: "300px",
        width: "300px",
        marginLeft: "35px",
    },
    [theme.breakpoints.down("sm")]: {
        height: "200px",
        width: "330px",
        marginLeft: "0px",
        marginRight: "10px",
        paddingTop: "0px",
        "img": {
            height: "170px",
            width: "200px",
            marginLeft: "65px",
            marginTop: "16px",
            objectFit: "contain",
        }
    },
    [theme.breakpoints.up("sm")]: {
        height: "320px",
        width: "95%",
        marginLeft: "0px",
        marginRight: "0px",
        paddingTop: "0px",
        "img": {
            height: "270px",
            width: "500px",
            marginLeft: "100px",
            marginTop: "25px",
            objectFit: "contain",
        }
    },
    [theme.breakpoints.up("md")]: {
        marginLeft: "10px",
        height: "520px",
        width: "70%",
        "img": {
            height: "350px",
            width: "350px",
            marginLeft: "40px",
            marginTop: "80px",
        }
    },
    [theme.breakpoints.up("lg")]: {
        marginLeft: "10px",
        width: "50%",
        "img": {
            height: "350px",
            width: "320px",
            marginLeft: "80px",
            marginTop: "70px",
        }
    }
}));

export const DownTypo = styled(Typography)(({ theme }) => ({
    color: appColors.darkgrey,
    fontSize: "13px",
    marginTop: "140px",
    [theme.breakpoints.down("sm")]: {
        marginTop: "20px"
    },
    [theme.breakpoints.down("md")]: {
        marginTop: "30px"
    }
}));

export const RightBox = styled(Box)`
    margin-top:10px;
    margin-left:30px;
`
export const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
        position: "absolute",
        marginTop: "220px"
    },
    [theme.breakpoints.up("sm")]: {
        position: "absolute",
        marginTop: "350px"
    },
    [theme.breakpoints.up("md")]: {
        flexDirection: "column",
        position: "static",
        marginTop: "-40px",
    }
}));

export const ImageBag = styled("div")(({ theme }) => ({
    border: "1px solid #E73C17",
    padding: "5px",
    width: "158px",
    height: "120px",
    marginTop: "40px",
    "img": {
        height: "89px",
        width: "109px",
        marginLeft: "20px",
    },
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
    [theme.breakpoints.down("md")]: {
        border: "1px solid #E73C17",
        "img": {
            marginTop: "15px",
            marginLeft: "15px",
        }
    }
}));

export const BagFront = styled("div")(({ theme }) => ({
    border: "2px solid #F0F0F0",
    padding: "5px",
    width: "158px",
    height: "120px",
    paddingLeft: "10px",
    marginTop: "40px",
    "img": {
        height: "89px",
        width: "109px",
    },
    [theme.breakpoints.down("sm")]: {
        border: "1px solid #E73C17",
        width: "83px",
        height: "89px",
        marginTop: "35px",
        "img": {
            height: "68px",
            width: "78px",
            marginTop: "5px",
            marginLeft: "-15px",
            objectFit: "contain",
        }
    },
    [theme.breakpoints.up("sm")]: {
        border: "2px solid #F0F0F0",
        "img": {
            marginTop: "15px",
            marginLeft: "5px",
        }
    },
    [theme.breakpoints.up("md")]: {
        marginTop: "15px",
        left: "30px",
    }
}));

export const BagBack = styled("div")(({ theme }) => ({
    border: "2px solid #F0F0F0",
    padding: "5px",
    width: "158px",
    marginTop: "35px",
    paddingLeft: "20px",
    "img": {
        height: "89px",
        width: "109px",
    },
    [theme.breakpoints.down("sm")]: {
        border: "2px solid #F0F0F0",
        width: "83px",
        "img": {
            height: "68px",
            width: "68px",
            marginTop: "5px",
            marginLeft: "-15px",
            objectFit: "contain",
        }
    },
    [theme.breakpoints.up("sm")]: {
        border: "2px solid #F0F0F0",
        "img": {
            marginTop: "15px",
            marginLeft: "5px",
        }
    },
    [theme.breakpoints.up("md")]: {
        marginTop: "15px",
        left: "30px",
    }
}));

export const BagInside = styled("div")(({ theme }) => ({
    border: "2px solid #F0F0F0",
    padding: "5px",
    width: "158px",
    marginTop: "35px",
    paddingLeft: "20px",
    "img": {
        height: "89px",
        width: "109px",
    },
    [theme.breakpoints.down("sm")]: {
        border: "2px solid #F0F0F0",
        width: "83px",
        height: "89px",
        "img": {
            height: "68px",
            width: "68px",
            marginTop: "5px",
            marginLeft: "-15px",
            objectFit: "contain",
        }
    },
    [theme.breakpoints.up("sm")]: {
        border: "2px solid #F0F0F0",
        "img": {
            marginTop: "15px",
            marginLeft: "5px",
        }
    },
    [theme.breakpoints.up("md")]: {
        marginTop: "15px",
        left: "30px",
    }
}));

export const BrandTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "Inter",
    fontWeight: "300",
    fontSize: "13px",
    marginTop: "5px",
    [theme.breakpoints.down("sm")]: {
        marginTop: "200px",
        fontSize: "12px",
        marginLeft: "-30px"
    },
    [theme.breakpoints.up("sm")]: {
        marginTop: "200px",
        fontSize: "18px",
        marginLeft: "-25px"
    },
    [theme.breakpoints.up("md")]: {
        marginTop: "5px",
        fontSize: "18px",
        marginLeft: "0px"
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "15px"
    },

}));

export const LgTypography = styled(Typography)(({ theme }) => ({
    color: "#191919",
    fontFamily: "Inter",
    fontWeight: "500",
    marginTop: '10px',
    fontSize: "25px",
    lineHeight: "33px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        fontWeight: "600",
        marginLeft: "-30px"
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "30px",
        fontWeight: "500",
        marginLeft: "-25px"
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "20px",
        marginLeft: "0px",
        marginRight: "20px",
    },
    [theme.breakpoints.down("xl")]: {
        fontSize: "22px",
        fontWeight: "600",
    },
}));

export const StarImg = styled("div")(({ theme }) => ({
    marginTop: "10px",
    "img": {
        height: "20px",
        width: "20px",
        marginLeft: "5px",
    },
    [theme.breakpoints.down("md")]: {
        marginLeft: "-30px"
    },
}));

export const TypographyUl = styled("ul")(({ theme }) => ({
    marginLeft: "20px",
    marginTop: "10px",
    lineHeight: "25px",
    paddingBottom: "30px",
    borderBottom: "1px solid #F0F0F0",
    [theme.breakpoints.down("sm")]: {
        marginLeft: "0px"
    },
}));

export const TypographyLi = styled("li")(({ theme }) => ({
    fontFamily: "Inter",
    fontWeight: "300",
    fontSize: "15px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
        marginLeft: "-25px",
        marginRight: "12px"
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: "17px",
        marginLeft: "-25px"
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "15px",
        marginLeft: "0px",
        marginRight: "20px",
    },
}));

export const DivCount = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    marginTop: "20px",
    gap: "15px",
    [theme.breakpoints.down("sm")]: {
        marginLeft: "-35px",
        marginRight: "27px"
    },
    [theme.breakpoints.up("sm")]: {
        marginLeft: "-25px",
        marginRight: "36px"
    },
    [theme.breakpoints.up("md")]: {
        marginLeft: "0px",
        marginRight: "26px"
    },
}));

export const CountTypo = styled(Typography)`
    justify-content:center;
    text-align:center;
    padding-top:5px;
    font-family: Inter;
    font-weight: 300;
    font-size: 15px;
    border: 1px solid #000;
    color: ${appColors.black};
    height: 35px;
`

export const DivAmount = styled(Typography)(({ theme }) => ({
    color: appColors.black,
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "15px",
    marginTop: "5px",
    [theme.breakpoints.down("sm")]: {
        marginLeft: "-30px",
        marginTop: "20px",
    },
    [theme.breakpoints.up("sm")]: {
        marginLeft: "-25px",
        marginTop: "20px",
    },
    [theme.breakpoints.up("md")]: {
        marginLeft: "0px",
        marginTop: "20px",
    },
}));

export const AmtTypo = styled(Typography)(({ theme }) => ({
    color: appColors.black,
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "20px",
    marginTop: "5px",
    [theme.breakpoints.down("sm")]: {
        marginLeft: "-30px",
    },
    [theme.breakpoints.up("sm")]: {
        marginLeft: "-25px",
    },
    [theme.breakpoints.up("md")]: {
        marginLeft: "0px",
    },
}));

export const ButtonDiv = styled("div")(({ theme }) => ({
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
        marginTop: "15px",
        marginLeft: "-40px",
    },
    [theme.breakpoints.up("sm")]: {
        marginTop: "15px",
        marginLeft: "-30px",
    },
    [theme.breakpoints.up("sm")]: {
        marginTop: "15px",
        marginLeft: "0px",
    },
}));

export const ButtonLess = styled("button")(({ theme }) => ({
    padding: "5px",
    width: "50px",
    border: "1px solid #F0F0F0",
    background: appColors.white,
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
        width: "30px",
    },
}));

export const ButtonCount = styled("button")(({ theme }) => ({
    padding: "5px",
    width: "50px",
    border: "1px solid #F0F0F0",
    background: appColors.white,
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
        width: "30px",
    },
}));

export const ButtonAdd = styled("button")(({ theme }) => ({
    padding: "5px",
    width: "50px",
    border: "1px solid #F0F0F0",
    background: appColors.white,
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
        width: "30px",
    },
}));

export const ButtonBuy = styled("button") <{ bgcolor: string; textcolor: string; }>`
    background: ${({ bgcolor }) => bgcolor || appColors.white};
    color: ${({ textcolor }) => textcolor || appColors.black};
    border: none;
    height: 33px;
    width: 150px;
    margin-left: 30px;
    font-family: Inter, sans-serif;
    padding: 5px;
    cursor: pointer;
    ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-left: 10px;
    width: 100px;
    }
    ${({ theme }) => theme.breakpoints.up('md')} {
    margin-left: 10px;
    width: 100px;
    }
    ${({ theme }) => theme.breakpoints.up('lg')} {
    margin-left: 20px;
    width: 140px;
    }
`
export const ButtonCart = styled("button")`
    background:${appColors.white};
    color:#E73C17;
    border:1px solid #E73C17;
    height:33px;
    width:150px;
    margin-left:30px;
    font-family:Inter;
    padding:5px;
    cursor:pointer;
    ${({ theme }) => theme.breakpoints.down("sm")}{
       margin-left:10px;
       width:100px;
       margin-top:20px;
    }
    ${({ theme }) => theme.breakpoints.up("md")}{
       margin-left:10px;
       width:100px;
    }
    ${({ theme }) => theme.breakpoints.up('lg')} {
        margin-left: 20px;
        width: 140px;
    }
`
export const TypoHead = styled(Tab)`
    color:${appColors.black};
    font-family:Inter;
    font-weight:500;
    font-size:20px;
    cursor:pointer;
    border:none;
    background:none;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        font-size:15px;
    }
`
export const BoxPanel = styled(TabPanel)`
    margin-top:50px;
    margin-left:200px;
    margin-right:200px;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        margin-left:15px;
        margin-right:0px;
    }
    ${({ theme }) => theme.breakpoints.up("sm")}{
        margin-left:40px;
        margin-right:40px;
    }
    ${({ theme }) => theme.breakpoints.up("md")}{
        margin-left:200px;
        margin-right:200px;
    }
`
export const DescriptionLink = styled(Link)`
    font-family: Inter;
    font-weight: 300;
    color: ${appColors.red};
    text-decoration: none;
    display:none;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        display:block;
    }
`

export const DetailTypo = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    line-height:30px;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        margin-left:10px;
        margin-right:10px;
        font-size:13px;
    }
`
export const DescrptionSub = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    line-height:30px;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        margin-left:10px;
        margin-right:10px;
        font-size:13px;
    }
    ${({ theme }) => theme.breakpoints.up("xl")}{
        line-height:40px
    }
`
export const DescrptionSec = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    line-height:30px;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        margin-left:10px;
        margin-right:10px;
        font-size:13px;
    }
    ${({ theme }) => theme.breakpoints.up("xl")}{
        line-height:40px
    }
`
export const DescrptionTrd = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    line-height:30px;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        display:none;
    }
    ${({ theme }) => theme.breakpoints.up("xl")}{
        line-height:40px
    }
`
export const DescrptionFrth = styled(Typography)`
    font-family:Inter;
    font-weight:300;
    font-size:15px;
    line-height:30px;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        display:none;
    }
    ${({ theme }) => theme.breakpoints.up("xl")}{
        line-height:40px
    }
`
export const BreadcrumbsStyle = styled(Breadcrumbs)`
       display:flex;
       text-align:center;
       justify-content:center;
       margin-top:20px;
`
export const DetailLink = styled(Link)`
    font-family: Inter;
    font-size: 18px;
    text-decoration: none;
    color: inherit;
`
//bag relatives

export const TypoProducts = styled(Typography)`
    margin-top:100px;
    text-align:center;
    justify-content:center;
    font-family:Inter;
    font-weight:500;
    ${({ theme }) => theme.breakpoints.down("sm")}{
         font-size:15px;
         margin-top:50px;
    }
`
export const CardMui = styled(Card)`
    width:300px;
    height:361px;
    background:${appColors.lightgrey};
    box-shadow:none;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        width:232px;
        height:310px
    }
`
export const CardCart = styled(Card)`
    width:300px;
    height:361px;
    background:${appColors.lightgrey};
    box-shadow:none;
    display:block;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        width:232px;
        height:310px;
        display:none;
    }
`

export const CardStock = styled(Card)`
    width:300px;
    height:361px;
    background:${appColors.lightgrey};
    box-shadow:none;
    display:block;
    ${({ theme }) => theme.breakpoints.down("md")}{
        width:232px;
        height:310px;
        display:none;
    }
`

export const CarouselBox = styled(Box)`
    display:flex;
    margin-top:100px;
    margin-left:40px;
    margin-right:40px;
    gap:20px;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        margin-top:50px;
        margin-left:15px;
        margin-right:15px;
        height: 130vh;
    }
    ${({ theme }) => theme.breakpoints.up("lg")}{
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
    ${({ theme }) => theme.breakpoints.down("sm")}{
        img{
        margin-left:135px; 
        position:relative;
        bottom: 40px;
    }
}
    ${({ theme }) => theme.breakpoints.up("sm")}{
        img{
            margin-left:175px;
            position:relative;
            bottom: 40px;
    }
}
    ${({ theme }) => theme.breakpoints.up("md")}{
        img{
            bottom: 0px;
    }
}
`
export const MediaCard = styled(CardMedia)`
    height:200px;
    width:200px;
    margin-left:40px;
    margin-top:10px;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        height:136px;
        width:132px;
        margin-left:20px;
    }
    ${({ theme }) => theme.breakpoints.up("sm")}{
        height:170px;
        width:150px;
        margin-left:32px;
    }
    ${({ theme }) => theme.breakpoints.up("md")}{
        height:200px;
        width:192px;
        margin-left:15px;
    }
    ${({ theme }) => theme.breakpoints.up("lg")}{
        height:200px;
        width:172px;
        margin-left:60px;
    }
`
export const CardNew = styled(Typography)`
    color:${appColors.white};
    background:${appColors.green};
    border-radius:100px;
    font-size:13px;
    width:60px;
    position:absolute;  
    margin-top:20px;
    margin-left:10px;
    padding-left:13px;
    ${({ theme }) => theme.breakpoints.down("md")}{
        position:relative;
    }
`
export const CardPer = styled(Typography)`
    color:${appColors.white};
    background:${appColors.red};
    border-radius:100px;
    font-size:13px;
    width:60px;
    position:absolute;
    margin-top:20px;
    margin-left:10px;
    padding-left:13px;
    ${({ theme }) => theme.breakpoints.down("md")}{
        position:relative;
    }
`
export const CardHot = styled(Typography)`
    color:${appColors.white};
    background:${appColors.darkyellow};
    border-radius:100px;
    font-size:13px;
    width:60px;
    position:absolute;
    margin-top:20px;
    margin-left:10px;
    padding-left:15px;
    ${({ theme }) => theme.breakpoints.down("md")}{
        position:relative;
    }
`
export const CardOffer = styled(Typography)`
    color:${appColors.white};
    background:${appColors.purple};
    border-radius:100px;
    font-size:13px;
    width:90px;
    position:absolute;
    margin-top:20px;
    margin-left:10px;
    padding-left:20px;
    ${({ theme }) => theme.breakpoints.down("md")}{
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
    ${({ theme }) => theme.breakpoints.down("sm")}{
        width:120px;
        margin-left:7px;
        margin-top:10px;
    }
    ${({ theme }) => theme.breakpoints.up("sm")}{
        width:150px;
        margin-left:7px;
        margin-top:20px;
    }
    ${({ theme }) => theme.breakpoints.up("md")}{
        margin-left:20px; 
        margin-top:20px;
    }
    ${({ theme }) => theme.breakpoints.up("lg")}{
        margin-left:-20px;
    }
`
export const ButtonStock = styled("button")`
    color:${appColors.orange};
    font-family:Inter;
    font-weight:500;
    width:200px;
    padding:10px;
    background:${appColors.white};
    border:none;
    margin-left: 25px;
    margin-top:35px;
    cursor:pointer;
    ${({ theme }) => theme.breakpoints.up("md")}{
        margin-left:20px; 
        margin-top:20px;
        width:150px;
    }
    ${({ theme }) => theme.breakpoints.up("lg")}{
        margin-left:20px;
    }
`
export const StyleTypo = styled(Typography)`
    font-family:Inter;
    font-weight:400;
    color:${appColors.black};
    font-size:14px;
    position:absolute;
    margin-top:30px;
    margin-left:40px;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        margin-left:15px;
        margin-top:20px;
        font-size:10px;
    }
    ${({ theme }) => theme.breakpoints.up("sm")}{
        margin-left:25px;
        margin-top:20px;
        font-size:12px;
    }
    ${({ theme }) => theme.breakpoints.up("md")}{
         margin-left:23px;
         font-size:12px;
         margin-top:30px;
    }
    ${({ theme }) => theme.breakpoints.up("lg")}{
        margin-left:20px;
        font-size:14px;
    }
`
export const DetailBag = styled(Typography)`
    font-family:Inter;
    font-weight:400;
    color:${appColors.black};
    font-size:14px;
    position:absolute;
    margin-top:30px;
    margin-left:70px;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        margin-left:0px;
        margin-top:20px;
        font-size:12px;
        position:relative;
    }
    ${({ theme }) => theme.breakpoints.up("sm")}{
        margin-left:40px;
        margin-top:20px;
        font-size:12px;
    }
    ${({ theme }) => theme.breakpoints.up("md")}{
        margin-left:26px;
        font-size:12px;
        margin-top:30px;
    }
    ${({ theme }) => theme.breakpoints.up("lg")}{
        margin-left:40px;
        font-size:14px;
    }
`
export const DetailName = styled(Typography)`
    font-family:Inter;
    font-weight:400;
    color:${appColors.black};
    font-size:14px;
    position:absolute;
    margin-top:30px;
    margin-left:70px;
    ${({ theme }) => theme.breakpoints.up("md")}{
         margin-left:30px;
         font-size:12px;
    }
    ${({ theme }) => theme.breakpoints.up("lg")}{
        margin-left:30px;
        font-size:14px;
    }
`
export const TypographyAmt = styled(Typography)`
    font-family:Inter;
    font-weight:600;
    color:${appColors.black};
    position:absolute;
    margin-top:50px;
    margin-left:80px;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        margin-left:40px;
        margin-top:40px;
    }
    ${({ theme }) => theme.breakpoints.up("sm")}{
        margin-left:70px;
        margin-top:40px;
    }
    ${({ theme }) => theme.breakpoints.up("md")}{
        margin-left:70px;
        margin-top:50px;
    }
    ${({ theme }) => theme.breakpoints.up("lg")}{
        margin-left:100px;
        margin-top:50px;
    }
`
export const CardAmt = styled(Typography)`
    font-family:Inter;
    font-weight:600;
    color:${appColors.black};
    position:absolute;
    margin-top:50px;
    margin-left:110px;
    ${({ theme }) => theme.breakpoints.down("sm")}{
        margin-left:40px;
        margin-top:40px;
    }
    ${({ theme }) => theme.breakpoints.up("sm")}{
        margin-left:80px;
        margin-top:40px;
    }
    ${({ theme }) => theme.breakpoints.up("md")}{
        margin-left:66px;
        margin-top:50px;
    }
    ${({ theme }) => theme.breakpoints.up("lg")}{
        margin-left:96px;
        margin-top:50px;
    }
`
export const ShoppingIcon = styled(ShoppingCartOutlinedIcon)`
    color:${appColors.darkgrey};
    font-size:15px;
`
export const ShoppingIconRed = styled(ShoppingCartOutlinedIcon)`
    color:${appColors.orange};
    font-size:15px;
`