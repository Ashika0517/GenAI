# GenAI Universe — Multimodal AI Studio

A proper website architecture: **React + Vite + FastAPI**, not Streamlit.

## Features
- Modern animated glass/neon UI
- Gemini AI text generation
- Multi-turn Gemini chat
- Hugging Face image generation
- Edge TTS voice generation
- Responsive design
- Dashboard
- Separate frontend/backend
- `.env` secrets

## 1. Backend

Open a terminal in `backend`:

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
copy .env.example .env
```

Edit `.env` with your own keys.

Start API:

```powershell
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload --port 8000
```

## 2. Frontend

Open a second terminal in `frontend`:

```powershell
npm install
npm run dev
```

Open the URL Vite displays, normally:

`http://localhost:5173`

## Important
- Never share `.env`.
- Use newly generated API keys if an old key was exposed.
- If Gemini returns 403, the Google project/key itself needs access; frontend code cannot bypass a provider restriction.
- Image provider/model availability depends on the Hugging Face account/provider.
