import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './favicon.ico';
import './style/styles.scss';
import { Hello } from './components/Hello';

// TODO:wrap app container here
const render = () => {
    ReactDOM.render(
        <Hello compiler="TypeScript" framework="React" />,
        document.getElementById("main")
    );
};

render();