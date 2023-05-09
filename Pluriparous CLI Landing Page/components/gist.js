import { Box, Heading, Text, Grid, GridItem, Flex } from '@chakra-ui/react'
import { UilServer, UilBox, UilBolt, UilGlobe } from '@iconscout/react-unicons'

const data = [
    {
        id: 1,
        title: 'Live database branches',
        icon: <UilServer />,
        info: 'Get copies of same database for testing in varoius environments.'
    },
    {
        id: 2,
        title: 'Built for busy people',
        icon: <UilBox />,
        info: 'No rebalance, no reindex, no downtime. Just copy and go.'
    },
    {
        id: 3,
        title: 'Serverless to hyperscale',
        icon: <UilBolt />,
        info: 'Based on Vitess, to cover all corners.'
    },
    {
        id: 4,
        title: 'Enterprise ready',
        icon: <UilGlobe />,
        info: 'High availability and everything out of the box.'
    }
]

export function Gist() {
    return <Box bg = '#131313' color = 'white' py = '12'>
        <Box maxW = '75%' mx = 'auto'>
            <Grid gridTemplateColumns = 'repeat(4, 1fr)' gap = '12' py = '4'>
                {
                    data.map((item) => <GridItem key = { item.id }>
                        <Flex direction = 'column' gap = '4'>
                            <Box bg = '#ffca4a' borderRadius = '50%' w = 'fit-content' p = '4'>{ item.icon }</Box>
                            <Heading as = 'h3' fontSize = 'xl'>{ item.title }</Heading>
                            <Text fontSize = 'sm' color = 'whiteAlpha.600' textAlign = 'justify'>{ item.info }</Text>
                        </Flex>
                    </GridItem>) 
                }
            </Grid>
        </Box>
    </Box>
}
