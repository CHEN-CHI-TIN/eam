import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [
		pluginReact(),
		pluginModuleFederation({
			name: "remote-01",
			exposes: {
				"./button": "./src/components/button.jsx",
				"./previewSurvey": "./src/components/previewSurvey.jsx",
			},
			shared: ["react", "react-dom"],
		}),
	],
	dev: {
		assetPrefix: "http://remote-01:3001",
    publicPath: 'auto',
	},
	output: {
		distPath: {
			root: "./dist",
		},
		assetPrefix: "http://remote-01:3001",
    publicPath: 'auto',
	},
	server: {
		port: 3001,
    host: "0.0.0.0",
    // https: true,
	},
	shared: {
		react: {
			singleton: true,
			requiredVersion: "^18.2.0",
		},
		"react-dom": {
			singleton: true,
			requiredVersion: "^18.2.0",
		},
	},
});
