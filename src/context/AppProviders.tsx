import {  FavoritesProvider } from "./FavoritesContext";

export function AppProviders({children}:{children:React.ReactNode}) {
    return <FavoritesProvider>{children}</FavoritesProvider>
}
