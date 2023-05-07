import Image from 'next/image'
import { Box, Heading, Flex, Text, VStack, HStack, Divider, Link } from '@chakra-ui/react'

export function Foot() {
    return <Box bg = '#131313' color = 'white' py = '24'>
        <Box maxW = '75%' mx = 'auto'>
            <Flex alignItems = 'center' justifyContent = 'space-between'>
                <Image src = '/icon.png' width = '140' height = '140' alt = 'logo' />
                <HStack spacing = '24' alignItems = 'flex-start'>
                    <VStack spacing = '4' alignItems = 'flex-end'>
                        <Heading color = 'whiteAlpha.600' fontSize = 'md' fontWeight = 'hairline'>Company</Heading>
                        <VStack as = 'ul' spacing = '2' alignItems = 'flex-end'>
                            {
                                ['About', 'Careers', 'Blog'].map((item) => <Link key = { item } href = '/' fontSize = 'xs'>{ item }</Link>)
                            }
                        </VStack>
                    </VStack>
                    <VStack spacing = '4' alignItems = 'flex-end'>
                        <Heading color = 'whiteAlpha.600' fontSize = 'md' fontWeight = 'hairline'>Products</Heading>
                        <VStack as = 'ul' spacing = '2' alignItems = 'flex-end'>
                            {
                                ['Login', 'CLI', 'Pricing'].map((item) => <Link key = { item } href = '/' fontSize = 'xs'>{ item }</Link>)
                            }
                        </VStack>
                    </VStack>
                    <VStack spacing = '4' alignItems = 'flex-end'>
                        <Heading color = 'whiteAlpha.600' fontSize = 'md' fontWeight = 'hairline'>Open Source</Heading>
                        <VStack as = 'ul' spacing = '2' alignItems = 'flex-end'>
                            {
                                ['Vitess', 'Community', 'Downloads'].map((item) => <Link key = { item } href = '/' fontSize = 'xs'>{ item }</Link>)
                            }
                        </VStack>
                    </VStack>
                    <VStack spacing = '4' alignItems = 'flex-end'>
                        <Heading color = 'whiteAlpha.600' fontSize = 'md' fontWeight = 'hairline'>Support</Heading>
                        <VStack as = 'ul' spacing = '2' alignItems = 'flex-end'>
                            {
                                ['Open Ticket', 'Status'].map((item) => <Link key = { item } href = '/' fontSize = 'xs'>{ item }</Link>)
                            }
                        </VStack>
                    </VStack>
                    <VStack spacing = '4' alignItems = 'flex-end'>
                        <Heading color = 'whiteAlpha.600' fontSize = 'md' fontWeight = 'hairline'>Talk Us</Heading>
                        <VStack as = 'ul' spacing = '2' alignItems = 'flex-end'>
                            {
                                ['Schedule Call', 'Sales'].map((item) => <Link key = { item } href = '/' fontSize = 'xs'>{ item }</Link>)
                            }
                        </VStack>
                    </VStack>
                </HStack>
            </Flex>
            <Divider my = '12' />
            <Text color = 'whiteAlpha.600' fontSize = 'xs' textAlign = 'end'>©2022 Pluriparous Inc. All Rights Reserved</Text>
        </Box>
    </Box>
}