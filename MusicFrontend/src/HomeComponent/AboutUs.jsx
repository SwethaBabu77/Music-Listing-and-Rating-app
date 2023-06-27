import React from 'react'
import { Box, Slide,Button } from '@chakra-ui/react'

function AboutUs({onToggle}) {
    
  return (
             
          <>
            {/* <Button onClick={onToggle}>Click Me</Button> */}
            <Slide direction='bottom' in={true} style={{ zIndex: 10 }}>
              <Box
                p='40px'
                color='white'
                mt='4'
                bg='#24ab74'
                rounded='md'
                shadow='md'
              >
                <p>Welcome to the MUZIX, the ultimate music listing and rating app.
                MUZIX is designed to provide music lovers with a seamless experience to discover, listen to, and rate their favorite tunes.
Let's delve into the features and benefits of MUZIX.</p>
                <button onClick={onToggle}>Close</button>
              </Box>
            </Slide>
          </>
  )
}

export default AboutUs