import {ProgramRecommendationLanding} from '@/components/program-recommendation-landing';
import {programRecommendationMetadata} from '@/lib/program-recommendation-metadata';
export const metadata=programRecommendationMetadata('id');
export default function RecommendationPage(){return <ProgramRecommendationLanding locale="id"/>;}
