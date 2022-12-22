import { Avatar, AvatarBadge } from "@chakra-ui/react";

export default function ChatOnline() {
    return (
        <Avatar mt="20px">
            <AvatarBadge boxSize='1.25em' bg='green.500' />
        </Avatar>
    )
}