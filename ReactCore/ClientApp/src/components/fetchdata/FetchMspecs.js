import React, { Component } from 'react';

export class FetchMspecs extends Component {
    static displayName = FetchMspecs.name;
     
    constructor(props) {
        super(props);
        this.state = { data: [], loading: true };
        const url = "api/Mspecs";  
       
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data, loading: false });
            });
    }
    //GetUser?UserId=CANVANDARE4AE1UTFRNK2CPKMS&CustomerId=S31412
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
            : FetchMspecs.renderDataTable(this.state.data);

        return (
            <div>
                <h1>Mspecs Example</h1>
                <p>Fetching data from the Mspecs server. :) </p>
                {contents}
            </div>
        );
    }
}
