import {motion} from "framer-motion";

const Box2 = () => {

    return (
        <div className="box-container">
            <motion.div
                className="box"
                drag
                dragConstraints={{
                    right: 30,
                    left: -10,
                    top: 50,
                    bottom: 15
                }}
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{
                    scale: 0.9,
                }}
            >
            </motion.div>
        </div>
    );
};

export default Box2;
