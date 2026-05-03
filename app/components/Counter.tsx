"use client";

import { useSelector, useDispatch } from "react-redux";

import type { RootState } from "@/src/store/store";
import { decrement, increment } from "@/src/store/slices/CounterSlice";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    );
};

export default Counter;