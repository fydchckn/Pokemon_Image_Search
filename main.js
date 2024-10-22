async function fetchdata() {
    
    try {
        const pokeinput = document.querySelector('.pokeinput').value.toLowerCase();
        const response  = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeinput}`);

    if (!response) {
        const errors = new Error("not a pokemon name!"); 
        window.alert(errors); 

    } else {
        const myimage = document.querySelector('.pokeimage');
        const data = await response.json();
        const pokemonimage = data.sprites.front_default;

        myimage.src = pokemonimage;
        myimage.style.display = "block";
    }

    } catch (error) {
        window.alert("not a pokemon name!"); 
    }
    
}

