/* eslint-disable @typescript-eslint/no-var-requires */
const componentGenerator = require('./component');

const plopConfig = (plop) => {
  plop.setGenerator('component', componentGenerator);
};

module.exports = plopConfig;
