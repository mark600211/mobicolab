import React, { Component } from 'react'
import { Container, Media } from 'reactstrap'
import Jumbotron from 'reactstrap/lib/Jumbotron'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Jumbotron className = "header_background">
                    <Container>
                        <Media>
                            <Media left top href="#">
                                <Media object src="assets/images/logo.pdf" alt="Logo" />
                            </Media>
                            <Media body>
                                <Media heading>
                                    <h1>Мобильная<br/>
                                        Экологическая<br/>
                                        Лаборатория
                                    </h1>
                                </Media>
                                <Media>
                                    <Media left top>
                                        <Media className="header_list" object src="assets/images/list_logo.png" />  
                                    </Media>
                                    <Media body>
                                        Лабораторно-аналитические исследования компонентов окружающей среды
                                    </Media>
                                </Media>
                                <Media>
                                    <Media left middle>
                                        <Media className="header_list" object src="assets/images/list_logo1.png" />  
                                    </Media>
                                    <Media body>
                                        Наблюдение за морфометрическими особенностями и состоянием водоохранных зон водных объектов
                                    </Media>
                                </Media>
                            </Media>
                        </Media>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}
