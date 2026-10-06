from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import text, chat, image, voice

app = FastAPI(title="GenAI Universe API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(text.router, prefix="/api/text")
app.include_router(chat.router, prefix="/api/chat")
app.include_router(image.router, prefix="/api/image")
app.include_router(voice.router, prefix="/api/voice")

@app.get("/api/health")
def health():
    return {"status": "ok", "service": "GenAI Universe API"}
