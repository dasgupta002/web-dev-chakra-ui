import { Avatar, Flex, HStack, IconButton, Tooltip } from '@chakra-ui/react'
import { UilUsersAlt, UilCircle, UilCommentAlt, UilEllipsisV } from '@iconscout/react-unicons'

const iconData = [
    { id: 1, icon: <UilUsersAlt />, label: 'Community Chat' },
    { id: 2, icon: <UilCircle />, label: 'Status' },
    { id: 3, icon: <UilCommentAlt />, label: 'New Chat' },
    { id: 4, icon: <UilEllipsisV />, label: 'Menu' }
]

function Marker({ label, icon }) {
    return <Tooltip label = { label } bg = '#eae6df' color = 'black' fontSize = 'xs' shouldWrapChildren>
        <IconButton>
            { icon }
        </IconButton>
    </Tooltip>
}

export function Header() {
    return <Flex bg = '#f0f2f5' justify = 'space-between' py = '2' px = '4' borderRight = '1px solid #f2f2f2' color = '#54656f'>
        <Avatar src = '/assets/user.png' name = 'Clara Fauna' boxSize = '40px' />
        <HStack spacing = '4'>
            {
                iconData.map(({ id, icon, label }) => <Marker key = { id } label = { label } icon = { icon } />)
            }
        </HStack>
    </Flex>
}