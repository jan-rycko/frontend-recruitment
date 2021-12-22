import { Component, PureComponent } from "react";
import { IExampleProps } from "./typescript";

// Jaka jest różnica pomiędzy poniższymi komponentami
class Example1 extends PureComponent<IExampleProps> {
  render() {
    return null;
  }
}
// vs
class Example2 extends Component<IExampleProps> {
  render() {
    return null;
  }
}
