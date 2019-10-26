import React, { Component } from 'react';
import { SERVICES } from '../shared/services';
import { Table, Container, Row } from 'reactstrap';

export default class ServicesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: SERVICES
        };
    }

    renderComponent(service) {
        return(
            service.components.map((component) => {
                return(
                    <tr>
                        <td></td>
                        <td>{component.determined_indicator}</td>
                        <td>{component.methodology}</td>
                        <td>{component.price}</td>
                        <td>{component.number}</td>
                        <td></td>
                    </tr>
                );  
            })
        );
    }

    render() {

        const Services_Table = this.state.services.map((service) => {
            return (
                <tbody>
                    <tr>
                        <th colSpan="6">{service.name}</th>
                    </tr>
                    {this.renderComponent(service)}
                </tbody>
            )
        })

        return (
            <Container>
                <Table bordered striped>
                    <thead>
                        <tr>
                            <th>№ п/п</th>
                            <th>Определяемыq показатель</th>
                            <th>Методика</th>
                            <th>Цена за 1 образец, руб.</th>
                            <th>Количество образцов</th>
                            <th>Стоимость всего, руб.</th>
                        </tr>
                    </thead>
                    {Services_Table}
                </Table>
            </Container>
        )
    }
}
