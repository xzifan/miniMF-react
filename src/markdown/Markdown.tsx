// @ts-nocheck
import MDEditor from "@uiw/react-md-editor"
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
        <MDEditor.Markdown source={content} />
    </>
}

export default Markdown