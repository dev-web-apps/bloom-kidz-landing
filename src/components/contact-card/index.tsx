import React from 'react';
import { Box, Typography } from '@mui/material'; // assuming you're using Material-UI



const ContactCard: React.FC<IContactCard> = ({ icon, heading, phoneNumber }) => {
  return (
    <Box
      p={{xs:2,sm:3,lg:4}}
      borderRadius={"16px"}
      display="flex"
      alignItems='center'
      width={'300px'}
      gap={"12px"}
      bgcolor={"background.default"}
    >
      <img src={icon} alt="" height={50} width={50} />
      <Box>
        <Typography color={"#0D0D0D"} fontSize={"20px"}>
          {heading}
        </Typography>
        <Typography color={"#3E3E59CC"} fontSize={"16px"}>
          {phoneNumber}
        </Typography>
      </Box>
    </Box>
  );
}

export default ContactCard;
