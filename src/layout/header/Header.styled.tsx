import { Box, Button, Link, Typography } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { styled } from "@mui/system";
import SearchIcon from "@/component/icon/SearchIcon";


export const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(30, 40, 50, 0.05)",
  height: "120px",
  margin: "0 auto",
  width: "100%",
  [theme.breakpoints.down('sm')]: {
    backgroundColor: "transparent"
  },
  [theme.breakpoints.down("md")]: {
    backgroundColor: "transparent",
    position: "relative",
    zIndex: 999,
  }
}));

export const AppBarStyled = styled(Box)(({ theme }) => ({
  height: "90px",
  margin: "0 auto",
  width: "72%",
  [theme.breakpoints.up('sm')]:{
    width: "90%",
  },
  [theme.breakpoints.up('lg')]:{
    width: "90%",
  }
}));

export const SearchStyle = styled(SearchIcon)(({theme}) => ({
   [theme.breakpoints.down('sm')]:{
        marginLeft:"-30px"
   }
}))

export const HeadLineStyled = styled("div")(({theme}) => ({
  display: "flex",
  [theme.breakpoints.down('sm')]:{
    fontSize: "14px",
    position: "absolute",
    bottom: "10px",
  },
  [theme.breakpoints.up('sm')]:{
    fontSize: "14px",
    position: "absolute",
    marginLeft:"-90px",
  },
  [theme.breakpoints.down('md')]: {
    fontSize: "16px",
    position: "absolute",
    right: "190px"
  },
  [theme.breakpoints.up('md')]: {
    fontSize: "16px",
    position: "absolute",
    right: "190px",
    marginLeft:"150px"
  },
  [theme.breakpoints.down('lg')]:{
    fontSize: "16px",
    left: "-100px",
  },
  [theme.breakpoints.down('xl')]:{
    position: "relative",
    left: "-100px",
  }
}))
export const FirstTypography = styled(Typography)(({theme}) => ({
  fontSize: "35px",
  position: "relative",
  left: "350px",
  [theme.breakpoints.down('sm')]:{
    fontSize: "14px",
    position: "relative",
    top: "10px",
    marginLeft: "-300px",
    fontWeight: "100",
  },
  [theme.breakpoints.up('sm')]:{
    fontSize: "14px",
    position: "relative",
    marginLeft: "-180px",
    fontWeight: "100",
  },
  [theme.breakpoints.down('md')] :{
    fontSize: "27px",
    position: "relative",
    left: "280px",
  },
  [theme.breakpoints.up('md')] :{
    fontSize: "27px",
    position: "relative",
    marginLeft: "-300px",
  },
  [theme.breakpoints.down('lg')]:{
       left: "450px",
  },
  [theme.breakpoints.down('xl')]:{
    left: "700px",
  }
}));

export const IconBtn = styled(Box)(({theme}) => ({
  marginLeft: "400px",
  fontSize: "28px",
  position:"relative",
  left:"170px",
  [theme.breakpoints.down('sm')]: {
    display: "none"
  },
  [theme.breakpoints.down('md')]:{
    display: "block",
    position: "relative",
    left: "100px",
    zIndex: "999",
  },
  [theme.breakpoints.up('md')]:{
    display: "block",
    position: "relative",
    left: "100px",
    zIndex: "999",
  },
  [theme.breakpoints.up('lg')]:{
    left: "290px",
  },
  [theme.breakpoints.down('xl')]:{
    left: "450px",
  }
}))

export const ButtonStyle = styled(Button)(({theme}) => ({
      color:"inherit",
      gap:"8px",
      "&:hover" : {
         color:"#FF6F61",
      }
}));

export const DehazeIconStyled = styled(DehazeIcon)(({theme}) => ({
  display: "none",
  [theme.breakpoints.down('sm')]:{
    position: "absolute",
    left: "270px",
    display: "block"
  }
}));

export const LinkStyled = styled(Link)(({theme}) => ({
  color: "black",
  textDecoration: "none !important",
  cursor: "pointer",
  marginRight:"20px",
  marginTop:"20px",
  "&:hover" :{
    color: "#ff6f61"
  },
  [theme.breakpoints.down('sm')]: {
    position: "relative",
    zIndex: "999",
    left: "20px",
    display: "block",
    cursor: "pointer",
    paddingTop: "20px"
  }
}));

export const LinkContainer: any = styled("div") <{ isClick?: boolean }>`
  margin-right: 110px;
  font-family: "Open Sans", sans-serif;
  .icon-acc {
    display: none;
  }
  .icon-acc1 {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 390px) and (max-width: 767px) {
    background-color: white;
    flex-direction: column;
    padding-top: 10px;
    position: absolute;
    margin-top: 30px;
    left: 45px;
    z-index: 999;
    top: 30px;
    width: 300px;
    display: ${(props) => (props.isClick ? "flex" : "none")};
    .icon-acc {
      position: relative;
      left: 20px;
      padding-top: 20px;
      display: block;
    }
    .icon-acc1 {
      position: relative;
      left: 20px;
      padding-top: 10px;
      display: block;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    color: black;
    justify-content: space-between;
    font-family: Open Sans;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    justify-content: space-between;
    a {
      margin-bottom: 10px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 16px;
    color: black;
    justify-content: space-between;
    font-family: Open Sans;
    display: flex;
    margin-right: 2px;
    gap: 10px;
    flex-wrap: wrap;
    font-size: 16px;
    justify-content: space-between;
    a {
      margin-bottom: 11px;
    }
  }
`;
