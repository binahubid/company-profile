import {notFound} from 'next/navigation';
import {hasLocale,locales} from '@/i18n/config';
import {ProgramRecommendationLanding} from '@/components/program-recommendation-landing';
import {programRecommendationMetadata} from '@/lib/program-recommendation-metadata';
type Props={params:Promise<{locale:string}>};
export function generateStaticParams(){return locales.map(locale=>({locale}));}
export async function generateMetadata({params}:Props){const {locale}=await params;if(!hasLocale(locale))notFound();return programRecommendationMetadata(locale);}
export default async function RecommendationPage({params}:Props){const {locale}=await params;if(!hasLocale(locale))notFound();return <ProgramRecommendationLanding locale={locale}/>;}
