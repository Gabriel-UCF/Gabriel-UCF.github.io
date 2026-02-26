const LocalCache = {};
let TeamCount = 0;
const MAX_TEAM_COUNT = 6;

async function FetchPokemon(){
    const SearchInput = document.getElementById('PokemonSearched').value.toLowerCase();
    if(!SearchInput){return;}

    if (LocalCache[SearchInput]){
        console.log(`Loading ${SearchInput} from cache...`);
        DisplayPokemon(LocalCache[SearchInput]);
        return;
    } else {
        console.log(`Loading ${SearchInput} from pokeapi...`);
        try {
            const Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${SearchInput}`);
            if (!Response){console.log(`No response retuned from https://pokeapi.co/api/v2/pokemon/${SearchInput}`); return;}

            const PokemonDetails = await Response.json();
            LocalCache[PokemonDetails.name.toLowerCase()] = PokemonDetails
            DisplayPokemon(PokemonDetails)
        }
        catch (e){
            console.log(`Something went wrong fetching the pokemon: ${e}`);
        }
    }
}

function DisplayPokemon(PokemonDetails){
    const PokemonFetchedArea = document.getElementById('PokemonFetched');
    const Moves = PokemonDetails.moves.map(M => `<option value="${M.move.name}">${M.move.name}</option>`).join('');

    PokemonFetchedArea.innerHTML = 
    `
        <h2>#${PokemonDetails.id} ${PokemonDetails.name.toUpperCase()}</h2>
        <img src="${PokemonDetails.sprites.front_default}" alt="${PokemonDetails.name}">
        <div id="MoveOptions">
            <p>Select 4 Moves:</p>
            <select id="Move1">${Moves}</select>
            <select id="Move2">${Moves}</select>
            <select id="Move3">${Moves}</select>
            <select id="Move4">${Moves}</select>
        </div>
    `;
}

function AddPokemonToTeam(){
    const PokemonName = document.querySelector('#PokemonFetched h2').innerText;
    if (!PokemonName | TeamCount >= MAX_TEAM_COUNT){return;}

    const Sprite = document.querySelector('#PokemonFetched img').src;
    const Moves = [
        document.getElementById('Move1').value,
        document.getElementById('Move2').value,
        document.getElementById('Move3').value,
        document.getElementById('Move4').value
    ];

    const PokemonTeamArea = document.getElementById('TeamPokemon');
    const PokemonTeamMember = document.createElement('div');
    PokemonTeamMember.id = 'TeamMember';
    PokemonTeamMember.innerHTML = 
    `
        <img src="${Sprite}" title="${PokemonName}" ">
        <div class="MemberTooltip">
            ${Moves[0]}<br>
            ${Moves[1]}<br>
            ${Moves[2]}<br>
            ${Moves[3]}<br>
        </div>
    `;

    PokemonTeamArea.appendChild(PokemonTeamMember);
    TeamCount++;
}

async function PlayCry() {
    const PokemonName = document.querySelector('#PokemonFetched h2').innerText.split(' ')[1].toLowerCase();
    if (!PokemonName){return;}

    const PokemonDetails = LocalCache[PokemonName];
    
    if (PokemonDetails && PokemonDetails.cries) {
        const Cry = new Audio(PokemonDetails.cries.latest);
        Cry.play();
    }
}