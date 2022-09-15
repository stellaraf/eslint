import esbuild from "esbuild";

import type { Format, BuildOptions } from "esbuild";

async function build(format: Exclude<Format, "iife">): Promise<void> {
    const extension = format === "cjs" ? "cjs" : "mjs";
    const outfile = `dist/index.${extension}`;
    const options: BuildOptions = {
        bundle: true,
        target: ["esnext"],
        format,
        platform: "node",
        entryPoints: ["src/index.ts"],
        outfile,
    };
    const result = await esbuild.build(options);
    for (const error of result.errors) {
        console.error(error.text);
    }
    for (const warning of result.warnings) {
        console.warn(warning.text);
    }
    if (result.errors.length !== 0) {
        process.exit(1);
    }
    process.exit(0);
}

build("esm");
build("cjs");
