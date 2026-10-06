import base64
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.image import generate_image

router = APIRouter()

class ImageRequest(BaseModel):
    prompt: str
    style: str = "Cinematic"

@router.post("/generate")
def generate(req: ImageRequest):
    if not req.prompt.strip():
        raise HTTPException(400, "Image prompt is required.")
    try:
        image = generate_image(f"{req.prompt}. Style: {req.style}.")
        from io import BytesIO
        buf = BytesIO()
        image.save(buf, format="PNG")
        return {"image": base64.b64encode(buf.getvalue()).decode("utf-8")}
    except Exception as e:
        raise HTTPException(502, str(e))
