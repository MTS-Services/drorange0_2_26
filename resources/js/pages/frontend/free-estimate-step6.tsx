
import Success from '@/components/frontend/estimates/success';
import FrontendLayout from '@/layouts/frontend-layout';

export default function FreeEstimateStep6({ estimate }: { estimate: any }) {
    return (
        <FrontendLayout>
            <Success estimate={estimate} />
        </FrontendLayout>
    );
}
