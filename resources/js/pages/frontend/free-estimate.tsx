import ChooseServiceType from '@/components/frontend/estimates/choose-service-type';
import FrontendLayout from '@/layouts/frontend-layout';

export default function FreeEstimate({ service_types }: any) {
    return (
        <FrontendLayout>
            <ChooseServiceType serviceTypes={service_types} />
        </FrontendLayout>
    );
}
