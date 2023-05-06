import { Center, Flex, Heading, Text, AbsoluteCenter, HStack, Image, VStack } from '@chakra-ui/react'
import { UilLock } from '@iconscout/react-unicons'

export function Well() {
    return <Center bg = '#f0f2f5' position = 'relative' borderBottom = '6px solid #43c960' w = '70%'>
        <Flex direction = 'column' color = '#4125d'>
            <VStack alignItems = 'center' pt = '8'>
                <Image src = './assets/bg.png' boxSize = '40' alt = 'hero' />
                <Heading fontWeight = 'light'>What's App - Web Version</Heading>
                <Text fontSize = 'sm' textAlign = 'center' mt = '4'>
                    Send and recieve messsages without keeping your phone online.
                    <br />
                    Use What's App on upto four devices at the same time.
                </Text>
            </VStack>
            <AbsoluteCenter flex = '1' axis = 'horizontal' bottom = '10' mt = '10'>
                <HStack justifyItems = 'baseline' color = '#8696a0'>
                    <UilLock />
                    <Text fontSize = 'sm' fontWeight = 'medium'>End-to-end encypted</Text>
                </HStack>
            </AbsoluteCenter>
        </Flex>
    </Center>
}