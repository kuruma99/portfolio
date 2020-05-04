import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Card from "../components/Card";
import myself from "../assets/images/myself.jpeg";

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Card item={props.item} />

            <Content>
                <p>
                    <strong>Salut!</strong>
                </p>
                <p>
                    I am Mridul, a competitive coder, a full stack web developer
                    and a machine learning enthusiast and I am looking for
                    summer internship opportunities in the field of full stack
                    developer.
                </p>
                <p>I wish to become red on Codeforces one day.</p>
                <p>
                    I have good knowledge of React, Django and PostgreSQL and I
                    am constantly expanding my horizons to ReactNative, GraphQL
                    and more.
                </p>
                <p>
                    You can check out my past projects{" "}
                    <a href="https://drive.google.com/open?id=1DeMAEYc83AvOGYxCwvb5T6W32y7xYpd1">
                        here
                    </a>
                </p>
                <p>
                    I have also tried my hands on game development with Python
                    using Pygame framework and more sophisticated games using
                    LOVE2D framework
                </p>
                <p>
                    Currently, I am working with Nokia on a Python based
                    automation project.
                </p>
            </Content>
        </div>
    );
}

export default AboutPage;
