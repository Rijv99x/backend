export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  const isRoblox =
    userAgent.includes("Roblox") ||
    req.headers['roblox-id'];

  if (!isRoblox) {
    return res.status(403).send("nice try, better luck next time");
  }

  const startTime = performance.now();
  const endTime = performance.now();
  const timeTaken = (endTime - startTime).toFixed(2);
  const timingWarning = `warn("")`;
  const luaScript = `loadstring(game:HttpGet("https://rawscripts.net/raw/Universal-Script-SECURE-DEX-AND-REMOTE-SPY-205256"))()`;
  const finalScript = timingWarning;

  res.setHeader("Content-Type", "text/plain");
  return res.status(200).send(finalScript);
}
