🌟 MERGEN AI – Modern iOS AI Assistant

SwiftUI • GPT-4o • Gemini 2.5 • Cloudflare Workers • Real-Time Streaming AI

MERGEN AI is a fast, privacy-oriented mobile AI assistant built entirely for iOS using modern SwiftUI architecture and multi-model LLM integrations.

⸻

🚀 Features

🧠 Multi-Model AI Engine
	•	OpenAI GPT-4o integration
	•	Google Gemini 2.5 Flash / Flash-Lite
	•	Groq LLaMA support (optional)
	•	Automatic fallback logic

⚡ Real-Time Streaming Architecture
	•	SwiftUI ObservableObject streaming
	•	SSE/WebSocket worker integration
	•	Smooth token-by-token rendering

📱 Modern iOS UI
	•	Fully custom chat interface
	•	Chat bubbles, animations, typing indicators
	•	Image input & preview
	•	Markdown rendering

🔐 Privacy-Oriented Backend
	•	Custom Cloudflare Worker API
	•	Request sanitization
	•	Key protection
	•	Logging disabled (privacy-mode)

⸻

🛠 Tech Stack

Frontend (iOS)
	•	SwiftUI
	•	Combine
	•	Async/Await
	•	URLSession custom API client
	•	MarkdownKit

Backend
	•	Cloudflare Workers
	•	JavaScript / TypeScript (opsiyonel)
	•	OpenAI & Gemini REST APIs
	•	Streaming infrastructure

⸻

📚 Architecture Overview

/mergen-ai
 ├── ios/
 │   └── S2UI, ConnectedAgent, CreativeCloudEngine...
 ├── api/
 │   └── worker-openai.js
 │   └── worker-gemini.js
 ├── documentation/
 │   └── architecture.md
 │   └── api-reference.md
 ├── screenshots/
 │   └── ui-preview.png
 └── README.md

 🧩 Cloudflare Worker API (Example)

 export default {
  async fetch(req, env) {
    const body = await req.json();
    const prompt = body.prompt || "";

    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
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

    return new Response(openaiRes.body, {
      headers: { "Content-Type": "application/json" }
    });
  }
};

📱 iOS Structure (Example Swift)

@MainActor
final class ConnectedAgent: ObservableObject {
    @Published var messages: [ChatMessage] = []
    @Published var isStreaming = false

    private let apiURL = "https://YOUR_WORKER_URL/mergen"

    func send(_ text: String) async {
        guard !text.isEmpty else { return }

        messages.append(.init(role: .user, text: text))

        let body = ["prompt": text]

        guard let data = try? JSONEncoder().encode(body),
              let url = URL(string: apiURL) else { return }

        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.httpBody = data
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")

        let (response, _) = try! await URLSession.shared.data(for: request)

        let modelResponse = try? JSONDecoder().decode(ModelResponse.self, from: response)
        if let reply = modelResponse?.text {
            messages.append(.init(role: .assistant, text: reply))
        }
    }
}

📫 Contact
	•	Website: https://mergenai.net
	•	LinkedIn: https://linkedin.com/in/mucahit-kocabas
	•	Email: mergen@mergenai.net
