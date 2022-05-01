import React from "react";
import {
    HStack, 
    Text, 
    Link, 
    Menu, 
    MenuButton, 
    MenuList, 
    MenuItem, 
    InputGroup,
    InputLeftElement,
    Input,
    Avatar,
    Popover,
    PopoverTrigger,
    PopoverContent,
    VStack
} from '@chakra-ui/react'
import {ChevronDownIcon, ExternalLinkIcon, SearchIcon} from '@chakra-ui/icons'
import './index.scss'
import { GithubIcon } from "../icons";
function Navigator(){
    return <>
        <HStack className="navigator" rounded={'3xl'} justifyContent="space-between">
            <HStack spacing={8}>
                <Text className="navigator-title" fontSize={'3xl'} marginBottom={'8px'}>
                    Mini Micro-Frontend
                </Text>
                <Link href="#/" className="navigator-link"> Home </Link>
                <Menu>
                    <MenuButton as={Link} className="navigator-link"> Vue demo <ChevronDownIcon /></MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link href="#/vue/"></Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="#/vue/about"></Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="#/vue/other"></Link>
                        </MenuItem>
                        <MenuItem>
                            <Link isExternal href="https://github.com/xzifan/mini-mf-vue3">Github Repo</Link>
                            <ExternalLinkIcon mx={2}/>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
            <HStack gap={8}>
                <InputGroup w={280}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.300'/>}
                    />
                    <Input type='search' placeholder='Search ' rounded={'xl'}/>
                </InputGroup>
                
                <Popover placement={'bottom-end'}>
                    {/*  
                    // @ts-ignore */}
                    <PopoverTrigger>
                        <a><Avatar cursor={'pointer'} src="https://avatars.githubusercontent.com/u/34232484?s=400&u=472ccaca422cc6ee8cf3a46b7af5d05dab2bbf3c&v=4"></Avatar></a>
                    </PopoverTrigger>
                    <PopoverContent padding={'4'}>
                        <VStack alignItems={'flex-start'}>
                            <Text fontWeight={'black'}>Zifan Xiao</Text>
                            <Text>xiao@zifan.dev</Text>
                            <HStack>
                                <Link href="https://github.com/xzifan/mini-micro-frontend" isExternal>
                                    <GithubIcon cursor={'pointer'} />
                                </Link>
                            </HStack>
                        </VStack>
                    </PopoverContent>
                </Popover>
            </HStack>
        </HStack>
    </>
}

export default Navigator