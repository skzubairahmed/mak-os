import { create } from "zustand";
import { persist } from 'zustand/middleware';

export const useSettings = create(
    persist(
        (set) => ({
            currentWallpaper: '/backgrounds/canyon.jpg',
            brightness: 100,
            setWallpaper: (newPath) => set({currentWallpaper : newPath}),
            setBrightness: (newBrightness) => set({brightness : newBrightness}),
            currentFont: 'font-inter',
            setFont: (newFont) => set({currentFont : newFont}),
        }),
        {name: 'makos-settings'}
    )
);