import React, { useState, useEffect, useRef } from 'react';

const Typewriter: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [speed, setSpeed] = useState<number>(350);
    const phrases: string[] = ['Hello, world!', 'This is a typewriter animation!', 'Try it out!'];
    const currentPhraseIndex = useRef<number>(0);
    const isDeletingRef = useRef<boolean>(false);

    useEffect(() => {
        const currentPhrase: string = phrases[currentPhraseIndex.current];
        const textLength: number = text.length;
        const isDeleting: boolean = isDeletingRef.current;

        if (isDeleting) {
            setText(currentPhrase.substring(0, textLength - 1));
        } else {
            setText(currentPhrase.substring(0, textLength + 1));
        }

        const typeSpeed: number = isDeleting ? speed / 2 : speed;

        if (!isDeleting && text === currentPhrase) {
            setSpeed(2000);
            isDeletingRef.current = true;
        } else if (isDeleting && text === '') {
            setSpeed(500);
            isDeletingRef.current = false;
            currentPhraseIndex.current = (currentPhraseIndex.current + 1) % phrases.length;
        }

        const timeout: number = setTimeout(() => {
            setIsDeleting(!isDeleting);
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting,]);

    return <h1>{text}</h1>;
};

export default Typewriter;
