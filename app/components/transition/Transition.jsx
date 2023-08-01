import { motion } from "framer-motion";
import styles from "./index.module.scss";

const Transition = () => {
  return (
    <>
      <motion.div
        className={styles.slideIn}
        initial={{ scaleX: 100, width: 100 }}
        animate={{ scaleX: 0, width: 0 }}
        exit={{ scaleX: 0, width: 100 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className={styles.slideOut}
        initial={{ scaleX: 100, width: 100 }}
        animate={{ scaleX: 0, width: 0 }}
        exit={{ scaleX: 0, width: 100 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  );
};

export default Transition;
