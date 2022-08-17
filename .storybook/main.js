module.exports = {
  stories: ["../projects/insite-kit/**/*.@(stories|story).@(ts|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
  ],
  framework: "@storybook/angular",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
