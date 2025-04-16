import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [
		pluginReact(),
		pluginModuleFederation({
			name: "mf_remote_01",
			exposes: {
				"./button": "./src/components/button.jsx",
			},
			shared: ["react", "react-dom"],
		}),
	],
	dev: {
		assetPrefix: "http://localhost:3001",
	},
	output: {
		distPath: {
			root: "./dist",
		},
		assetPrefix: "http://localhost:3001",
	},
	server: {
		port: 3001,
		open: false,
		host: "0.0.0.0",
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
