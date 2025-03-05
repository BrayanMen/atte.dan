import { motion } from "framer-motion";
import hoja from "../assets/hoja.png";

const AnimatedBackground = () => {
  return (
    <motion.div
      initial={{ rotate: -15, x: -50, y: 50 }}
      animate={{
        x: [-10, 10, -10],
        y: [10, -10, 10],
        rotate: [-25, -20, -20],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative -right-24 h-[500px] w-[475px] -z-10 bg-cover bg-center filter"
      style={{
        backgroundImage: `url(${hoja})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maskImage: "radial-gradient(circle, black 70%, transparent 95%)",
        WebkitMaskImage: "radial-gradient(circle, black 70%, transparent 85%)"          
      }}
    />
  );
};

export default AnimatedBackground;
