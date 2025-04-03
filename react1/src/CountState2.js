
export default function CountState2([count, onClick]) {
  
  return(
    <div>
      <button onClick={onClick}>
        클릭 {count}번째
      </button>
    </div>
  );
}