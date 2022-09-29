import { useEffect, useState } from 'react'
import axios from 'axios';

function useGetCharacter(id) {
    const [character, setCharacter] = useState();
    // const [value, setValue]= useState('');
    
    useEffect(() => {
            axios.get(`character/${id}`).then(data => {
                setCharacter(data.data)
            });

    });

    // return character;
}

export default useGetCharacter