## Micro Frontend Config
The root element for this react app should exist in the root applicaiton
```jsx
const root = ReactDOM.createRoot(document.getElementById('react-micro-app')!);
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
```
## Webpack external config

Allows us to make use dependencies from external links so that the bundle would not need to include them. 
**bundle size** (Exclude React and ReactDOM)
Before using externals: 704kb
After using externals: 567kb