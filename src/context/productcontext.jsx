import { createContext, useContext } from "react";

const Appcontext= createContext();
const AppProvider =({children})=>{

    return (<Appcontext.Provider value={{Myname:"Fajar"}}>
        {children}
        
    </Appcontext.Provider>
    );
};

 const useProductContext =()=>{
    return useContext(Appcontext)
 }
export {AppProvider,Appcontext,useProductContext}