import {createContext} from"react"
import CompA from "./CompA";

const userConetxt=createContext();

const userContext={
Name:"Bilal",
age:29
}



function App() {
  return (
    <>
<userConetxt.Provider value={userContext} >
     <h1>use ContextHooks</h1>
     <CompA/>
     </userConetxt.Provider>
    </>
  );
}

export default App;
export {userConetxt};
