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
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                dots: false,
                slidesToShow: 1,
            }
        }
    ]
};


function Tokenomeme({ Tokenomeme, setTokenomeme }) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

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
                fullScreen={fullScreen}
            >
                <Box className='AddBorder AddBorderToToken' sx={{ width: { md: '1141px', xs: '100%' }, height: { md: '636px' }, position: 'relative', overflow: 'hidden' }} >
                    <Box id='Tokenomeme' sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', px: 3, py: 10 }} >
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
                        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: {md:'40px',xs:'30px'}, lineHeight: '48.76px', fontWeight: 800, color: '#413C58' }} >
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
                        <Box id="Tablet" sx={{ width: { md: '405.3px', xs: '95%' }, height: '265.82px', mt: { md: 2, xs: 4 }, display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                            <Box sx={{ width:{md:'340.53px',xs:'300px'}, height: {md:'245.35px',xs:'200px'}, overflow: 'auto', "&::-webkit-scrollbar": { width: '0px' } }} >
                                <img src="/svg/Tablet/1.svg" alt="1" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                <img src="/svg/Tablet/1.svg" alt="1" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                <img src="/svg/Tablet/1.svg" alt="1" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Box>
                        </Box>

                        <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '22px', fontStyle: 'italic', lineHeight: '29.7pxx', fontWeight: 800, color: '#413C58', mt: 4 }} >
                            Friends of Tokenomeme
                        </Typography>

                        <Box sx={{ width: { md: '70%', xs: '90%' }, position: 'relative', mt: 3, }} >
                            <Slider ref={c => (slider.current = c)} {...settings}>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', ml: 1 }} >
                                    <Box sx={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#000000', borderRadius: '4px' }} >
                                        <Image src={'/Slider/Video_presentation/CoinRivet.svg'} width={127.34} height={65.89} objectFit='contain' />
                                    </Box>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', ml: 1 }} >
                                    <Box sx={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#000000', borderRadius: '4px' }} >
                                        <Image src={'/Slider/Video_presentation/cryptoDaily.svg'} width={170.99} height={65.89} objectFit='contain' />
                                    </Box>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', ml: 1 }} >
                                    <Box sx={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#000000', borderRadius: '4px' }} >
                                        <Image src={'/Slider/Video_presentation/coinchapter.svg'} width={287.6} height={65.89} objectFit='contain' />
                                    </Box>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', ml: 1 }} >
                                    <Box sx={{ width: '95%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#000000', borderRadius: '4px' }} >
                                        <Image src={'/Slider/Video_presentation/coinmarketleague.svg'} width={174.52} height={65.89} objectFit='contain' />
                                    </Box>
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