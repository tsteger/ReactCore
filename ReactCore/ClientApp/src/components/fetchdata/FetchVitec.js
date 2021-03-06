﻿import React, { Component } from 'react';

export class FetchVitec extends Component {
    static displayName = FetchVitec.name;
     
    constructor(props) {
        super(props);
        this.state = { data: [], loading: true };
        const url =  "api/Vitec/User/GetUser/CANVANDARE4AE1UTFRNK2CPKMS/S31412";  // user
      // const url = "api/Vitec/Office/GetOffice/S31412"; // office
      //  const url ="api/Vitec/Estate/GetHouse/CMVILLA3Q6QGP1JEJ6T5FFP/S31412"
        fetch(url)
            .then(fetchStatusHandler)
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
            : FetchVitec.renderDataTable(this.state.data);

        return (
            <div>
                <h1>Vitec Example</h1>
                <p>Fetching data from the Vitec server. :) </p>
                {contents}
            </div>
        );
    }
}
function fetchStatusHandler(response) {
    if (response.status === 200) {
        return response;
    } else {
        console.log("Error 404");
        throw new Error('Something went wrong');
    }
}