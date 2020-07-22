module.exports = {
    syntax: 'postcss-scss',
    plugins: [
        require('postcss-easy-import-sync'),
        require('tailwindcss')('./tailwind.config.js'),
        require('precss'),
        require('postcss-responsive-font')
    ]
}