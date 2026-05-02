export default function handler(req, res) {
  try {
    const userAgent = req.headers['user-agent'] || '';

    const isRoblox =
      userAgent.includes("Roblox") ||
      req.headers['roblox-id'];

    if (!isRoblox) {
      const fs = require('fs');
      const html = fs.readFileSync(__dirname + '/../index.html', 'utf8');
      res.setHeader("Content-Type", "text/html");
      return res.status(200).send(html);
    }

    const luaScript = `loadstring(game:HttpGet("https://vss.pandadevelopment.net/virtual/file/a8cbc921eb984925"))()`;
    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(luaScript);

  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
}
