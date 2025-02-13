/**
 * presentational component
 * (컴포넌트의 모양을 결정하는 컴포넌트)
 */
export default function Counter({
  number,
  onIncrease,
  onDecrease,
}: {
  number: number;
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
