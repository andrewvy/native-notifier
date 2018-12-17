'use strict';
const os = require('os').platform();

const loadPlatformNotifier = () => {
  switch (os) {
    case 'darwin': return require('./macos');
    case 'linux': return require('./linux');
    case 'win32': return require('./windows');
    default: return () => {};
  }
}

module.exports = (opts) => {
  const platformNotifier = loadPlatformNotifier()

  return platformNotifier(opts).on('error', () => {})
}
