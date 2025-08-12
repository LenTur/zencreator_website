import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";

interface FinalFooterProps {
    className?: string;
}

const FooterLink = ({ href = "#", children }: { href?: string, children: React.ReactNode }) => (
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-200">{children}</a>
);

const FooterColumn = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div>
        <h3 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">{title}</h3>
        <div className="flex flex-col space-y-3">
            {children}
        </div>
    </div>
);

export const FinalFooter = ({ className }: FinalFooterProps) => {
  return (
    <footer className={cn("bg-ink-900 text-sm text-gray-400", className)}>
      <div className="container mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            
            {/* Column 1: Logo & Contacts */}
            <div className="col-span-1 lg:col-span-2 pr-8">
                <a href="/" className="mb-6 inline-block">
                    <img src="/Logo.svg" alt="ZenCreator Logo" className="h-8 w-auto" />
                </a>
                <div className="flex flex-col space-y-3">
                    <a href="mailto:info@zencreator.pro" className="flex items-center hover:text-white transition-colors">
                        <Mail className="w-4 h-4 mr-2" />
                        info@zencreator.pro
                    </a>
                    <a href="tel:+13254137454" className="flex items-center hover:text-white transition-colors">
                        <Phone className="w-4 h-4 mr-2" />
                        +1 325 4137454
                    </a>
                </div>
            </div>

            {/* Column 2: Offices */}
            <div className="col-span-1">
                 <FooterColumn title="About Us">
                    <p className="font-bold text-white">HEAD OFFICE</p>
                    <p>United States, <br/>131 Continental Dr, Suite 305, Newark, DE 19713</p>
                    <p className="font-bold text-white mt-4">BRANCH OFFICES</p>
                    <p>Cyprus, Limassol</p>
                    <p>Israel, Ramat HaSharon</p>
                 </FooterColumn>
            </div>

            {/* Column 3: Tools */}
            <FooterColumn title="Tools">
                <FooterLink>Face generation</FooterLink>
                <FooterLink>Face Swapping</FooterLink>
                <FooterLink>Upscaling</FooterLink>
                <FooterLink>Prompt Generation</FooterLink>
                <FooterLink>Generation by Reference</FooterLink>
                <FooterLink>Photo Shoot generation</FooterLink>
                <FooterLink>User Profile generation</FooterLink>
                <FooterLink>Video generation</FooterLink>
                <FooterLink>Carousel generation</FooterLink>
            </FooterColumn>

            {/* Column 4: Free Resources */}
            <FooterColumn title="Free Resources">
                <FooterLink>ZenCreator Documentation</FooterLink>
                <FooterLink>Best Trend Reels</FooterLink>
            </FooterColumn>

            {/* Column 5: Terms of Use */}
            <FooterColumn title="Terms of Use">
                <FooterLink>Privacy Policy</FooterLink>
                <FooterLink>Cookies Policy</FooterLink>
                <FooterLink>Terms and Conditions</FooterLink>
                <FooterLink>Data Deletion</FooterLink>
            </FooterColumn>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} ZenCreator LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
