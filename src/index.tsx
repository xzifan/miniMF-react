import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
// important: set the root element with id 
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('nav')!);
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
