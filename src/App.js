import './App.css';
import Product from './Product'
import Footer from './Footer';
import Author_photo from "./Img.png"
import Ukraine from "./Ukraine.jpeg"
import Palestin from "./Palestine.jpeg"
import Black_man from "./black_man.jpeg"

function App() {
  const articlesFromAPI = [
    {
        id: 0,
        author_img: Author_photo,
        authors_name: "Matthew Mpoke Bigg",
        topic: "Russian Invasion of Ukraine (2022)",
        date: "28 January",
        title: "Russia and Ukraine Battle for Control of Villages Near the Key City of Bakhmut",
        summary:"The area is a flash point in an offensive that Moscow views as crucial for its goal of seizing the Donbas region of eastern Ukraine.",
        img: Ukraine
    },
    {
        id: 1,
        author_img: Author_photo,
        authors_name: "Raja Abdulrahim",
        topic: "Palestinians",
        date: "28 November",
        title: "Palestinian Man Fatally Shot as Violence Continues With Israeli Forces",
        summary:"Tensions and violence have gripped the Israeli-occupied West Bank and Jerusalem for days after an Israeli military raid on Thursday killed 10 people.",
        img: Palestin
    },
    {
        id: 2,
        author_img: Author_photo,
        authors_name: "Rick Rojas",
        topic: "Black People",
        date: "28 March",
        title: "Memphis Police Disband Unit Whose Officers Were Charged in Tyre Nichols’s Death",
        summary: "Mr. Nichols’s family and activists had demanded the scuttling of the group, the Scorpion unit, which patrolled high-crime areas of the city.",
        img: Black_man
    },
]
  return (
    <div className="App">
      <h5>Medium Alike</h5> 
      <h1> Hello World</h1>
      {articlesFromAPI.map(item=><Product key={item.id} author_img={item.author_img} authors_name={item.authors_name} topic={item.topic} date={item.date} title={item.title} summary={item.summary} img={item.img}/>)}
      <Footer />
    </div>
  );
}

export default App;
