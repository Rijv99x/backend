const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  try {
    const userAgent = req.headers['user-agent'] || '';

    const isRoblox =
      userAgent.includes("Roblox") ||
      req.headers['roblox-id'];

    if (!isRoblox) {
      const html = fs.readFileSync(path.join(process.cwd(), 'public', 'index.html'), 'utf8');
      res.setHeader("Content-Type", "text/html");
      return res.status(200).send(html);
    }

    const luaScript = `loadstring(game:HttpGet("https://raw.githubusercontent.com/Fsploit/Akak/main/api/loader.txt"))()`;
    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(luaScript);

  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
}
