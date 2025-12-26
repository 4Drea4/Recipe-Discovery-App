import SearchBar from './components/Navbar.tsx';
import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/home/Home';
import CategoryPage from './pages/category/Category';
import RecipeDetailPage from './pages/recipe/RecipeDetail';
import FavoritesPage from './pages/favorite/Favorites';
import SearchPage from './pages/search/Search';

export default function App() {
  
  return (
    <>
    <SearchBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category/:categoryName' element={<CategoryPage/>}/>
      <Route path='/recipe/:recipeId' element={<RecipeDetailPage/>}/>
      <Route path='/favorites' element={<FavoritesPage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      <Route path='*' element={<h1>404 Not Found</h1>}/>
    
    </Routes>
    </>
  )
}


