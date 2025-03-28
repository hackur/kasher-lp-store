import * as migration_20250328_112540 from './20250328_112540';
import * as migration_seed from './seed';

export const migrations = [
  {
    up: migration_20250328_112540.up,
    down: migration_20250328_112540.down,
    name: '20250328_112540',
  },
  {
    up: migration_seed.up,
    down: migration_seed.down,
    name: 'seed'
  },
];
