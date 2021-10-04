import { createContext, useState } from "react";

export const CartMovieContext = createContext();

export default function CartMoviesProvider({ children }) {
    const [cartMovieList, setCartMovieList] = useState(localStorage.cartlist === undefined ? [] : JSON.parse(localStorage.getItem("cartlist")));
    const [loged, setLoged] = useState(sessionStorage.login === undefined ? null : sessionStorage.getItem("login"));
    const [orderList, setOrderList] = useState(localStorage.orders === undefined ? [] : JSON.parse(localStorage.getItem("orders")));

    // ADICIONA PRODUTO NO CARRINHO.
    const addMovieCart = (movie) => {
        const movieAdd = movie;
        setCartMovieList((prevstate) => {
            if (prevstate.find((m) => m.id === movieAdd.id)) {
                return prevstate;
            }
            localStorage.setItem("cartlist", JSON.stringify(prevstate.concat(movieAdd)));
            return prevstate.concat(movieAdd);
        });
    };
    // REMOVE PRODUTO DO CARRINHO
    const removeMovieCart = (id) => {
        const movieRemoveId = Number(id);
        setCartMovieList((prevState) => {
            const movieRemoveFiltered = prevState.filter((p) => p.id !== movieRemoveId);
            localStorage.setItem("cartlist", JSON.stringify(movieRemoveFiltered));
            return movieRemoveFiltered;
        });
    };
    // ADICIONA UMA ORDEM FINALIZADA NA LISTSA DE ORDENS
    const addOrderList = (order)=>{
        setOrderList((prevState)=> {
            const addOrder = {
                orderNumber: (parseInt(Math.random()*10000)).toFixed(5),
                date: new Date().getTime,
                order: order            
            };
            return prevState.concat(addOrder);
        });
    };

    return (
        <CartMovieContext.Provider
            value={{
                cartMovieList,
                setCartMovieList,
                loged,
                setLoged,
                addMovieCart,
                removeMovieCart,
                orderList,
                addOrderList
            }}>
            {children}
        </CartMovieContext.Provider>
    )
}
