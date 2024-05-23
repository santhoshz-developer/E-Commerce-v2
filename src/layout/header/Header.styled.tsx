import { Box, Button, Typography, styled} from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Link from "next/link";
import SearchIcon from "@/component/icon/SearchIcon";


export const BoxStyled = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(30, 40, 50, 0.05)",
  height: 120,
  margin: "0 auto",
  width: "100%",
  
  [theme.breakpoints.down('sm')]: {
    height: 60,
  },
  
  [theme.breakpoints.between('sm','md')]: {
    height: 120,
    zIndex: 999,
    width: "100%",

  },
  
  [theme.breakpoints.between('md','lg')]: {
    height: 140,
    zIndex: 999,
    width: "100%",
  },
  
  [theme.breakpoints.between('lg','xl')]: {
    height: 140,
    zIndex: 999,
  },
}));

export const SearchIconStyled = styled(SearchIcon)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    position: "relative",
    right: 30,
  },
  [theme.breakpoints.between('lg','xl')]: {
    position: "relative",
    left: 0,
  },
}));

export const AppBarStyled = styled(Box)(({ theme }) => ({
  height: 90,
  margin: "0 auto",
  width: "80%",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
  [theme.breakpoints.between('sm','md')]: {
    width: "80%",
  },
  [theme.breakpoints.between('md','lg')]: {
    width: "80%",
  },
  [theme.breakpoints.between('lg','xl')]: {
    width: "80%",
  },
}));

export const HeadLineStyled = styled("div")(({ theme }) => ({
  display: "flex",
  // [theme.breakpoints.down("sm")]: {
  //   fontSize: 17,
  //   position: "relative",
  //   bottom: 0,
  // },
  // [theme.breakpoints.down("md")]: {
  //   fontSize: 16,
  //   position: "relative",
  //   left: -100,
  // },
  // [theme.breakpoints.only("lg")]: {
  //   fontSize: 16,
  //   position: "relative",
  //   left: -100,
  // },
  // [theme.breakpoints.down("xl")]: {
  //   fontSize: 36,
  //   position: "relative",
  //   left: 100,
  // },
}));

export const FirstTypography = styled(Typography)(({ theme }) => ({
  fontSize: 35,
  position: "relative",
  left: 350,
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
    position: "relative",
    top: 0,
    left: 40,
    fontWeight: 100,  
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: "28px",
    position: "absolute",
    left: '150px',
    fontWeight: 600,
    top: 0,
    marginTop: "10px",
  },
  [theme.breakpoints.between('md','lg')]: {
    fontSize: 30,
    position: "absolute",
    left: 270,
    top: 0,
    marginTop: "10px",
    fontWeight: 600,
  },
  [theme.breakpoints.between('lg','xl')]: {
    fontSize: 28,
    position: "relative",
    left: 400,
    fontWeight: 600,
    
  },
  
 
}));

export const IconBtn = styled(Box)(({ theme }) => ({
  marginLeft: "650px",
  fontSize: 28,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.between('sm', 'md')]: {
    display: "flex",
    position: "relative",
    zIndex: 999,
    right: '340px',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    display: "flex",
    position: "relative",
    zIndex: 999,
    right: '160px',
  },
  [theme.breakpoints.between('lg','xl')]: {
    display: "flex",
    position: "relative",
    right: '-20px',
  },
  ".btn-user, .btn-shopping": {
    gap: 8,
    "&:hover": {
      color: "#ff6f61",
    },
  
  },
  ".btn-user": {
    marginRight: 20,
  },
  
}));

export const DehazeIconStyled = styled(DehazeIcon)(({ theme }) => ({
  display: "none",
  position: "relative",
  right: 20,
  zIndex: 999,
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    left: 160,
    display: "block",
  },
}));

export const LinkStyled = styled(Link)(({ theme }) => ({
  color: "black",
  textDecoration: "none !important",
  cursor: "pointer",
  marginRight: 20,
  marginTop: 20,
  "&:hover": {
    color: "#ff6f61",
  },
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    zIndex: 999,
    left: 20,
    display: "block",
    cursor: "pointer",
    paddingTop: 8,
  },
  [theme.breakpoints.up("sm")]: {
    position: "relative",
    zIndex: 999,
    left: 20,
    display: "block",
    cursor: "pointer",
    paddingTop: 8,
  },
}));

export const BagButtonStyled = styled(Button)(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    marginRight: "50px",
  },
}));

export const LinkContainer = styled("div")<{ isClick?: boolean }>(
  ({ theme, isClick }) => ({
    marginRight: 110,
    fontFamily: "Open Sans, sans-serif",
    ".icon-acc": {
      display: "none",
    },
    ".icon-acc1": {
      display: "none",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "white",
      flexDirection: "column",
      paddingTop: 10,
      position: "absolute",
      marginTop: 30,
      left: 35,
      zIndex: 999,
      top: 30,
      width: 315,
      display: isClick ? "flex" : "none",
      ".icon-acc": {
        position: "relative",
        left: 20,
        paddingTop: 20,
        display: "block",
      },
      ".icon-acc1": {
        position: "relative",
        left: 20,
        paddingTop: 10,
        display: "block",
      },
    },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "none",
      boxShadow: "none",
      color: "black",
      justifyContent: "space-between",
      fontFamily: "Open Sans",
      display: "flex",
      flexWrap: "wrap",
      fontSize: 16,
      position: "relative",
      bottom: "10px",
      a: {
        marginBottom: -20,
      },
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 17,
      color: "black",
      justifyContent: "space-between",
      fontFamily: "Open Sans",
      display: "flex",
      marginRight: 2,
      gap: 10,
      flexWrap: "wrap",

      a: {
        marginBottom: 11,
      },
    },
  })
);
