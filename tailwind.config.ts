import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],

    darkMode: 'class',

    theme: {
        extend: {
            colors: {
                primary_dark: '#37353E',
                mid_night: '#44444E',
                brown: '#715A5A',
                winter: '#D3DAD9'
            }
        }
    },

    plugins: [

    ],
}


export default config;