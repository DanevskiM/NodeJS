const express = require('express');
const app = express();

// app.use((req, res, next) => {
//     console.log('I am the first middleware!');
//     next();
// });
//
// app.use((req, res, next) => {
//     console.log('I am the second middleware!');
//     res.send('<h1>Assignment solved</h1>')
// });

app.use('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<p>It handles users</p>')
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>It handles only /</p>')
});

app.listen(3000);