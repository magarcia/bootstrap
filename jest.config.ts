import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => ({
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    'js',
    'svelte',
    'ts'
  ],
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        "preprocess": true
      }
    ],
    '^.+\\.ts$': 'ts-jest',
  }
})
