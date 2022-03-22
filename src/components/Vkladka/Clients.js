import React, { Component } from 'react'
import Table from './Table';

export default class Clients extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:3080/api/getClientsZakaz')
            .then(response => response.json())
            .then((data) => {
                this.setState({ data: data[0] });
            })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.data.length
                    ? <Table data={this.state.data} />
                    : null
                }
            </React.Fragment>



        )
    }
}
