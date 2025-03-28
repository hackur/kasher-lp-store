#!/usr/bin/env node
console.log('Starting custom Vercel build script');

// This script will run before the Next.js build on Vercel
// Add any custom preparation steps here

// Check for required environment variables
const requiredEnvVars = ['DATABASE_URI', 'PAYLOAD_SECRET', 'NEXT_PUBLIC_PAYLOAD_URL'];
const missing = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missing.length > 0) {
  console.error(`Error: Missing required environment variables: ${missing.join(', ')}`);
  process.exit(1);
}

// Log environment for debugging (without sensitive values)
console.log('Environment check passed. Building with:');
console.log(`- DATABASE_URI: ${process.env.DATABASE_URI ? '[Set]' : '[Not Set]'}`);
console.log(`- PAYLOAD_SECRET: ${process.env.PAYLOAD_SECRET ? '[Set]' : '[Not Set]'}`);
console.log(`- NEXT_PUBLIC_PAYLOAD_URL: ${process.env.NEXT_PUBLIC_PAYLOAD_URL}`);

// Check for Vercel environment
if (process.env.VERCEL) {
  console.log('Building on Vercel platform');
} else {
  console.log('Building in local environment');
}

// Exit successfully to continue build
console.log('Custom build script completed successfully');
process.exit(0);
