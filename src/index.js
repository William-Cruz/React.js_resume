// 3rd-party imports

import "normalize.css";
import "sanitize.css";

import React from "react";
import ReactDOM from "react-dom";

// local imports

import registerServiceWorker from "./registerServiceWorker";

const customResolve = path => {
    return import(`${path}`);
};

customResolve("./components/personal/personal")
    .then(({ default: Resume }) => {
        ReactDOM.render(<Resume />, document.getElementById("root"));

        registerServiceWorker();
    })
    .catch(reason => {
        import("./components/app").then(({ default: Resume }) => {
            ReactDOM.render(<Resume />, document.getElementById("root"));

            registerServiceWorker();
        });
    });