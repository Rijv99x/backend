export default function handler(req, res) {
  const startTime = performance.now();

  try {
    const userAgent = req.headers['user-agent'] || '';

    const isRoblox =
      userAgent.includes("Roblox") ||
      req.headers['roblox-id'];

    if (!isRoblox) {
      return res.status(403).send("nice try, better luck next time");
    }

    const endTime = performance.now();
    const timeTaken = (endTime - startTime).toFixed(2);
    const timingWarning = `warn("kynx.net")`;
    const luaScript = `print("nice work")`;
    const finalScript = timingWarning;

    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(finalScript);

  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
}
