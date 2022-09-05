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
import TokenomemeDialog from '../Dialogs/Tokenomeme';
import Laugh_To_EarnDialog from '../Dialogs/Laugh-To-Earn';
import Multichain_Meme_Coin_Dialog from '../Dialogs/Multichain_Meme_Coin';
import Multichain_Troll_Dao_Dialog from '../Dialogs/Multichain_Troll_Dao';
import Meme_NFT_Marketplace_Dialog from '../Dialogs/Meme_NFT_Marketplace';


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
            case 'Laugh_To_Earn':
                handleClickLaugh_To_Earn();
                break;
            case 'Multichain_Meme_Coin':
                handleClickMultichain_Meme_Coin();
                break;
            case 'Multichain_Troll_Dao':
                handleClickMultichain_Troll_Dao();
                break
            case 'Meme_NFT_Marketplace':
                handleClickMeme_NFT_Marketplace();
                break

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

    // Laugh_To_Earn
    const [Laugh_To_Earn, setLaugh_To_Earn] = React.useState(false);
    const handleClickLaugh_To_Earn = () => {
        setLaugh_To_Earn(true);
    };

    const [Multichain_Meme_Coin, setMultichain_Meme_Coin] = React.useState(false);
    const handleClickMultichain_Meme_Coin = () => {
        setMultichain_Meme_Coin(true);
    };

    const [Multichain_Troll_Dao, setMultichain_Troll_Dao] = React.useState(false);
    const handleClickMultichain_Troll_Dao = () => {
        setMultichain_Troll_Dao(true);
    };

    const [Meme_NFT_Marketplace, setMeme_NFT_Marketplace] = React.useState(false);
    const handleClickMeme_NFT_Marketplace = () => {
        setMeme_NFT_Marketplace(true);
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
                                                <MenuItem sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '19.5px', fontWeight: 500, color: '#413C58' }} onClick={(e) => handleClose(e, 'Laugh_To_Earn')}>Laugh-To-Earn</MenuItem>
                                                <MenuItem sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '19.5px', fontWeight: 500, color: '#413C58' }} onClick={(e) => handleClose(e, 'Multichain_Meme_Coin')}>Multichain Meme Coin</MenuItem>
                                                <MenuItem sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '19.5px', fontWeight: 500, color: '#413C58' }} onClick={(e) => handleClose(e, 'Multichain_Troll_Dao')}>Multichain Troll Dao </MenuItem>
                                                <MenuItem sx={{ fontFamily: 'Montserrat', fontSize: '16px', lineHeight: '19.5px', fontWeight: 500, color: '#413C58' }} onClick={(e) => handleClose(e, 'Meme_NFT_Marketplace')}>Meme NFT Marketplace </MenuItem>
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
                <Box sx={{ position: 'absolute', left: '26%', bottom: '28%', cursor: 'pointer' }} >
                    <Image src={'/gif/sleepingDog.gif'} width={200} height={100} objectFit='contain' />
                </Box>

                {/* Dog Food*/}
                <Box sx={{ position: 'absolute', left: '41.1%', bottom: '27%', cursor: 'pointer' }} >
                    <Image src={'/svg/bone.svg'} width={58} height={41} objectFit='contain' />
                </Box>

            </Box>


            {/* Dialogs */}
            <TokenomemeDialog Tokenomeme={Tokenomeme} setTokenomeme={setTokenomeme} />
            <Laugh_To_EarnDialog Laugh_To_Earn={Laugh_To_Earn} setLaugh_To_Earn={setLaugh_To_Earn} />
            <Multichain_Meme_Coin_Dialog Multichain_Meme_Coin={Multichain_Meme_Coin} setMultichain_Meme_Coin={setMultichain_Meme_Coin} />
            <Multichain_Troll_Dao_Dialog Multichain_Troll_Dao={Multichain_Troll_Dao} setMultichain_Troll_Dao={setMultichain_Troll_Dao} />
            <Meme_NFT_Marketplace_Dialog Meme_NFT_Marketplace={Meme_NFT_Marketplace} setMeme_NFT_Marketplace={setMeme_NFT_Marketplace} />
        </>
    )
}

export default Home