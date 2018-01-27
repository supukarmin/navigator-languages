const defaultOptions = {
  debug: true,
};

if (process && process.env && process.env.NODE_ENV) {
  defaultOptions.debug = process.env.NODE_ENV === 'development';
}

module.exports = defaultOptions;
