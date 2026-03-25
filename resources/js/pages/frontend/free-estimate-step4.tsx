
import Verify from '@/components/frontend/estimates/verify';
import FrontendLayout from '@/layouts/frontend-layout';

export default function FreeEstimateStep2({
    options,
    currentSetups,
    serviceTypeId,
}: any) {
    return (
        <FrontendLayout>
           <Verify />
        </FrontendLayout>
    );
}
