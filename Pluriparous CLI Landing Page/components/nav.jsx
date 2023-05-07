import Image from 'next/image'
import { Box, Button, Flex, HStack, Link } from '@chakra-ui/react'

export function Nav() {
    const navItems = [
        { id: 1, name: 'Docs', path: '/' },
        { id: 2, name: 'CLI', path: '/' },
        { id: 3, name: 'Enterprise', path: '/' },
        { id: 4, name: 'Pricing', path: '/' },
        { id: 5, name: 'Blog', path: '/' }
    ]
    
    return <Box as = 'nav' bg = '#131313' color = 'white' py = '12'>
        <Box maxW = '75%' mx = 'auto'>
            <HStack spacing = '4'>
                <Image src = '/icon.png' width = '60' height = '60' alt = 'logo' />
                <Flex flex = '1' justify = 'space-between'>
                    <HStack as = 'ul' listStyleType = 'none' spacing = '6' fontSize = '11'>
                        {
                            navItems.map((item) => (<li key = { item.id }>
                                <Link href = { item.path } fontWeight = 'bold' _hover = {{ color: 'orange.600' }}>{ item.name }</Link>
                            </li>))
                        }
                    </HStack>
                    <HStack spacing = '6' fontSize = '11'>
                        <Link href = '#' fontWeight = 'bold' _hover = {{ color: 'orange.600' }}>Sign In</Link>
                        <Button variant = 'outline' borderColor = 'orange.600' fontSize = '11' _hover = {{ bg: 'trasparent', borderColor: 'white' }}>Get Started</Button>
                    </HStack>
                </Flex>
            </HStack>
        </Box>
    </Box>
}