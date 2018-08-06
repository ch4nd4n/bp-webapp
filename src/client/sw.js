// importScripts('./node_modules/workbox-sw/build/importScripts/workbox-sw.prod.v2.0.1.js');

const WorkboxSW = require('workbox-sw');

const workboxSW = new WorkboxSW();
workboxSW.router.registerRoute('/', workboxSW.strategies.cacheFirst());

console.log(workboxSW);
