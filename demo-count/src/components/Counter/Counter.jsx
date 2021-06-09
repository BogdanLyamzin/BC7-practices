import {Component} from "react";

import styles from "./Counter.module.css";

class Counter extends Component {
    state = {
        count: 0
    }

    increase = ()=>{
        this.setState(prevState => {
            const {count} = prevState;
            return {
                count: count+1
            }
        })
    }

    descrease = ()=> {
        this.setState(prevState => {
            const {count} = prevState;
            return {
                count: count-1
            }
        })
    }

    changeCount = (value) => {
        this.setState(prevState => {
            const {count} = prevState;
            return {
                count: count + value
            }
        })
    }

    render() {
        const {count} = this.state;
        const {increase, descrease, changeCount} = this;
        return (
            <div className={styles.container}>
                <span className={styles.item} onClick={()=>changeCount(-1)}>-</span>
                <span className={styles.count}>{count}</span>
                <span className={styles.item} onClick={()=>changeCount(1)}>+</span>
            </div>
        )
    }
}

export default Counter;