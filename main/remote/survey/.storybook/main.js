import { dirname, join } from "node:path";

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

export default {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  framework: "storybook-react-rsbuild",
  addons: [
    "@storybook/addon-essentials",
    {
      name: "@module-federation/storybook-addon/preset",
      options: {
        "remote-01": {
          "remote-01": "remote-01@http://remote-01:3001/mf-manifest.json",
        },
      },
    },
  ],
};
