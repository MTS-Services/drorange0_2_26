
import Review from '@/components/frontend/estimates/review';
import FrontendLayout from '@/layouts/frontend-layout';

export default function FreeEstimateStep5({
    estimateData,
    service,
    totalFile,
    currentSetup,
    options
}: any) {
    return (
        <FrontendLayout>
         <Review estimateData={estimateData} options={options} currentSetup={currentSetup} service={service} totalFile={totalFile} />
        </FrontendLayout>
    );
}
