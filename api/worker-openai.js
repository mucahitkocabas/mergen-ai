export default {
  async fetch(req, env) {
    if (req.method !== "POST") {
      return new Response("Only POST allowed", { status: 405 });
    }

    const { prompt } = await req.json();

    const aiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + env.OPENAI_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        stream: false
      })
    });

    return new Response(aiRes.body, {
      headers: { "Content-Type": "application/json" }
    });
  }
};
