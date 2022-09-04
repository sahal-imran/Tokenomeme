import React, { useState, useRef } from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

function Laugh_To_Earn_Card({ Title, SubTitle, ImgURL }) {
  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '18px', lineHeight: '18.81px', fontWeight: 500, color: '#FB8E00', textAlign: 'center', minHeight: '40px', maxWidth: '135px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          {Title}
        </Typography>
        <Box className='AddBorderToCard' sx={{ width: '135px', height: '114px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', "&:hover": { filter: 'drop-shadow(0px 10px 16px rgba(0, 0, 0, 0.4))' }, mt: 2 }} >
          <Box sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Image src={ImgURL} width={91} height={64} objectFit='contain' />
          </Box>
        </Box>
        <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '16px', lineHeight: '21.6px', fontWeight: 400, color: '#413C58', textAlign: 'center', maxWidth: '135px', mt: 1 }} >
          {SubTitle}
        </Typography>
      </Box>
    </>
  )
}

export default Laugh_To_Earn_Card