const jokesEl = document.getElementById('joke')
const jokesBtn = document.getElementById('jokes-btn')

jokesBtn.addEventListener('click', genaratejokes)

genaratejokes()

// used async/await
async function genaratejokes(){
   
       const config = {
           headers: {
               Accept: 'application/json',
           },
       }
         
    const res = await fetch('https://icanhazdadjoke.com' , config)
    const data = await res.json()
      
    jokesEl.innerHTML = data.joke

    }

// used .then

// function genaratejokes(){
   
//    const config = {
//        headers: {
//            Accept: 'application/json',
//        },
//    }

//      fetch('https://icanhazdadjoke.com', config)
//      .then((res) => res.json())
//      .then((data) => {
//          jokesEl.innerHTML = data.joke
//      }) 

// }
