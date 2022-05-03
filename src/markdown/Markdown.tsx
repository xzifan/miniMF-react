import MDEditor from "@uiw/react-md-editor"
import {fetchContent} from '../utils/index'
function Markdown(){
    // @ts-ignore
    const [content, setContent] = React.useState('')
    
    //@ts-ignore
    React.useEffect(()=>{
        fetchContent('https://raw.githubusercontent.com/xzifan/mini-micro-frontend/main/public/index.md').then(res=>{
            setContent(res)
        })
    },[])
    return <>
        <MDEditor.Markdown source={content} />
    </>
}

export default Markdown