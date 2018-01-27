const packageJson = require('../package.json');
const defaultOptions = require('./defaultOptions');
const getLanguageTags = require('./getLanguageTags');

module.exports = (userOptions) => {
  const options = {
    ...defaultOptions,
    ...userOptions,
  };
  if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    return getLanguageTags();
  } else {
    if (options.debug) {
      console.error(`[${packageJson.name}@${packageJson.version}] This package should only be used client-side. Please remove the code from your server-side code.`);
    }
  }
  return null;
};
