// next.config.mjs
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins = [...config.plugins, new NodePolyfillPlugin()];

    if (isServer) {
      config.externals = [
        nodeExternals({
          allowlist: [/^node:/],
        }),
        (context, request, callback) => {
          const externals = [
            'next/dist/esm/server/web/globals',
            'next/dist/esm/server/web/adapter',
            'next/dist/esm/server/lib/incremental-cache',
            'next/dist/esm/server/api-utils',
          ];
          if (externals.includes(request)) {
            return callback(null, 'commonjs ' + request);
          }
          callback();
        },
      ];
    }

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'node:crypto': 'crypto-browserify',
        'node:fs': 'browserify-fs',
        'node:path': 'path-browserify',
        'node:os': 'os-browserify/browser',
      },
    };

    return config;
  },
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform({
    persist: true,
  });
}

export default nextConfig;