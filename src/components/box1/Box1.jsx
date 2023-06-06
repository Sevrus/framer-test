import {motion} from "framer-motion";
import {useState} from "react";

const Box1 = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <div className="box-container">
            <motion.div
                className="box"
                animate={{
                    x: isAnimating ? 500 : 0,
                    opacity: isAnimating ? 1 : 0.3,
                    rotate: isAnimating ? 360 : 0
                }}
                transition={{
                    type: "spring",
                    stiffness: 60
                }}
                onClick={() => setIsAnimating(!isAnimating)}
            >
            </motion.div>
        </div>
    );
};

export default Box1;
