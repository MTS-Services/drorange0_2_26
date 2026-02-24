import AppLogo from '@/components/app-logo';
import { Link } from '@inertiajs/react';

export function FrontendFooter() {
    return (
        <div className="bg-[#0d1117]">

        <footer className="py-14 bg-[#0d1117]">
          <div className="max-w-7xl mx-auto px-6">
        
            {/* Top grid: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        
              {/* Col 1: Brand + contact */}
              <div className="max-w-xs">
                <p className="text-base font-bold text-white mb-3" style={{ fontFamily: "'Inter', serif" }}>BathPro Remodeling</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">Professional bathroom remodeling services with quality craftsmanship.</p>
                <ul className="text-sm text-gray-400 space-y-2.5">
        
                  <li className="flex items-center gap-2.5">
                    {/* Phone icon */}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <g clipPath="url(#clip_phone)">
                        <path d="M9.22003 11.046C9.35772 11.1092 9.51283 11.1237 9.65983 11.0869C9.80682 11.0502 9.93692 10.9645 10.0287 10.844L10.2654 10.534C10.3896 10.3684 10.5506 10.234 10.7357 10.1414C10.9209 10.0488 11.125 10.0007 11.332 10.0007H13.332C13.6857 10.0007 14.0248 10.1411 14.2748 10.3912C14.5249 10.6412 14.6654 10.9804 14.6654 11.334V13.334C14.6654 13.6876 14.5249 14.0267 14.2748 14.2768C14.0248 14.5268 13.6857 14.6673 13.332 14.6673C10.1494 14.6673 7.09719 13.403 4.84675 11.1526C2.59631 8.90216 1.33203 5.84992 1.33203 2.66732C1.33203 2.3137 1.47251 1.97456 1.72256 1.72451C1.9726 1.47446 2.31174 1.33398 2.66536 1.33398H4.66536C5.01899 1.33398 5.35812 1.47446 5.60817 1.72451C5.85822 1.97456 5.9987 2.3137 5.9987 2.66732V4.66732C5.9987 4.87431 5.9505 5.07846 5.85793 5.2636C5.76536 5.44874 5.63096 5.60979 5.46536 5.73398L5.15336 5.96798C5.03098 6.06144 4.94471 6.19437 4.90923 6.34422C4.87374 6.49406 4.89122 6.65157 4.9587 6.78998C5.86982 8.64056 7.36831 10.1372 9.22003 11.046Z"
                          stroke="#99A1AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip_phone"><rect width="16" height="16" fill="white"/></clipPath>
                      </defs>
                    </svg>
                    (555) 123-4567
                  </li>
        
                  <li className="flex items-center gap-2.5">
                    {/* Mail icon */}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <path d="M2.66667 2.66699H13.3333C14.0667 2.66699 14.6667 3.26699 14.6667 4.00033V12.0003C14.6667 12.7337 14.0667 13.3337 13.3333 13.3337H2.66667C1.93333 13.3337 1.33333 12.7337 1.33333 12.0003V4.00033C1.33333 3.26699 1.93333 2.66699 2.66667 2.66699Z"
                        stroke="#99A1AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.6667 4L8 8.66667L1.33333 4"
                        stroke="#99A1AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    info@bathproremodeling.com
                  </li>
        
                  <li className="flex items-center gap-2.5">
                    {/* Location icon */}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <path d="M8.00033 1.33301C5.79333 1.33301 4.00033 3.12601 4.00033 5.33301C4.00033 8.33301 8.00033 14.6663 8.00033 14.6663C8.00033 14.6663 12.0003 8.33301 12.0003 5.33301C12.0003 3.12601 10.2073 1.33301 8.00033 1.33301Z"
                        stroke="#99A1AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="8.00033" cy="5.33301" r="1.33333"
                        stroke="#99A1AF" strokeWidth="1.33333"/>
                    </svg>
                    Serving Your Area
                  </li>
        
                </ul>
              </div>
        
              {/* Col 2: Quick Links */}
              <div>
                <p className="text-white font-semibold mb-4 text-md font-inter">Quick Links</p>
                <ul className="space-y-2.5 text-md text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Bathroom Remodeling</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
        
              {/* Col 3: Get Started */}
              <div>
                <p className="text-white font-semibold mb-4 text-md font-inter">Get Started</p>
                <ul className="space-y-2.5 text-md text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Bathroom Remodeling</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Tub to Shower Conversion</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Tile Installation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Vanity Replacement</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Plumbing Updates</a></li>
                </ul>
              </div>
        
            </div>
        
            {/* Bottom bar */}
            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-gray-400 text-xs">© 2025 BathPro Remodeling. All Rights Reserved.</p>
              <div className="flex gap-5 text-xs">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
        
          </div>
        </footer>
        
        </div>
    );
}