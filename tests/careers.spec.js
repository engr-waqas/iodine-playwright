import { test } from '@playwright/test'
import { careersPage } from './careersPage'

test('Apply for SDET Role with invalid email', async ({ page }) => {
  const Iodine = new careersPage()
  await Iodine.navigateToCareersPage(page)
  const newPage = await Iodine.switchToNewTab(page)
  const topframe = await Iodine.getTopFrame(newPage)
  await Iodine.scrollAndClickSdetRole(topframe)
  await Iodine.selfIdentify(topframe)
  await Iodine.veteranStatus(topframe)
  await Iodine.disablityForm(topframe)
  await Iodine.uploadResume(topframe)
  await Iodine.fillSomeRequiredFields(topframe)
  await Iodine.submitForm(topframe)
  await Iodine.emailValidation(page)
})
