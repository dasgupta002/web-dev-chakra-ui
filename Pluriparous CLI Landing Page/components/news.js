import { Box, Heading, HStack, Input, Button, Flex } from '@chakra-ui/react'
import { UilAngleRight } from '@iconscout/react-unicons'

export function News() {
    return <Box bg = '#131313' color = 'white' py = '12'>
        <Box maxW = '50%' mx = 'auto'>
            <Flex direction = 'column' alignItems = 'center' gap = '12' bg = 'whiteAlpha.900' color = 'black' borderRadius = '6' p = '12'>
                <Heading as = 'h2' fontSize = '2xl' fontWeight = 'hairline'>Join into Developer Programme</Heading>
                <HStack spacing = '6' w = '100%'>
                    <Input variant = 'outline' borderColor = 'orange.400' focusBorderColor = 'orange.600' placeholder = 'Mailing Address' />
                    <Button colorScheme = 'orange' rightIcon = { <UilAngleRight /> }>Subscribe</Button>
                </HStack>
            </Flex>
        </Box>
    </Box>
}
