import helloWorld from './components/hello-world';

// Remove fonts if this will be embedded on a page with
// these fonts already loaded
import './fonts/unify-sans.css';
import './fonts/unify-serif.css';

import './style.scss';

document.body.appendChild(helloWorld());
