import React, { useState, useRef } from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';




const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
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


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function Chinkies_NFT_Collection({ Chinkies_NFT_Collection, setChinkies_NFT_Collection }) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [Mint, Set_Mint] = useState(0);

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
                open={Chinkies_NFT_Collection}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setChinkies_NFT_Collection(false)}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="lg"
                PaperProps={{
                    style: { borderRadius: '14px', overflow: { md: 'hidden', xs: 'auto' }, background: 'white' }
                }}
                fullScreen={fullScreen}
            >
                <Box className='AddBorder' sx={{ width: { md: '1141px', xs: '100%' }, height: { md: '636px', xs: 'auto' }, position: 'relative', overflow: { md: 'hidden', xs: 'auto' } }} >
                    <Box id='Chinkies_NFT_Collection' sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' }, backgroundColor: 'white' }} >
                        {/* cross button */}
                        <IconButton onClick={() => setChinkies_NFT_Collection(false)} aria-label="CloseIcon" sx={{ position: 'absolute', right: '6px', top: '6px' }} >
                            <CloseIcon sx={{ color: '#211E1E', fontSize: '24px' }} />
                        </IconButton>

                        {/* Dog Gif */}
                        <Box sx={{ position: 'absolute', left: '0px', bottom: '-16px', display: { md: 'block', xs: 'none' } }} >
                            <Image src={'/gif/circulatingDog.gif'} width={92.64} height={108.52} objectFit='contain' />
                        </Box>

                        {/* main Content */}
                        <Box id='SliderNFT' sx={{ width: { md: '40%', xs: '100%' }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', py: { md: 0, xs: 6 } }} >
                            <Box sx={{ width: '304.31px', position: 'relative', }} >
                                <Slider ref={c => (slider.current = c)} {...settings}>
                                    {
                                        Slider_Data.map((img, index) => {
                                            return <Box key={index} className='FlipCard' sx={{ width: '100%', height: '370.74px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px', overflow: 'hidden', position: 'relative' }} >
                                                <Image src={img.URL} layout='fill' objectFit='cover' />
                                            </Box>
                                        })
                                    }
                                </Slider>
                                <ArrowBackIosNewIcon onClick={() => previous()} sx={{
                                    transition: ' all 0.5s ease', fontSize: '28px', color: '#211E1E', cursor: 'pointer', position: 'absolute', top: '45%', left: '-40px', opacity: 0.6, "&:hover": {
                                        opacity: 1,
                                        transform: 'scale(1.2)',
                                    }
                                }} />
                                <ArrowForwardIosIcon onClick={() => next()} sx={{
                                    transition: ' all 0.5s ease', fontSize: '28px', color: '#211E1E', cursor: 'pointer', position: 'absolute', top: '45%', right: '-40px', opacity: 0.6, "&:hover": {
                                        opacity: 1,
                                        transform: 'scale(1.2)',
                                    }
                                }} />
                            </Box>
                        </Box>

                        <Box sx={{ width: { md: '60%', xs: '100%' }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: { md: 'start', xs: 'center' }, flexDirection: 'column', background: 'white', mt: { md: 0, xs: 8 }, pb: { md: 0, xs: 4 }, p: { md: 6, xs: 3 } }} >
                            <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: {md:'40px',xs:'30px'}, lineHeight: '48.76px', fontWeight: 800, color: '#413C58', textAlign: 'center' }} >
                                Mint your Chinkies
                            </Typography>
                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '18px', lineHeight: '24.3px', fontWeight: 400, color: '#823AFF', textAlign: { md: 'start', xs: 'center' }, maxWidth: '800px', my: 1 }} >
                                DeGenesis Program
                            </Typography>
                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '18px', lineHeight: '24.3px', fontWeight: 400, color: '#413C58', textAlign: { md: 'start', xs: 'center' }, maxWidth: '800px' }} >
                                So many surprises for our goooood boys
                            </Typography>
                            {
                                surprise.map((item, index) => {
                                    return <Typography key={index} variant='h3' sx={{ fontFamily: 'Lato', fontSize: '16px', lineHeight: '24px', fontWeight: 400, color: '#413C58', textAlign: { md: 'start', xs: 'center' }, maxWidth: '800px', mt: .5 }} >
                                        {item.message}
                                    </Typography>
                                })
                            }
                            <Button variant='contained' sx={{ width: '118px', height: '42px', borderRadius: '55px', background: 'linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%), #D9D9D9', fontFamily: 'Montserrat', fontSize: '20px', lineHeight: '24.38px', fontWeight: 700, color: '#FFFFFF', textTransform: 'capitalize', boxShadow: '0px 2px 17px rgba(244, 173, 49, 0.72)', "&:hover": { boxShadow: '0px 2px 17px rgba(244, 173, 49, 0.72)' }, my: 3 }} >
                                Buy
                            </Button>
                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '16px', lineHeight: '24px', fontWeight: 400, color: '#413C58', textAlign: { md: 'start', xs: 'center' }, maxWidth: '800px', mt: .5 }} >
                                All Chinkies are under CreaMemes Commons license. Do the fuck you want, it’s almost like CC0. You don’t need permission – as long as you put a percent of your earnings in our DAO. From now on, IP rights are about sharing value.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default Chinkies_NFT_Collection;

const Slider_Data = [
    {
        URL: '/Chinkies_NFT_carousel/Copie de 1.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 2.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 3.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 4.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 5.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 6.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 7.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 8.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 9.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 10.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 11.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 12.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 13.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 14.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 15.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 16.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 17.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 18.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 19.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 20.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 21.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 22.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 23.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 24.png'
    },
    {
        URL: '/Chinkies_NFT_carousel/Copie de 25.png'
    },

]

const surprise = [
    {
        message: '👉  Early access to everything'
    },
    {
        message: '👉  Voting rights in our multichain DAO'
    },
    {
        message: '👉  Laugh-to-earn coeff booster'
    },
    {
        message: '👉  50% Merchandising earnings in the DAO for community projects'
    },
    {
        message: '👉  Painting of your NFT (6 month hold)'
    },
    {
        message: '👉  SBT community badge'
    },
    {
        message: '👉  Clues to find a treasure'
    },
    {
        message: '👉  Invitation to Memecon festival & big meme parties'
    },
    {
        message: 'And….. easy, easy Chinkies don’t want to explain all in once '
    }
]