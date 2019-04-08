import React, { Component } from 'react';

export class FetchVitec extends Component {
    static displayName = FetchVitec.name;

    constructor(props) {
        super(props);
        this.state = { data: [], loading: true };

        fetch('api/Vitec/CANVANDARE4AE1UTFRNK2CPKMS/S31412')
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data, loading: false });
            });
    }

    static renderDataTable(data) {
        return (
            <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Titel</th>
                        <th>Email</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(data =>
                        <tr key={data.userId}>
                            <td>{data.userName}</td>
                            <td>{data.title}</td>
                            <td>{data.emailAddress}</td>
                            <td>{data.comment}</td>
                        </tr>
                    )}
                </tbody>
                </table>
                </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchVitec.renderDataTable(this.state.data);

        return (
            <div>
                <h1>Vitec Example</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
}
