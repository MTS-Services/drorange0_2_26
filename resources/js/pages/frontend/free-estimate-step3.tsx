import Contact from '@/components/frontend/estimates/contact';
import FrontendLayout from '@/layouts/frontend-layout';

export default function FreeEstimateStep2({
    options,
    currentSetups,
    serviceTypeId,
}: any) {
    return (
        <FrontendLayout>
            <Contact serviceTypeId={serviceTypeId} />
        </FrontendLayout>
    );
}
