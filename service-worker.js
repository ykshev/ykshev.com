"use strict";var precacheConfig=[["/index.html","195c8f9d461bae2af13d20ab861768c6"],["/static/css/main.0133e520.css","142b6c2a58f699802495973d78d1c718"],["/static/js/main.08aaa365.js","5fe33c1bbaa2974a9d1703d7ad566f3d"],["/static/media/1.066946d7.jpg","066946d78008bda96c664a1a1fc3f6f8"],["/static/media/2.9d2e76a0.jpg","9d2e76a0dfb93a7296eb156b748cf547"],["/static/media/3.39fa33e9.jpg","39fa33e969f8fb84a70490f62ff1281f"],["/static/media/4.0edc9a16.jpg","0edc9a1664da88b9c3fd6ec43d852eed"],["/static/media/Js-logos.45a3d810.svg","45a3d810d76e06d1307abdb9ade2e35f"],["/static/media/behance.87fa23ce.svg","87fa23ce4a549102064f5313543bd393"],["/static/media/designbase-logo.89788c8f.svg","89788c8f350bfc9b506cd434af700fe2"],["/static/media/helmet-regular-webfont.57c889aa.woff","57c889aa9d8b1a3c4ac1f7232126c32a"],["/static/media/helmet-regular-webfont.f5af0628.woff2","f5af0628944121b00cba54dd2adebaeb"],["/static/media/instagram.f8c2870f.svg","f8c2870f672d47ddf99b22fc1c5153fb"],["/static/media/likes.cf8108b7.svg","cf8108b7fc800f12e74cee082bedbf30"],["/static/media/medium.962306d7.svg","962306d7d65e7b47cef6051ae8802a9a"],["/static/media/uideo.1dfb5025.png","1dfb5025ce561ff2b8ea688b1913e6a2"],["/static/media/views.28447198.svg","284471987ffa93603f1e5ea2b76cd03d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});