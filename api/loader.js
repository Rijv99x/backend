export default function handler(req, res) {
  try {
    const key = req.query.key;
    const userAgent = req.headers['user-agent'] || '';

    const isRoblox =
      userAgent.includes("Roblox") ||
      req.headers['roblox-id'];

    if (key !== "rj20el" || !isRoblox) {
      return res.status(403).send("nice try, better luck next time");
    }

    const luaScript = `loadstring(game:HttpGet("https://rawscripts.net/raw/Universal-Script-SECURE-DEX-AND-REMOTE-SPY-205256"))()`;
    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(luaScript);

  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
}
