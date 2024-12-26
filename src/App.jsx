import Button from "./components/button"
import Navbar from "./components/navbar"
import Search from "./components/search"
import Card from "./components/card"
import imgSrc1 from '../public/images/card1.png'
import imgSrc2 from '../public/images/card2.png'
import imgSrc3 from '../public/images/card3.png'
import imgSrc4 from '../public/images/card4.png'



function App() {
  const cards =[
    {
      "img":imgSrc1,
      "title": "VUE JS SCRATCH COURSE",
      "name":"Kitani Studio",
      "paragraphe":"More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      "price": "$24.92",
      "oldprice":"$32.90"
    },
    {
      "img":imgSrc2,
      "title": "UI DESIGN FOR BEGINNERS",
      "name":"Kitani Studio",
      "paragraphe":"Learn how to make web application with Vue.js Framework.",
      "price": "$24.92",
      "oldprice":"$32.90"
    },
    {
      "img":imgSrc3,
      "title": "MOBILE DEV REACT NATIVE",
      "name":"Kitani Studio",
      "paragraphe":"More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      "price": "$24.92",
      "oldprice":"$32.90"
    },
    {
      "img":imgSrc4,
      "title": "WEBSITE DEV ZERO TO HERO",
      "name":"Kitani Studio",
      "paragraphe":"More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      "price": "$24.92",
      "oldprice":"$32.90"
    },

  ]
  return (
    <body className="mx-[120px]">
      <Navbar />
      <section className='flex space-x-[24px]'>
      { cards.map((ele) =>   
        <Card key={ele.title} img={ele.img} title={ele.title} name={ele.name} paragraphe={ele.paragraphe} price={ele.price} oldprice={ele.oldprice}/>)    }
      </section>
    </body>
  )
}

export default App
