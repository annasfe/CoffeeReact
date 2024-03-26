# React Exercise and demo for github page deployment

## Branch "main" includes the app files

Run `npm install` to install packages.

Run `npm run dev` to run the development server.

## Branch "gh-pages" includes the deployed site files

Deployment done thanks to [this tutorial](https://github.com/gitname/react-gh-pages) with the following modifications to make it work:
* replaced BrowserRouter with HashRouter (if you use React Router)
* added a BASE reference in vite.config.js
```javascript
  base: "/{repo_name}/"
```
* replaced the deploy command on package.json to use the dist folder instead of build (as this project was created with vite)
```javascript
    "deploy": "gh-pages -d dist"
```

If you already have the app created and connected to a github repo, you only need to do steps 3, 4, 5 and 7.
 
