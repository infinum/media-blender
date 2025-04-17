const path = require("path");
const sassTrue = require("sass-true");

const sassFiles = ["media-breakpoints.scss", "custom-breakpoints.scss"];

sassFiles.forEach((file) => {
	const filePath = path.join(__dirname, file);
	sassTrue.runSass({ describe, it }, filePath, {
		loadPaths: ["node_modules"],
	});
});
