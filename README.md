
<h1 align="center">
  Muiltiform
</h1>

<p align="center">
  <a href="https://wordfixr.netlify.app/">
    Live Preview
  </a>
</p>

## Project Explained
This is a multiform webapp built with react js and redux.

## Folder Structure
No configuration or complicated folder structures, just the files you need to build your app:

```
Multiform
├── node_modules
├── public
│   ├── favicon.svg
│   └── assets
      ├── images,svgs
└── src
    ├── Components
       ├── All-components-are-here
    ├── Pages
        ├── All-pages-are-here
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── index.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
```

## Development

To get a local copy of the code, clone it using git:

```
git clone https://github.com/youngancient/multiform.git

cd multiform
```

Install dependencies: You can use npm, but I am a fan of yarn!

```
yarn
```

Now, you can start a local web server by running:

```
yarn dev
```

And then open http://localhost:5173/ to view it in the browser.

#### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| yarn dev   | Runs the app in the development mode.               |
| yarn run build | Builds the app for production to the `dist` folder. |
| yarn run preview | Serves the production build from the `dist` folder. |
