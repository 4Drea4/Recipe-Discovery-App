import {createContext, useContext} from 'react';
import type { FavoritesContextType, FavoriteId } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function Favorites({children}: {children: React.ReactNode}) {
    const [favoriteIds, setFavoriteIds] = useLocalStorage<FavoriteId[]>(
        "favorite Recipes",
        []
    );

    function addFavorite(id:FavoriteId){
        setFavoriteIds((prev) => {
            if (prev.includes(id)) return prev;
            return [...prev, id];
        });
    }
    function removeFavorite(id:FavoriteId){
        setFavoriteIds((prev) => prev.filter((saveId) => saveId !==id));
    }
    function isFavorite(id:FavoriteId){
        return favoriteIds.includes(id);
    }
    const value: FavoritesContextType ={
        favoriteIds,
        addFavorite,
        removeFavorite,
        isFavorite,
    };
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
    
    }
    export function useFavorites(){
        const context = useContext(FavoritesContext);
        if (!context) {
            throw new Error ("useFavorites")
        }
        return context
    }


