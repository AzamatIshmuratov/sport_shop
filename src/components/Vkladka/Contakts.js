import React, { Component } from 'react'
import './Contakts.css';
import MapContakts from './mapContakts';
import MapKlaster from './mapKlaster';

export default class Contakts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        // fetch('http://127.0.0.1:3080/api/getClientsZakaz')

    }

    render() {
        return (
            <React.Fragment>
                <div className="content-wrap">
                    <h2>Контакты</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="divider" />Магазин "Уфа-Арена", ул. Ленина, 114 (Малая Арена)<br />
                            <br />
                            <b>Режим работы:<br />
                            </b>Ежедневно с 10.00 до 19.00 часов, без перерывов и выходных.<br />
                            <b><br />
                            </b>
                            Телефон: +7&nbsp;(347) 273-40-61<br />
                            <br />
                            Посетители магазина имеют право на парковку на территории УСА "Уфа-Арена"&nbsp;в течение 30
                            минут.<br />
                            <br />
                            <MapContakts/>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}