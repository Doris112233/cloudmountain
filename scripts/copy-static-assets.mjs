import { copyFile, mkdir } from "node:fs/promises";

await mkdir("dist", { recursive: true });
await copyFile("favicon.ico", "dist/favicon.ico");
