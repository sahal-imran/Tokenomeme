import React, { useState, useRef } from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import ReactCardFlip from 'react-card-flip';
import AnchorLink from '@mui/material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



function Memeology420({ Memeology420, setMemeology420 }) {

    const [isFlipped, Set_Flipped] = useState(false);


    const [Flip_One_Card, Set_Flip_One_Card] = useState(false);
    const [Flip_Two_Card, Set_Flip_Two_Card] = useState(false);
    const [Flip_Three_Card, Set_Flip_Three_Card] = useState(false);
    const [Flip_Four_Card, Set_Flip_Four_Card] = useState(false);
    const [Flip_Five_Card, Set_FlipFiver_Card] = useState(false);


    const Click_One_Card = () => {
        Set_Flip_One_Card(true);
        Set_Flip_Two_Card(false);
        Set_Flip_Three_Card(false);
        Set_Flip_Four_Card(false);
        Set_FlipFiver_Card(false);
    }
    const Click_Two_Card = () => {
        Set_Flip_One_Card(false);
        Set_Flip_Two_Card(true);
        Set_Flip_Three_Card(false);
        Set_Flip_Four_Card(false);
        Set_FlipFiver_Card(false);
    }
    const Click_Three_Card = () => {
        Set_Flip_One_Card(false);
        Set_Flip_Two_Card(false);
        Set_Flip_Three_Card(true);
        Set_Flip_Four_Card(false);
        Set_FlipFiver_Card(false);
    }
    const Click_Four_Card = () => {
        Set_Flip_One_Card(false);
        Set_Flip_Two_Card(false);
        Set_Flip_Three_Card(false);
        Set_Flip_Four_Card(true);
        Set_FlipFiver_Card(false);
    }
    const Click_Five_Card = () => {
        Set_Flip_One_Card(false);
        Set_Flip_Two_Card(false);
        Set_Flip_Three_Card(false);
        Set_Flip_Four_Card(false);
        Set_FlipFiver_Card(true);
    }
    const Back = () => {
        Set_Flip_One_Card(false);
        Set_Flip_Two_Card(false);
        Set_Flip_Three_Card(false);
        Set_Flip_Four_Card(false);
        Set_FlipFiver_Card(false);
    }


    return (
        <>
            <Dialog
                open={Memeology420}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setMemeology420(false)}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="lg"
                PaperProps={{
                    style: { borderRadius: '14px' }
                }}
            >
                <Box className='AddBorder' sx={{ width: '1141px', height: '636px', position: 'relative', overflow: 'hidden' }} >
                    <Box id='Memeology420' sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        {/* cross button */}
                        <IconButton onClick={() => setMemeology420(false)} aria-label="CloseIcon" sx={{ position: 'absolute', right: '6px', top: '6px' }} >
                            <CloseIcon sx={{ color: '#211E1E', fontSize: '24px' }} />
                        </IconButton>

                        {/* Dog Gif */}
                        <Box sx={{ position: 'absolute', left: '0px', top: '0px', }} >
                            <Image src={'/svg/ranatigrena2.svg'} width={172} height={123} objectFit='contain' />
                        </Box>

                        {/* main Content */}
                        <Typography variant='h3' sx={{ fontFamily: 'Montserrat', fontSize: '40px', lineHeight: '48.76px', fontWeight: 800, color: '#413C58' }} >
                            Memeology420
                        </Typography>
                        <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '18px', lineHeight: '24.3px', fontWeight: 400, color: '#211E1E', textAlign: 'center', maxWidth: '800px', mt: 1 }} >
                            Buy our Team. Chinkies turned his own slaves into<br /> NFTs. No utility.
                        </Typography>

                        <Button variant='contained' sx={{ width: '150px', height: '48px', borderRadius: '55px', background: 'linear-gradient(116.12deg, #F46531 8.93%, #F46E31 18.56%, #F48631 34.22%, #F4AD31 53.86%, #F4B331 56.44%, #F4B331 103.58%, #F4E795 137.56%), #D9D9D9', fontFamily: 'Montserrat', fontSize: '20px', lineHeight: '24.38px', fontWeight: 700, color: '#FFFFFF', textTransform: 'capitalize', boxShadow: 'none', mt: 2 }} >
                            Opensea
                        </Button>

                        <Box sx={{ flexGrow: 1, width: '80%', mt: 8, maxHeight: { md: '300px' } }}>
                            <Grid container columnSpacing={0} rowSpacing={{ md: 0, xs: 4 }} columns={{ md: 15 }}>
                                <Grid item xs={12} md={3}>
                                    <ReactCardFlip isFlipped={Flip_One_Card} flipDirection="horizontal">
                                        {/* Front */}
                                        <Box onClick={Click_One_Card} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { filter: 'drop-shadow(0px 10px 16px rgba(0, 0, 0, 0.4))' } }} >
                                            <Box className='FlipCard FlipCardBGTransparent' sx={{ width: '171px', height: '229px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.3s ease', borderRadius: '4px', overflow: 'hidden' }} >
                                                <Image src={'/FlipCard/1.jpg'} width={171} height={229} objectFit='cover' />
                                            </Box>
                                        </Box>

                                        {/* Back */}
                                        <Box onClick={Back} sx={{ width: '171px', height: '229px', m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', cursor: 'pointer', transition: 'all 0.3s ease', background: 'linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)', borderRadius: '4px', p: 1 }} >
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '20px', lineHeight: '23.6px', fontWeight: 700, color: 'white', textAlign: 'center' }} >
                                                Augustin<br /> Louet-Prely
                                            </Typography>
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '14px', lineHeight: '16.52px', fontWeight: 400, color: 'white', textAlign: 'center', my: 1 }} >
                                                (Chicken Father)
                                            </Typography>
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '14px', lineHeight: '16.52px', fontWeight: 400, color: 'white', textAlign: 'center' }} >
                                                By Tokenomeme
                                                Gus shooting the next chicken of the Caribbean
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                                <AnchorLink href='' sx={{ cursor: 'pointer', textDecorationColor: '#FB8E00', mr: 1 }} >
                                                    <TwitterIcon sx={{ color: 'white', fontSize: '20px' }} />
                                                </AnchorLink>
                                                <AnchorLink href='' sx={{ cursor: 'pointer', textDecorationColor: '#FB8E00', mr: 1 }} >
                                                    <FacebookIcon sx={{ color: 'white', fontSize: '20px' }} />
                                                </AnchorLink>
                                                <AnchorLink href='' sx={{ cursor: 'pointer', textDecorationColor: '#FB8E00', mr: 1 }} >
                                                    <LinkedInIcon sx={{ color: 'white', fontSize: '20px' }} />
                                                </AnchorLink>
                                            </Box>
                                        </Box>
                                    </ReactCardFlip>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <ReactCardFlip isFlipped={Flip_Two_Card} flipDirection="horizontal">
                                        {/* Front */}
                                        <Box onClick={Click_Two_Card} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { filter: 'drop-shadow(0px 10px 16px rgba(0, 0, 0, 0.4))' } }} >
                                            <Box className='FlipCard FlipCardBGTransparent' sx={{ width: '171px', height: '229px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.3s ease', borderRadius: '4px', overflow: 'hidden' }} >
                                                <Image src={'/FlipCard/2.png'} width={171} height={229} objectFit='cover' />
                                            </Box>
                                        </Box>

                                        {/* Back */}
                                        <Box onClick={Back} sx={{ width: '171px', height: '229px', m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', cursor: 'pointer', transition: 'all 0.3s ease', background: 'linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)', borderRadius: '4px', p: 1 }} >
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '20px', lineHeight: '23.6px', fontWeight: 700, color: 'white', textAlign: 'center' }} >
                                                Augustin<br /> Louet-Prely
                                            </Typography>
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '14px', lineHeight: '16.52px', fontWeight: 400, color: 'white', textAlign: 'center', my: 1 }} >
                                                (Chicken Father)
                                            </Typography>
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '14px', lineHeight: '16.52px', fontWeight: 400, color: 'white', textAlign: 'center' }} >
                                                By Tokenomeme
                                                Gus shooting the next chicken of the Caribbean
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                                <AnchorLink href='' sx={{ cursor: 'pointer', textDecorationColor: '#FB8E00', mr: 1 }} >
                                                    <TwitterIcon sx={{ color: 'white', fontSize: '20px' }} />
                                                </AnchorLink>
                                                <AnchorLink href='' sx={{ cursor: 'pointer', textDecorationColor: '#FB8E00', mr: 1 }} >
                                                    <FacebookIcon sx={{ color: 'white', fontSize: '20px' }} />
                                                </AnchorLink>
                                                <AnchorLink href='' sx={{ cursor: 'pointer', textDecorationColor: '#FB8E00', mr: 1 }} >
                                                    <LinkedInIcon sx={{ color: 'white', fontSize: '20px' }} />
                                                </AnchorLink>
                                            </Box>
                                        </Box>
                                    </ReactCardFlip>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <ReactCardFlip isFlipped={Flip_Three_Card} flipDirection="horizontal">
                                        {/* Front */}
                                        <Box onClick={Click_Three_Card} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { filter: 'drop-shadow(0px 10px 16px rgba(0, 0, 0, 0.4))' } }} >
                                            <Box className='FlipCard FlipCardBGTransparent' sx={{ width: '171px', height: '229px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.3s ease', borderRadius: '4px', overflow: 'hidden' }} >
                                                <Image src={'/FlipCard/3.jpg'} width={171} height={229} objectFit='cover' />
                                            </Box>
                                        </Box>

                                        {/* Back */}
                                        <Box onClick={Back} sx={{ width: '171px', height: '229px', m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', cursor: 'pointer', transition: 'all 0.3s ease', background: 'linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)', borderRadius: '4px', p: 1 }} >
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '20px', lineHeight: '23.6px', fontWeight: 700, color: 'white', textAlign: 'center' }} >
                                                Augustin<br /> Louet-Prely
                                            </Typography>
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '14px', lineHeight: '16.52px', fontWeight: 400, color: 'white', textAlign: 'center', my: 1 }} >
                                                (Chicken Father)
                                            </Typography>
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '14px', lineHeight: '16.52px', fontWeight: 400, color: 'white', textAlign: 'center' }} >
                                                By Tokenomeme
                                                Gus shooting the next chicken of the Caribbean
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                                <AnchorLink href='' sx={{ cursor: 'pointer', textDecorationColor: '#FB8E00', mr: 1 }} >
                                                    <TwitterIcon sx={{ color: 'white', fontSize: '20px' }} />
                                                </AnchorLink>
                                                <AnchorLink href='' sx={{ cursor: 'pointer', textDecorationColor: '#FB8E00', mr: 1 }} >
                                                    <FacebookIcon sx={{ color: 'white', fontSize: '20px' }} />
                                                </AnchorLink>
                                                <AnchorLink href='' sx={{ cursor: 'pointer', textDecorationColor: '#FB8E00', mr: 1 }} >
                                                    <LinkedInIcon sx={{ color: 'white', fontSize: '20px' }} />
                                                </AnchorLink>
                                            </Box>
                                        </Box>
                                    </ReactCardFlip>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <ReactCardFlip isFlipped={Flip_Four_Card} flipDirection="horizontal">
                                        {/* Front */}
                                        <Box onClick={Click_Four_Card} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { filter: 'drop-shadow(0px 10px 16px rgba(0, 0, 0, 0.4))' } }} >
                                            <Box className='FlipCard FlipCardBGTransparent' sx={{ width: '171px', height: '229px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.3s ease', borderRadius: '4px', overflow: 'hidden' }} >
                                                <Image src={'/FlipCard/4.png'} width={171} height={229} objectFit='cover' />
                                            </Box>
                                        </Box>

                                        {/* Back */}
                                        <Box onClick={Back} sx={{ width: '171px', height: '229px', m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', cursor: 'pointer', transition: 'all 0.3s ease', background: 'linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)', borderRadius: '4px', p: 1 }} >
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '20px', lineHeight: '23.6px', fontWeight: 700, color: 'white', textAlign: 'center' }} >
                                                Augustin<br /> Louet-Prely
                                            </Typography>
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '14px', lineHeight: '16.52px', fontWeight: 400, color: 'white', textAlign: 'center', my: 1 }} >
                                                (Chicken Father)
                                            </Typography>
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '14px', lineHeight: '16.52px', fontWeight: 400, color: 'white', textAlign: 'center' }} >
                                                By Tokenomeme
                                                Gus shooting the next chicken of the Caribbean
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                                <AnchorLink href='' sx={{ cursor: 'pointer', textDecorationColor: '#FB8E00', mr: 1 }} >
                                                    <TwitterIcon sx={{ color: 'white', fontSize: '20px' }} />
                                                </AnchorLink>
                                                <AnchorLink href='' sx={{ cursor: 'pointer', textDecorationColor: '#FB8E00', mr: 1 }} >
                                                    <FacebookIcon sx={{ color: 'white', fontSize: '20px' }} />
                                                </AnchorLink>
                                                <AnchorLink href='' sx={{ cursor: 'pointer', textDecorationColor: '#FB8E00', mr: 1 }} >
                                                    <LinkedInIcon sx={{ color: 'white', fontSize: '20px' }} />
                                                </AnchorLink>
                                            </Box>
                                        </Box>
                                    </ReactCardFlip>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <ReactCardFlip isFlipped={Flip_Five_Card} flipDirection="horizontal">
                                        {/* Front */}
                                        <Box onClick={Click_Five_Card} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { filter: 'drop-shadow(0px 10px 16px rgba(0, 0, 0, 0.4))' } }} >
                                            <Box className='FlipCard FlipCardBGTransparent' sx={{ width: '171px', height: '229px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.3s ease', borderRadius: '4px', overflow: 'hidden' }} >
                                                <Image src={'/FlipCard/5.jpg'} width={171} height={229} objectFit='cover' />
                                            </Box>
                                        </Box>

                                        {/* Back */}
                                        <Box onClick={Back} sx={{ width: '171px', height: '229px', m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', cursor: 'pointer', transition: 'all 0.3s ease', background: 'linear-gradient(236.69deg, #FB8E00 6.11%, #823AFF 97.1%)', borderRadius: '4px', p: 1 }} >
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '20px', lineHeight: '23.6px', fontWeight: 700, color: 'white', textAlign: 'center' }} >
                                                Augustin<br /> Louet-Prely
                                            </Typography>
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '14px', lineHeight: '16.52px', fontWeight: 400, color: 'white', textAlign: 'center', my: 1 }} >
                                                (Chicken Father)
                                            </Typography>
                                            <Typography variant='h3' sx={{ fontFamily: 'Lato', fontSize: '14px', lineHeight: '16.52px', fontWeight: 400, color: 'white', textAlign: 'center' }} >
                                                By Tokenomeme
                                                Gus shooting the next chicken of the Caribbean
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                                <AnchorLink href='' sx={{ cursor: 'pointer', textDecorationColor: '#FB8E00', mr: 1 }} >
                                                    <TwitterIcon sx={{ color: 'white', fontSize: '20px' }} />
                                                </AnchorLink>
                                                <AnchorLink href='' sx={{ cursor: 'pointer', textDecorationColor: '#FB8E00', mr: 1 }} >
                                                    <FacebookIcon sx={{ color: 'white', fontSize: '20px' }} />
                                                </AnchorLink>
                                                <AnchorLink href='' sx={{ cursor: 'pointer', textDecorationColor: '#FB8E00', mr: 1 }} >
                                                    <LinkedInIcon sx={{ color: 'white', fontSize: '20px' }} />
                                                </AnchorLink>
                                            </Box>
                                        </Box>
                                    </ReactCardFlip>
                                </Grid>
                            </Grid>
                        </Box>


                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default Memeology420;