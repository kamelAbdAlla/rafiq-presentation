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
      {/* 1. THE INDEPENDENT TOP-LEFT LOGO (يختفي في الموبايل عشان ما يغطيش على المنيو) */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="fixed top-6 left-6 z-[60] hidden md:block"
      >
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="Rafiq Logo" 
            className="h-16 w-auto object-contain cursor-pointer drop-shadow-xl"
            onClick={() => setCurrentPage('business')} 
          />
        </motion.div>
      </motion.div>

      {/* 2. THE CENTERED NAVIGATION PILL */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 md:top-6 left-0 right-0 mx-auto z-50 w-fit max-w-[95%] sm:max-w-[90%]"
      >
        <div className="flex items-center gap-2 p-1.5 md:p-2 pl-2 md:pl-4 pr-1.5 md:pr-2 bg-white/80 backdrop-blur-lg border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full">
          
          {/* Interactive Links - قابلة للسحب على الموبايل */}
          <div 
            className="flex items-center gap-1 overflow-x-auto max-w-[65vw] md:max-w-none" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
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
          <div className="w-px h-5 md:h-6 bg-slate-200 mx-1 shrink-0"></div>

          {/* Clean Exit Button */}
          <div className="shrink-0">
            <button 
              onClick={onRevert}
              className="px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-slate-600 bg-slate-100 rounded-full hover:bg-red-50 hover:text-red-600 transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              Exit
            </button>
          </div>

        </div>
      </motion.nav>
      
      {/* ستايل سريع لإخفاء شريط التمرير (Scrollbar) المزعج في الموبايل */}
      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}