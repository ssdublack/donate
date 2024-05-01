
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.ef80c5de8df5ce7c14f6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/115.latest.en.c60b64459393e1fcaa54.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/486.latest.en.08c31c8a32005b5fec1f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/137.latest.en.c494c1348d73aa1d1144.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.cf5a4b888888661cd78a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/977.latest.en.e1a0ded7d00403072415.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/582.latest.en.de806f2f8a7e7f123ef5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/78.latest.en.bc2f449157750c537e8d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/927.latest.en.222f26622f6ff8ccbe95.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/879.latest.en.b574f913b2e4814342c3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/387.latest.en.7d9113ef24c6eb2f044f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.6c194264088be34ad1fc.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/115.latest.en.cb97d8c0c0262885bcdb.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.140d43eee07cb8713aa0.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.c0bf939290e35b2eeaf0.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  