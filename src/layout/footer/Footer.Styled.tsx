import { FacebookIcon } from "@/component/icon/FaceBookIcon";
import { InstraGramIcon } from "@/component/icon/InstrgramIcon";
import { LinkedInIcon } from "@/component/icon/LinkedInIcon";
import { TwitterIcon } from "@/component/icon/TwitterIcon";
import { appColors } from "@/theme/color.Config";
import { Box, Button, Typography, styled } from "@mui/material";

export const ToppDiv = styled("div")`

  ${({ theme }) => theme.breakpoints.down('sm')} {
    top: -150px;
    position: relative;
    height: 0;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    height: 0;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} { 
    height: 0;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} { 
    height: 0;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  position: relative;
  top: 150px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    left: -100px;
    position: relative;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    display: flex;
    position: relative;
    left: -80px;
    top: 180px;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    height: 600px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} { 
    display: flex;
    position: relative;
    top: 80px;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} { 
    display: flex;
    position: relative;
    top: 130px;
  }
`;
export const DivWrapper = styled("div")`
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.between('md','lg')} { 
    cursor: pointer;
    display: flex;
    gap: 5px;
  }
`;

export const CatTypography = styled(Typography)`
line-height: 30px;

${({ theme }) => theme.breakpoints.down('sm')} {
  left: -50px;
  position: relative;

}

${({ theme }) => theme.breakpoints.between('sm','md')} {
  display: flex;
  position: relative;
  left: 400px;
  bottom: 260px; 
  width: 100%
  font-size: 25px;
}

${({ theme }) => theme.breakpoints.between('md','lg')} { 
  display: flex;
  position: relative;
  left: 190px;
  top: 10px;
  width: 100%
  font-size: 25px;
}
${({ theme }) => theme.breakpoints.between('lg','xl')} { 
  display: flex;
  position: relative;
  left: 130px;
  top: 10px;
}
  
`;
export const CatTypography1 = styled(Typography)`
line-height: 30px;
font-size:13px;
color:rgba(30, 40, 50, 1);
cursor:pointer;
&:hover{
   color:#FF6F61;
}

${({ theme }) => theme.breakpoints.down('sm')} {
  left: -50px;
  position: relative;

}

${({ theme }) => theme.breakpoints.between('sm','md')} {
  display: flex;
  position: relative;
  left: 400px;
  bottom: 260px; 
  width: 100%
  font-size: 25px;
  
}

${({ theme }) => theme.breakpoints.between('md','lg')} { 
  display: flex;
  position: relative;
  left: 190px;
  top: 10px;
  width: 100%
  font-size: 30px;
  
}
${({ theme }) => theme.breakpoints.between('lg','xl')} { 
  display: flex;
  position: relative;
  left: 130px;
  top: 10px;
  width: 100%
  font-size: 30px;
  
}
`;

export const AbTypography = styled(Typography)`
  line-height: 30px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    left: -180px;
    position: relative;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    position: relative;
    left: -180px;
    width: 100%;
    bottom: 150px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} { 
    position: relative;
    left: 180px;
    width: 100%;
    top: 8px;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} { 
    position: relative;
    left: 120px;
    width: 100%;
    top: 6px;
  }
`;
export const AbTypography1 = styled(Typography)`
  line-height: 30px;
  font-size: 13px;
  color: rgba(30, 40, 50, 1);
  cursor: pointer;
  &:hover {
    color: #ff6f61;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    left: -180px;
    position: relative;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    position: relative;
    left: -180px;
    width: 100%;
    bottom: 150px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    position: relative;
    left: 180px;
    width: 100%;
    top: 8px;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} {
    position: relative;
    left: 120px;
    width: 100%;
    top: 8px;
  }
`;

