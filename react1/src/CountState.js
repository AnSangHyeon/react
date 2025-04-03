import { 
  useState 
} from 'react';

let CountState = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>
      <button onClick={handleClick}>클릭{count}번째</button>
    </div>
  )
}

export default CountState;