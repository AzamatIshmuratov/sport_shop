import React, { Component } from 'react'
import Table from './Table';

export default class Clients extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [{
                "mail": "ddd@mail.ru",
                "surname": "Петров",
                "title": "Клюшка",
                "item_id": 17,
                "count_item": 1,
                "cost": 3500,
                "dateZakaz": "2022-2-29",
                "deliv": true,
                "skidka": 25
            }]
        }
    }

    componentDidMount() {
        let data = JSON.parse(localStorage.getItem('zakazs'));
        if (!data) return;
        this.setState({data: [...this.state.data, ...data]})
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
