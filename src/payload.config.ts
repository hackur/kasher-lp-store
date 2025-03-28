import { postgresAdapter } from '@payloadcms/db-postgres'
import { neon } from '@neondatabase/serverless'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import {
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Pages } from './collections/Pages'
import { Users } from './collections/Users'
import { MainMenu } from './globals/MainMenu'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// eslint-disable-next-line no-restricted-exports
export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
  },
  collections: [Pages, Users],
  // We need to set CORS rules pointing to our hosted domains for the frontend to be able to submit to our API
  cors: [process.env.NEXT_PUBLIC_PAYLOAD_URL || ''],
  db: postgresAdapter({
    // Default pool config (primarily for local)
    pool: {
      connectionString: process.env.DATABASE_URL || '',
      max: 10,
    },
    // Conditionally add Drizzle config for Vercel
    ...(process.env.VERCEL
      ? {
          pool: undefined, // Explicitly disable pool for Vercel/Drizzle
          drizzle: {
            driver: neon(process.env.POSTGRES_URL || ''), // Pass the neon driver factory
          },
        }
      : {}),
  }),
  editor: lexicalEditor({
    features: () => {
      return [
        BoldFeature(),
        ItalicFeature(),
        LinkFeature({ enabledCollections: ['pages'] }),
        HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] }),
        FixedToolbarFeature(),
        InlineToolbarFeature(),
      ]
    },
  }),
  globals: [MainMenu],
  graphQL: {
    schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
  },
  plugins: [
    formBuilderPlugin({
      fields: {
        payment: false,
      },
      formOverrides: {
        fields: undefined,
      },
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
