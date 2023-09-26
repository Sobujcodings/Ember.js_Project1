// .babelrc.js or babel.config.js
module.exports = {
  presets: [
    // ... other presets ...
  ],
  plugins: [
    // ... other plugins ...
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
  ],
};
