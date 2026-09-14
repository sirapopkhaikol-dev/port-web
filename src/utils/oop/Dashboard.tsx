import React from "react";


type DashboardState = {
    score: number
}

type ButtonProps = {
    scoreState: number;
    onClickLevelUp: () => void; // This means "A function that returns nothing"
};

// --- PARENT ---
export class CounterDashboard extends React.Component<{}, DashboardState> {

    constructor(props: {}) {
        super(props)
        this.state = { score : 0}
        // this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd = () => {
            this.setState({ score : this.state.score + 1})
    }

    /*
        handleAdd() {
            this.setState({ score : this.state.score + 1})
        }
    */

    render() {
        return(
            <>
                <h2>Legacy React Counter</h2>
                <CounterButton 
                    scoreState={this.state.score} 
                    onClickLevelUp={this.handleAdd}
                />
            </>
        );
    }
}

// --- CHILD ---
class CounterButton extends React.Component<ButtonProps> {
    render() {
        return (
            <>
                <p>{this.props.scoreState}</p>
                <button onClick={this.props.onClickLevelUp}></button>
            </>
        );
    }
}