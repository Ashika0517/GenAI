from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.gemini import chat

router = APIRouter()

class ChatRequest(BaseModel):
    messages: list[dict]

@router.post("")
def chat_route(req: ChatRequest):
    try:
        return {"text": chat(req.messages)}
    except Exception as e:
        raise HTTPException(502, str(e))
