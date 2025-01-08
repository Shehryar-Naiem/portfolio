import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Pages/Home'
import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'
const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header></Header>
        <Home />
        <Footer></Footer>
      </>
    ),
  },
])
function App() {
  return <RouterProvider router={Router} />
}

export default App
