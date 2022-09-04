import React, { useState, useRef } from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Laugh_To_Earn_Card from '../Common/Laugh_To_Earn_Card';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                dots: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: false,
            }
        }
    ]
};


function Laugh_To_Earn({ Laugh_To_Earn, setLaugh_To_Earn }) {


    return (
        <>
            {/* Dialog tokenomeme */}
            <Dialog
                open={Laugh_To_Earn}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setLaugh_To_Earn(false)}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="lg"
                PaperProps={{
                    style: { borderRadius: '14px' }
                }}
            >
                <Box className='AddBorder' sx={{ width: '1141px', height: '636px', position: 'relative', overflow: 'hidden' }} >
                    <Box id='Laugh_To_Earn' sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        {/* cross button */}
                        <IconButton onClick={() => setLaugh_To_Earn(false)} aria-label="CloseIcon" sx={{ position: 'absolute', right: '6px', top: '6px' }} >
                            <CloseIcon sx={{ color: '#211E1E', fontSize: '24px' }} />
                        </IconButton>

                        {/* Dog Gif */}
                        <Box sx={{ position: 'absolute', left: '-20px', bottom: '-20px', }} >
                            <Image src={'/gif/DogeEnterOut.gif'} width={100} height={100} objectFit='contain' />
                        </Box>

                        {/* trollFace */}
                        <Box sx={{ position: 'absolute', right: '-30px', bottom: '-6px', }} >
                            <Image src={'/gif/simpson.gif'} width={167} height={120} objectFit='contain' />
                        </Box>

                        {/* Arrow */}
                        <Box sx={{ position: 'absolute', right: '32%', top: '12%', }} >
                            <Image src={'/svg/Arrow.svg'} width={56.11} height={22.09} objectFit='contain' />
                        </Box>

                        {/* main Content */}
                        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '40px', lineHeight: '48.76px', fontWeight: 800, color: '#413C58' }} >
                            Laugh-To-Earn
                        </Typography>
                        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '28px', lineHeight: '34.13px', fontWeight: 500, color: '#823AFF', my: 2 }} >
                            Gamification & Play 2 earn for memes
                        </Typography>
                        <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '18px', lineHeight: '24.3px', fontWeight: 400, color: '#211E1E', textAlign: 'center', maxWidth: '800px' }} >
                            Tokenomeme is a Web3 meme network & aggregator with SocialFi,<br /> GameFi and MemeFi elements.<br />
                            Win NFT trophies & off-chain community points by embracing meme culture.
                        </Typography>

                        {/* Cards */}
                        <Box sx={{ flexGrow: 1, width: '80%', mt: 8, maxHeight: { md: '250px' } }}>
                            <Grid container columnSpacing={0} rowSpacing={{ md: 0, xs: 4 }} columns={{ md: 15 }}>
                                <Grid item xs={12} md={3}>
                                    <Laugh_To_Earn_Card Title={'Proof of Meme'} SubTitle={'Memes making'} ImgURL={'/Laugh_To_Earn/bone_soda.svg'} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Laugh_To_Earn_Card Title={'Proof of Spread'} SubTitle={'Memes spreding'} ImgURL={'/Laugh_To_Earn/bone_cap.svg'} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Laugh_To_Earn_Card Title={'Proof of Collectible'} SubTitle={'Memes volorisation'} ImgURL={'/Laugh_To_Earn/bone_beret.svg'} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Laugh_To_Earn_Card Title={'Proof of Community'} SubTitle={'Comminities building & growth'} ImgURL={'/Laugh_To_Earn/bone_soda.svg'} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Laugh_To_Earn_Card Title={'Proof of Good boy'} SubTitle={'Engagement in our community & ecosystem'} ImgURL={'/Laugh_To_Earn/bone_soda.svg'} />
                                </Grid>
                            </Grid>
                        </Box>

                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default Laugh_To_Earn;