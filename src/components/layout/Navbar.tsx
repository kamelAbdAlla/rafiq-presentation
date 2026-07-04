import { motion } from 'framer-motion';

const navItems = [
  { id: 'business', name: 'Business' },
  { id: 'ui-ux', name: 'UI/UX' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'flutter', name: 'Flutter' },
  { id: 'backend', name: 'Backend' },
  { id: 'ai', name: 'AI' },
  { id: 'conclusion', name: 'Conclusion' },
];

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onRevert: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, onRevert }: NavbarProps) {
  return (
    <>
      {/* =========================================
          1. THE INDEPENDENT TOP-LEFT LOGO 
          ========================================= */}
      {/* Outer wrapper handles the entrance animation (sliding in from the left) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="fixed top-6 left-6 lg:left-10 z-[60]"
      >
        {/* Inner wrapper handles the continuous floating animation */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src="/logo.png" 
            alt="Rafiq Logo" 
            // UPDATED: Increased size to h-16/h-20 for maximum readability, added stronger drop shadow
            className="h-16 md:h-20 w-auto object-contain cursor-pointer drop-shadow-xl"
            onClick={() => setCurrentPage('business')} 
          />
        </motion.div>
      </motion.div>

      {/* =========================================
          2. THE CENTERED NAVIGATION PILL
          ========================================= */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-0 right-0 mx-auto z-50 w-fit max-w-[95%]"
      >
        <div className="flex items-center gap-2 p-2 pl-4 pr-2 bg-white/80 backdrop-blur-lg border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full">
          
          {/* Interactive Links */}
          <div className="hidden lg:flex items-center justify-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'bg-rafiq-primary-50 text-rafiq-primary-600 shadow-sm border border-rafiq-primary-100' 
                      : 'text-slate-600 hover:text-rafiq-primary-600 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Elegant Divider Line */}
          <div className="hidden lg:block w-px h-6 bg-slate-200 mx-2"></div>

          {/* Clean Exit Button */}
          <div>
            <button 
              onClick={onRevert}
              className="px-6 py-2 text-sm font-semibold text-slate-600 bg-slate-100 rounded-full hover:bg-red-50 hover:text-red-600 transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              Exit
            </button>
          </div>

        </div>
      </motion.nav>
    </>
  );
}