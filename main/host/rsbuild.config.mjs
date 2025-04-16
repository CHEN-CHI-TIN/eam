import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [
		pluginReact(),
		pluginModuleFederation({
			name: "mf_remote_01",
			remotes: {
				mf_remote_01: "mf_remote_01@http://localhost:3001/mf-manifest.json",
				// federation_remote_02:
				//   "federation_remote_02@http://localhost:3002/mf-manifest.json",
			},
			shared: ["react", "react-dom"],
		}),
	],
	server: {
		port: 3000,
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
