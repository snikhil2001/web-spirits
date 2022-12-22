import { Box , Image} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

export default function Navbar(){

  return (
    <Box textAlign={'left'} p={'4'} bg={'black'}>
           <Image src="https://i.ibb.co/Q8146sN/logo.png" width="100px" />
    </Box>
  )
}
