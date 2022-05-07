import Markdown from './Markdown';
import './index.scss'
declare global {
    interface Window {
        renderer: {
            [name: string]: (rootElement: HTMLElement) => void 
        }
    }
}
// const rootContainer = document.getElementById('markdown-container')
// if (rootContainer) {
//     const microAppProps = JSON.parse(rootContainer.getAttribute('data-props') || '{}')
//     console.log(microAppProps)
//     // @ts-ignore
//     const root = ReactDOM.createRoot(rootContainer);
//     root.render(<Markdown {...(microAppProps) || null}/>); 
// }
if (typeof window.renderer === 'undefined') {
    window.renderer = {}
}
window.renderer['markdown-container'] = function (rootElement: HTMLElement | undefined){
    try {
        const root = rootElement || document.getElementById('markdown-container')
        const microAppProps = JSON.parse(root?.getAttribute('data-props') || '{}')
        //@ts-ignore
        ReactDOM.createRoot(root).render(<Markdown {...(microAppProps) || null}/>); 
    } catch (error) {
        console.error(error)
    }
}