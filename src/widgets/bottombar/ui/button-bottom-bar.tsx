import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const ButtonBottomBar = ({
  children,
  currentTab,
  value,
  setCurrentTab,
}: {
  children: React.ReactNode;
  currentTab: string;
  value: string;
  setCurrentTab: (value: string) => void;
}) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`${currentTab == value ? "text-primary" : "text-gray-400"} flex flex-col items-center transition-all font-semibold text-sm hover:text-primary hover:bg-none`}
    onClick={() => setCurrentTab(value)}
  >
    {children}
    <AnimatePresence mode="wait">
      {currentTab === value && (
        <motion.span
          key={value}
          initial={{ opacity: 0, y: 5, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -5, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="rounded-full mt-1 text-xs"
        >
          {value}
        </motion.span>
      )}
    </AnimatePresence>
  </motion.button>
);

export default ButtonBottomBar;
