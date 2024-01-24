import { PuppeteerNode } from "puppeteer-core";

let chrome: any = {};
let puppeteer: PuppeteerNode;
let options: any = { headless: "new" };
if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  chrome = require("@sparticuz/chromium");
  puppeteer = require("puppeteer-core");
  // Wrap the code in an async function
  (async () => {
    options = {
      args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath(),
      headless: chrome.headless,
      ignoreHTTPSErrors: true,
    };
  })();
} else {
  puppeteer = require("puppeteer");
}

export { options, puppeteer as default };
