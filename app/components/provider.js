'use client';

import { useEffect, useState } from 'react';
import { useSettings } from '../store/useSettings';

export default function Provider({children}){
    const currentFont = useSettings((state) => state.currentFont);
    const [mounted, setMounted] = useState(false);

    const fontClasses = [
        'font-inter',
        'font-geist',
        'font-spacegrotesk',
        'font-oswald',
    ]

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const body = document.body;
        body.classList.remove(...fontClasses);
        body.classList.add(currentFont);
    }, [currentFont, mounted]);

    return <>{children}</>;    
}