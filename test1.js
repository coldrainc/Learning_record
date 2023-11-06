import { useState } from "react";

function useInterval(fn, delay) {

    useEffect(() => {
        let timeout = setTimeout(() => {
            fn();
        }, delay);

        return () => {
            clearTimeout(timeout);
        }
    }, [fn]);
}

function App() {
    const [count, setCount] = useState(0);

    useInterval(() => {
        setCount(count + 1);
    }, 1000);

    () => {
        setCount(count + 1);
    }

    return (
        <div className="App">
            <div>count: {count}</div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                +
            </button>
        </div>
    );
}

export default App;

// 实现 判断有效的HTML字符串
// 只有 div, span 两种标签
// 只考虑标签嵌套，不考虑文本和属性
function isValidHTML(str) {
    // TODO
   }
   isValidHTML('<span></span>') // true
   isValidHTML('<div><span></span></div>') // true
   isValidHTML('<div><span></div></span>') // false
   isValidHTML('<div><span></span>') // false
   isValidHTML('<div></div><span>') // false


setTimeout(() => {
    console.log(1);
}, 0);

function test() {
    console.log('2');

    Promise.resolve().then(test);
}

test();
