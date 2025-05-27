import './App.css'
import Carousel from './components/Carousel'
import CounterApp from './components/CounterApp'
import ProductList from './components/ProductList'
import ProfileCard from './components/ProfileCard'

function App() {

  return (
    <>
      <ProfileCard />
      <ProductList />
      <CounterApp />
      <Carousel />
    </>
  )
}

export default App