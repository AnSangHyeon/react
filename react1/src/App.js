import AboutPage from "./AboutPage";
import { 
  Button1, 
  Button3 
} from "./ButtonLib";
import MyButton from "./MyButton";
import Profile from "./Profile";


export default function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <MyButton /><br />
      <Button1 />&nbsp;
      <Button3 />
      <AboutPage />
      <Profile />
    </div>
  )
}

