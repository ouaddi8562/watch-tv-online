
const fs = require("fs");

let pageTsx = fs.readFileSync("app/page.tsx", "utf-8");
pageTsx = pageTsx.replace(/N.*1 PREMIUM IPTV.*99\.9% UPTIME/g, "N°1 PREMIUM IPTV · 99.9% UPTIME");
pageTsx = pageTsx.replace(/—|\?"/g, "—");
pageTsx = pageTsx.replace(/★|~\.~\.~\.~\.~\./g, "★★★★★");
fs.writeFileSync("app/page.tsx", pageTsx, "utf-8");

let pricingTsx = fs.readFileSync("components/PricingCalculator.tsx", "utf-8");
pricingTsx = pricingTsx.replace(/\?\{getPrice/g, "€{getPrice");
pricingTsx = pricingTsx.replace(/\?\{getMonthly/g, "€{getMonthly");
pricingTsx = pricingTsx.replace(/Price: \?/g, "Price: €");
pricingTsx = pricingTsx.replace(/WhatsApp  7-day/g, "WhatsApp • 7-day");
pricingTsx = pricingTsx.replace(/guarantee  No/g, "guarantee • No");
pricingTsx = pricingTsx.replace(/Watch-TV Online! \?\?/g, "Watch-TV Online! 👋");
// Catch-all for weird question marks replacing euros
pricingTsx = pricingTsx.replace(/<span>\?/g, "<span>€");
pricingTsx = pricingTsx.replace(/amount">\?/g, "amount\">€");
pricingTsx = pricingTsx.replace(/WhatsApp \? 7-day money-back guarantee \? No commitment/g, "WhatsApp • 7-day money-back guarantee • No commitment");

fs.writeFileSync("components/PricingCalculator.tsx", pricingTsx, "utf-8");

