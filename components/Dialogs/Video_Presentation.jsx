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
import ReactPlayer from 'react-player';


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



function Video_Presentation({ Video_Presentation, setVideo_Presentation }) {

    const slider = useRef();

    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };

    return (
        <>
            <Dialog
                open={Video_Presentation}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setVideo_Presentation(false)}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="lg"
                PaperProps={{
                    style: { borderRadius: '14px' }
                }}
            >
                <Box className='AddBorder' sx={{ width: '1141px', height: '636px', position: 'relative', overflow: 'hidden' }} >
                    <Box id='Video_Presentation' sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        {/* cross button */}
                        <IconButton onClick={() => setVideo_Presentation(false)} aria-label="CloseIcon" sx={{ position: 'absolute', right: '6px', top: '6px' }} >
                            <CloseIcon sx={{ color: '#211E1E', fontSize: '24px' }} />
                        </IconButton>

                        <Box sx={{ position: 'absolute', left: '0px', bottom: '-16px', }} >
                            <Image src={'/gif/kyet.gif'} width={121.27} height={143.93} objectFit='contain' />
                        </Box>

                        {/* main Content */}
                        <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '35px', lineHeight: '42px', fontWeight: 400, textAlign: 'center', fontStyle: 'italic' }} className="GradientText" >
                            As Seen in
                        </Typography>

                        <Box sx={{ width: '80%', position: 'relative', mt: 3, }} >
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

                        <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'transparent',mt:3 }} >
                            <Box className='player-wrapper' sx={{ width: '60%', height: '370px', background: "transparent",borderRadius:'8px',overflow:'hidden' }} >
                                <ReactPlayer
                                    className='react-player'
                                    url='https://youtu.be/7Yve8g524lo'
                                    width='100%'
                                    height='100%'
                                    controls = {true}
                                />
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default Video_Presentation;