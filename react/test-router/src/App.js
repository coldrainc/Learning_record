import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
        }
    }
    componentDidMount () {
        this.setState({
            value: this.state.value+2
        });
        console.log('第一次打印' + this.state.value);
        this.setState({
            value: this.state.value+1
        });
        // 多次调用 后面的覆盖前面的 最终 value 为 1 但是由于是异步的 这两个console是同步的，先执行同步的所以都为0
        console.log('第二次打印' + this.state.value);
        // 需要实现多次相加
        // this.setState((preState) => ({
        //     value: preState.value+1
        // }))
        // this.setState((preState) => ({
        //     value: preState.value+1
        // }))
        setTimeout(() => {
            this.setState({
                value: this.state.value+1
            });
            console.log('第三次打印' + this.state.value);

            this.setState({
                value: this.state.value+1
            });
            console.log('第四次打印' + this.state.value);
        }, 0)
    }
    render() {
        return (
            <div>{ this.props.children }</div>
            // <div></div>
        )
    }
}

export default App