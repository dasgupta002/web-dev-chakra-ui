import { Box, Flex, Stack, StackDivider } from '@chakra-ui/react'
import { Header } from './components/head'
import { Search } from './components/search'
import { Chat } from './components/tile'
import { Well } from './components/well'
import { chats } from './data/db'

function App() {
  return <Flex h = '100vh'>
    <Flex direction = 'column' w = '30%'>
      <Box>
        <Header />
        <Search />
      </Box>
      <Stack flex = '1' overflow = 'auto' spacing = '0' divider = { <StackDivider w = '82%' alignSelf = 'flex-end' /> } pr = '1'>
        { 
          chats.map((chat) => <Chat key = { chat.id } { ...chat } />) 
        }
      </Stack>
    </Flex>
    <Well />
  </Flex>
}

export default App