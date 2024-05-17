import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';


function UserIcon(props:SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path fill="#1E2832" d="M12.5 12.5C9.72656 12.5 7.5 10.2734 7.5 7.5C7.5 4.76562 9.72656 2.5 12.5 2.5C15.2344 2.5 17.5 4.76562 17.5 7.5C17.5 10.2734 15.2344 12.5 12.5 12.5ZM14.4531 14.375C18.2031 14.375 21.25 17.4219 21.25 21.1719C21.25 21.9141 20.625 22.5 19.8828 22.5H5.07812C4.33594 22.5 3.75 21.9141 3.75 21.1719C3.75 17.4219 6.75781 14.375 10.5078 14.375H14.4531Z"/>
      </SvgIcon>
    );
  }
  
  export default UserIcon;