import React, { useState, useRef } from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



function Multichain_Meme_Coin({ Multichain_Meme_Coin, setMultichain_Meme_Coin }) {


    return (
        <>
            <Dialog
                open={Multichain_Meme_Coin}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setMultichain_Meme_Coin(false)}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="lg"
                PaperProps={{
                    style: { borderRadius: '14px' }
                }}
            >
                <Box className='AddBorder' sx={{ width: '1141px', height: '636px', position: 'relative', overflow: 'hidden' }} >
                    <Box id='Multichain_Meme_Coin' sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        {/* cross button */}
                        <IconButton onClick={() => setMultichain_Meme_Coin(false)} aria-label="CloseIcon" sx={{ position: 'absolute', right: '6px', top: '6px' }} >
                            <CloseIcon sx={{ color: '#211E1E', fontSize: '24px' }} />
                        </IconButton>

                        {/* Dog Gif */}
                        <Box sx={{ position: 'absolute', left: '0px', bottom: '0px', }} >
                            <Image src={'/svg/cat.svg'} width={88} height={121} objectFit='contain' />
                        </Box>

                        {/* trollFace */}
                        <Box sx={{ position: 'absolute', right: '0px', bottom: '0px', }} >
                            <Image src={'/svg/simpson.svg'} width={154} height={154} objectFit='contain' />
                        </Box>

                        {/* main Content */}
                        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '40px', lineHeight: '48.76px', fontWeight: 800, color: '#413C58' }} >
                            Multichain Meme Coin
                        </Typography>
                        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '28px', lineHeight: '34.13px', fontWeight: 500, color: '#823AFF', my: 2 }} >
                            Hold to eat
                        </Typography>
                        <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '18px', lineHeight: '24.3px', fontWeight: 400, color: '#211E1E', textAlign: 'center', maxWidth: '800px' }} >
                            Choose your Blockchain & Swap your Krokets for CryptoBonies.<br />
                            Burn your BONIES to get them back.
                            It’s scalable – like your mom. But for now, she’s playing<br /> hard to get.
                        </Typography>

                        <Box sx={{mt:8}} >
                            <Image src={'/svg/multichain_map.svg'} width={748} height={255} objectFit='contain' />
                        </Box>

                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default Multichain_Meme_Coin;