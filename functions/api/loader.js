export async function onRequest(context) {
  const request = context.request;
  const startTime = performance.now();

  try {
    const userAgent = request.headers.get("user-agent") || "";

    const isRoblox =
      userAgent.includes("Roblox") ||
      request.headers.get("roblox-id");

    if (!isRoblox) {
      return new Response("nice try, better luck next time", { status: 403 });
    }

    const endTime = performance.now();
    const timeTaken = (endTime - startTime).toFixed(2);
    const timingWarning = `warn("script successfully loaded: ${timeTaken}ms")\n`;
    const luaScript = `print("nice work"`;
    const finalScript = timingWarning + luaScript;

    return new Response(finalScript, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });

  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
