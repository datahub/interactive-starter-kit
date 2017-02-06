# webpack-starter

This webpack starter kit will
* Parse SASS styles into `styles.css`
* Lint all `js` files to Airbnb standards
* Convert es2015 to es5 using babel
* Compile templates using Mustache
* Load json files in as objects *(be careful when using external json files)*
* Compress and optimize images in production
* Minify `js` files in production

Getting started.
```
npm install
```

Work in the src folder. Then run a webserver and open the app.
```
npm start
```

Then, when ready, build the app for production and copy the files in the `dist` folder.
```
npm run build
```

Upload the files to a demo folder for sharing publically. This will run the build command and then copy the output to a url on the projects server.
```
npm run demo
```
