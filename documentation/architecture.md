# 🏗 MERGEN AI – Architecture Overview

MERGEN AI is composed of two main layers:

## 1. iOS Client (SwiftUI)
- SwiftUI interface
- Streaming-based message renderer
- Custom chat bubbles
- Async/await network layer
- Local-only message queue (no external logging)
- Optional future offline model mode

## 2. Cloudflare Worker Backend
- Routes:
  - `/` → Health check
  - `/mergen` → GPT-4o & Gemini unified chat endpoint
  - `/img` → Image generation endpoint
- Key protection + rate limiting
- JSON request/response format
- AI model fallback logic
