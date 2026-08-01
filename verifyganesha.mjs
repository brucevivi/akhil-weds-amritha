import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await (await browser.newContext({ viewport: { width: 700, height: 500 } })).newPage()
await page.goto('http://localhost:5173', { waitUntil: 'networkidle' })
const box = await page.locator('#invitation').boundingBox()
await page.evaluate((y) => window.scrollTo(0, y), box.y)
await page.waitForTimeout(1200)
await page.screenshot({
  path: 'C:/Users/admin/AppData/Local/Temp/claude/d--Projects-GomuWedsVivi-vivek-weds-gauthami/97bee364-8ab2-4e14-9c17-2ee47bf14c04/scratchpad/ganesha-check.png',
})
await browser.close()
console.log('done')
