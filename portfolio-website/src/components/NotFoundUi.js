import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundUi = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#fff3ec] text-center px-4"
      style={{ paddingBottom: "180px", paddingTop: "220px" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b3d] to-[#ff9240]">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          It looks like the page you’re trying to visit doesn’t exist or has
          been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-orange-500 text-black hover:bg-orange-600"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundUi;
