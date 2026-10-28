'use client';
import type {AnchorHTMLAttributes} from 'react';
import {withInboundJourney} from '@/lib/inbound-journey';
import {programJourneyUrl} from '@/lib/program-journey-url';
/** A normal link still works without JS; same-tab handoff retains campaign context. */
export function ProgramJourneyLink({href='',onClick,...props}:AnchorHTMLAttributes<HTMLAnchorElement>){
 return <a {...props} href={href} onClick={event=>{
  onClick?.(event);
  if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.altKey||event.shiftKey||props.target==='_blank')return;
  const next=withInboundJourney(programJourneyUrl(href,window.location.href));
  event.preventDefault();window.location.assign(next);
 }}/>;
}
