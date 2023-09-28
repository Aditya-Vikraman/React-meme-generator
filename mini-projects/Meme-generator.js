import React from "react";

import MemeImage from "../images/meme-troll-icon.png";

import "../style/meme-generator.css";

export default function MemeGenerator () {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  )
}

// const memesData = {
//   "success": true,
//   "data": {
//      "memes": [
//         {
//            "id": "61579",
//            "name": "One Does Not Simply",
//            "url": "https://i.imgflip.com/1bij.jpg",
//            "width": 568,
//            "height": 335,
//            "box_count": 2
//         },
//         {
//            "id": "101470",
//            "name": "Ancient Aliens",
//            "url": "https://i.imgflip.com/26am.jpg",
//            "width": 500,
//            "height": 437,
//            "box_count": 2
//         },
//      ]
//   }
// }

function Header () {
  function print () {
    console.log("Troll!!")
  }
  return (
    <header className="header">
      <div className="left-section">
        <img onPointerOver={print} className="header-meme-image"
        src={MemeImage}/>
        <div>
          Meme Generator
        </div>
      </div>
      <div className="right-section">
        React Course - Project 3
      </div>
    </header>
  )
}

function Meme () {
  
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg"
  })

  const [allMeme, setAllMeme] = React.useState({});

  React.useEffect(() => {
    // async function getMemes () {
    //   const response = await fetch("https://api.imgflip.com/get_memes")
    //   const data = await response.jason()
    //   setAllMeme(data)
    // }
    // getMemes()
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMeme(data))
  },[])
  // useEffect take a function as a parameter, if that function returns somthing, it will need a return clean up function,otherwise it should return nothing. 
  // above async function returns a promise or nothing.

  function handleClick () {
    setMeme ((prevMeme) => {
      const memeArray = allMeme.data.memes;
      let indexCount = Math.floor(Math.random() * memeArray.length);
      return {
        ...prevMeme,
        randomImage: memeArray[indexCount].url
      }
    })
  }

  function handleChange (event) {
    setMeme ((prevMeme) => {
      const {type, name, value} = event.target
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  return (
    <div className="main-content">
      <div className="input-container">
        <label htmlFor="top-text"></label>
        <input className="first-input" placeholder="Top Text" type="text" name="topText" id="top-text" value={meme.topText} onChange={handleChange}/>

        <label htmlFor="bottom-text"></label>
        <input className="second-input" placeholder="Bottom Text" type="text" name="bottomText" id="bottom-text" value={meme.bottomText} onChange={handleChange} />
      </div>
      <div className="button-container">
        <button onClick={handleClick} className="new-meme-button">Get a new meme image</button>
      </div>
      <div className="meme-image-container">
        <img className="meme-image" src={meme.randomImage}/>
        <h1 className="meme-top-text">{meme.topText}</h1>
        <h1 className="meme-bottom-text">{meme.bottomText}</h1>
      </div>
      
    </div>
  )
}


//in html we use onclick="function()" in JSX we use onClick={functionName} if we use () after functionName it will run the function without click.

// async function getMemeData () {
 
//   const response = await fetch("https://api.imgflip.com/get_memes",{
//     method: "GET",
//     headers: {
//       Accept: "application/Json"
//     }
//   });
//   const memeDataList = await response.json();
//   console.log(memeDataList.data.memes);
  
// }
// getMemeData();
