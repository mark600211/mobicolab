import React, { Component } from 'react';
import LICENSES from '../shared/licenses';

class LicenseComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            licenses: LICENSES
        };
    }

    render() {
        const Service_Card = this.state.licenses.map((license) => {
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

export default LicenseComponent;