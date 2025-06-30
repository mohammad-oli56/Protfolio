import React, { useEffect, useState } from 'react';

const BlurText = ({
    text,
    delay = 100,
    animateBy = 'words', // 'letters' or 'words'
    className = '',
    onAnimationComplete = () => {},
}) => {
    const [visible, setVisible] = useState(false);
    const parts = animateBy === 'letters' ? text.split('') : text.split(' ');

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
            onAnimationComplete();
        }, delay);
        return () => clearTimeout(timer);
    }, [delay, onAnimationComplete]);

    return (
        <span className={`${className} inline-block`}>
            {parts.map((part, i) => (
                <span
                    key={i}
                    className={`inline-block transition-all duration-1500 ease-out opacity-0 translate-y-4 ${
                        visible ? 'opacity-100 translate-y-0' : ''
                    }`}
                    style={{
                        transitionDelay: `${i * 250}ms`,
                        display: 'inline-block',
                        marginRight: animateBy === 'words' ? '0.25em' : '',
                    }}
                >
                    {part}
                </span>
            ))}
        </span>
    );
};

export default BlurText;
