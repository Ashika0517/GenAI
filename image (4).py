import io
import os
from dotenv import load_dotenv
from huggingface_hub import InferenceClient

load_dotenv(override=True)

KEY = os.getenv("IMAGE_API_KEY", "").strip()
MODEL = os.getenv("IMAGE_MODEL", "black-forest-labs/FLUX.1-schnell").strip()

def generate_image(prompt: str):
    if not KEY:
        raise RuntimeError("IMAGE_API_KEY is missing. Add it to backend/.env.")
    client = InferenceClient(provider="auto", api_key=KEY)
    return client.text_to_image(prompt=prompt, model=MODEL)
