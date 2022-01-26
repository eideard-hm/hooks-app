import React, { useEffect, useState } from 'react';

const Message = () => {

    const [coors, setCoors] = useState({
        x: 0,
        y: 0
    });

    const { x, y } = coors;

    useEffect(() => {

        const mouseMove = ({ x, y }) => {
            setCoors({ x, y });
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        };
    }, []);
    return (
        <div>
            <h3>Eres genial !!</h3>
            <hr />
            <p>
                <strong>X: </strong> {x}
                <br />
                <strong>Y: </strong> {y}
            </p>
        </div>
    );
};

export default Message;
