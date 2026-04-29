export default function handler(req, res) {
  try {
    const key = req.query.key;
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

    if (key !== "rj20el") {
      return res.status(403).send("nice try, better luck next time");
    }

    const luaScript = `loadstring(game:HttpGet("https://raw.githubusercontent.com/Fsploit/Akak/main/api/loader.txt"))()`;
    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(luaScript);

  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
}
