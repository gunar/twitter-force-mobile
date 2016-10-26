// ==UserScript==
// @name         Twittter Force Mobile
// @version      1.0.1
// @description  auto-forward you to the mobile version of twitter
// @author       http://github.com/gunar
// @match        https://twitter.com/*
// @match        https://www.twitter.com/*
// @match        http://www.twitter.com/*
// @match        http://twitter.com/*"
// ==/UserScript==

(function() {
  'use strict';

  window.location = 'https://mobile.twitter.com' + window.location.pathname
})();
