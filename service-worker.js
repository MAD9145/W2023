/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "35204bffc73980fcd91e0efa3c427a6f"
  },
  {
    "url": "assets/css/0.styles.c76782e9.css",
    "revision": "335afe265ba710dbc0ee62d64a789a0c"
  },
  {
    "url": "assets/img/01-project.208f3b69.png",
    "revision": "208f3b6973b8b9680c4cf29d4de9be59"
  },
  {
    "url": "assets/img/02-folder.579c6a0e.png",
    "revision": "579c6a0e175fed85dac7fed2de85705d"
  },
  {
    "url": "assets/img/03-task.99bbf979.png",
    "revision": "99bbf9795e5a4fc7a1e22377b3295068"
  },
  {
    "url": "assets/img/04-duedate.63c31c82.png",
    "revision": "63c31c82493ebf6204dc34023098e28f"
  },
  {
    "url": "assets/img/05-milestone.7a977990.png",
    "revision": "7a977990212e9781635d3cdbf7e3be1c"
  },
  {
    "url": "assets/img/06-list.b9851ab1.png",
    "revision": "b9851ab1250c8db299b0a2ba6649feea"
  },
  {
    "url": "assets/img/07-timeline.70c2a079.png",
    "revision": "70c2a0798537725a0188e277e0589c1d"
  },
  {
    "url": "assets/img/high-level-architecture.6ba3394b.png",
    "revision": "6ba3394bba21456a4e8649c3e5d6a34d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2a84ea5f.js",
    "revision": "ea60706a50ccf1f35ca3bc4e8596dbab"
  },
  {
    "url": "assets/js/11.1b0e6dff.js",
    "revision": "5a17441d972e817d7d81bc8f18d0e6d1"
  },
  {
    "url": "assets/js/12.4bcb3db3.js",
    "revision": "cd6dff90594613ffb4503b4d86e3977f"
  },
  {
    "url": "assets/js/13.429e2f36.js",
    "revision": "04f6349d447ce008d9a91c3d37720dad"
  },
  {
    "url": "assets/js/14.49db9cb9.js",
    "revision": "d67543f7cca65ae720cbff38cb5bdaa8"
  },
  {
    "url": "assets/js/15.20bfe55f.js",
    "revision": "b93cec07049c9811ebe3faf58e6b5c8a"
  },
  {
    "url": "assets/js/16.1e98bcc2.js",
    "revision": "e460c2d9f5612b0e9e9075fb8dc91fa4"
  },
  {
    "url": "assets/js/17.beeb8b01.js",
    "revision": "fb51d0f98aa86d61f9e8d6f4af4f40f0"
  },
  {
    "url": "assets/js/18.94db2378.js",
    "revision": "6ae9e4ff035d59ed65e6974bd93d7a20"
  },
  {
    "url": "assets/js/19.eea2c722.js",
    "revision": "28ee32c47705440d9e0a19d92d615244"
  },
  {
    "url": "assets/js/2.3477fcc2.js",
    "revision": "48896eef81f090c735b3b48236e7db00"
  },
  {
    "url": "assets/js/20.b83f0b1a.js",
    "revision": "7fc08cabbbbe2e009bc88ceecd611a85"
  },
  {
    "url": "assets/js/21.fa778fed.js",
    "revision": "3371352f0b867f696026a109461c36be"
  },
  {
    "url": "assets/js/22.a321419b.js",
    "revision": "4e349c0e90f0b5aa79dc16740cbae5e8"
  },
  {
    "url": "assets/js/23.4e37782c.js",
    "revision": "42b0ce1ae33a36b9b0a73d870053f3c7"
  },
  {
    "url": "assets/js/24.7f8e3870.js",
    "revision": "787c801616ff4b6b4e72ac7a7ca4ae0c"
  },
  {
    "url": "assets/js/25.d02cc918.js",
    "revision": "ceb8459f89dae014079ca5d01ea62ae9"
  },
  {
    "url": "assets/js/26.aeff6b91.js",
    "revision": "90a96b23232bdfce5ac67ddb5d062d34"
  },
  {
    "url": "assets/js/27.867a05f7.js",
    "revision": "1cbdd5d0a1ef4691e44e44d60ba4a035"
  },
  {
    "url": "assets/js/28.93c23a06.js",
    "revision": "f8f277622ab1857f61a0b90918ae5cb0"
  },
  {
    "url": "assets/js/29.bf5e316e.js",
    "revision": "1e1774dc0f03197fd404a5507d919d19"
  },
  {
    "url": "assets/js/3.2928bf87.js",
    "revision": "a228fc86500ebea48c880fbd15c09181"
  },
  {
    "url": "assets/js/30.5f9f238a.js",
    "revision": "3f24134b0d9182b4e2a16c7fdbadaf37"
  },
  {
    "url": "assets/js/31.45e364d0.js",
    "revision": "c6b06bc2ba69607337d51acc12aac12c"
  },
  {
    "url": "assets/js/32.e07b9789.js",
    "revision": "f3aee4a37781d7e4ee61f82e4144745f"
  },
  {
    "url": "assets/js/33.8ea3288e.js",
    "revision": "69845a351a747d4a303e9a71501d2d44"
  },
  {
    "url": "assets/js/34.6a3bbf6f.js",
    "revision": "6445bc8b997442b5900e36eb94ded690"
  },
  {
    "url": "assets/js/35.ef12077e.js",
    "revision": "cf8620c64df988d41585b9017971f8c7"
  },
  {
    "url": "assets/js/36.d544da1b.js",
    "revision": "177372e046234b9f311b7738e0dc8892"
  },
  {
    "url": "assets/js/37.28ff2430.js",
    "revision": "8e2ff74f7ca30e2de859f2e5c0435591"
  },
  {
    "url": "assets/js/38.00f275a4.js",
    "revision": "0de4334d4b7d1f58fe62c57dcab38166"
  },
  {
    "url": "assets/js/39.8839d665.js",
    "revision": "fd0dbacf794bdf0393aaebf78a6e789f"
  },
  {
    "url": "assets/js/4.62ce3bb3.js",
    "revision": "571a5d7224f2b277da6df31f983d1d0a"
  },
  {
    "url": "assets/js/40.9db1350b.js",
    "revision": "6bd13f8453c2aba6cb1be8d6de0900bb"
  },
  {
    "url": "assets/js/41.1ef362c1.js",
    "revision": "923d82c50e75fe36c5a6f3a60dce9dd5"
  },
  {
    "url": "assets/js/42.0296ef84.js",
    "revision": "178af4e5ffb2ccd37eecbede070da8cd"
  },
  {
    "url": "assets/js/43.f23a53b1.js",
    "revision": "eb5cbc1dbe407baa60116c70663bb0f5"
  },
  {
    "url": "assets/js/44.c3eb7841.js",
    "revision": "b0a7fd4459801faa0379a68ee1cad23e"
  },
  {
    "url": "assets/js/45.bb7ed250.js",
    "revision": "56a3a5b8fd29269d603814d75ac510ce"
  },
  {
    "url": "assets/js/46.af79af7f.js",
    "revision": "3f8ba06ebaa5e5de74a16144f78a802c"
  },
  {
    "url": "assets/js/47.a57683b0.js",
    "revision": "00453b6f5b669f0cc2ad1f097a5543bc"
  },
  {
    "url": "assets/js/48.f5369bf5.js",
    "revision": "5466af958e0ca4d295c111bf5eb0ce47"
  },
  {
    "url": "assets/js/49.2e9c92a5.js",
    "revision": "b2fd1f059ae11c573478d6bfdfce2bb0"
  },
  {
    "url": "assets/js/5.8db11327.js",
    "revision": "52e7d6804dda8f5ee743ba8be4c2d250"
  },
  {
    "url": "assets/js/50.94199714.js",
    "revision": "ae425c0973c847e59595c7b1c08c2c76"
  },
  {
    "url": "assets/js/51.d5148a95.js",
    "revision": "28e61641d3b99c73cf4e4c960f0674e3"
  },
  {
    "url": "assets/js/52.3c60634e.js",
    "revision": "df2153a4a4b78955bc908796c2275d60"
  },
  {
    "url": "assets/js/53.f84e236f.js",
    "revision": "be581d31eeeaa74f4bbb68e3827d3b83"
  },
  {
    "url": "assets/js/54.164a500a.js",
    "revision": "848e6e99193b3b60195677c782aa8d4a"
  },
  {
    "url": "assets/js/55.3a0caf4e.js",
    "revision": "df66d0a39c7c95caf3137d18ef799233"
  },
  {
    "url": "assets/js/56.670316b0.js",
    "revision": "85638c47add0bf0bb3fcc927ea4cbfa9"
  },
  {
    "url": "assets/js/57.55fd24f7.js",
    "revision": "c6b36e2f439735da8a3776e55e74b02f"
  },
  {
    "url": "assets/js/58.1eefe414.js",
    "revision": "55c13aaecca7f6ba3ba91dc181509f6e"
  },
  {
    "url": "assets/js/59.59f08b25.js",
    "revision": "70a1cfb2e1f11156c32cb15d35a4c6d0"
  },
  {
    "url": "assets/js/6.91290b5a.js",
    "revision": "dd94bb72290e61bd81b55a22e543c833"
  },
  {
    "url": "assets/js/7.c49ad4b9.js",
    "revision": "db2ca19bf20b678eca2359b2e76ae9aa"
  },
  {
    "url": "assets/js/8.a723c5cb.js",
    "revision": "5af2fb43da5c81bdfe00729dabf04c8d"
  },
  {
    "url": "assets/js/9.3d3c2a6d.js",
    "revision": "d69bb3b41dcc688b64a78a260daa7eba"
  },
  {
    "url": "assets/js/app.f8e16873.js",
    "revision": "4b806e39e254ab645a4c02adbe6f18c0"
  },
  {
    "url": "assignments/api-design.html",
    "revision": "02732fefd84324f7ce1711891e938712"
  },
  {
    "url": "assignments/architecture.html",
    "revision": "578f97a8aeb29abca84a55184f1b48e4"
  },
  {
    "url": "assignments/bug-fix.html",
    "revision": "4304990b52164ea8c821e2ab35743c6f"
  },
  {
    "url": "assignments/data-structures.html",
    "revision": "8416f8b3a055ee9ec46fbe6ea1a5ebb1"
  },
  {
    "url": "assignments/deployment.html",
    "revision": "b68d9eac2f0897776b33f9e86a186498"
  },
  {
    "url": "assignments/dev-demos.html",
    "revision": "d05a52a0885a05c7ee4ebfc896ad5d1c"
  },
  {
    "url": "assignments/features.html",
    "revision": "52831acf2c8f5a77abc787e53d8a3960"
  },
  {
    "url": "assignments/final-code.html",
    "revision": "e768fbbea3029d03ca489e89c037c827"
  },
  {
    "url": "assignments/full-visual-design.html",
    "revision": "24d71d0e3b897a16dee1904ff5824eac"
  },
  {
    "url": "assignments/gantt.html",
    "revision": "59bf3b6cb0dd704846ca5c2acc75c77e"
  },
  {
    "url": "assignments/identity.html",
    "revision": "25705b3eac3df475e8b172e2a99422a8"
  },
  {
    "url": "assignments/index.html",
    "revision": "98884080bab59b3a160f3293ef8fc3d3"
  },
  {
    "url": "assignments/information-architecture.html",
    "revision": "13038b762c3951243c7d150e08ea5749"
  },
  {
    "url": "assignments/interactive-wireframe.html",
    "revision": "c6be916055629b6663c03bf610312a6e"
  },
  {
    "url": "assignments/mid-present.html",
    "revision": "442d5f3cd973ecd5af72a16794c2062a"
  },
  {
    "url": "assignments/mockup.html",
    "revision": "50abf031b6e9f9ea74dc62ec9a910702"
  },
  {
    "url": "assignments/order.html",
    "revision": "693ec4c68706f34f0efc58ee25df2ce0"
  },
  {
    "url": "assignments/paper-prototype.html",
    "revision": "f54248ffdf483f0298e3a68b06f6323e"
  },
  {
    "url": "assignments/personas.html",
    "revision": "3b29cc7e7143fec661cd2dd4ec28b19f"
  },
  {
    "url": "assignments/pitches.html",
    "revision": "8af6bd648b134e6d1bf63e6b9c7f2c28"
  },
  {
    "url": "assignments/poc.html",
    "revision": "ec6d6f669dc901d173759d5a6b424af7"
  },
  {
    "url": "assignments/product-research.html",
    "revision": "ca394563031bc7bd5b1ee0f06cd97523"
  },
  {
    "url": "assignments/reaction.html",
    "revision": "f95747760356f61bda574a9048cb2c59"
  },
  {
    "url": "assignments/responses.html",
    "revision": "00911305e059a8d7847477e3b35e7e14"
  },
  {
    "url": "assignments/tech-research.html",
    "revision": "be10647384dde6c5bd8b5ee33e2beb52"
  },
  {
    "url": "assignments/test-documents.html",
    "revision": "80e1101bea4f4f8179b2c36790adc946"
  },
  {
    "url": "assignments/test-results.html",
    "revision": "d6692fa233b64a41b44528f6464b7c39"
  },
  {
    "url": "assignments/testing.html",
    "revision": "33770ecff6a7eb600474b88e04ebb00b"
  },
  {
    "url": "assignments/ui-wireframe.html",
    "revision": "1669d789c2c94c35e93f00715f4c3fed"
  },
  {
    "url": "assignments/usage-scenarios.html",
    "revision": "21ffc3bc24c51ac937832030a35009cb"
  },
  {
    "url": "assignments/user-research.html",
    "revision": "da6c2506cb71dea60a36b80881818892"
  },
  {
    "url": "assignments/visual-design-concept.html",
    "revision": "75db53b6c5447d7359b2f9209888f48d"
  },
  {
    "url": "assignments/visual-design.html",
    "revision": "a090c6661417f0d4d82d7056e0b33151"
  },
  {
    "url": "assignments/wireframes.html",
    "revision": "db60fa8a2f1047f478d7833ed66c75d2"
  },
  {
    "url": "HeadshotPlaceholder.png",
    "revision": "dd905cc985945c4b067ad8e177bbefe0"
  },
  {
    "url": "hero.png",
    "revision": "a77ff0e74d076093d400c27e493f4974"
  },
  {
    "url": "index.html",
    "revision": "9bbc277af140bac10e7c6a4a8b4f26bc"
  },
  {
    "url": "modules/design-prototyping/index.html",
    "revision": "29c14e48eb1f0d7ad5c885133e85b0df"
  },
  {
    "url": "modules/design-prototyping/workbench.html",
    "revision": "623f8a2937366d8557720e8850b59c74"
  },
  {
    "url": "modules/development-testing/index.html",
    "revision": "7b5d301a1ad1b6ccbb7cfe2c3d46c041"
  },
  {
    "url": "modules/finalizing-hand-off/index.html",
    "revision": "0870f92d8961909257feda45db708367"
  },
  {
    "url": "modules/research-planning/agile-2.html",
    "revision": "5e1a35806b40c2260c4f7505b4498365"
  },
  {
    "url": "modules/research-planning/agile-3.html",
    "revision": "d1943f3528cc86b53bf75564a00bd17b"
  },
  {
    "url": "modules/research-planning/agile.html",
    "revision": "c48c49fe677bebb39ccf14732d96c46e"
  },
  {
    "url": "modules/research-planning/index.html",
    "revision": "05e1783d35ac807116c5bf1f88a523a4"
  },
  {
    "url": "modules/research-planning/questions.html",
    "revision": "7bc11d11168dbdee990660333172a681"
  },
  {
    "url": "modules/research-planning/service-design.html",
    "revision": "7d978c56c07fbbec46bd67bd6c3c596c"
  },
  {
    "url": "modules/research-planning/wrike.html",
    "revision": "e89c373c71e814319374197ea24a0c40"
  },
  {
    "url": "modules/week1/index.html",
    "revision": "310d24bef062530f874745ee283202f5"
  },
  {
    "url": "modules/week2/index.html",
    "revision": "e706f0b7f4a77e085cb247ff3846ab97"
  },
  {
    "url": "modules/week3/index.html",
    "revision": "becdd8b140d6df8cef38dafe4a7cfbbc"
  },
  {
    "url": "modules/week4/index.html",
    "revision": "462229efca00170a2927a909e191e1c9"
  },
  {
    "url": "overview/contacts.html",
    "revision": "dd942dc7d84100338df9b7b1184c08b1"
  },
  {
    "url": "overview/course-section-information.html",
    "revision": "3f91d25ca6725348dcfd7edd40424303"
  },
  {
    "url": "overview/index.html",
    "revision": "68b84265842549d388b05cd72dd42398"
  },
  {
    "url": "steve-griffith.jpeg",
    "revision": "3fb81c0d91a190afe01fd27de65080f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
