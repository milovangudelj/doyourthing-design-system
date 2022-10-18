import fs from "fs";
import esbuild from "esbuild";
import chalk from "chalk";
import { resolveFiles } from "./resolve-files.mjs";

// Parse watch flag
const args = process.argv.slice(2);
const watch = args.includes("-w") || args.includes("--watch");

const src = "./src";
const dst = "./dist";

// Create dist folder before build if it doesn't exist
if (!fs.existsSync(dst)) {
	fs.mkdirSync(dst);
}

// get files and print them for reference
const files = resolveFiles(src, "/**/*.{ts,tsx}");
console.log(`Files:\n  ${chalk.bold(files.join("\n  "))}`);

// shared build options between cjs and esm outputs
const shared = {
	// define: { global: "window" },
	sourcemap: true,
	platform: "browser",
	target: ["es2019"],
	minify: true,
	pure: ["React.createElement"],
};

// esm output
esbuild
	.build({
		...shared,
		entryPoints: files,
		format: "esm",
		outdir: dst,
		watch: watch
			? {
					onRebuild(error, result) {
						if (error) console.error("(ESM) Watch build failed:", error);
						else console.log("(ESM) Watch build succeeded!");
					},
			  }
			: false,
	})
	.then(() =>
		console.log(
			`(ESM) Build complete! ${watch ? "Watching for changes..." : ""}`
		)
	)
	.catch(() => process.exit(1));

// cjs output bundle
esbuild
	.build({
		...shared,
		entryPoints: [`${src}/index.ts`],
		format: "cjs",
		outfile: `${dst}/index.cjs`,
		bundle: true,
		external: ["react", "tailwindcss", "@tailwindcss/forms"],
		watch: watch
			? {
					onRebuild(error, result) {
						if (error) console.error("(CJS) Watch build failed:", error);
						else console.log("(CJS) Watch build succeeded!");
					},
			  }
			: false,
	})
	.then(() =>
		console.log(
			`(CJS) Build complete! ${watch ? "Watching for changes..." : ""}`
		)
	)
	.catch(() => process.exit(1));
