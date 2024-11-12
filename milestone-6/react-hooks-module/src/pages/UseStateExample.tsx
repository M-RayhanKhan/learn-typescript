import { Dispatch } from "react";

type Tcounter = {
    counter: number,
    setCounter: Dispatch<React.SetStateAction<number>>,
}

const UseStateExample = ({ counter, setCounter }: Tcounter) => {


    return (
        <div className="mt-60">
            <h2 className="text-3xl font-bold">{counter}</h2>
            <button onClick={() => setCounter(counter + 1)} className="btn btn-error">Increment</button>
            <button onClick={() => setCounter(0)} className="btn btn-success">Reset</button>
        </div>
    );
};

export default UseStateExample;