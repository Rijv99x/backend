export async function onRequest(context) {
    const startTime = Date.now();

    try {
        const { request } = context;
        const url = new URL(request.url);
        const userAgent = request.headers.get('user-agent') || '';

        const secret = url.searchParams.get('key');

        if (secret !== 'rj20el') {
            return new Response("Forbidden", { status: 403 });
        }

        const isRoblox = userAgent.includes("Roblox") || request.headers.get('roblox-id');

        if (!isRoblox) {
            const indexHtml = await context.env.ASSETS.fetch(new Request("https://placeholder/index.html"));
            return new Response(indexHtml.body, {
                status: 403,
                headers: { 'Content-Type': 'text/html' }
            });
        }

        const luaScriptContent = `print("AYOOOOO LES GO")`;

        const endTime = Date.now();
        const timeTaken = (endTime - startTime).toFixed(2);

        const finalScript = `warn("kynx.net")` + luaScriptContent;

        return new Response(finalScript, {
            status: 200,
            headers: { 'Content-Type': 'text/plain' }
        });

    } catch (error) {
        console.error("API Error:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
