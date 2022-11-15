Object.defineProperty(navigator, 'platform', { value: "iPhone" });
Object.defineProperty(navigator, 'standalone', { value: true });
Object.defineProperty(navigator, 'onLine', { value: true });
Object.defineProperty(navigator, 'maxTouchPoints', { value: 1 });

let a = class UAData {
    constructor() {
        brands = {brand: 'iPhone', version: '20'};
        platform = 'IOS';
    };
}

Object.defineProperty(navigator, 'userAgentData', { value: a });

function _cefQuery (d) {
    d['onSuccess']();
    return true;
}

window.cefQuery = _cefQuery;
delete window.chrome;

window.addEventListener('load', function() {
    const e = document.createEvent('Event');
    e.initEvent('appinstalled', true, true);
    console.log("Script loaded");
}, false);



