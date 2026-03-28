
import Verify from '@/components/frontend/estimates/verify';
import FrontendLayout from '@/layouts/frontend-layout';

export default function FreeEstimateStep2({
    phone,
}: any) {
    return (
        <FrontendLayout>
           <Verify  phone={phone}/>
        </FrontendLayout>
    );
}
