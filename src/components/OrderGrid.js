import React, {Component} from "react";
import {AgGridReact, AgGridColumn} from "ag-grid-react";

import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/ag-theme-material.css";
import {ToastContainer, toast} from 'react-toastify';
import {ButtonGroup, Button} from "react-bootstrap";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowData: []
        }
        this.onGridReady = this
            .onGridReady
            .bind(this);
    }
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
        this
            .api
            .sizeColumnsToFit();
    }
    reloadGrid() {
        fetch('/api/Orders').then(resp => {
            if (!resp.ok) {
                throw Error('Error Loading Orders');
            } else {
                return resp.json();
            }
        }).then(data => {
            this.setState({rowData: data});
        }).catch(err => {
            this.setState({rowData: []});
            toast.error(err.message, {position: toast.POSITION.TOP_CENTER});
        });
    }
    componentDidMount() {
        this.reloadGrid();
    }
    render() {
        let containerStyle = {
            height: 500
        };
        return (
            <div>
                <ButtonGroup bsSize="xsmall">
                    <Button
                        onClick={() => {
                        this.reloadGrid()
                    }}><i className="fa fa-refresh fa-spin"/>
                        &nbsp;Refresh</Button>
                    <Button
                        onClick={() => {
                        this
                            .api
                            .selectAll()
                    }}><i className="fa fa-check-square-o"/>
                        &nbsp;Select All</Button>
                    <Button
                        onClick={() => {
                        this
                            .api
                            .deselectAll()
                    }}><i className="fa fa-square-o"/>
                        &nbsp;Clear Selection</Button>
                </ButtonGroup>
                <div style={containerStyle} className="ag-theme-material">
                    <AgGridReact
                        rowData={this.state.rowData}
                        onGridReady={this.onGridReady}
                        rowSelection="multiple"
                        enableColResize
                        enableSorting
                        enableFilter
                        groupHeaders>
                        <AgGridColumn
                            headerName="#"
                            width={60}
                            checkboxSelection
                            suppressSorting
                            suppressMenu
                            suppressFilter
                            pinned></AgGridColumn>
                        <AgGridColumn field="orderType"></AgGridColumn >
                        <AgGridColumn field="name"></AgGridColumn>
                        <AgGridColumn field="phone"></AgGridColumn>
                        <AgGridColumn field="comments"></AgGridColumn>
                        <AgGridColumn field="status"></AgGridColumn>
                        <AgGridColumn field="timeRemaining"></AgGridColumn>
                    </AgGridReact>
                </div>
                <ToastContainer/>
            </div>
        )
    }
};