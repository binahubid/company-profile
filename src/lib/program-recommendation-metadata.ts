import type {Metadata} from 'next';
import {SITE_URL} from '@/lib/site';
import type {Locale} from '@/i18n/config';
export function programRecommendationMetadata(locale:Locale):Metadata{
 const title=locale==='en'?'Program recommendations for organizations':'Rekomendasi program untuk tim dan organisasi';
 const description=locale==='en'?'Connect your organization’s challenges and intended outcomes with relevant BinaHub development programs.':'Hubungkan tantangan dan hasil yang ingin dicapai organisasi Anda dengan program pengembangan BinaHub yang relevan.';
 const url=`${SITE_URL}/${locale}/rekomendasi-program`,image=`${SITE_URL}/og-image.png`;
 return {title,description,alternates:{canonical:url,languages:{id:`${SITE_URL}/id/rekomendasi-program`,en:`${SITE_URL}/en/rekomendasi-program`}},
  openGraph:{title,description,url,type:'website',locale:locale==='en'?'en_US':'id_ID',images:[{url:image,alt:'BinaHub'}]},twitter:{card:'summary_large_image',title,description,images:[image]}};
}