export const CusTypography = styled(Typography)`
line-height: 28px;

${({ theme }) => theme.breakpoints.down('sm')} {
  left: -50px;
  position: relative;

}

${({ theme }) => theme.breakpoints.between('sm','md')} {
  display: flex;
  position: absolute;
  left: 550px;
  bottom: 330px; 
  width: 100%
  font-size: 25px;
}

${({ theme }) => theme.breakpoints.between('md','lg')} {
  display: flex;
  position: relative;
  right: 50px;
  top: 50px;
  width: 100%
  font-size: 25px;
}
${({ theme }) => theme.breakpoints.between('lg','xl')} {
    display: flex;
    position: relative;
    right: 0px;
    top: 28px;
    width: 100%
    font-size: 25px;
}

`;
export const CusTypography1 = styled(Typography)`
line-height: 28px;
font-size:13px;
color:rgba(30, 40, 50, 1);
cursor:pointer;
&:hover{
  color:#FF6F61;
}
${({ theme }) => theme.breakpoints.down('sm')} {
  left: -50px;
  position: relative;
  margin-top:10px;

}

${({ theme }) => theme.breakpoints.between('sm','md')} {
  display: flex;
  position: relative;
  left: 360px;
  bottom: 320px; 
  width: 100%
  font-size: 25px;
}

${({ theme }) => theme.breakpoints.between('md','lg')} {
  display: flex;
  position: relative;
  right: 50px;
  top: 50px;
  width: 100%
  font-size: 25px;
}
${({ theme }) => theme.breakpoints.between('lg','xl')} {
  display: flex;
  position: relative;
  right: 0px;
  top: 32px;
  width: 100%
  font-size: 25px;
}

`;
export const BottomContainer = styled(Box)<{
  bgcolor: string;
  textcolor: string;
}>`
  border: 1px solid black;
  background: ${({ bgcolor }) => bgcolor || appColors["white"]};
  color: ${({ textcolor }) => textcolor || appColors["black"]};
  display: flex;
  height: 62px;
  position: relative;
  top: 160px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: flex;
    margin-top: 30px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    display: flex;
    height: 52px;
    position: relative;
    top: 250px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    display: flex;
    height: 52px;
    position: relative;
    top: 185px;
  }

`;

export const TopicDiv = styled("div")`
  margin-top: 12px;
  margin-left: 150px;
  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 12px;
    margin-left: 5px;
    font-size: 13px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    margin-top: 12px;
    margin-left: 50px;
    font-size: 13px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    margin-top: 12px;
    margin-left: 130px;
    font-size: 13px;
  }
  ${({ theme }) => theme.breakpoints.between('lg','xl')} {
    margin-top: 12px;
    margin-left: 130px;
    font-size: 13px;
  }
`;

export const LogDiv = styled("div")`
  margin-top: 14px;
  margin-left: 290px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 10px;
    margin-left: 3px;

    img {
      height: 20px !important;
      width: 200px !important;
    }
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    margin-top: 10px;
    margin-left: 100px;
  }
  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    margin-top: 10px;
    margin-left: 120px;
  }

  @media (min-width: 1440px) {
    margin-left: 400px;
  }
`;

export const StyledButton = styled(Button)`
  margin-left: 390px;
  color: white;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-left: 0px;
    font-size: 13px;
  }

  ${({ theme }) => theme.breakpoints.between('sm','md')} {
    margin-left: 100px;
    color: white;
    font-size: 13px;
  }

  ${({ theme }) => theme.breakpoints.between('md','lg')} {
    margin-left: 200px;
    color: white;
    font-size: 13px;
  }

  ${({ theme }) => theme.breakpoints.between('lg','xl')} {
    margin-left: 400px;
  }
`;
export const FacebookIconStyled = styled(FacebookIcon)`
  margin-left: 20px;
  font-size: 40px;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 5px;
`;

export const TwitterIconStyled = styled(TwitterIcon)`
  margin-left: 20px;
  font-size: 40px;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 5px;
`;

export const LinkedInIconStyled = styled(LinkedInIcon)`
  margin-left: 20px;
  font-size: 40px;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 5px;
`;

export const InstraGramIconStyled = styled(InstraGramIcon)`
  margin-left: 20px;
  font-size: 40px;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 5px;
`;
