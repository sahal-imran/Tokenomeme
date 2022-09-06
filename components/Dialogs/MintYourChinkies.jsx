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


function MintYourChinkies({ MintYourChinkies, setMintYourChinkies }) {

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
                open={MintYourChinkies}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setMintYourChinkies(false)}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="lg"
                PaperProps={{
                    style: { borderRadius: '14px', overflow: { md: 'hidden', xs: 'auto' }, background: 'white' }
                }}
                fullScreen={fullScreen}
            >
                <Box className='AddBorder' sx={{ width: { md: '1141px', xs: '100%' }, height: { md: '636px', xs: 'auto' }, position: 'relative', overflow: { md: 'hidden', xs: 'auto' } }} >
                    <Box id='MintYourChinkies' sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' }, backgroundColor: 'white' }} >
                        {/* cross button */}
                        <IconButton onClick={() => setMintYourChinkies(false)} aria-label="CloseIcon" sx={{ position: 'absolute', right: '6px', top: '6px' }} >
                            <CloseIcon sx={{ color: '#211E1E', fontSize: '24px' }} />
                        </IconButton>

                        {/* Dog Gif */}
                        <Box sx={{ position: 'absolute', left: '0px', bottom: '-6px', display: { md: 'block', xs: 'none' } }} >
                            <Image src={'/svg/chinkies2.svg'} width={99} height={99} objectFit='contain' />
                        </Box>

                        {/* trollFace */}
                        <Box sx={{ position: 'absolute', right: '0px', bottom: '-20px', display: { md: 'block', xs: 'none' } }} >
                            <Image src={'/svg/chinkies1.svg'} width={120.18} height={162} objectFit='contain' />
                        </Box>

                        {/* main Content */}
                        <Box id='Slider' sx={{ width: { md: '40%', xs: '100%' }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', py: { md: 0, xs: 6 } }} >
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

                        <Box sx={{ width: { md: '60%', xs: '100%' }, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: 'white', mt: { md: 0, xs: 8 }, pb: { md: 0, xs: 4 } }} >
                            <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: { md: '40px', xs: '30px' }, lineHeight: '48.76px', fontWeight: 800, color: '#413C58' }} >
                                Mint your Chinkies
                            </Typography>
                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '18px', lineHeight: '24.3px', fontWeight: 400, color: '#211E1E', textAlign: 'center', maxWidth: '800px', my: 1 }} >
                                {`A 6969 NFT collection of degenerative Chinkies. Its the only way to<br /> become his bitch. Don't be a wimp, give up your freedom.`}
                            </Typography>
                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '18px', lineHeight: '24.3px', fontWeight: 400, color: '#FB8E00', textAlign: 'center', maxWidth: '800px' }} >
                                Price: 0.069 ETH + gas
                            </Typography>

                            <Box sx={{ flexGrow: 1, width: { md: '80%', xs: '90%' }, maxHeight: { md: '170px' }, mt: 4 }}>
                                <Grid container columnSpacing={{ md: 2, xs: 2 }} rowSpacing={{ md: 0, xs: 2 }}>
                                    <Grid item xs={6} md={3}>
                                        <Box className='FlipCard' sx={{ width: '100%', height: '146px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: { md: '-10px' } }} >
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '13.44px', lineHeight: '18.14px', fontWeight: 500, color: '#413C58', textAlign: 'center', textTransform: 'capitalize', maxWidth: '800px', mb: 1 }} >
                                                mint
                                            </Typography>
                                            <Image priority src={'/coins/eth.svg'} width={52} height={84} objectFit='contain' />
                                            <Typography className='GradientText' variant='h3' sx={{ fontFamily: 'Lato', fontSize: '13.44px', lineHeight: '18.14px', fontWeight: 800, color: '#413C58', textAlign: 'center', textTransform: 'capitalize', maxWidth: '800px', mt: 1 }} >
                                                0/6969
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Box className='FlipCard' sx={{ width: '100%', height: '146px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mb: { md: '-10px' } }} >
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '13.44px', lineHeight: '18.14px', fontWeight: 500, color: '#413C58', textAlign: 'center', textTransform: 'capitalize', maxWidth: '800px', mb: 1 }} >
                                                mint
                                            </Typography>
                                            <Image src={'/coins/tron.svg'} width={52} height={84} objectFit='contain' />
                                            <Typography className='GradientText' variant='h3' sx={{ fontFamily: 'Lato', fontSize: '13.44px', lineHeight: '18.14px', fontWeight: 800, color: '#413C58', textAlign: 'center', textTransform: 'capitalize', maxWidth: '800px', mt: 1 }} >
                                                0/6969
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Box className='FlipCard' sx={{ width: '100%', height: '146px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: { md: '-10px' } }} >
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '13.44px', lineHeight: '18.14px', fontWeight: 500, color: '#413C58', textAlign: 'center', textTransform: 'capitalize', maxWidth: '800px', mb: 1 }} >
                                                mint
                                            </Typography>
                                            <Image src={'/coins/polygon.svg'} width={52} height={84} objectFit='contain' />
                                            <Typography className='GradientText' variant='h3' sx={{ fontFamily: 'Lato', fontSize: '13.44px', lineHeight: '18.14px', fontWeight: 800, color: '#413C58', textAlign: 'center', textTransform: 'capitalize', maxWidth: '800px', mt: 1 }} >
                                                0/6969
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6} md={3}>
                                        <Box className='FlipCard' sx={{ width: '100%', height: '146px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mb: { md: '-10px' } }} >
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '13.44px', lineHeight: '18.14px', fontWeight: 500, color: '#413C58', textAlign: 'center', textTransform: 'capitalize', maxWidth: '800px', mb: 1 }} >
                                                mint
                                            </Typography>
                                            <Image src={'/coins/binance.svg'} width={52} height={84} objectFit='contain' />
                                            <Typography className='GradientText' variant='h3' sx={{ fontFamily: 'Lato', fontSize: '13.44px', lineHeight: '18.14px', fontWeight: 800, color: '#413C58', textAlign: 'center', textTransform: 'capitalize', maxWidth: '800px', mt: 1 }} >
                                                0/6969
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { md: 2, xs: 6 } }} >
                                <Box onClick={() => Set_Mint(Mint - 1)} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} >
                                    <Image src={'/svg/minus.svg'} width={26.72} height={27.21} objectFit='contain' />
                                </Box>
                                <Box className='FlipCard' sx={{ width: '159.79px', height: '33px', boxShadow: '0px 45.8283px 45.8283px -34.3712px rgba(31, 47, 70, 0.12)', borderRadius: '4px', mx: 2 }} >
                                    <input value={Mint} onChange={(e) => Set_Mint(e.target.value)} type="number" style={{ width: '100%', height: '100%', outline: 'none', border: 'none', backgroundColor: 'white', textAlign: 'center', fontFamily: 'Lato', fontSize: '21.14px', fontWeight: 600, color: '#413C58', }} />
                                </Box>
                                <Box onClick={() => Set_Mint(Mint + 1)} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} >
                                    <Image src={'/svg/plus.svg'} width={26.72} height={27.21} objectFit='contain' />
                                </Box>
                            </Box>

                            <Button variant='contained' sx={{ width: '150px', height: '48px', borderRadius: '55px', background: 'linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%), #D9D9D9', fontFamily: 'Montserrat', fontSize: '20px', lineHeight: '24.38px', fontWeight: 700, color: '#FFFFFF', textTransform: 'capitalize', boxShadow: '0px 2px 17px rgba(244, 173, 49, 0.72)', "&:hover": { boxShadow: '0px 2px 17px rgba(244, 173, 49, 0.72)' }, mt: 5 }} >
                                Opensea
                            </Button>

                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '16px', lineHeight: '135%', fontWeight: 400, color: '#413C58', textAlign: 'center', mt: 3 }} >
                                If you’re a DYOR addict, check our <Link sx={{ color: '#413C58', fontWeight: 700, textDecorationColor: '#413C58', cursor: 'pointer' }} >Genesis program</Link>
                            </Typography>

                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default MintYourChinkies;

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