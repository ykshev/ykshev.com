"use strict";var precacheConfig=[["/index.html","5f373bf5b344ae98daed6af5aca9cf65"],["/static/css/main.71b47ed4.css","e66f0d0217b44627ddfdae8c4bc81be8"],["/static/js/main.a7962f43.js","96b728e6db56bfe5649d4229bba34a22"],["/static/media/1.6b48d0fa.jpg","6b48d0fab93b17bc57f1f2b9c3e16362"],["/static/media/1.c2f6b688.jpg","c2f6b688339cbe2a1187ddb03e0ed5e4"],["/static/media/2.5d64ea73.jpg","5d64ea73d8e23aa813ab55b13529598a"],["/static/media/2.81e48a11.jpg","81e48a1154b2ca267b6b34797df1629f"],["/static/media/3.5b72b056.jpg","5b72b056a8e6fd2b027e33e0550421e7"],["/static/media/3.89a991dd.jpg","89a991dd26a112f599cd3047aa05cef7"],["/static/media/4.f98b5970.jpg","f98b59708d2ae0e87eba731c931c9f96"],["/static/media/Js-logos.45a3d810.svg","45a3d810d76e06d1307abdb9ade2e35f"],["/static/media/behance.87fa23ce.svg","87fa23ce4a549102064f5313543bd393"],["/static/media/designbase-logo.89788c8f.svg","89788c8f350bfc9b506cd434af700fe2"],["/static/media/helmet-regular-webfont.57c889aa.woff","57c889aa9d8b1a3c4ac1f7232126c32a"],["/static/media/helmet-regular-webfont.f5af0628.woff2","f5af0628944121b00cba54dd2adebaeb"],["/static/media/instagram.f8c2870f.svg","f8c2870f672d47ddf99b22fc1c5153fb"],["/static/media/likes.cf8108b7.svg","cf8108b7fc800f12e74cee082bedbf30"],["/static/media/medium.962306d7.svg","962306d7d65e7b47cef6051ae8802a9a"],["/static/media/uideo.1dfb5025.png","1dfb5025ce561ff2b8ea688b1913e6a2"],["/static/media/views.28447198.svg","284471987ffa93603f1e5ea2b76cd03d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});