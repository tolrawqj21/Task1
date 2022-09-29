import {useContext, useEffect, useState} from 'react';
import RickandMortyCard from "./CardRickMorty";
import useGetCharacter from "../Hooks/useGetCharacter";
import {HttpClientContext} from "../services/HttpContext";
import CircularIndeterminate from "./Loader";


const RickMortyDemo = () => {
    const rickMortyCtx = useContext(HttpClientContext);
    const [searchValue, setsearchValue] = useState('');

    useEffect(() => {
            rickMortyCtx.getCharacterList()
        }, []
    )

    const characterList = rickMortyCtx.characterList.results || [];

    const filteredCharacterList = characterList.filter(character => character.name.toLowerCase().includes(searchValue));

    return (
        <>
            <div>
                <input
                    placeholder='Search'
                    type='text'
                    onChange={(event) => setsearchValue(event.target.value.toLowerCase())}
                />
                    </div>
                 <div className='Cards'>
                     {filteredCharacterList &&
                    filteredCharacterList.map((char, index) => (
                        <RickandMortyCard key={`${index}-card`} char={char}/>
                    ))
                }
            </div>
        </>
    );
}

export default RickMortyDemo;