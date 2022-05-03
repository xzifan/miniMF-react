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