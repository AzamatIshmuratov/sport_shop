import * as React from 'react';
// import { DataGrid } from '@material-ui/data-grid';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'surname', headerName: 'Фамилия', width: 200 },
    { field: 'title', headerName: 'Товар', width: 140 },
    {
        field: 'cost',
        headerName: 'Стоимость',
        type: 'number',
        width: 140,
    },
    {
        field: 'count_item',
        headerName: 'Количество товара',
        type: 'number',
        width: 140,
    },
    {
        field: 'dateZakaz',
        headerName: 'Дата заказа',
        type: 'number',
        width: 200,
    },
];


export default class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: []
        }
    }

    componentDidMount() {
        let rows = this.props.data;

        rows.forEach((element, id) => {
            element['id'] = id;
            console.log(element);
        });
        this.setState({ rows })
    }

    render() {
        return (
            <div style={{ height: 580, width: '100%' }}>
                {this.state.rows.length
                    ? <DataGrid rows={this.state.rows} columns={columns} pageSize={20} checkboxSelection />
                    : null
                }
            </div>
        )
    }
}
