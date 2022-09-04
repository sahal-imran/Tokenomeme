import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/system';


function IcoButton({ Width = '28px', Height = '28px', Ico }) {
    return (
        <Box sx={{ width: `${Width}`, height: `${Height}`, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9', overflow: 'hidden', borderRadius: '50%', cursor: 'pointer' }} >
            <Image src={Ico} priority width={17} height={15} objectFit='contain' />
        </Box>
    )
}

export default IcoButton