import typescript from "rollup-plugin-typescript";

export default {
    input: 'src/routers/server.ts',
    output: {
        file: 'server.js',
        format: 'cjs'
    },
    plugins: [
        typescript(),
    ]
};