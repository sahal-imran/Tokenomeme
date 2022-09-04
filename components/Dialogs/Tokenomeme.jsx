import React, { useState, useRef } from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import Slider from "react-slick";
import IconButton from '@mui/material/IconButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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


function Tokenomeme({ Tokenomeme, setTokenomeme }) {

    const slider = useRef();

    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };


    return (
        <>
            {/* Dialog tokenomeme */}
            <Dialog
                open={Tokenomeme}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setTokenomeme(false)}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="lg"
                PaperProps={{
                    style: { borderRadius: '14px' }
                }}
            >
                <Box className='AddBorder' sx={{ width: '1141px', height: '636px',position:'relative',overflow:'hidden'  }} >
                    <Box id='Tokenomeme' sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        {/* cross button */}
                        <IconButton onClick={() => setTokenomeme(false)} aria-label="CloseIcon" sx={{ position: 'absolute', right: '6px', top: '6px' }} >
                            <CloseIcon sx={{ color: '#211E1E', fontSize: '24px' }} />
                        </IconButton>
                        {/* trollFace */}
                        <Box sx={{ position: 'absolute', left: '10px', top: '10px', }} >
                            <Image src={'/gif/trollface.gif'} width={78} height={76} objectFit='contain' />
                        </Box>

                        {/* trollFace */}
                        <Box sx={{ position: 'absolute', left: '0px', bottom: '0px', }} >
                            <Image src={'/gif/nyancat-rainbow-cat.gif'} width={78} height={40} objectFit='contain' />
                        </Box>

                        {/* main Content */}
                        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '40px', lineHeight: '48.76px', fontWeight: 800, color: '#413C58' }} >
                            Tokenmeme
                        </Typography>
                        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '28px', lineHeight: '34.13px', fontWeight: 500, color: '#823AFF' }} >
                            Beyond viral
                        </Typography>
                        <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '18px', lineHeight: '24.3px', fontWeight: 400, color: '#211E1E', textAlign: 'center', maxWidth: '800px' }} >
                            The first multichain meme aggregator redesigning meme culture for communities.
                            Chinkies rewards every person on earth for spreading & collecting funny memes.
                        </Typography>

                        {/* Tablet */}
                        <Box id="Tablet" sx={{ width: '405.3px', height: '265.82px', mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                            <Box sx={{ width: '340.53px', height: '245.35px', overflow: 'auto', "&::-webkit-scrollbar": { width: '0px' } }} >
                                <img src="/svg/Tablet/1.svg" alt="1" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                <img src="/svg/Tablet/1.svg" alt="1" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                <img src="/svg/Tablet/1.svg" alt="1" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Box>
                        </Box>

                        <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '22px', fontStyle: 'italic', lineHeight: '29.7pxx', fontWeight: 800, color: '#413C58', mt: 2 }} >
                            Friends of Tokenomeme
                        </Typography>

                        <Box sx={{ width: '700px', position: 'relative', mt: 3 }} >
                            <Slider ref={c => (slider.current = c)} {...settings}>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Image src={'/Slider/Partners_logo/PepitePEIPs.svg'} width={267} height={80} objectFit='contain' />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Image src={'/Slider/Partners_logo/StrongerTogether.svg'} width={267} height={80} objectFit='contain' />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Image src={'/Slider/Partners_logo/PepitePEIPs.svg'} width={267} height={80} objectFit='contain' />
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Image src={'/Slider/Partners_logo/StrongerTogether.svg'} width={267} height={80} objectFit='contain' />
                                </Box>
                            </Slider>
                            <ArrowBackIosNewIcon onClick={() => previous()} sx={{
                                transition: ' all 0.5s ease', fontSize: '20px', color: '#413C58', cursor: 'pointer', position: 'absolute', top: '33%', left: '-20px', opacity: 0.6, "&:hover": {
                                    opacity: 1,
                                    transform: 'scale(1.2)',
                                }, display: { md: 'block', xs: 'none' }
                            }} />
                            <ArrowForwardIosIcon onClick={() => next()} sx={{
                                transition: ' all 0.5s ease', fontSize: '20px', color: '#413C58', cursor: 'pointer', position: 'absolute', top: '33%', right: '-20px', opacity: 0.6, "&:hover": {
                                    opacity: 1,
                                    transform: 'scale(1.2)',
                                }, display: { md: 'block', xs: 'none' }
                            }} />
                        </Box>

                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default Tokenomeme