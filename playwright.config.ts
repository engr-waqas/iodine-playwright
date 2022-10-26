import { defineConfig, devices} from '@playwright/test'
export default defineConfig({
  // Options shared for all projects.
  timeout: 60000,
  expect: { timeout: 10000 },
  use: {
    ignoreHTTPSErrors: true,
    headless: true
  },
  
  // Options specific to each project.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
]
})
