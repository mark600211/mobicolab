import React, { Component } from 'react';
import { GETBACKS } from '../shared/getbacks';

class GetbackComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            getbacks: GETBACKS
        };
    }

    render() {
        const Service_Card = this.state.getbacks.map((getback) => {
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

export default GetbackComponent;