import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/signIn.component";

const Shop = () => {
  return(
    <h1>I am in the shop page</h1>
  )
}

const App = () => {
    return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="signIn" element={<SignIn />}></Route>
        </Route>
      </Routes>
    
  );
}

export default App;
