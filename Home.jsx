import {motion} from 'framer-motion';
export default function Home({setPage}){
 const cards=[['💬','AI Chat','Talk with a contextual Gemini assistant','chat'],['✍️','Text Studio','Create polished content instantly','text'],['🎨','Image Studio','Transform prompts into visuals','image'],['🎙️','Voice Studio','Turn text into natural speech','voice']];
 return <main className="page"><section className="hero"><div className="eyebrow">MULTIMODAL AI • CREATIVE WORKSPACE</div>
 <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}}>Your ideas.<br/><span>Amplified by AI.</span></motion.h1>
 <p>One elegant workspace for conversation, writing, image creation and voice generation.</p>
 <button className="primary" onClick={()=>setPage('chat')}>Launch AI Workspace →</button></section>
 <div className="section-head"><div><small>EXPLORE</small><h2>Creative tools</h2></div><span>4 AI experiences</span></div>
 <div className="cards">{cards.map(([icon,title,desc,id],i)=><motion.button whileHover={{y:-7}} className="tool-card" onClick={()=>setPage(id)} key={id}><div className="tool-icon">{icon}</div><h3>{title}</h3><p>{desc}</p><b>Open studio →</b></motion.button>)}</div>
 </main>
}