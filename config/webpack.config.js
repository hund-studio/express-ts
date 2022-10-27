module.exports = (target, mode) => {
	return {
		mode,
		optimization: {
			minimize: mode !== "production" ? false : true,
		},
		devtool: "source-map",
		resolve: {
			modules: ["node_modules"],
			extensions: [".js", ".tsx", ".ts"],
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
};
