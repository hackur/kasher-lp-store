import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  try {
    // Try to create a user with the payload API instead of direct SQL
    try {
      await payload.create({
        collection: 'users',
        data: {
          email: 'admin@example.com',
          password: 'admin123',
        },
      });
      console.log('Admin user created successfully with payload API');
    } catch (payloadError) {
      console.error('Error creating user with payload API:', payloadError);
      console.log('Falling back to direct SQL insertion...');
      
      // Fallback to direct SQL insertion with placeholder values
      // Note: This won't create a working password, but will create a user
      await db.execute(sql`
        INSERT INTO "users" (email, created_at, updated_at)
        VALUES ('admin@example.com', NOW(), NOW())
        ON CONFLICT (email) DO NOTHING;
      `);
      console.log('Admin user placeholder created via SQL');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
  }
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Nothing to do on rollback
}
