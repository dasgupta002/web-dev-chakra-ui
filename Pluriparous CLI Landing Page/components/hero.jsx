import { useState, useEffect } from 'react'
import { Box, VStack, Heading, HStack, Text, Button } from '@chakra-ui/react'
import { UilAngleRight, UilApple, UilDiscord, UilIntercom, UilOpera, UilSwiggy, UilTumblr } from '@iconscout/react-unicons'

const data = ['scalers', 'creators', 'developers', 'enterprises']

export function Hero() {
    const [marquee, setMarquee] = useState(data[0])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {            
            if (index < data.length - 1) setIndex(index + 1)
            else setIndex(0)

            setMarquee(data[index])
        }, 2500)

        return () => clearInterval(interval)
    }, [index])

    return <Box bg = '#131313' color = 'white' py = '6'>
        <VStack spacing = '20' alignItems = 'center' py = '12'>
            <Heading as = 'h1' fontSize = '7xl' letterSpacing = '6px' textAlign = 'center'>
                The database
                <br /> 
                for <Box as = 'span' bgClip = 'text' bgGradient = 'linear-gradient(135deg, #0b6ec5, #5e49af, #f35815, #fed54a)'>{ marquee }</Box>.
            </Heading>
            <Text color = 'whiteAlpha.600' fontSize = 'md' letterSpacing = '2.5px'>The MySQL-compatable serverless database plethora.</Text>
            <HStack spacing = '6'>
                <Button colorScheme = 'purple' rightIcon = { <UilAngleRight /> }>Get Started</Button>
                <Button variant = 'outline' borderColor = 'purple.600' _hover = {{ bg: 'transparent' }}>Schedule Demo</Button>
            </HStack>
            <VStack spacing = '12' alignItems = 'center' color = 'whiteAlpha.600' py = '6'>
                <Text fontWeight = 'hairline' letterSpacing = '4.5px'>Trusted by</Text>
                <HStack spacing = '24'>
                    <UilApple size = '38' />
                    <UilDiscord size = '38' />
                    <UilIntercom size = '38' />
                    <UilOpera size = '38' />
                    <UilSwiggy size = '38' />
                    <UilTumblr size = '38' />
                </HStack>
            </VStack>
        </VStack>
    </Box>
}