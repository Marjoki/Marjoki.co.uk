// default open-next.config.ts file created by @opennextjs/cloudflare
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
// import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

// buildCommand ensures opennextjs-cloudflare runs "npx next build" instead of "npm run build" (avoids loop)
export default defineCloudflareConfig({
	// @ts-expect-error buildCommand is supported at runtime (passed to @opennextjs/aws) but not in CloudflareOverrides type
	buildCommand: "npx next build",
	// For best results consider enabling R2 caching
	// See https://opennext.js.org/cloudflare/caching for more details
	// incrementalCache: r2IncrementalCache
});
