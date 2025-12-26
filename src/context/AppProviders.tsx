import { Favorites } from "./FavoritesContext";

export function AppProviders({children}:{children:React.ReactNode}) {
    return <Favorites>{children}</Favorites>
}
