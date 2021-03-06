
import './index.scss'
import '@alifd/next/dist/next.css';
import { ConfigProvider, Menu, Nav, Typography } from '@alifd/next';
import VueIcon from '../icons/vue'
import ReactIcon from '../icons/react';
import { useCurrentWidth } from '../utils';
const { SubNav , Item} = Nav
const { H1 } = Typography
declare global {
    interface Window {
        renderer: {
            [name: string]: (rootElement: HTMLElement) => void 
        }
    }
}
//@ts-ignore
//  no longer render by itself but by the root application
// const root = ReactDOM.createRoot(document.getElementById('nav')!);
// root.render(
//   <ConfigProvider errorBoundary={{fallbackUI: (error) => <></>, afterCatch: () => {}}}>
//     <Navigator />
//   </ConfigProvider>
// );
if (typeof window.renderer === 'undefined') {
    window.renderer = {}
}
window.renderer['nav'] = function (rootElement: HTMLElement | undefined){
    try {
        const root = rootElement || document.getElementById('nav')
        //@ts-ignore
        ReactDOM.createRoot(root).render(
            <ConfigProvider errorBoundary={{fallbackUI: (error) => <></>, afterCatch: () => {}}}>
            <Navigator />
        </ConfigProvider>)
    } catch (error) {
        console.error(error)
    }
}

const header = <H1>Mini Micro Frontend</H1>

function Navigator(){
    const width = useCurrentWidth()
    return <>
        <Nav
            header={header}
            className={`navigator ${width<1080? 'mobile': ''}`}
            defaultOpenAll
            defaultSelectedKeys="home"
            direction={width<1080?'hoz': 'ver'}
        >
            <Item key={'home'}><a href='#/'>Home <ReactIcon/></a></Item>
            <SubNav label={<>Main features <VueIcon/></>}>
                <Item><a href='#/vue/'>Routing <VueIcon/></a> </Item>
                <Item><a href='#/vue/about'>Spliting MFs <VueIcon/></a></Item>
                <Item><a href='#/vue/other'>Routing<VueIcon/></a></Item>
            </SubNav>
        </Nav>
    </>
}