from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.gemini import generate_text

router = APIRouter()

class TextRequest(BaseModel):
    topic: str
    content_type: str = "Blog"
    tone: str = "Professional"
    length: str = "Medium"
    requirements: str = ""

@router.post("/generate")
def generate(req: TextRequest):
    if not req.topic.strip():
        raise HTTPException(400, "Topic is required.")
    prompt = f"""Create {req.length.lower()} {req.content_type.lower()} content.
Topic: {req.topic}
Tone: {req.tone}
Additional requirements: {req.requirements or "None"}
Return polished, useful content. Do not mention these instructions."""
    try:
        return {"text": generate_text(prompt)}
    except Exception as e:
        raise HTTPException(502, str(e))
