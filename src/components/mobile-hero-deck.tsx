'use client';

import Image from 'next/image';
import {useRef} from 'react';
import {useLocale} from '@/i18n/use-locale';
import styles from './mobile-hero-deck.module.css';

export function MobileHeroDeck({active,onSelect}:{active:number;onSelect:(index:number)=>void}) {
 const en=useLocale()==='en';
 const pointer=useRef<{id:number;x:number;y:number}|null>(null);
 const cards=[
  {tone:'needs',title:en?'Your needs':'Kebutuhan',description:en?'Team challenges and intended outcomes.':'Tantangan dan tujuan tim Anda.',image:'/program-recommendation/hero-needs.webp'},
  {tone:'competencies',title:en?'Competencies':'Kompetensi',description:en?'A relevant development focus.':'Fokus pengembangan yang relevan.',image:'/program-recommendation/hero-competencies.webp'},
  {tone:'program',title:en?'Your program':'Program',description:en?'Options to explore with BinaHub.':'Pilihan untuk dibahas bersama.',image:'/program-recommendation/hero-program.webp'},
  {tone:'brand',title:en?'About BinaHub':'Tentang BinaHub',description:'People. Learning. Elevated.',image:'/3D-logo-2.webp'},
 ];
 return <div className={styles.deck} data-mobile-hero-deck data-active-card={active} aria-hidden="true"
  onPointerDown={event=>{if(event.isPrimary)pointer.current={id:event.pointerId,x:event.clientX,y:event.clientY};}}
  onPointerCancel={()=>{pointer.current=null;}}
  onPointerUp={event=>{
   const start=pointer.current;pointer.current=null;
   if(!start||start.id!==event.pointerId)return;
   const dx=event.clientX-start.x,dy=event.clientY-start.y;
   if(Math.abs(dx)>=40&&Math.abs(dx)>Math.abs(dy)*1.5)onSelect((active+(dx<0?1:3))%4);
  }}>
  {cards.map((card,index)=><div key={card.tone} className={styles.card} data-deck-card={index} data-tone={card.tone} data-position={(index-active+4)%4}>
   <div className={styles.copy}><span className={styles.title}>{card.title}</span><span className={styles.description}>{card.description}</span></div>
   <div className={styles.artwork}><Image src={card.image} alt="" fill priority={index===0} sizes="(max-width:767px) 220px, 1px" draggable={false}/></div>
  </div>)}
 </div>;
}
