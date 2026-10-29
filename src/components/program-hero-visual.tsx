'use client';
import {useId,useLayoutEffect,useRef,useState} from 'react';
import Image from 'next/image';
import {Layers3,Route,Target} from 'lucide-react';
import {useLocale} from '@/i18n/use-locale';
import {useReducedMotionPreference} from '@/hooks/use-reduced-motion';
import styles from './program-hero-visual.module.css';

type Snapshot={left:number;top:number;transform:string};
const permutations=[[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]];
export function ProgramHeroVisual({motionPlaying=false,active=true,onInteract}:{motionPlaying?:boolean;active?:boolean;onInteract?:()=>void}){
 const en=useLocale()==='en';
 const reduced=useReducedMotionPreference(),id=useId(),root=useRef<HTMLDivElement>(null),before=useRef<Snapshot[]|null>(null);
 const [order,setOrder]=useState([0,1,2]),[shuffling,setShuffling]=useState(false),[announcement,setAnnouncement]=useState('');
 const layers=[
  {name:'needs',title:en?'Your needs':'Kebutuhan',description:en?'Team challenges and intended outcomes.':'Tantangan dan tujuan tim Anda.',Icon:Target},
  {name:'competencies',title:en?'Competencies':'Kompetensi',description:en?'A relevant development focus.':'Fokus pengembangan yang relevan.',Icon:Layers3},
  {name:'program',title:en?'Your program':'Program',description:en?'Options to explore with BinaHub.':'Pilihan untuk dibahas bersama.',Icon:Route},
 ];
 useLayoutEffect(()=>{
  const previous=before.current;before.current=null;if(!previous||reduced||!active)return;
  const cards=Array.from(root.current!.querySelectorAll<HTMLElement>('[data-journey-layer]'));
  // FLIP: batch all measurements before starting any animation. No frame loop.
  const next=cards.map(card=>({left:card.offsetLeft,top:card.offsetTop,transform:getComputedStyle(card).transform}));
  const jobs=cards.map((card,i)=>{
   const x=previous[i].left-next[i].left,y=previous[i].top-next[i].top,side=i%2===0?1:-1;
   return card.animate([
    {transform:`translate3d(${x}px,${y}px,0) ${previous[i].transform}`},
    {transform:`translate3d(${x*.45+side*38}px,${y*.45-22}px,0) rotate(${side*9}deg) scale(.97)`,offset:.42},
    {transform:next[i].transform},
   ],{duration:760,delay:i*30,easing:'cubic-bezier(0.16,1,0.3,1)',fill:'backwards'});
  });
  void Promise.all(jobs.map(job=>job.finished.catch(()=>undefined))).then(()=>setShuffling(false));
  return()=>jobs.forEach(job=>job.cancel());
 },[order,reduced,active]);
 function shuffle(){
  if(shuffling||!active)return;onInteract?.();
  const alternatives=permutations.filter(p=>p.some((slot,i)=>slot!==order[i]));
  const next=alternatives[Math.floor(Math.random()*alternatives.length)];
  if(!reduced){before.current=Array.from(root.current!.querySelectorAll<HTMLElement>('[data-journey-layer]')).map(card=>({left:card.offsetLeft,top:card.offsetTop,transform:getComputedStyle(card).transform}));setShuffling(true);}
  setOrder(next);const names=next.map((slot,i)=>({slot,title:layers[i].title})).sort((a,b)=>a.slot-b.slot).map(card=>card.title).join(', ');
  setAnnouncement((en?'Card order: ':'Urutan kartu: ')+names+'.');
 }
 return <div ref={root} className={styles.journey} data-program-hero-visual data-orbit-running={motionPlaying} data-shuffling={shuffling}>
  <div className={styles.liquidBackdrop} data-hero-liquid aria-hidden="true"><span data-liquid-flow="ice"/><span data-liquid-flow="mint"/><span data-liquid-flow="warm"/></div>
  <div className={styles.atmosphere} aria-hidden="true"/>
  <div className={styles.orbit} aria-hidden="true"><div className={styles.orbitSpin} data-program-orbit><svg viewBox="0 0 640 640" fill="none">
    <ellipse cx="320" cy="320" rx="302" ry="232" transform="rotate(-29 320 320)" stroke="currentColor"/>
    <ellipse cx="320" cy="320" rx="271" ry="306" transform="rotate(24 320 320)" stroke="currentColor" opacity=".45"/>
    <circle cx="63" cy="193" r="4.5" fill="currentColor"/>
    <circle cx="582" cy="411" r="5" fill="currentColor"/>
  </svg></div></div>
  {layers.map(({name,title,description,Icon},index)=><div key={name} className={`${styles.layer} ${styles['layer'+order[index]]}`} data-journey-layer={index} data-card-slot={order[index]} data-hero-tone={name} aria-hidden="true">
   <div className={styles.cardCopy} data-card-copy>
    <span className={styles.badge}><Icon size={19} strokeWidth={1.5}/></span>
    <span className={styles.layerTitle}>{title}</span>
    <span className={styles.layerText}>{description}</span>
   </div>
   <div className={styles.artwork}><Image src={`/program-recommendation/hero-${name}.webp`} alt="" fill priority={index===0} sizes="(min-width:1280px) 320px, (min-width:768px) 230px, 190px" className={styles.illustration}/></div>
  </div>)}
  <button type="button" className={styles.shuffleControl} onClick={shuffle} onFocus={onInteract} disabled={shuffling||!active} aria-busy={shuffling} aria-label={en?'Shuffle program cards':'Acak urutan kartu program'} aria-describedby={id+'-shuffle-hint'}><span id={id+'-shuffle-hint'}>{en?'Click to shuffle':'Klik untuk mengacak'}</span></button>
  <p className={styles.srOnly} role="status" aria-live="polite" aria-atomic="true">{announcement}</p>
 </div>;
}
