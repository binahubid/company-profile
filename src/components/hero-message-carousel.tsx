'use client';
import {useEffect,useId,useRef,useState} from 'react';
import {ArrowRight,ChevronRight,Pause,Play} from 'lucide-react';
import {useLocale} from '@/i18n/use-locale';
import {localizePath} from '@/i18n/config';
import {useReducedMotionPreference} from '@/hooks/use-reduced-motion';
import {ProgramJourneyLink} from './program-journey-link';
import {MobileHeroDeck} from './mobile-hero-deck';
import styles from './hero-message-carousel.module.css';
const copy={
 id:{label:'Pilihan utama BinaHub',pause:'Jeda pergantian otomatis',play:'Putar slide otomatis',slides:[
  {label:'Rekomendasi program',title:'Program pengembangan',accent:'yang tepat untuk organisasi Anda.',description:'Ceritakan tantangan dan hasil yang ingin dicapai. BinaHub membantu menghubungkan kebutuhan organisasi Anda dengan program pengembangan yang relevan.',cta:'Dapatkan rekomendasi program',href:'/rekomendasi-program',secondary:'Jelajahi program',secondaryHref:'/pricing'},
  {label:'Tentang BinaHub',title:'Membantu Organisasi',accent:'Bertumbuh dan Berkembang',description:'BinaHub membantu perusahaan membangun kepemimpinan yang efektif, tim yang solid, dan budaya kerja yang adaptif melalui pendekatan terintegrasi yang didukung teknologi AI.',cta:'Mulai diagnosis',href:'/insight',secondary:'Lihat Perspektif',secondaryHref:'/perspektif'},
 ]},
 en:{label:'Explore BinaHub',pause:'Pause automatic slides',play:'Play slides automatically',slides:[
  {label:'Program recommendations',title:'Development programs',accent:'for your organization’s needs.',description:'Tell us about your challenges and intended outcomes. BinaHub helps connect your organization’s needs with relevant development programs.',cta:'Get program recommendations',href:'/rekomendasi-program',secondary:'Explore programs',secondaryHref:'/pricing'},
  {label:'About BinaHub',title:'Helping Organizations',accent:'Grow and Develop',description:'BinaHub helps companies build effective leadership, solid teams, and adaptive work cultures through an integrated approach supported by AI technology.',cta:'Start diagnostic',href:'/insight',secondary:'View Perspective',secondaryHref:'/perspektif'},
 ]},
};
export function HeroMessageCarousel({ready,active,mobile,playing,onPlayingChange,onActiveChange,onMotionStateChange}:{ready:boolean;active:number;mobile:boolean;playing:boolean;onPlayingChange:(playing:boolean)=>void;onActiveChange:(index:number)=>void;onMotionStateChange:(playing:boolean)=>void}){
 const locale=useLocale(),text=copy[locale],reduced=useReducedMotionPreference();
 const count=mobile?4:2,index=active%count,messageIndex=mobile?Number(index===3):index;
 const selectors=mobile?(locale==='en'?['Your needs','Competencies','Your program','About BinaHub']:['Kebutuhan','Kompetensi','Program','Tentang BinaHub']):text.slides.map(slide=>slide.label);
 const id=useId(),root=useRef<HTMLElement>(null);
 const [hovered,setHovered]=useState(false);
 const [visible,setVisible]=useState(true),[announcement,setAnnouncement]=useState('');
 const canRotate=playing&&!reduced&&ready&&!hovered&&visible;
 useEffect(()=>{onMotionStateChange(canRotate);},[canRotate,onMotionStateChange]);
 useEffect(()=>{
  const element=root.current?.closest('#home-hero')??root.current;if(!element)return;
  const checkPage=()=>setVisible(document.visibilityState==='visible'&&element.getBoundingClientRect().bottom>0&&element.getBoundingClientRect().top<window.innerHeight);
  const observer=new IntersectionObserver(entries=>setVisible(entries[0].isIntersecting&&document.visibilityState==='visible'));
  observer.observe(element);document.addEventListener('visibilitychange',checkPage);
  return()=>{observer.disconnect();document.removeEventListener('visibilitychange',checkPage);};
 },[]);
 useEffect(()=>{
  if(!hovered)return;
  // Recover when a browser misses pointerleave after a control changes under the pointer.
  const checkPointer=(event:PointerEvent)=>{if(event.pointerType==='mouse'&&!root.current?.contains(event.target as Node))setHovered(false);};
  const clearHover=()=>setHovered(false);
  document.addEventListener('pointermove',checkPointer,{passive:true});
  document.addEventListener('pointerleave',clearHover);window.addEventListener('blur',clearHover);
  return()=>{document.removeEventListener('pointermove',checkPointer);document.removeEventListener('pointerleave',clearHover);window.removeEventListener('blur',clearHover);};
 },[hovered]);
 useEffect(()=>{
  if(!canRotate)return;
  const timer=setTimeout(()=>onActiveChange((index+1)%count),8000);
  return()=>clearTimeout(timer);
 },[index,canRotate,count,onActiveChange]);
 function select(index:number){onPlayingChange(false);onActiveChange(index);setAnnouncement(`${index+1} / ${count}: ${selectors[index]}`);}
 return <section ref={root} className={styles.carousel} data-auto-rotating={canRotate} data-rotation-status={reduced?'manual':!ready?'starting':!visible?'offscreen':hovered?'hover':!playing?'stopped':'running'} aria-label={text.label} aria-roledescription="carousel"
  onPointerEnter={event=>{if(event.pointerType==='mouse')setHovered(true);}}
  onPointerLeave={()=>setHovered(false)} onPointerDown={event=>{if(event.pointerType!=='mouse'&&!(event.target as HTMLElement).closest('[data-rotation-control]'))onPlayingChange(false);}}
  onFocusCapture={event=>{const target=event.target as HTMLElement;if(!target.closest('[data-rotation-control]')||target.matches(':focus-visible'))onPlayingChange(false);}}>
  <MobileHeroDeck active={mobile?index:0} onSelect={select}/>
  <div className={styles.panels} aria-live="off">{text.slides.map((slide,index)=><div key={slide.href} id={`${id}-slide-${index}`} className={styles.slide}
   data-active={messageIndex===index} data-variant={index===0?'recommendation':'brand'} aria-hidden={messageIndex!==index} inert={messageIndex!==index} role="group" aria-roledescription="slide" aria-label={slide.label}>
   <h1 className={styles.title}><span>{slide.title}</span><span className={styles.accent}>{slide.accent}</span></h1>
   <p className={styles.description}>{slide.description}</p>
   <div className={styles.actions}>
    <ProgramJourneyLink href={localizePath(slide.href,locale)} className={styles.primary}>{slide.cta}<ChevronRight size={16} aria-hidden="true"/></ProgramJourneyLink>
    <ProgramJourneyLink href={localizePath(slide.secondaryHref,locale)} className={styles.secondary}>{slide.secondary}<ArrowRight size={16} aria-hidden="true"/></ProgramJourneyLink>
   </div>
  </div>)}</div>
  <div className={styles.controls} role="group" aria-label={locale==='en'?'Hero slide controls':'Kontrol slide utama'}>
   {selectors.map((label,selectorIndex)=><button key={label} type="button" aria-label={label} aria-controls={`${id}-slide-${mobile?Number(selectorIndex===3):selectorIndex}`} aria-pressed={index===selectorIndex} onClick={()=>select(selectorIndex)}><span className={styles.controlLabel}>{label}</span></button>)}
   <button type="button" data-rotation-control className={styles.rotation} disabled={reduced} aria-label={playing&&!reduced?text.pause:text.play}
    onClick={()=>onPlayingChange(!playing)}>{playing&&!reduced?<Pause size={16} aria-hidden="true"/>:<Play size={16} aria-hidden="true"/>}</button>
  </div>
  <p className={styles.srOnly} aria-live="polite" aria-atomic="true">{announcement}</p>
 </section>;
}
