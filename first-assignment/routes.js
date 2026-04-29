const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<body>')
        res.write('<h1>Hello, welcome to my page</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<body>')
        res.write('</body>')
        res.write('<ul><li>User 1</li></ul>')
        res.write('<ul><li>User 2</li></ul>')
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const message = Buffer.concat(body).toString();
            const username = message.split('=')[1];
            console.log(message);
            console.log(username);
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.end();
};
exports.handler = requestHandler;