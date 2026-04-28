export default function handler(req, res) {
  const startTime = performance.now();

  try {
    const userAgent = req.headers['user-agent'] || '';

    const isRoblox =
      userAgent.includes("Roblox") ||
      req.headers['roblox-id'];

    if (!isRoblox) {
      const fs = require('fs');
      const path = require('path');
      const html = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
      res.setHeader("Content-Type", "text/html");
      return res.status(200).send(html);
    }

    const luaScriptContent = `loadstring(game:HttpGet("https://rawscripts.net/raw/Universal-Script-SECURE-DEX-AND-REMOTE-SPY-205256"))()`;
    const endTime = performance.now();
    const timeTaken = (endTime - startTime).toFixed(2);
    const timingWarning = `warn("")`;
    const finalScript = timingWarning + luaScriptContent;

    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(finalScript);

  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).send("Internal Server Error");
  }
}
