async function fetchdata() {
    
    try {
        const pokeinput = document.querySelector('.pokeinput').value.toLowerCase();
        const response  = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeinput}`);
        const displayerror = document.querySelector(".displayerror");
        const myimage = document.querySelector('.pokeimage');        

    if (!response.ok) {
        displayerror.textContent = "Not a pokemon name!"; 
        displayerror.style.visibility = "visible";
        myimage.style.display = "none";

    } else {
        const myimage = document.querySelector('.pokeimage');
        const data = await response.json();
        const pokemonimage = data.sprites.front_default;

        myimage.src = pokemonimage;
        myimage.style.display = "block";
        displayerror.style.visibility = "hidden";
    }

    } catch (error) {
        const displayerror = document.querySelector(".displayerror");
        const myimage = document.querySelector('.pokeimage');
        
        
        displayerror.textContent = "Not a pokemon name!"; 
        displayerror.style.visibility = "visible";
        myimage.style.display = "none";
    }
    
}

