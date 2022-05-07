export const fetchContent = (url: string) => {
    return fetch(url).then(res => {
        return res.body
    }).then(body => {
        if (body) {
            const reader = body.getReader();
            return new ReadableStream({
                start(controller) {
                    // The following function handles each data chunk
                    function push() {
                        // "done" is a Boolean and value a "Uint8Array"
                        reader.read().then(({ done, value }) => {
                            // If there is no more data to read
                            if (done) {
                                console.log('done', done);
                                controller.close();
                                return;
                            }
                            // Get the data and send it to the browser via the controller
                            controller.enqueue(value);
                            // // Check chunks by logging to the console
                            // console.log(done, value);
                            push();
                        })
                    }

                    push();
                }
            });
        }
    }).then(stream => {
        // Respond with our stream
        return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
    })
}

const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

export function useCurrentWidth() {
  // save current window width in the state object
  let [width, setWidth] = React.useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  React.useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth())
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return width;
}