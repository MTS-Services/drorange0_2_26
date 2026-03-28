import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

interface AppLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

export default function AppLogo({ className, ...props }: AppLogoProps) {
    return (
        <>
          <p  className="text-blue-700 tracking-tight whitespace-nowrap font-inter font-bold text-2xl">
                BathPro Remodeling
            </p>
        </>
    );
}