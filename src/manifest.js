/**
 * @see {@link https://developer.chrome.com/extensions/manifest}
 */
module.exports = {
  name: 'Modern New Tab',
  description: 'A modern and clean new tab extension',
  author: 'victor pugin <victor.pugin@epitech.eu>',
  version: '0.3.3',
  icons: {
    '128': 'icons/icon_128.png'
  },
  /**
   * @see {@link https://developer.chrome.com/extensions/declare_permissions}
   */
  permissions: [
    'storage',
    'bookmarks',
    'chrome://favicon/',
    'https://api.unsplash.com/*'
  ],
  browser_action: {
    default_title: 'New Tab',
    default_popup: 'pages/popup.html'
  },
  background: {
    persistent: false,
    page: 'pages/background.html'
  },
  manifest_version: 2,
  content_security_policy: "script-src 'self'; object-src 'self'",
  web_accessible_resources: [
    'js/content.js'
  ],
  chrome_url_overrides: {
    'newtab': 'pages/app.html'
  }
}
