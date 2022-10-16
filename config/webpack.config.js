const path = require("path");

module.exports = {
	optimization: {
		minimize: true,
	},
	devtool: "source-map",
	mode: "production",
	resolve: {
		modules: ["node_modules"],
		extensions: [".tsx", ".ts"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
};
