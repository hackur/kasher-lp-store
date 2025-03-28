#!/usr/bin/env node
// This script prepares the environment for building on Vercel
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

console.log('Running pre-build script for Vercel deployment');

// Check if we're on Vercel
if (process.env.VERCEL) {
  console.log('Detected Vercel environment');
  
  // Log database connection info (without revealing secrets)
  const dbVars = [
    'POSTGRES_URL',
    'DATABASE_URI',
    'POSTGRES_PRISMA_URL',
    'POSTGRES_URL_NON_POOLING'
  ];
  
  dbVars.forEach(varName => {
    if (process.env[varName]) {
      // Log only that the variable exists, not its content
      console.log(`✓ ${varName} is defined`);
      
      // Validate the format of the connection string
      const value = process.env[varName];
      if (value.startsWith('postgres://') || value.startsWith('postgresql://')) {
        console.log(`✓ ${varName} has correct format`);
      } else {
        console.log(`✗ ${varName} may have incorrect format`);
      }
    } else {
      console.log(`✗ ${varName} is not defined`);
    }
  });
}

// Exit successfully
console.log('Pre-build script completed');
process.exit(0);
