const dotenv = require('dotenv');
const { patch, path } = require('./app');

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})