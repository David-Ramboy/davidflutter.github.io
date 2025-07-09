'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7fd0594a9ac386fff4ee480ad0464b0e",
"assets/AssetManifest.bin.json": "f909d2e131a9d3feb513308d0c45a9c3",
"assets/AssetManifest.json": "09cf3d46f73294d51c6185866492d491",
"assets/assets/images/david_logo.png": "3acbdb708d88e8cd5c24742f41710243",
"assets/assets/images/david_logo2.PNG": "6e289d3ccc80ca97eac2b6a0278999d0",
"assets/assets/images/david_logo_grey.svg": "c2aa58feae08751ce99d38cf5a9af3e0",
"assets/assets/images/david_log_svg.svg": "39cd0a4b49b046e14d7022f014e07445",
"assets/assets/images/IMG_6768%25201.png": "fd4706e3bea81f032a7fc3fadae01bc6",
"assets/assets/images/logos/facebook.png": "494cb5a2f0c105a4fccf77c068578f52",
"assets/assets/images/logos/flutter.svg": "5c3a6308a335872a831a9f836f0e236c",
"assets/assets/images/logos/github.png": "b37b05a713d8eebcbb475119e587859b",
"assets/assets/images/logos/linkedin.png": "898c0407d74c75fa110de76293d96ddd",
"assets/assets/images/logos/nextjs.svg": "a0054c0a9950b4ef3be21929f14e167c",
"assets/assets/images/logos/vue.svg": "b00020dde0490b3f0ecb3643f369d99c",
"assets/assets/images/logos_v3/django.svg": "f2d7169d1225b9f699d9f121354e1ca3",
"assets/assets/images/logos_v3/flutter.svg": "d4f1ef88c84c354de8df3c03f31a29ff",
"assets/assets/images/logos_v3/github.svg": "d8ebaef1269c259e9777ab95e11feae3",
"assets/assets/images/logos_v3/react.svg": "e5fa8d51ed0378aa94bef11b7652c1db",
"assets/assets/images/logos_v3/vue.svg": "c54e5ed35ed1d325c6f4c413e0e4cd74",
"assets/assets/images/me.jpg": "98a2bbfd833ad64e32f609c20d667ae6",
"assets/assets/images/projects/utol_website/utol_web_1.png": "a26841a2cabc7dc7185259f4f8b9ecff",
"assets/assets/images/projects/utol_website/utol_web_2.png": "cd7438d650931e8b937fea4bc4202fb7",
"assets/assets/images/projects/utol_website/utol_web_3.png": "dfb9dbba706420f290b8907b091c6358",
"assets/assets/images/projects/utol_website/utol_web_4.png": "852304b497c8e32f7a3861a926d405b4",
"assets/assets/images/projects/utol_website/utol_web_5.png": "8a2d37dab35f4b81bfce39115eec1c50",
"assets/assets/images/text/david_bryan.svg": "6411f8fc42e577b43d99e147a46f6c1c",
"assets/assets/images/text/hi.svg": "8293c6971087969ead1772c05e5e7ed3",
"assets/assets/images/text/mobile_david_bryan.svg": "89ca066e4714b72708bf0c78c27ec905",
"assets/assets/images/text/mobile_hi.svg": "0ff3cd669c03f270af8fea9b08881354",
"assets/FontManifest.json": "a8260203f221a79e6a18e5110d845412",
"assets/fonts/inter_24pt-Black.ttf": "2392341284c30f5fffb9fe0ab0cd983e",
"assets/fonts/inter_24pt-Bold.ttf": "8b04b3bd9435341377d7f4b4d68b6ecc",
"assets/fonts/inter_24pt-ExtraBold.ttf": "995fb5ac38b90303c0cc1a0b21e2c9fe",
"assets/fonts/inter_24pt-Medium.ttf": "4591e900425d177e6ba268d165bf12e8",
"assets/fonts/inter_24pt-Regular.ttf": "e48c1217adab2a0e44f8df400d33c325",
"assets/fonts/inter_24pt-SemiBold.ttf": "c77560a8441d664af3e65dd57026dff9",
"assets/fonts/MaterialIcons-Regular.otf": "646600b354f4de84be7ca8335ec46e5a",
"assets/fonts/PlayfairDisplay-Black.ttf": "90bd8fc6f4db46013bb128526ae4014f",
"assets/fonts/PlayfairDisplay-Bold.ttf": "7150373c62655e32d1720fd3b3890d09",
"assets/fonts/PlayfairDisplay-ExtraBold.ttf": "c474656eff24a077b81bb584c5960b04",
"assets/fonts/PlayfairDisplay-Medium.ttf": "5a11632ed293fcfcc40970c2b22c858f",
"assets/fonts/PlayfairDisplay-Regular.ttf": "9116faa12b7016e93277294c7a0735b6",
"assets/fonts/PlayfairDisplay-SemiBold.ttf": "f0713720c230460d5430d96d46f5cd28",
"assets/NOTICES": "1821472ed21699011d87ad191678dd13",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "c93ac2cf26f44833e61175d7cb4ed73c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6b02e1db794de57ebfa412c9cd405a30",
"/": "6b02e1db794de57ebfa412c9cd405a30",
"main.dart.js": "c3fbadd87792ff8392a41712a4b9ae66",
"manifest.json": "568bb4d7f8cb1abd84f1c7c7286943ad",
"version.json": "7e4083e0112546a3b487136927fa8912"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
