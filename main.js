async function fetchdata() {
    const pokeinput = document.querySelector('.pokeinput').value.toLowerCase();
    const response  = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeinput}`);

    if (!response) {
        throw new Error("could not fetch data");  

    } else {
        const myimage = document.querySelector('.pokeimage');
        const data = await response.json();
        const pokemonimage = data.sprites.front_default;

        myimage.src = pokemonimage;
        myimage.style.display = "block";
    }

}

