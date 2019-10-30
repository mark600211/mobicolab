import React, { Component } from 'react';
import { LABORATORYS } from '../shared/laboratorys';

class LaboratoryComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            laboratorys: LABORATORYS
        };
    }

    render() {
        const Service_Card = this.state.laboratorys.map((laboratory) => {
            return (
                <Card>

                </Card>
            )
        })

        return (
            <div>
                
            </div>
        );
    }
}

export default LaboratoryComponent;