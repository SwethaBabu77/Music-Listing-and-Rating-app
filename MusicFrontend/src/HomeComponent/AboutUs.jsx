import React from 'react'
import { Box, Slide,Button } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';

function AboutUs() {
    const { isOpen, onToggle } = useDisclosure()
  return (
             
          <>
            {/* <Button onClick={onToggle}>Click Me</Button> */}
            <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
              <Box
                p='40px'
                color='white'
                mt='4'
                bg='teal.500'
                rounded='md'
                shadow='md'
              >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolor rem eum commodi molestias atque tempora, suscipit nemo dolores saepe porro ex soluta quas quaerat obcaecati eveniet nobis ipsum mollitia.</p>
              </Box>
            </Slide>
          </>
  )
}

export default AboutUs