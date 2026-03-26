import Options from '@/components/frontend/estimates/options';
import FrontendLayout from '@/layouts/frontend-layout';

export default function FreeEstimateStep2({options, currentSetups, serviceTypeId}: any) {
    return (
        <FrontendLayout>
            <Options options={options} currentSetups={currentSetups} serviceTypeId={serviceTypeId} />
        </FrontendLayout>
    );
}
