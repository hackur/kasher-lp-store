// CommonJS script to create an admin user
require('dotenv').config({ path: '.env.local' });

// Use a direct approach to create a user
const { getPayload } = require('payload');

async function createAdmin() {
  try {
    // Initialize payload without config file
    const payload = await getPayload({
      secret: process.env.PAYLOAD_SECRET || 'DEFAULT_SECRET_CHANGE_ME',
    });

    try {
      const user = await payload.create({
        collection: 'users',
        data: {
          email: 'admin@example.com',
          password: 'Password123!',
        },
      });
      console.log('Created admin user:', user.email);
    } catch (err) {
      console.error('Error creating user:', err.message);
    }
    process.exit(0);
  } catch (err) {
    console.error('Error initializing payload:', err);
    process.exit(1);
  }
}

createAdmin();
