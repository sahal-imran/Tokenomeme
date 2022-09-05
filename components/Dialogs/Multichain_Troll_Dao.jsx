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



function Multichain_Troll_Dao({ Multichain_Troll_Dao, setMultichain_Troll_Dao }) {

    return (
        <>
            <Dialog
                open={Multichain_Troll_Dao}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setMultichain_Troll_Dao(false)}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="lg"
                PaperProps={{
                    style: { borderRadius: '14px' }
                }}
            >
                <Box className='AddBorder' sx={{ width: '1141px', height: '636px', position: 'relative', overflow: 'hidden' }} >
                    <Box id='Multichain_Troll_Dao' sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        {/* cross button */}
                        <IconButton onClick={() => setMultichain_Troll_Dao(false)} aria-label="CloseIcon" sx={{ position: 'absolute', right: '6px', top: '6px' }} >
                            <CloseIcon sx={{ color: '#211E1E', fontSize: '24px' }} />
                        </IconButton>

                        {/* Dog Gif */}
                        <Box sx={{ position: 'absolute', left: '0px', top: '0px', }} >
                            <Image src={'/svg/dogIco.svg'} width={99} height={99} objectFit='contain' />
                        </Box>

                        {/* trollFace */}
                        <Box sx={{ position: 'absolute', right: '50px', top: '23px', }} >
                            <Image src={'/svg/dance.svg'} width={80} height={99} objectFit='contain' />
                        </Box>

                        {/* main Content */}
                        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '40px', lineHeight: '48.76px', fontWeight: 800, color: '#413C58' }} >
                            Multichain Troll Dao
                        </Typography>
                        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '28px', lineHeight: '34.13px', fontWeight: 500, color: '#823AFF', my: 2 }} >
                            Join our meme DAO federation!
                        </Typography>
                        <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '18px', lineHeight: '24.3px', fontWeight: 400, color: '#211E1E', textAlign: 'center', maxWidth: '800px' }} >
                            Get involved in our army,  earn chinkies’ favors & vote with your Chinkies NFT.<br />
                            But first, prove your loyalty to him.
                        </Typography>

                        <Box sx={{ flexGrow: 1, width: '80%', mt: 8, maxHeight: { md: '300px' } }}>
                            <Grid container columnSpacing={{ md: 2 }} rowSpacing={{ md: 0, xs: 4 }}>
                                <Grid item xs={12} md={3}>
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', cursor: 'pointer', transition: 'all 0.3s ease', "&:hover div": { transform: 'translateY(-10px)' } }} >
                                        <Box className='FlipCard' sx={{ width: '100%', height: '216px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.3s ease' }} >
                                            <Image src={'/coins/eth.svg'} width={105} height={171} objectFit='contain' />
                                        </Box>
                                        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '24px', lineHeight: '29.26px', fontWeight: 700, color: '#413C58', textAlign: 'center', mt: 2 }} >
                                            Ethereum
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', cursor: 'pointer', transition: 'all 0.3s ease', "&:hover div": { transform: 'translateY(-10px)' } }} >
                                        <Box className='FlipCard' sx={{ width: '100%', height: '216px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.3s ease' }} >
                                            <Image src={'/coins/tron.svg'} width={105} height={171} objectFit='contain' />
                                        </Box>
                                        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '24px', lineHeight: '29.26px', fontWeight: 700, color: '#413C58', textAlign: 'center', mt: 2 }} >
                                            Tron
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', cursor: 'pointer', transition: 'all 0.3s ease', "&:hover div": { transform: 'translateY(-10px)' } }} >
                                        <Box className='FlipCard' sx={{ width: '100%', height: '216px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.3s ease' }} >
                                            <Image src={'/coins/polygon.svg'} width={105} height={171} objectFit='contain' />
                                        </Box>
                                        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '24px', lineHeight: '29.26px', fontWeight: 700, color: '#413C58', textAlign: 'center', mt: 2, textTransform: 'capitalize' }} >
                                            polygon
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', cursor: 'pointer', transition: 'all 0.3s ease', "&:hover div": { transform: 'translateY(-10px)' } }} >
                                        <Box className='FlipCard' sx={{ width: '100%', height: '216px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.3s ease' }} >
                                            <Image src={'/coins/binance.svg'} width={105} height={171} objectFit='contain' />
                                        </Box>
                                        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '24px', lineHeight: '29.26px', fontWeight: 700, color: '#413C58', textAlign: 'center', mt: 2 }} >
                                            BNBchain
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>


                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default Multichain_Troll_Dao;