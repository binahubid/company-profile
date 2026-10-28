const keys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid','msclkid','bh_journey'];
export function programJourneyUrl(destination:string,currentUrl:string){
 const current=new URL(currentUrl),target=new URL(destination,current.origin);
 for(const key of keys){const value=current.searchParams.get(key)?.trim();
  if(value&&value.length<=500&&!/@|[\r\n]|https?:\/\/|bearer\s|(?:access_token|api_key|secret)=/i.test(value)){
   if(key!=='bh_journey'||/^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i.test(value))target.searchParams.set(key,value);
  }
 }
 return target.toString();
}
