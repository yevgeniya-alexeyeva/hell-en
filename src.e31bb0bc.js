// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\hero\\ellipse-1.png":[["ellipse-1.047fc305.png","images/hero/ellipse-1.png"],"images/hero/ellipse-1.png"],"./..\\images\\hero\\ellipse-2.png":[["ellipse-2.88cef74b.png","images/hero/ellipse-2.png"],"images/hero/ellipse-2.png"],"./..\\images\\hero\\wave.png":[["wave.8e5e69c3.png","images/hero/wave.png"],"images/hero/wave.png"],"./..\\images\\hero\\ellipse-1-x2.png":[["ellipse-1-x2.473be15b.png","images/hero/ellipse-1-x2.png"],"images/hero/ellipse-1-x2.png"],"./..\\images\\hero\\ellipse-2-x2.png":[["ellipse-2-x2.69317879.png","images/hero/ellipse-2-x2.png"],"images/hero/ellipse-2-x2.png"],"./..\\images\\hero\\wave-x2.png":[["wave-x2.cba08f2c.png","images/hero/wave-x2.png"],"images/hero/wave-x2.png"],"./..\\images\\hero\\ellipse-1-tablet.png":[["ellipse-1-tablet.05e99ba3.png","images/hero/ellipse-1-tablet.png"],"images/hero/ellipse-1-tablet.png"],"./..\\images\\hero\\ellipse-2-tablet.png":[["ellipse-2-tablet.ffca95de.png","images/hero/ellipse-2-tablet.png"],"images/hero/ellipse-2-tablet.png"],"./..\\images\\hero\\wave-tablet.png":[["wave-tablet.b4a6bcdc.png","images/hero/wave-tablet.png"],"images/hero/wave-tablet.png"],"./..\\images\\hero\\ellipse-1-tablet-x2.png":[["ellipse-1-tablet-x2.3a5fee35.png","images/hero/ellipse-1-tablet-x2.png"],"images/hero/ellipse-1-tablet-x2.png"],"./..\\images\\hero\\ellipse-2-tablet-x2.png":[["ellipse-2-tablet-x2.a6bd907c.png","images/hero/ellipse-2-tablet-x2.png"],"images/hero/ellipse-2-tablet-x2.png"],"./..\\images\\hero\\wave-tablet-x2.png":[["wave-tablet-x2.2ece55f1.png","images/hero/wave-tablet-x2.png"],"images/hero/wave-tablet-x2.png"],"./..\\images\\hero\\ellipse-1-desktop.png":[["ellipse-1-desktop.1c05456b.png","images/hero/ellipse-1-desktop.png"],"images/hero/ellipse-1-desktop.png"],"./..\\images\\hero\\ellipse-2-desktop.png":[["ellipse-2-desktop.410288be.png","images/hero/ellipse-2-desktop.png"],"images/hero/ellipse-2-desktop.png"],"./..\\images\\hero\\wave-desktop.png":[["wave-desktop.969dfc55.png","images/hero/wave-desktop.png"],"images/hero/wave-desktop.png"],"./..\\images\\hero\\ellipse-1-desktop-x2.png":[["ellipse-1-desktop-x2.a13c411e.png","images/hero/ellipse-1-desktop-x2.png"],"images/hero/ellipse-1-desktop-x2.png"],"./..\\images\\hero\\ellipse-2-desktop-x2.png":[["ellipse-2-desktop-x2.b854fef7.png","images/hero/ellipse-2-desktop-x2.png"],"images/hero/ellipse-2-desktop-x2.png"],"./..\\images\\hero\\wave-desktop-x2.png":[["wave-desktop-x2.3051600a.png","images/hero/wave-desktop-x2.png"],"images/hero/wave-desktop-x2.png"],"./..\\images\\svg\\bg-sprite.svg":[["bg-sprite.0e0c635f.svg","images/svg/bg-sprite.svg"],"images/svg/bg-sprite.svg"],"./..\\images\\our-program\\bg-our-program-mobile.jpg":[["bg-our-program-mobile.f6dd888d.jpg","images/our-program/bg-our-program-mobile.jpg"],"images/our-program/bg-our-program-mobile.jpg"],"./..\\images\\our-program\\bg-our-program-mobile@2x.jpg":[["bg-our-program-mobile@2x.58522431.jpg","images/our-program/bg-our-program-mobile@2x.jpg"],"images/our-program/bg-our-program-mobile@2x.jpg"],"./..\\images\\our-program\\bg-our-program-tablet.jpg":[["bg-our-program-tablet.f28f304c.jpg","images/our-program/bg-our-program-tablet.jpg"],"images/our-program/bg-our-program-tablet.jpg"],"./..\\images\\our-program\\bg-our-program-tablet@2x.jpg":[["bg-our-program-tablet@2x.78a1cafa.jpg","images/our-program/bg-our-program-tablet@2x.jpg"],"images/our-program/bg-our-program-tablet@2x.jpg"],"./..\\images\\our-program\\bg-our-program-desktop.jpg":[["bg-our-program-desktop.1354c6eb.jpg","images/our-program/bg-our-program-desktop.jpg"],"images/our-program/bg-our-program-desktop.jpg"],"./..\\images\\our-program\\bg-our-program-desktop@2x.jpg":[["bg-our-program-desktop@2x.adabe289.jpg","images/our-program/bg-our-program-desktop@2x.jpg"],"images/our-program/bg-our-program-desktop@2x.jpg"],"./..\\images\\students-reviews\\student-1.jpg":[["student-1.24f22845.jpg","images/students-reviews/student-1.jpg"],"images/students-reviews/student-1.jpg"],"./..\\images\\students-reviews\\student-2.jpg":[["student-2.f962828e.jpg","images/students-reviews/student-2.jpg"],"images/students-reviews/student-2.jpg"],"./..\\images\\students-reviews\\student-3.jpg":[["student-3.f3ecb91d.jpg","images/students-reviews/student-3.jpg"],"images/students-reviews/student-3.jpg"],"./..\\images\\students-reviews\\student-4.jpg":[["student-4.692b78cc.jpg","images/students-reviews/student-4.jpg"],"images/students-reviews/student-4.jpg"],"./..\\images\\students-reviews\\student-5.jpg":[["student-5.72cd347b.jpg","images/students-reviews/student-5.jpg"],"images/students-reviews/student-5.jpg"],"./..\\images\\students-reviews\\student-6.jpg":[["student-6.7bfada91.jpg","images/students-reviews/student-6.jpg"],"images/students-reviews/student-6.jpg"],"./..\\images\\students-reviews\\student-7.jpg":[["student-7.afb1e615.jpg","images/students-reviews/student-7.jpg"],"images/students-reviews/student-7.jpg"],"./..\\images\\students-reviews\\Arrow-prev.svg":[["Arrow-prev.33460a71.svg","images/students-reviews/Arrow-prev.svg"],"images/students-reviews/Arrow-prev.svg"],"./..\\images\\students-reviews\\Arrow-next.svg":[["Arrow-next.fbd30b2f.svg","images/students-reviews/Arrow-next.svg"],"images/students-reviews/Arrow-next.svg"],"./..\\images\\registration\\registration320.png":[["registration320.2497e1fe.png","images/registration/registration320.png"],"images/registration/registration320.png"],"./..\\images\\registration\\registration320@2x.png":[["registration320@2x.01d0f76a.png","images/registration/registration320@2x.png"],"images/registration/registration320@2x.png"],"./..\\images\\registration\\registration768.png":[["registration768.cb0eb353.png","images/registration/registration768.png"],"images/registration/registration768.png"],"./..\\images\\registration\\registration768@2x.png":[["registration768@2x.a6092d0a.png","images/registration/registration768@2x.png"],"images/registration/registration768@2x.png"],"./..\\images\\registration\\registration1680.png":[["registration1680.9942e2c0.png","images/registration/registration1680.png"],"images/registration/registration1680.png"],"./..\\images\\registration\\registration1680@2x.png":[["registration1680@2x.d1ee226f.png","images/registration/registration1680@2x.png"],"images/registration/registration1680@2x.png"],"./..\\images\\svg\\icon-instagram.svg":[["icon-instagram.4e76c36d.svg","images/svg/icon-instagram.svg"],"images/svg/icon-instagram.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54652" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map