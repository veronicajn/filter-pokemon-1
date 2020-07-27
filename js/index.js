//Haz un fetch a la url: https://pokeapi.co/api/v2/pokemon/ditto/ 
//● Comprueba que el status de la respuesta es 200
// ● Si el estado es 200,
// imprime el contenido JSON de la respuesta



//PARTE 1

/*fetch('https://pokeapi.co/api/v2/pokemon')

  .then(response => {
   if(response.status=== 200){
     response.json()
      .then(results => console.log(results))
   }else{
      console.log("el estado no es 200" + response.status)
   }
  
  })*/
//parte 2
let input = document.querySelector('#search_input')

function addPokemon(src){
    let node = document.createElement('img')
    node.setAttribute('src', src)
    document.body.appendChild(node)
}

function searchPokemon(){
    let pokemon = input.value
    let url = 'https://pokeapi.co/api/v2/pokemon/' + pokemon
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let keys = Object.keys(data.sprites)
            keys = keys.filter(key => key.includes('front'))

            // version 1
            // let urls = keys.map(key => data.sprites[key])
            // urls = urls.filter(url => url !== null)
            // urls.forEach(url => addPokemon(url))

            // version 2
            keys.forEach(key => {
                let url = data.sprites[key]
                if(url !== null){
                    addPokemon(url)
                }
            })
        })
}

let button = document.querySelector('#button')
button.onclick = searchPokemon