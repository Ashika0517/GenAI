import {useState} from 'react'; import {generateText} from '../api';
export default function TextStudio(){
 const [form,setForm]=useState({topic:'',content_type:'Blog',tone:'Professional',length:'Medium',requirements:''});
 const [out,setOut]=useState(''); const [loading,setLoading]=useState(false); const [error,setError]=useState('');
 const change=e=>setForm({...form,[e.target.name]:e.target.value});
 async function go(){setError('');setOut('');setLoading(true);try{setOut((await generateText(form)).text)}catch(e){setError(e.message)}finally{setLoading(false)}}
 return <main className="page studio"><div className="title"><div><small>AI WRITING ENGINE</small><h1>Text Studio <span>✦</span></h1><p>Generate high-quality content with Gemini.</p></div></div>
 <div className="studio-grid"><section className="panel"><label>What should I create?</label><textarea name="topic" value={form.topic} onChange={change} placeholder="Example: Write a futuristic introduction for my GenAI final-year project..." />
 <div className="three"><div><label>Type</label><select name="content_type" value={form.content_type} onChange={change}>{['Blog','Essay','Email','Story','Study Notes','Social Media','Product Description','Resume'].map(x=><option key={x}>{x}</option>)}</select></div>
 <div><label>Tone</label><select name="tone" value={form.tone} onChange={change}>{['Professional','Friendly','Academic','Creative','Persuasive','Casual'].map(x=><option key={x}>{x}</option>)}</select></div>
 <div><label>Length</label><select name="length" value={form.length} onChange={change}>{['Short','Medium','Long'].map(x=><option key={x}>{x}</option>)}</select></div></div>
 <label>Extra requirements <em>optional</em></label><input name="requirements" value={form.requirements} onChange={change} placeholder="Keywords, structure, audience..." />
 <button className="primary full" onClick={go} disabled={loading}>{loading?'✦ Generating...':'✦ Generate Content'}</button>
 </section><section className="panel output"><div className="output-head"><span>GENERATED OUTPUT</span>{out&&<button onClick={()=>navigator.clipboard.writeText(out)}>Copy</button>}</div>
 {!out&&!loading&&!error&&<div className="empty"><div>✍️</div><h3>Your canvas is waiting</h3><p>Describe what you want and let AI do the heavy lifting.</p></div>}
 {loading&&<div className="loader"><div className="spinner"/><h3>Creating your content...</h3><p>Gemini is crafting the response.</p></div>}
 {error&&<div className="error">⚠️ {error}<br/><small>Check GEMINI_API_KEY and the Google project access in backend/.env.</small></div>}
 {out&&<article className="generated">{out}</article>}
 {out&&<button className="download" onClick={()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([out],{type:'text/plain'}));a.download='genai-content.txt';a.click()}}>↓ Download TXT</button>}
 </section></div></main>
}