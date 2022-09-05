import React, { useState, useRef } from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import AnchorLink from '@mui/material/Link';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



function Meme_NFT_Marketplace({ Meme_NFT_Marketplace, setMeme_NFT_Marketplace }) {


    return (
        <>
            <Dialog
                open={Meme_NFT_Marketplace}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setMeme_NFT_Marketplace(false)}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="lg"
                PaperProps={{
                    style: { borderRadius: '14px' }
                }}
            >
                <Box className='AddBorder' sx={{ width: '1141px', height: '636px', position: 'relative', overflow: 'hidden' }} >
                    <Box id='Meme_NFT_Marketplace' sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        {/* cross button */}
                        <IconButton onClick={() => setMeme_NFT_Marketplace(false)} aria-label="CloseIcon" sx={{ position: 'absolute', right: '6px', top: '6px' }} >
                            <CloseIcon sx={{ color: '#211E1E', fontSize: '24px' }} />
                        </IconButton>

                        {/* green ico */}
                        <Box sx={{ position: 'absolute', left: '12%', top: '5%', }} >
                            <Image src={'/svg/ranatigrena.svg'} width={73} height={103} objectFit='contain' />
                        </Box>

                        {/* Funny Child */}
                        <Box sx={{ position: 'absolute', right: '12%', top: '5%', }} >
                            <Image src={'/svg/funnychild.svg'} width={91.84} height={106} objectFit='contain' />
                        </Box>

                        {/* Dog Gif */}
                        <Box sx={{ position: 'absolute', left: '0px', bottom: '0px', }} >
                            <Image src={'/gif/awkward.gif'} width={76} height={121} objectFit='contain' />
                        </Box>

                        {/* trollFace */}
                        <Box sx={{ position: 'absolute', right: '0px', bottom: '-6px', }} >
                            <Image src={'/gif/confused-cat.gif'} width={155} height={111} objectFit='contain' />
                        </Box>

                        {/* main Content */}
                        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '40px', lineHeight: '48.76px', fontWeight: 800, color: '#413C58' }} >
                            Meme NFT Marketplace
                        </Typography>
                        <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '18px', lineHeight: '24.3px', fontWeight: 400, color: '#211E1E', textAlign: 'center', maxWidth: '800px', mt: 1 }} >
                            Turn each meme into collectible laugh. Sell your house to acquire the NFT of<br />your favorite meme. Then share your happiness in the street
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2 }} >
                            <Image src={'/svg/memeNFTmarketplace_gif 1.svg'} width={272} height={363} objectFit='contain' />
                        </Box>

                        <AnchorLink sx={{ color: '#FB8E00', fontFamily: 'Lato', fontSize: '22px', lineHeight: '135%', fontWeight: 900, textTransform: 'capitalize', cursor: 'pointer', textDecorationColor: '#FB8E00',mt:2 }} >
                            Find out more
                        </AnchorLink>

                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default Meme_NFT_Marketplace;