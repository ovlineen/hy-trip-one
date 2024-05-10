const { defineConfig } = require('vite');
const pxToViewport = require('postcss-px-to-viewport');

module.exports = defineConfig({
    plugins: [
        pxToViewport({
            unitToConvert: 'px',
            viewportWidth: 375,
            viewportUnit: 'vw',
        }),
    ],
});
