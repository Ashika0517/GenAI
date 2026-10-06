import {MessageSquare, PenLine, Image, Mic, LayoutDashboard, Sparkles} from 'lucide-react';
const items=[['home','Home',Sparkles],['chat','AI Chat',MessageSquare],['text','Text Studio',PenLine],['image','Image Studio',Image],['voice','Voice Studio',Mic],['dashboard','Dashboard',LayoutDashboard]];
export default function Sidebar({page,setPage}){
 return <aside className="sidebar"><div className="brand"><span>✦</span> GENAI <b>UNIVERSE</b></div>
 <div className="side-label">WORKSPACE</div>{items.map(([id,label,Icon])=><button className={page===id?'nav active':'nav'} onClick={()=>setPage(id)} key={id}><Icon size={18}/>{label}</button>)}
 <div className="side-bottom"><div className="status-dot"/> AI SYSTEM ONLINE</div></aside>
}