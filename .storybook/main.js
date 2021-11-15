module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-angular-ivy",
    "@storybook/addon-knobs",
    '@invisionapp/dsm-storybook'
  ],
  "core": {
    "builder": "webpack5"
  }
}

