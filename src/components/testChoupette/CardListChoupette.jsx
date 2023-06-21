import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './cardChoupette.css';

const CardListChoupette = () => {
    const [selectedId, setSelectedId] = useState(null);

    const items = [
        { id: 1, title: 'Carte 1', description: 'Description de la carte 1' },
        { id: 2, title: 'Carte 2', description: 'Description de la carte 2' },
        { id: 3, title: 'Carte 3', description: 'Description de la carte 3' },
        { id: 4, title: 'Carte 4', description: 'Description de la carte 4' },
        { id: 5, title: 'Carte 5', description: 'Description de la carte 5' },
        { id: 6, title: 'Carte 6', description: 'Description de la carte 6' },
        { id: 7, title: 'Carte 7', description: 'Description de la carte 7' },
        { id: 8, title: 'Carte 8', description: 'Description de la carte 8' },
    ];

    const handleCardClick = (id) => {
        setSelectedId(id);
    };

    const handleCloseClick = () => {
        setSelectedId(null);
    };

    return (
        <div className="card-list">
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    className="card"
                    layoutId={item.id}
                    onClick={() => handleCardClick(item.id)}
                >
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <div
                        className="background-modal"
                        onClick={handleCloseClick}
                    >
                    <motion.div
                        className="modal"
                        layoutId={selectedId}
                    >
                        <h2>{items.find((item) => item.id === selectedId).title}</h2>
                        <p>{items.find((item) => item.id === selectedId).description}</p>
                        <p>{items.find((item) => item.id === selectedId).description}</p>
                        <p>{items.find((item) => item.id === selectedId).description}</p>
                        <button className="card-button" onClick={handleCloseClick}>X</button>
                    </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CardListChoupette;