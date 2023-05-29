/** @jsx h */
import { h, define, WeElement } from "omi";

const Fragment = h.f;

class MyCounter extends WeElement {
  static get propTypes() {
    return {
      count: Number,
    };
  }

  static get defaultProps() {
    return { count: 0 };
  }

  install() {
    this.data = { count: this.props.count };
  }

  static get css() {
    return `
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
    `;
  }

  inc = () => {
    this.data.count++;
    this.update();
  };

  dec = () => {
    if (this.data.count>0)
    {
      this.data.count--;
      this.update();
    }
  };

  render(props) {
    return (
      <Fragment>
        <button onclick={this.dec}>-</button>
        <span>{this.data.count}</span>
        <button onclick={this.inc}>+</button>
      </Fragment>
    );
  }
}

define("my-counter", MyCounter);
