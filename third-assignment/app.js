const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin.js')
const userRoutes = require('./routes/users.js')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(userRoutes);

app.listen(3000);