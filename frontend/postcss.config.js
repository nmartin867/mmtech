
const reporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer({ grid: true })
    ],
    syntax: 'postcss-scss'
};