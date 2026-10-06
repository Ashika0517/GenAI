import base64
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.voice import generate_voice

router = APIRouter()

class VoiceRequest(BaseModel):
    text: str
    voice: str = "en-US-AriaNeural"
    rate: str = "+0%"

@router.post("/generate")
def generate(req: VoiceRequest):
    try:
        audio = generate_voice(req.text, req.voice, req.rate)
        return {"audio": base64.b64encode(audio).decode("utf-8")}
    except Exception as e:
        raise HTTPException(502, str(e))
