import React from "react";

export const HttpClientContext = React.createContext({
    characterList: [],
    currentCharacter: {},
    getCharacterList: () => {
    },

});
