import os
from dotenv import load_dotenv
from google import genai

load_dotenv(override=True)

API_KEY = os.getenv("GEMINI_API_KEY", "").strip()
MODEL = os.getenv("GEMINI_MODEL", "gemini-2.5-flash").strip()

_client = genai.Client(api_key=API_KEY) if API_KEY else None

def generate_text(prompt: str) -> str:
    if not _client:
        raise RuntimeError("GEMINI_API_KEY is missing. Add it to backend/.env.")
    response = _client.models.generate_content(
        model=MODEL,
        contents=prompt
    )
    text = getattr(response, "text", "") or ""
    if not text.strip():
        raise RuntimeError("Gemini returned an empty response.")
    return text.strip()

def chat(messages: list[dict]) -> str:
    if not _client:
        raise RuntimeError("GEMINI_API_KEY is missing. Add it to backend/.env.")
    contents = []
    for m in messages:
        role = "user" if m.get("role") == "user" else "model"
        contents.append({
            "role": role,
            "parts": [{"text": m.get("content", "")}]
        })
    response = _client.models.generate_content(model=MODEL, contents=contents)
    text = getattr(response, "text", "") or ""
    return text.strip()
