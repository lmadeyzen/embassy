# Conversation Extensions demo app

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Start

install Node.js
run `npm install`
run `npm run dev`

## Styles:

To change colors go to `src/styles/Colors.ts` and replace colors.
There is two more colors you can menage in `src/styles/index.css` file. In `body` you can change background-color and font color. Also in this file you can chnage dimensions of all elements changing `font-size` property in `:root` element.

## Custom labels:

If you want to use custom labels go to `src/i18n/lables`. Lables are sorted by page (startPage, pickDate, summaryPage)

## Finish text:

You can also change text is sending by Bot. To do this you need to go to `src/pages/Summary.tsx` file, find `onFinish` function and simply replace the text.
