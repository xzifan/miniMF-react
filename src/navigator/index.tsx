
import './index.scss'
import '@alifd/next/dist/next.css';
import { ConfigProvider, Menu, Typography } from '@alifd/next';
import VueIcon from '../icons/vue'
import ReactIcon from '../icons/react';
const { SubMenu , Item} = Menu
const { H1 } = Typography
//@ts-ignore
const root = ReactDOM.createRoot(document.getElementById('nav')!);
root.render(
  <ConfigProvider errorBoundary={{fallbackUI: (error) => <></>, afterCatch: () => {}}}>
    <Navigator />
  </ConfigProvider>
);

const header = <H1>Mini Micro Frontend</H1>

function Navigator(){
    return <>
        <Menu
            header={header}
            className='navigator'
            defaultOpenAll
            defaultSelectedKeys="home"
        >
            <Item key={'home'}><a href='#/'>Home <ReactIcon/></a></Item>
            <SubMenu label='Main features'>
                <Item><a href='#/vue/'>Routing <VueIcon/></a> </Item>
                <Item><a href='#/vue/about'>Spliting MFs <VueIcon/></a></Item>
                <Item><a href='#/vue/other'>Routing<VueIcon/></a></Item>
            </SubMenu>
        </Menu>
        {/* <VStack className="navigator" rounded={'3xl'} justifyContent="space-between"> */}
            {/* <HStack spacing={8}>
                <Text className="navigator-title" fontSize={'3xl'} marginBottom={'8px'}>
                    Mini Micro-Frontend
                </Text>
                <Link href="#/" className="navigator-link"> Home </Link>
                <Menu>
                    <MenuButton as={Link} className="navigator-link"> Vue demo <ChevronDownIcon /></MenuButton>
                    <MenuList>
                        <MenuItem >
                            <Link href="#/vue/" display={'flex'} alignItems={'center'}>Home &nbsp;<VueIcon/></Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="#/vue/about" display={'flex'} alignItems={'center'}>About &nbsp;<VueIcon/></Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href="#/vue/other" display={'flex'} alignItems={'center'}>Other &nbsp;<VueIcon/></Link>
                        </MenuItem>
                        <MenuItem>
                            <Link isExternal href="https://github.com/xzifan/mini-mf-vue3">Github Repo</Link>
                            <ExternalLinkIcon mx={2}/>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </HStack> */}
            {/* <HStack gap={8}> */}
                {/* <InputGroup w={280} display={['none', 'none', 'none', 'block']}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.300'/>}
                    />
                    <Input type='search' placeholder='Search ' rounded={'xl'}/>
                </InputGroup> */}
                
                {/* <Popover placement={'bottom-end'}>
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
                </Popover> */}
            {/* </HStack>
        </VStack> */}
    </>
}