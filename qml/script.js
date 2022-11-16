Object.defineProperty(navigator, 'platform', { value: "iPhone" });
Object.defineProperty(navigator, 'appCodeName', { value: "Mozila" });
Object.defineProperty(navigator, 'webview', { value: "false" });
Object.defineProperty(navigator, 'vendor', { value: "Apple Computer, Inc." });
Object.defineProperty(navigator, 'userAgent', { value: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1" });
Object.defineProperty(navigator, 'standalone', { value: true });
Object.defineProperty(navigator, 'onLine', { value: true });
Object.defineProperty(navigator, 'maxTouchPoints', { value: 2 });
Object.defineProperty(navigator, 'appName', { value: "iOS" });
Object.defineProperty(navigator, 'appVersion', { value: "5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36 UOS" });

window.chrome = undefined
window.Android = undefined
window.ontouchstart = true
window.touchstart = true
Object.defineProperty(navigator, 'userAgentData', { get: function () { return undefined; } });

function isBrowserPlatform() {
    return !("cefQuery"in window)
}
function isCefPlatform() {
    return "cefQuery"in window
}
function isAndroidPlatform() {
    return void 0 !== window.Android && "function" == typeof window.Android.isAndroid && window.Android.isAndroid()
}
function isPWAModeOnLGTV() {
    return /(NetCast|Web0S|Linux\/SmartTV).+PWA/.test(navigator.userAgent)
}
function isPWAModeOnSamsungTV() {
    return (0,
    n.fO)() && !navigator.userAgent.includes("SamsungBrowser")
}
function isArmPlatform() {
    return window.navigator.userAgent.toLowerCase().includes(" arm")
}
function isTouchPlatform() {
    return !!window.Touch && navigator.maxTouchPoints > 0
}
function isMobileFromUserAgent() {
    return navigator.userAgent.toLowerCase().includes("mobile")
}
window.addEventListener('load', function() {
    const e = document.createEvent('Event');
    e.initEvent('appinstalled', true, true);
    console.log("Script loaded");

    let sys = window.Ragnarok.getPlatformDetails()
    console.log(sys.__zone_symbol__value)
    console.log("Result " + isBrowserPlatform() + " " + isCefPlatform() + " " + isAndroidPlatform() + " " + isArmPlatform() + " " + isMobileFromUserAgent())
    console.log("Result " + navigator.userAgent)
}, false);
