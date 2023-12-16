export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
        const myitem = state.basket.find(
            (basketItem) => basketItem.id === action.item.id)
        if(myitem){
                myitem.quantity +=1/2;
                return {...state,basket:[...state.basket]}
            }
        return {
            ...state,
            basket: [...state.basket,action.item],
            }
            case "SUB_TO_BASKET":
              const myitem2 = state.basket.find(
                  (basketItem) => basketItem.id === action.item.id)
              if(myitem2){
                      myitem2.quantity -= 1/2;
                      return {...state,basket:[...state.basket]}
                  }
              return {
                  ...state,
                  basket: [...state.basket,action.item],
                  }
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
