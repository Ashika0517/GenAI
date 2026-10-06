import {motion} from 'framer-motion';
export default function Background(){
  return <div className="ambient">
    {[...Array(14)].map((_,i)=><motion.i key={i}
      className="orb" initial={{opacity:.1}} animate={{y:[0,-30,0],x:[0,i%2?20:-20,0],opacity:[.15,.45,.15]}}
      transition={{duration:5+i%4,repeat:Infinity,delay:i*.2}} style={{left:`${(i*71)%100}%`,top:`${(i*43)%100}%`}}/> )}
  </div>
}