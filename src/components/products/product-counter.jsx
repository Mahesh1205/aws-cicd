import React, { Component } from "react";
import PropTypes from "prop-types";
import './product-counter.scss';

class Counter extends Component {
    render() {
        return (
            <div className="stepper-input">
                <button className="decrement" onClick={() => { this.props.updateQuantityHandler(0) }}>
                    –
                </button>
                <input disabled
                    ref={this.feedQtyRef}
                    type="number"
                    className="quantity"
                    value={this.props.productQuantity}
                />
                <button className="increment" onClick={() => { this.props.updateQuantityHandler(1) }}>
                    +
                </button>
            </div>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number,
    // updateQuantityHandler: PropTypes.func.isRequired
};

export default Counter;
