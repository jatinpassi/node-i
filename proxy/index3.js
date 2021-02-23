const product = {
  browser: []
};

module.exports = proxy = new Proxy(product, {
  get: function(target, prop) {
    if (prop === "latestBrowser") {
      return target.browser;
    }
    return undefined;
  },
  set: function(product, prop, value) {
    if (prop === "latestBrowser") {
      product.browser.push(value);
    }
  }
});
