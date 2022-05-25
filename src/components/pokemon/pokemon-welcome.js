import { useEffect, useState } from "react";

export default function PokemonWelcome() {
    const [pokemonBody, setPokemonBody] = useState([]);
    const [display, setDisplay] = useState(false);
    const [anotherOne, setAnotherOne] = useState(false);

    useEffect(() => {
        findAll();
    }, []);

    // when the display state is changed, this alert message will also reappear. the changeDisplay function does not
    // trigger and alert. The useEffect does as a side-effect, due to us specifying display inside of the []
    useEffect(() => {
        alert("Example of side effects when state is changed");
    }, [display, anotherOne]);

    // Async/Await in JS, this came around in 2016 (ECMAScript6)
    async function findAll() {
        try {
            const response = await fetch("http://localhost:8080/poke_project/pokemon");
            const pokemons = await response.json();
            const pokemonTableRows = pokemons.map((e) => {
                return (
                    <tr>
                        <td>{e.pokemonName}</td>
                        <td>{e.hp}</td>
                    </tr>
                );
            });

            setPokemonBody(pokemonTableRows);
            console.log(pokemons);
        } catch (e) {
            console.error(e);
        }
    }

    function changeDisplay() {
        if (display === true) {
            setDisplay(false);
        } else {
            setDisplay(true);
        }
    }
    function changeAnotherOne() {
        if (anotherOne === true) {
            setAnotherOne(false);
        } else {
            setAnotherOne(true);
        }
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Pokemon Name</th>
                        <th>HP</th>
                    </tr>
                </thead>
                <tbody>{pokemonBody}</tbody>
            </table>
            <button onClick={changeDisplay}>Display</button>
            <button onClick={changeAnotherOne}>Another One</button>
        </>
    );
}
