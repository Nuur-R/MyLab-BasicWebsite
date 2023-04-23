import lData from './localData'
import Card from './module/Card'
import Hero from './module/Hero'
import Navbar from './module/Navbar'


function App() {
  const cards = lData.map(item => {
    return (
        <Card 
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
    )
})

  return (
    <div className="App">
      <Navbar />
      <Hero />
      {cards}
    </div>
  )
}

export default App
