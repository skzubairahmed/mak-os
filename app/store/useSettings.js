import { create } from "zustand";
import { persist } from 'zustand/middleware';

export const useSettings = create(
    persist(
        (set) => ({
            currentWallpaper: '/backgrounds/default.jpg',
            brightness: 100,
            setWallpaper: (newPath) => set({currentWallpaper : newPath}),
            setBrightness: (newBrightness) => set({brightness : newBrightness}),
        }),
        {name: 'makos-wallpaper-settings'}
    )
);