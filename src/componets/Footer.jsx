import { Leaf, BookOpen, Film } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="z-10 p-6 text-center bg-ebony border-t border-asparagus">
      <div className="flex justify-center space-x-4">
        {[Leaf, BookOpen, Film].map((Icon, index) => (
          <Icon key={index} size={24} className="text-olivine hover:text-rose-quartz" />
        ))}
      </div>
      <p className="mt-4 text-sm text-rose-quartz">
        © 2023 Atte. Dan. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;