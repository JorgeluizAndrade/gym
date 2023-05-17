import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:'212px', xs:'70px'},
        ml:{sm:'50px'}
    }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeigth={700}    
            sx={{fontSize:{lg:'44px', xs:'40px'}}} mb='23px' mt='20px'
        >
            WE GO JIM!!!
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Confira os exercícios mais efecaveis
        </Typography> 
        <Button 
        variant='contained' 
        color='error' 
        href='#exercises' 
        sx={{backgroundColor:'#ff2625', padding:'10px'}}
        
        
        >Explore os exercícios</Button>
        
        <Typography
        fontWeight={600}
        color="ff2625"
        sx={{opacity:0.1, display:{lg:'block', xs:'none'}}}
        fontSize="200px"
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt='banner'
        className='hero-banner-img'
        />
    </Box>
  )
}

export default HeroBanner
