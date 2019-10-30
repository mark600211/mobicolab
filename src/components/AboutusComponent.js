import React, { Component } from 'react';
import { Container, Media, Button } from 'reactstrap';

class AboutusComponent extends Component {
    render() {
        return (
            <Container>
                <Media>
                    <Media className="about_media" left middle>
                        <Media className="about_media_image" src="assets/images/laboratory/photo_2019-09-19_10-31-59.jpg" alt="Mobile laboratory" />
                    </Media>
                    <Media body>
                        <Media>
                            We certainly need to past some text making people feel proud of your company. You probably know what we need.
                            Past here age when you start that company, what kinda work you would like to do, how much good stuff you manage to done and so on.
                        </Media>
                    </Media>
                </Media>
                <div className="container flex">
                    <Button>
                        Наша лаборатория
                    </Button>
                    <Button>
                        Отзывы наших клиентов
                    </Button>
                    <Button>
                        Лицензии и сертификаты
                    </Button>
                </div>
            </Container>
        );
    }
}

export default AboutusComponent;