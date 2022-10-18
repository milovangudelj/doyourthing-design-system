import fastGlob from "fast-glob";
import path from "path";

export const resolveFiles = (source, fileNames) => {
	let ignore = [".test.", ".spec.", null, ".stories."];
	// Just for fun and testing a cool idea
	ignore = ignore.filter(Boolean);

	const files = fastGlob.sync(path.join(source, fileNames)).filter((file) => {
		let keep = true;

		ignore.forEach((item) => {
			if (file.includes(item)) keep = false;
		});

		return keep;
	});

	return files;
};
