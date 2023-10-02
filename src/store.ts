import hash from 'object-hash';
import { create } from "zustand";

import { Beer } from "./typings";

type Store = {
    favorites: Map<number, string>,
    addOrRemoveFromFavorites: (address: string, beer: Beer) => void,
    checkBeerIntegrity: (beer: Beer) => boolean,
    loadFavoritesFromLocalStorage: (address: string) => void,
}
const useStore = create<Store>((set, get) => ({
    favorites: new Map(),
    addOrRemoveFromFavorites: (address, beer) => {
        const favorites = get().favorites;

        if (favorites.has(beer.id)) {
            favorites.delete(beer.id);
        } else {
            favorites.set(beer.id, hash(beer));
        }

        set({ favorites });
        localStorage.setItem(address, JSON.stringify(Array.from(favorites.entries())));
    },
    loadFavoritesFromLocalStorage: (address) => {
        const stored = localStorage.getItem(address);
        let favorites = new Map();

        if (stored) {
            favorites = new Map(JSON.parse(stored));
        }

        set({ favorites });
    },
    checkBeerIntegrity: (beer) => {
        const currentHash = hash(beer);
        const lastHash = get().favorites.get(beer.id);

        return currentHash !== lastHash;
    }
}));

export default useStore;