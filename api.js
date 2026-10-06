const API = 'http://localhost:8000/api';

async function request(path, options) {
  const res = await fetch(API + path, {
    headers: {'Content-Type':'application/json'},
    ...options
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || 'Request failed');
  return data;
}
export const generateText = (body) => request('/text/generate', {method:'POST', body:JSON.stringify(body)});
export const sendChat = (body) => request('/chat', {method:'POST', body:JSON.stringify(body)});
export const generateImage = (body) => request('/image/generate', {method:'POST', body:JSON.stringify(body)});
export const generateVoice = (body) => request('/voice/generate', {method:'POST', body:JSON.stringify(body)});
