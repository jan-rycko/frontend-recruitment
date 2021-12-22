import { createStore, combineReducers } from "redux";
import { connect, Provider, ConnectedComponent } from "react-redux";
import { ComponentType, FC, ReactElement, useEffect } from "react";

const firstAction = { type: "FIRST_ACTION", data: 42 };

interface IState {
  answer: number | null;
}

const questionReducer = (
  state: IState = { answer: null },
  action: typeof firstAction
): IState => {
  switch (action.type) {
    case "FIRST_ACTION":
      return { ...state, answer: action.data };
  }

  return state;
};

interface IStoreState {
  question: IState;
}

// @ts-ignore
const store = createStore<IStoreState>(
  combineReducers({ question: questionReducer })
);

const mapStateToProps = (state: IStoreState): IState => ({
  answer: state.question.answer
});

const ReduxChild: FC<IState> = ({ answer }) => {
  console.log(answer);

  useEffect(() => {
    store.dispatch(firstAction);
  }, []);

  return <>Answer is: {answer}</>;
};

const Connected = connect<IState, {}, {}, IStoreState>(mapStateToProps)(
  ReduxChild
);

const ReduxParent = () => {
  return (
    <Provider store={store}>
      <Connected />
    </Provider>
  );
};

export default ReduxParent;
