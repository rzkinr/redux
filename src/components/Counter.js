import {useSelector, useDispatch} from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({type: 'INCREMENT'});
  };

  const increaseHandler = () => {
    dispatch({type: 'INCREASE', amount: 5});
  };

  const decrementHandler = () => {
    dispatch({type: 'DECREMENT'});
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.count}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     count: state.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type: 'INCREMENT'}),
//     decrement: () => dispatch({type: 'DECREMENT'}),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
