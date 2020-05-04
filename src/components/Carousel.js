import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.jpg";
import resume from "../assets/images/resume.jpeg";
import Card from "./Card";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "My Work",
                    subTitle: "Check out my resume",
                    imgSrc: resume,
                    link:
                        "https://drive.google.com/open?id=1DeMAEYc83AvOGYxCwvb5T6W32y7xYpd1",
                    selected: false
                },
                {
                    id: 1,
                    title: "Cookbook",
                    subTitle: "Awesome Projects",
                    imgSrc: github,
                    link: "https://github.com/kuruma99",
                    selected: false
                },
                {
                    id: 2,
                    title: "Lets Connect",
                    subTitle: "Connect To Develop",
                    imgSrc: linkedin,
                    link: "https://www.linkedin.com/in/mridul-singh-779279177",
                    selected: false
                }
            ]
        };
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    };

    makeItems = items => {
        return items.map(item => {
            return (
                <Card
                    item={item}
                    click={e => this.handleCardClick(item.id, e)}
                    key={item.id}
                />
            );
        });
    };

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;
