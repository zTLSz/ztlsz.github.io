"use strict";var precacheConfig=[["./index.html","9429417f1953e0eaa866516729f9c92c"],["./static/css/main.dc6a9bec.css","03764a75f9aa3751f96575dd2b079ca1"],["./static/js/main.a0803789.js","2e45fc43be48364835b35ece28096067"],["./static/media/2EF915_8_0.74b5bce1.woff2","74b5bce1fc6386e09a6c7140852d76e5"],["./static/media/2EF915_8_0.9149712f.ttf","9149712f9b2d05c42124a3100fa5dc97"],["./static/media/2EF915_8_0.da570568.eot","da570568ab9c5e02425f5fe9b67e150f"],["./static/media/2EF915_8_0.ee30581e.woff","ee30581e84309823a93b4d8d5ebfdaba"],["./static/media/2EF915_9_0.5478fac4.eot","5478fac4d608bc44d738519bf551f6a1"],["./static/media/2EF915_9_0.55ad38ea.woff2","55ad38eac4e2ceafb58c0b9e3d7b02d2"],["./static/media/2EF915_9_0.b080072d.woff","b080072d556a73062cd3e17551897b95"],["./static/media/2EF915_9_0.e68d1b40.ttf","e68d1b404d5e4ae3bcca364e3d0aae2e"],["./static/media/2EF915_A_0.51b2c99f.woff2","51b2c99f04d8bf7b63d1764dc00db091"],["./static/media/2EF915_A_0.bb506f81.woff","bb506f813494d61c2add75a3f39c5164"],["./static/media/2EF915_A_0.e859599b.ttf","e859599b13392da25a8b7611ff7a3da6"],["./static/media/2EF915_A_0.f1861be0.eot","f1861be0efaae1fb8c7c122e0ef8ec7f"],["./static/media/2EF915_B_0.0c7b32ea.eot","0c7b32ea4021191101679aada9f67651"],["./static/media/2EF915_B_0.513e2e23.ttf","513e2e2366cf4da2b57c48582b18d71f"],["./static/media/2EF915_B_0.6fcd945a.woff2","6fcd945a94cbc6f598a96b6092012f40"],["./static/media/2EF915_B_0.bd9ea137.woff","bd9ea137991738d85c2626328f85b3bc"],["./static/media/2EF915_C_0.5b062909.woff2","5b06290940a5287f066b912d943dd2fb"],["./static/media/2EF915_C_0.5d411eff.eot","5d411eff28951015b2fe8b2b1882682c"],["./static/media/2EF915_C_0.6b918bf2.woff","6b918bf2c1e2c5df070c95f5829f94c8"],["./static/media/2EF915_C_0.f9fadbd7.ttf","f9fadbd7f39b3308fc11b70680793475"],["./static/media/HSESans-Black.212fa0d6.eot","212fa0d6253cc0320949d6a8f8e6ee87"],["./static/media/HSESans-Black.459c2818.woff","459c2818ee1440e626e617b6f1aece96"],["./static/media/HSESans-Black.ca144ede.woff2","ca144ede106a8dcc37749f55be77ae66"],["./static/media/HSESans-Regular.33e52f91.eot","33e52f91c5b023009a529c93a5d8952b"],["./static/media/HSESans-Regular.3daf0abb.woff","3daf0abb59ba22c58c475f12a8e6da33"],["./static/media/HSESans-Regular.6106c63d.woff2","6106c63d3f1a172ea03ee61b05a6d453"],["./static/media/HSESans-Thin.0f50ccc2.woff","0f50ccc27606348aeb74041323f9d751"],["./static/media/HSESans-Thin.9e9e3380.eot","9e9e33804a50b9d440828a1128b4160c"],["./static/media/HSESans-Thin.a8797daa.woff2","a8797daa5a36c17dd72d299fbf2fd592"],["./static/media/HSESlab-Regular.6c2a54b9.eot","6c2a54b9dee206a2e294dfdc85915385"],["./static/media/HSESlab-Regular.ef6cc8db.woff","ef6cc8db40bac373df2571ab84df1e27"],["./static/media/HSESlab-Regular.ef7bdceb.woff2","ef7bdceb07540fd26fb323d7371d88fc"],["./static/media/bottom.853ef21a.svg","853ef21a8cc687a1354fe30a81933b42"],["./static/media/check.8c9492ab.svg","8c9492abef7180249a55005df17c4447"],["./static/media/edit.e2cf38d4.svg","e2cf38d48c4036e362929fd7a31a2d64"],["./static/media/left.089da20c.svg","089da20c7b895043a200d76e5fea7ebe"],["./static/media/more.8b6375e5.svg","8b6375e5ac4d3a2db5877cf4befb1864"],["./static/media/profile_circle.a805df6b.svg","a805df6b718342f2ad16df9da228e9ea"],["./static/media/tri.c1236fa7.svg","c1236fa71b9f4a58f3f5725f87850b40"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var f=new URL(e);return c&&f.pathname.match(c)||(f.search+=(f.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),f.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),f=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),f]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var f="./index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(f,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});