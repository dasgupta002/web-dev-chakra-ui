import { HStack, IconButton, Input, InputGroup, InputLeftElement, Tooltip } from '@chakra-ui/react'
import { UilSearch, UilFilter } from '@iconscout/react-unicons'

export function Search() {
    return <HStack spacing = '2' borderBottom = '1px' borderColor = '#e2e8f0' px = '4' py = '2'>
        <InputGroup>
            <InputLeftElement pointerEvents = 'none' children = { <UilSearch /> } />
            <Input bg = '#f0f2f5' h = '36px' variant = 'filled' placeholder = 'Search or start a new chat!' _placeholder = {{ opacity: 0.6, color: '#3b4a54', paddingLeft: '24px', fontSize: '15px' }} _hover = {{ bg: '#f0f2f5' }} />
        </InputGroup>
        <Tooltip bg = '#eae6df' color = 'black' fontSize = 'xs' label = 'Unread chats' shouldWrapChildren>
            <IconButton>
                <UilFilter />
            </IconButton>
        </Tooltip>
    </HStack>
}