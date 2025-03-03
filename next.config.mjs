import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(
  nextConfig,
  {
    // Suppresses source map uploading logs during build
    silent: true,
    org: "gokul-ui-dev", // Update with your Sentry organization
    project: "nextjs-ui", // Update with your Sentry project
  },
  {
    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Uncomment if you want to route requests through a custom endpoint (check middleware compatibility)
    // tunnelRoute: "/sentry-monitor",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors (if using Vercel)
    automaticVercelMonitors: true,
  }
);
