import Image from 'next/image'
import { Box, VStack, Heading, Text, Button } from '@chakra-ui/react'

export function Banner() {
    return <Box bg = '#131313' color = 'white' py = '12'>
        <VStack spacing = '6' alignItems = 'center' py = '12'>
            <Heading as = 'h1' fontSize = '4xl' letterSpacing = '2px' textAlign = 'center'>Best CLI ever made.</Heading>
            <Text color = 'whiteAlpha.600' fontSize = 'sm' letterSpacing = '1.5px'>Modern tooling, sling UX and every bit from rappata to do any task.</Text>
            <Button variant = 'outline' borderColor = 'orange.600' _hover = {{ bg: 'trasparent', borderColor: 'white' }}>Download Now</Button>
            <Image src = '/cli.png' width = '640' height = '240' style = {{ borderRadius: '6px' }} alt = 'cli' />
        </VStack>
    </Box>
}