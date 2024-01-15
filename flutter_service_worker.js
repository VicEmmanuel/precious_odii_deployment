'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "02c0bf2d4e2076de2f8e856f68ff2537",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "75d912bd86e352375e06632ec2eba0a3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2751a02742aa21daca804eb4b8f80fb5",
".git/logs/refs/heads/main": "090a0d41086c2b325e3b4c1847ba54c4",
".git/logs/refs/remotes/origin/main": "0f7b56133286b0fd2d794893967156d3",
".git/objects/01/ceb172423f70c1f620d1faf756bf0104bb9219": "c0a69f30945d36b5e6372976519154c6",
".git/objects/03/d9ea51af1a977689d085bf79f64fe389f1d1b6": "cf29d5eb04126ed860e2b573b3256320",
".git/objects/04/158418d20fdddae82111523ae3caea8a70fda4": "3e77531cfb42b59c5619a0857773f9e5",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/86224f701656e1d5831692f103ab5ecb59b4ec": "161b3e312ae5ed139dd2e60f42b147ab",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/12/c69ab3250511a654cd38787702f0c54e143f0b": "109ea39b275c5c135624168ee37f19ac",
".git/objects/17/084547839ce6b2dc3cc353a47f4cf4de386066": "5f62b7e3bccfa624680cb9c7f99a9fd3",
".git/objects/18/e250e6c50e55da8f417281aed784d79ddde47e": "9fc4f659a59ff1df453bb6cd9e7a77d9",
".git/objects/1c/08b1af66ace91251e46f0fe35732eb13a00c36": "826c2e900902bb0cd406bcec2b99b23c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/83a5b12d313ccd5168224d8c468f6abd17609b": "0cfa20cdf41b091ecae6be8a2fce21b6",
".git/objects/2b/a0edcc8151550e00a06c06a858d6a31f3d4894": "5fbdc000a11510bbf1f58e8a9e19689b",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3c/1b6045cbbd20b34bffb7636767335041901a1b": "ec5b356e1ef7506f3349028f5c481699",
".git/objects/3f/88e3ee3fc232bcf394dcf32eb875a5d994aeae": "11577cfced748966d7e5565277305fc6",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4c/0753748eb20ce80ebb0d1cbb0482297336fcb1": "7bd85bec0e9ad9e5ed8ebe97b8dd6930",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/6f/30dde57c6b600f0905fde0eb4deb0738cdb3da": "49c5684a4474f5abc167d71ab38f474f",
".git/objects/70/ff2e88199cc173d861f768f1372785c0581c0b": "ddb8dd4a5ca8d47a7dc4a51ff0a34a12",
".git/objects/76/de09c3542259f516008ce525e8702588b5452b": "60473cacc556e439b12d7194ff86b7c0",
".git/objects/78/bb3d577c84acc31dbadde093352c41bf6f0f5e": "3fd93df5ce2068f8e716af1b96657def",
".git/objects/7a/19e8603e87d361acc57c42c29716bacdcf5ee2": "91a855b4ccc8e2f32bb7be99e946021a",
".git/objects/7a/dd9e5069fb2c619cd9442f2e176dcf8480b73b": "6be3afafeace1e6b1cbe6813ea4e477c",
".git/objects/81/7dc21384cc6935bd6edbfb1fa9672d2d0e6f37": "c50867e2c8acfc84a97581d5d87444b9",
".git/objects/87/0ea792b5e0ebd97370474030665174786411c8": "a1a30b39e0f920aa2e78290af79c5c32",
".git/objects/88/854fb5203d80eccdb2c4c012eb1e52a8ffacb7": "dcbaf70c6ea136da84e32edb56bab6c5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/9515161ff5f4cea13e1799444b4bc471d293ee": "8ac4b8388e191d038116fff1c63aca22",
".git/objects/8d/e956a4b1f02ab73e51877752308ffcb58a3037": "7c92af94b525d99da42837efcfff4b0a",
".git/objects/91/c3d95ee2d6cb2dc100b4e2b7549edf038c9c6c": "18df267605fb6c31fb342214d83eab9f",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9d/472c10f89d253d44fdba9fabdd8ac2390bb955": "03742342ed5acc2ee8ed0dad4576fd0d",
".git/objects/a2/b67ac282788883425ac9d8b3b70517acbd8387": "45683fcf95d6b8e220f515e74f6aad1f",
".git/objects/a7/ca9add653e68870ec019cd140a4dcd599c2f82": "6a08f206715ea9ee33394715483eb7ac",
".git/objects/ad/f388419cf1dc94824b92c9b5a5cf5e8882bdbb": "a13e769145eefbe641c6c6fa0dc564a8",
".git/objects/ae/8f0886cd0a022e8ada27b11e3dd16e93ae4357": "c3f2a3a472f820668e2aba59491613f3",
".git/objects/b1/599b7c9b31a291efc8a035fa2e36417cc199f5": "5f57bde3c80d961f894e7cccd3deb428",
".git/objects/b4/816aa30260da62e238cebb392922b2a7248399": "d2b9f2ff53edccdb388da587d0e1632c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/5a4e15b2839ab8560db6df3214681d38963cd6": "4b9782e454df08d262c61c7e32160c04",
".git/objects/c7/c09f26f72549065652c2af836bd9a9fc8eba6f": "5dc59a0d6d1e393bda014f22a8f8c609",
".git/objects/d3/0174aade7a1ad60a096e52f4ae164aaf351627": "8353374295414b5f032a96fee2d77b3e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/55e0d054c36ceeb13a67ac8c941779afb87d7f": "246fed4e2fd261d7d9c7dd651551402f",
".git/objects/e3/c2a9a58a54c95616f18f81b82ef5f8b69b2513": "35b3e5ed818d7cd620ec50cb69149af2",
".git/objects/e4/134d8451f395d5e06efded76f56340a601c9e1": "324315d6a59ddc8b1b0d03ad540da372",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/0f9bdf18c234170416e6c87ce9e02c7e3fbff9": "5c6bd1adb2059dc42630e7cb56e5e261",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/17127df7bb852ba66d5834f47bcb812d35c0f2": "5cb025eaef4ee9b5bc33316859d05d5e",
".git/objects/f7/67acd3de2dd878c955faa20660e2b562f6633c": "08868ddece26c6c889664fa1c3618dc7",
".git/refs/heads/main": "81c4067e5c6802414906eb82afaa23d8",
".git/refs/remotes/origin/main": "81c4067e5c6802414906eb82afaa23d8",
"assets/AssetManifest.bin": "eb907c09f054785a16f561ef5dfe15b3",
"assets/AssetManifest.bin.json": "a7ea8277711c7746c85ee5e59b08e6be",
"assets/AssetManifest.json": "e80f36add7483ccdfbf3621f1f3c7adf",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/precious_1.jpg": "55b7ac5074d53c0bffaff4afb7997cb4",
"assets/assets/images/precious_2.jpg": "892dba6c70cdb4428c3810cdcf345117",
"assets/assets/images/precious_3.jpg": "c6ce76c1560cdccca287e2e27f39fc76",
"assets/assets/images/precious_4.jpg": "390cadf29ff360e8f129dd638da0d2a5",
"assets/assets/images/precious_5.jpg": "e3a8488436ecda7d062a0e75b4ccbdc0",
"assets/assets/images/pro1.png": "a618dc4969d82a6d2ece39a7ee5d11f1",
"assets/assets/images/pro2.png": "c25801745513b563c939c527a2d2d46f",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/twit.png": "3f2b027c50dd30dd9abeeaeb1b68b1c3",
"assets/assets/images/work1.jpg": "58bbc11e54a3643754df21fd0d1e59a8",
"assets/assets/images/work2.jpg": "8ac2eef16dd7a05a53702e965891c948",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "89f957e47f77c273211fa84fb4fa7520",
"assets/NOTICES": "0fc381048c825efb444a1fbbabb0ff9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a2155bdad904e7ee37e05506306e9d9b",
"/": "a2155bdad904e7ee37e05506306e9d9b",
"main.dart.js": "97ea78226bb318454452a82954798ddd",
"manifest.json": "f62aa7c4a467792ccba72c44c9a65765",
"version.json": "b596b7047ab9a21f880e09e58188c1b0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
