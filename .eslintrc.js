module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-doyourthing`
  extends: ["doyourthing"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
