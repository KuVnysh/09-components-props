// id: 0,
//         author_img: Author_photo,
//         authors_name: "Matthew Mpoke Bigg",
//         topic: "Russian Invasion of Ukraine (2022)",
//         date: "28 January",
//         title: "Russia and Ukraine Battle for Control of Villages Near the Key City of Bakhmut",
//         summary:"The area is a flash point in an offensive that Moscow views as crucial for its goal of seizing the Donbas region of eastern Ukraine.",
//         img: Ukraine

import { articlesFromAPI } from './Data';
import Product from './Product'
export default function Articles() {
    // console.log(articlesFromAPI);
    
        articlesFromAPI.map(item=><Product key={item.id} author_img={item.author_img} topic={item.topic} date={item.date} title={item.title} summary={item.summary} img={item.img}/>)
    
    }