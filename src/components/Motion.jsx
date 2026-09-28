import { motion } from 'motion/react';

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const list = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export function SectionMotion({ children, as = 'div', className = '', ...props }) {
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.15 }}
      variants={reveal}
      className={className}
      {...props}>
      {children}
    </MotionComponent>
  );
}

export function MotionList({ children, className = '', ...props }) {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      variants={list}
      className={className}
      {...props}>
      {children}
    </motion.div>
  );
}

export function MotionItem({ children, className = '', ...props }) {
  return (
    <motion.div
      variants={reveal}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={className}
      {...props}>
      {children}
    </motion.div>
  );
}
