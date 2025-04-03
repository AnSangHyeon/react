import AboutPage from "./AboutPage";
import { 
  Button1, 
  Button3 
} from "./ButtonLib";
import CountState from "./CountState";
import MyButton from "./MyButton";
import Profile from "./Profile";
import ShoppingList from "./ShoppingList";
import "./App.css"
import CountState2 from "./CountState2";
import { useState } from "react";


export default function App() {
  const [count, handleClick] = useState(0);
  return (
    <div className="wrapper">
      <div>
        <h1>Hello React</h1>
        <MyButton /><br />
        <Button1 />&nbsp;
        <Button3 />
        <AboutPage />
        <Profile />
        <ShoppingList />
      </div>

      <div>
        <CountState />
        <CountState />
      </div>

      <div>
        <CountState2 count={count} onClick={handleClick}/>
        <CountState2 count={count} onClick={handleClick}/>
      </div>
    </div>
  )
}

