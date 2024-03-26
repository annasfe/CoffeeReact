# React Exercise and demo for github page deployment

## Setup

Run `npm install` to install packages.
Run `npm run dev` to run the development server.

Deployment done thanks to [this tutorial](https://github.com/gitname/react-gh-pages) with the following modifications:
* replace BrowserRouter with HashRouter (if you use React Router)
* add a BASE reference in vite.config.js
```javascript
  base: "/{name_of_repo}/"
```
* replaced the deploy command to use the dist folder instead of build (as this project was created with vite)
```javascript
    "deploy": "gh-pages -d dist"
```

 
