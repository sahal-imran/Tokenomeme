import React, { useState, useRef } from 'react';
import { Box } from '@mui/system';
import Container from '@mui/system/Container';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import IcoButton from '../Common/IcoButton';
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


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


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function Home() {


    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event, _Clicked_Btn) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
        switch (_Clicked_Btn) {
            case 'Tokenomeme':
                handleClickTokenomeme();
                break;

            default:
                break;
        }
    };
    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Escape") {
            setOpen(false);
        }
    }
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);



    // Tokenomeme
    const [Tokenomeme, setTokenomeme] = React.useState(false);
    const handleClickTokenomeme = () => {
        setTokenomeme(true);
    };
    const handleCloseTokenomeme = () => {
        setTokenomeme(false);
    };

    const slider = useRef();

    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };



    return (
        <>
            <Box id='Home' sx={{ width: '100%', height: '100vh', position: 'relative', background: '#fff6e5', pt: 3 }} >
                {/* Navbar */}
                <Box sx={{ width: '511px', height: '67px', background: '#FFFFFF', boxShadow: '0px -6px 0px #FB8E00', borderRadius: '17px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', m: 'auto', px: 2 }} >
                    {/* Left */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                        <Button ref={anchorRef}
                            id="composition-button"
                            aria-controls={open ? "composition-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                            variant='contained'
                            sx={{ minWidth: '37px', width: '37px', height: '33px', p: 0, borderRadius: '4.07px', background: 'linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'none' }} >
                            <Image src={'/svg/menu.svg'} width={24} height={18} objectFit='contain' />
                        </Button>

                        {/* Menu Item */}
                        <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === "bottom-start" ? "left top" : "left bottom"
                                    }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList
                                                autoFocusItem={open}
                                                id="composition-menu"
                                                aria-labelledby="composition-button"
                                                onKeyDown={handleListKeyDown}
                                            >
                                                <MenuItem sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '19.5px', fontWeight: 500, color: '#413C58' }} onClick={(e) => handleClose(e, 'Tokenomeme')}>Tokenomeme</MenuItem>
                                                <MenuItem sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '19.5px', fontWeight: 500, color: '#413C58' }} onClick={(e) => handleClose(e, '')}>Laugh-To-Earn</MenuItem>
                                                <MenuItem sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '19.5px', fontWeight: 500, color: '#413C58' }} onClick={(e) => handleClose(e, '')}>Multichain Meme Coin</MenuItem>
                                                <MenuItem sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '19.5px', fontWeight: 500, color: '#413C58' }} onClick={(e) => handleClose(e, '')}>Multichain Troll Dao </MenuItem>
                                                <MenuItem sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '19.5px', fontWeight: 500, color: '#413C58' }} onClick={(e) => handleClose(e, '')}>Meme NFT Marketplace </MenuItem>
                                                <MenuItem sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '19.5px', fontWeight: 500, color: '#413C58' }} onClick={(e) => handleClose(e, '')}>Memeology420</MenuItem>
                                                <MenuItem sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '19.5px', fontWeight: 500, color: '#413C58' }} onClick={(e) => handleClose(e, '')}>Video Presentation</MenuItem>
                                                <MenuItem sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '19.5px', fontWeight: 500, color: '#413C58' }} onClick={(e) => handleClose(e, '')}>Chinkies NFT collection</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                        {/* Menu Item end here */}


                        <Button variant='text' sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '19.5px', fontWeight: 700, color: '#413C58', boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)', boxShadow: 'none', textTransform: 'capitalize', ml: 1, height: '33px', p: 0, borderRadius: '4.07px', "&:hover": { background: 'none' } }} >
                            Mint
                        </Button>
                        <Button variant='text' sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '19.5px', fontWeight: 700, color: '#413C58', boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)', boxShadow: 'none', textTransform: 'capitalize', height: '33px', p: 0, borderRadius: '4.07px', "&:hover": { background: 'none' } }} >
                            FAQ
                        </Button>
                        {/* Devider */}
                        <Box sx={{ width: '1px', height: '28px', background: '#211E1E', ml: 1 }} ></Box>
                    </Box>

                    {/* Right */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                        <Box sx={{ mr: 1 }} ><IcoButton Ico={'/svg/Traced.svg'} /></Box>
                        <Box sx={{ mr: 1 }} ><IcoButton Ico={'/svg/opensea.svg'} /></Box>
                        <Box sx={{ mr: 2 }} ><IcoButton Ico={'/svg/twitter.svg'} /></Box>
                        <Button variant='contained' sx={{ width: '116px', height: '36px', borderRadius: '55px', background: 'linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9', fontFamily: 'Montserrat', fontSize: '20px', lineHeight: '24.38px', fontWeight: 700, color: '#FFFFFF', textTransform: 'capitalize', boxShadow: 'none' }} >
                            Connect
                        </Button>
                    </Box>
                </Box>

                {/* Logo */}
                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', mt: '-50px', ml: 10, transition: 'all 0.3s ease', "&:hover img": { transform: 'scale(1.1)' } }} >
                    <Image src={'/svg/Logo.svg'} width={39.66} height={43.27} objectFit='contain' />
                    <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '20.95px', lineHeight: '25.54px', fontWeight: 700, color: '#413C58', ml: 1 }} >
                        Tokenmeme
                    </Typography>
                </Box>

                {/* Sleeping dog */}
                <Box sx={{ position: 'absolute', left: '400px', bottom: '200px', cursor: 'pointer' }} >
                    <Image src={'/gif/sleepingDog.gif'} width={200} height={100} objectFit='contain' />
                </Box>

                {/* Dog Food*/}
                <Box sx={{ position: 'absolute', left: '632px', bottom: '195px', cursor: 'pointer' }} >
                    <Image src={'/svg/bone.svg'} width={58} height={41} objectFit='contain' />
                </Box>

            </Box>


            {/* Dialog tokenomeme */}
            <Dialog
                open={Tokenomeme}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseTokenomeme}
                aria-describedby="alert-dialog-slide-description"
            >
                <Box id='Tokenomeme' sx={{ width: '1141px', height: '636px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                    {/* cross button */}
                    <IconButton onClick={handleCloseTokenomeme} aria-label="CloseIcon" sx={{ position: 'absolute', right: '6px', top: '6px' }} >
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
            </Dialog>
        </>
    )
}

export default Home