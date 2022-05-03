import Markdown from './Markdown';
import './index.scss'

const rootContainer = document.getElementById('markdown-container')
if (rootContainer) {
    const microAppProps = JSON.parse(rootContainer.getAttribute('data-props') || '{}')
    console.log(microAppProps)
    // @ts-ignore
    const root = ReactDOM.createRoot(rootContainer);
    root.render(<Markdown {...(microAppProps) || null}/>); 
}
