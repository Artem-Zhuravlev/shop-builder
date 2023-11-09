import type { StorybookConfig } from '@storybook/react-webpack5/dist';

const config: StorybookConfig = {
  stories: [
    '../app/ui/**/*.stories.@(js|jsx|ts|tsx)',
    '../app/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/preset-scss"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    if (config && config.resolve) {
      config.resolve.fallback = {
        "zlib": false,
        "fs": false,
        "stream": false,
        "path": require.resolve("path-browserify")
      };
    } else {
      console.error("Property 'resolve' is missing in the config object.");
    }

    return config;
  },
};
export default config;
