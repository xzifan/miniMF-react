import Markdown from './Markdown';
// important: set the root element with id 
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('markdown-container')!);
root.render(
  <Markdown/>
);
