import path from 'path';

import integrationTest from 'parser/core/tests/integrationTest';

import CombatLogParser from '../CombatLogParser';

describe('Arcane Mage integration test: example log', integrationTest(
  CombatLogParser,
  path.resolve(__dirname, 'example.zip'),
));
