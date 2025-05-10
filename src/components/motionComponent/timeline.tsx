import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TimelineProps = {
  items?: string[];
};

const defaultTimelineItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const timelineItems = items || defaultTimelineItems;

  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoopKey(prev => prev + 1);
    }, 5400); // full cycle: 1.2 in + 1.0 stagger + 2.0 hold + 1.2 out
    return () => clearInterval(interval);
  }, []);

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 1.2, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1.2, ease: 'easeInOut', delay: 2 }, // 1.2 + 1 (stagger) + 0.8 hold
    },
  };

  const itemVariants = {
    initial: { x: -40, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={loopKey}
        className="relative p-4 w-full rounded-xl bg-neutral-600 dark:bg-neutral-600 z-30"
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.ul
          className="space-y-4"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.05,
              },
            },
          }}
        >
          {timelineItems.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center bg-transparent space-x-2 p-0.5"
              variants={itemVariants}
            >
              <span className=" p-2 rounded-full bg-accent"></span>
              <div className="w-full p-1.5 rounded-full shadow flex items-center bg-neutral-600 dark:bg-neutral-700 text-neutral-900 dark:text-white">
                {/* {item} */}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </AnimatePresence>
  );
};
