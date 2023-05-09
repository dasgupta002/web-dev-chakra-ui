import Image from 'next/image'
import { Box, Heading, Text, Flex } from '@chakra-ui/react'

export function Gallery() {
    return <Box bg = '#131313' color = 'white' py = '24'>
        <Box maxW = '75%' mx = 'auto'>
            <Flex direction = 'column' gap = '36'>
                <Flex alignItems = 'center' textAlign = 'justify' gap = '24'>
                    <Box>
                        <Text fontSize = 'sm' fontWeight = 'hairline'>// From idea to IPO</Text>
                        <Heading as = 'h2' fontSize = '3xl'>Vitess was already built to last, we just made it fun to use.</Heading>
                    </Box>
                    <Image src = '/triggers.png' width = '600' height = '400' style = {{ borderRadius: '6px' }} alt = 'alert' />
                </Flex>
                <Flex alignItems = 'center' textAlign = 'justify' gap = '48'>
                    <Image src = '/sampledata.png' width = '250' height = '500' style = {{ borderRadius: '6px' }} alt = 'alert' />
                    <Box textAlign = 'end'>
                        <Heading as = 'h1' fontSize = '6xl' color = '#775aea'>99%</Heading>
                        <Text fontSize = 'md' fontWeight = 'hairline'>Infinitely scalable data sources, with preloaded bulk data foe seamless prefetching, testing, load runner and QA. Even import data from CSV and other shared cloud providers.</Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    </Box>
}
