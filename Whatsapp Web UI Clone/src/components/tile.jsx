import { chakra, HStack, Avatar, Box, Flex, Text } from '@chakra-ui/react'
import { UilCheck } from '@iconscout/react-unicons'

export function Chat({ name, message, date, media, seen }) {
    return <HStack _hover = {{ curssor: 'pointer', bg: '#f5f6f6' }} py ='3'>
        <Avatar src = { media } name = { name } mx = '3' />
        <Box flex = '1' pr = '4'>
            <Flex justify = 'space-between' align = 'baseline'>
                <Box>
                    <Text fontWeight = 'medium'>{ name }</Text>
                    <HStack>
                        <UilCheck color = { seen ? '#53bded' : '#667781' } />
                        <Text fontSize = 'sm' color = '#667781'>{ message }</Text>
                    </HStack>
                </Box>
                <chakra.time fontSize = 'xs' color = '#667781'>{ date }</chakra.time>
            </Flex>
        </Box>
    </HStack>
}