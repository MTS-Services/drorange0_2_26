
import Review from '@/components/frontend/estimates/review';
import FrontendLayout from '@/layouts/frontend-layout';

export default function FreeEstimateStep2({
    options,
    currentSetups,
    serviceTypeId,
}: any) {
    return (
        <FrontendLayout>
         <Review />
        </FrontendLayout>
    );
}
