import { connect } from 'react-redux';
import Counter from './Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({
  number,
  increase,
  decrease,
}: {
  number: number;
  increase: () => void;
  decrease: () => void;
}) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};

export default connect(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (state: any) => ({
    number: state.counter.number,
  }),
  { increase, decrease }
)(CounterContainer);
