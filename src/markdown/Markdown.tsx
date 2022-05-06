// @ts-nocheck
import MarkdownPreview from '@uiw/react-markdown-preview';
import {fetchContent} from '../utils/index'
const defaultUrl = 'https://raw.githubusercontent.com/xzifan/mini-micro-frontend/main/public/index.md'
function Markdown(){
    const [url, setUrl] = React.useState(defaultUrl)
    const [content, setContent] = React.useState('')

    React.useEffect(()=>{
        fetchContent(url).then(res=>{
            setContent(res)
        })
    },[])

    React.useEffect(()=>{
        const container = document.getElementById('markdown-container')
        if (container) {
            const microAppProps = JSON.parse(container.getAttribute('data-props') || '{}')
            setUrl(microAppProps.url || defaultUrl)
        }
    }, [location.hash])
    return <>
        <MarkdownPreview source={content} />
    </>
}

export default Markdown