
exports.modules = {
    main: {name: 'ig/ig'},
    parts: [
        // refName 指要挂载到 window.ig 这个全局空间上的名字
        {name: 'ig/util', refName: 'util'},     // window.ig.util
        {name: 'ig/Event', refName: 'Event'},   // window.ig.Event
        {name: 'ig/platform', refName: 'env'},  // window.ig.env
        {name: 'ig/BaseSprite', refName: 'BaseSprite'}, // window.ig.BaseSprite
        {name: 'ig/ImageLoader', refName: 'ImageLoader'}, // window.ig.ImageLoader
        {name: 'ig/Game', refName: 'Game'}, // window.ig.Game
        {name: 'ig/FrameMonitor', refName: 'FrameMonitor'}, // window.ig.FrameMonitor
        // ,{name: 'ig/test/one'}
    ]
};

exports.amd = {
    // baseUrl: require('path').resolve(process.cwd(), '..'),
    // baseUrl: process.cwd(),
    baseUrl: __dirname,
    packages: [
        {
            name: 'ig',
            location: '../src',
            main: 'ig'
        }
    ]
};

exports.name = 'ig';
exports.includeEsl = true;
