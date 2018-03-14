# Starter kit for interactives

This is a template for creating an interactive. It lets you do a few things out of the box:
- Write ES6 code that gets converted to ES5
- Use JavaScript modules
- Lint your JavaScript
- Minify your JavaScript
- Import Sass and CSS
- Import fonts
- Import data files like CSVs
- See effect of code changes automatically

## Set up

Install the development dependencies.
```
npm install
```

When you're developing you can have it kick of a development server that watches to changes, rebuilds stuff and reloads your browser. Run this.

```
npm start
```

When you're done developing and want to build it for production, run this.
```
npm run build
```

This will put the built version of the files in the `dist` folder.

If you pulled this repo down, you'll probably want to remove it's reference to the starter kit repo and create a new repo for itself.
```
rm -rf .git
git init
# etc ...
```

## Tips

### Images
To bring in an image, you'll need to import it in `src/index.js`. This will load
the file into the build with a somewhat mutilated filename, something like `8as2d3g49jsdfij.png`. In the JavaScript, the imported object will be this
filename, which can be used to refer to it in the script.
```javascript
import imageUrl from './media/image.png';

var image = new Image();
image.src = imageUrl;

document.appendChild(image);
```

In CSS, you can refer directly to the image file path instead of the mutilated
path.

```css
body {
    background-image: url('./media/image.png');
}
```

### Fonts

This starter kit imports the Unify fonts, both serif and sans serif.

```javascript
import './fonts/unify-sans.css';
import './fonts/unify-serif.css';
```

If the page where this interactive will live already has these fonts imported,
you should remove these two lines. Or if you aren't using the serif font, for
example, you should remove the line that imports it.

### CSV, TSV and XML

You can import CSV, TSV and XML files directly into a script.

```javascript
import table from './data/table.csv';
import tree from './data/tree.xml';
```
