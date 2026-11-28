'use client';
import type {AnchorHTMLAttributes} from 'react';
import {withInboundJourney} from '@/lib/inbound-journey';
import { referralCodeFromLink } from '@/lib/referral-client';
import {programJourneyUrl} from '@/lib/program-journey-url';
/** A normal link still works without JS; same-tab handoff retains campaign context. */
export function ProgramJourneyLink({href='',onClick,...props}:AnchorHTMLAttributes<HTMLAnchorElement>){
 return <a {...props} href={href} onClick={event=>{
  onClick?.(event);
  if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.altKey||event.shiftKey||props.target==='_blank')return;
  const next = new URL(withInboundJourney(programJourneyUrl(href, window.location.href)));
  const code = referralCodeFromLink(window.location.search);
  if (code && (next.hostname === window.location.hostname || ["binahub.id", "www.binahub.id", "app.binahub.id"].includes(next.hostname))) {
    next.searchParams.set("ref", code);
  }
  event.preventDefault();window.location.assign(next.toString());
 }}/>;
}
