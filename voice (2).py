import asyncio
import edge_tts

async def _generate(text: str, voice: str, rate: str):
    communicate = edge_tts.Communicate(text, voice, rate=rate)
    data = bytearray()
    async for chunk in communicate.stream():
        if chunk["type"] == "audio":
            data.extend(chunk["data"])
    return bytes(data)

def generate_voice(text: str, voice: str, rate: str):
    if not text.strip():
        raise RuntimeError("Voice text is empty.")
    return asyncio.run(_generate(text, voice, rate))
