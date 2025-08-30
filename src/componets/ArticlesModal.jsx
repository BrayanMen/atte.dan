import { X } from "lucide-react";
import { useEffect } from "react";

const ArticlesModal = ({ article, onClose }) => {
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
      <div className="mt-8 w-fit mx-auto">
        <div className="bg-space-cadet text-white p-8">
          <div className="relative flex justify-end mb-4">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-lavender-web hover:text-red-600 transition-colors"
              aria-label="Close expanded view"
            >
              <X size={42} />
            </button>
          </div>
          <div className="space-y-6 ">
            <div className="bg-olivine text-space-cadet px-4 py-1 inline-block font-poppins">
              ARTICULO
            </div>
            <h1 className="text-5xl font-bold font-serif ">{article.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-4/6 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-space-cadet/50 to-transparent" />
              </div>
              <div className="space-y-4">
                <p className="font-light leading-relaxed text-lavender-web font-poppins">
                  {article.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ArticlesModal;