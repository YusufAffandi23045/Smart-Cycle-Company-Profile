"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.07 }}
          className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-6 py-5 text-left bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-gray-700 transition-colors duration-200 group"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-gray-800 dark:text-white text-sm md:text-base pr-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
              {item.question}
            </span>
            <span
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                openIndex === index
                  ? "bg-green-500 border-green-500 text-white rotate-45"
                  : "border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400"
              }`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pt-2 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
