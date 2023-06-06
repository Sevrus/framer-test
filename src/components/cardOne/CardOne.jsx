import dataClubs from "../../constants/dataClubs.js";
import {motion} from "framer-motion";
import './cardOne.css';

const CardOne = () => {
    return (
        <ul className="cards">
            {dataClubs.map((item, i) => (
                <motion.li
                    initial={{
                        opacity: 0,
                        translateX: i % 2 === 0 ? -50 : 50,
                        translateY: -50
                    }}
                    animate={{opacity: 1, translateX: 0, translateY: 0}}
                    transition={{duration: 0.5, delay: i * 0.3}}
                    className="cards__card"
                    key={item.id}
                >
                    <div className="cards__card__title">
                        <h3>{item.name}</h3>
                        <hr/>
                    </div>
                    <motion.div
                        className="cards__card__description"
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px rgb(255, 255, 255)"
                        }}
                    >
                        <span>{item.city}</span>
                        <span>{item.tel}</span>
                        <a href={item.site}>{item.site}</a>
                    </motion.div>
                </motion.li>
            ))}
        </ul>
    )
}

export default CardOne;