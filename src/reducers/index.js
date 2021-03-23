import { ADD, DELETE, TOGGLE } from "../actions";

const INITIAL_STATE = {
    liste: [
        { id: 1, baslik: "Alisveris Yap", tamamlandi: false },
    { id: 2, baslik: "Fatura ode", tamamlandi: true }
    ]
};


export const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD:
            return { ...state, liste: [ ...state.liste, {
                id: state.liste.length + 1,
                baslik: action.payload,
                tamamlandi: false
            }]};
            case TOGGLE:
                return {
                    ...state,
                    liste: state.liste.map(item => item.id === 
                        action.payload ? {...item, tamamlandi: !item.tamamlandi}
                        : item)
                };
                case DELETE:
                    return {
                        ...state,
                        liste: state.liste.filter(item => item.tamamlandi === false)
                    };
            default: return state;
    }
 
};

// Case ADD ile;
//Eğer case ADD ise reducer state acıcak, state içindeki listeye yeni bir eleman eklicek.


//Case TOGGLE ile;
//Listedeki item action daki payload eşit ise item tamamlnadı değerini tersine çevircez. 


