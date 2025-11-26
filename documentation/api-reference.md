# 🌐 MERGEN AI API Reference

## 🔹 POST /mergen
Unified LLM chat endpoint.

### Request Body:
{
  "prompt": "User message",
  "image": "<base64 image (optional)>"
}

### Response:
{
  "text": "Model reply",
  "model": "gpt-4o-mini"
}

## 🔹 POST /img
Text → Image endpoint.
