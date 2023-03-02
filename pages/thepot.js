import Container from '../components/container'
import Seo from '../components/seo'
import Link from 'next/link'
import { useEffect } from "react";


export default function ThePot() {
    useEffect(() => {
        var body = document.querySelector('body');
        body.className = "light"
    }, []);
    const seo = {
        metaTitle: "ismayilzada.com",
        metaDescription: "nijat ismayilzada's blog",
        shareImage: ""
    };

    return (
        <>
            <Seo seo={seo} />
            <Container>
                {/* <nav className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <Link href="/">
                                <a className="is-size-3">NIJAT ISMAYILZADA</a>
                            </Link>
                        </div>
                    </div>
                </nav> */}
                <div className="columns">
                    <div class="column is-one-third">
                        <div className="box">
                            <div className="content">
                                <h4 className="title is-4">NIJAT ISMAYILZADA</h4>
                            </div>

                            <div className="level">
                                <div class="level-left">
                                    <div class="level-item">
                                        <a href="https://ismayilzada.com">
                                            <figure className="image is-24x24 ">
                                                <img src="/assets/pot-dark.svg" alt="pot" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div class="level-item">
                                        <div className="content  ">
                                            <a href="https://ismayilzada.com">
                                                <p>ismayilzada.com</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="level">
                                <div class="level-left">
                                    <div class="level-item">
                                        <a href="mailto:nijat@ismayilzada.com">
                                            <figure className="image is-24x24 ">
                                                <img src="/assets/email-dark.svg" alt="email" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div class="level-item">
                                        <div className="content  ">
                                            <a href="mailto:nijat@ismayilzada.com">
                                                <p>nijat@ismayilzada.com</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="level">
                                <div class="level-left">
                                    <div class="level-item">
                                        <a href="https://github.com/nijatismayilzada">
                                            <figure className="image is-24x24 ">
                                                <img src="/assets/github-dark.svg" alt="github" />
                                            </figure>
                                        </a>
                                    </div>
                                    <div class="level-item">
                                        <div className="content  ">
                                            <a href="https://github.com/nijatismayilzada">
                                                <p>github.com/nijatismayilzada</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="level">
                                <div class="level-left">
                                    <div class="level-item">
                                        <a href="https://linkedin.com/in/nijatismayilzada">
                                            <figure className="image is-24x24 ">
                                                <img src="/assets/linkedin-dark.svg" alt="linkedin" />
                                            </figure>

                                        </a>
                                    </div>
                                    <div class="level-item">
                                        <div className="content  ">
                                            <a href="https://linkedin.com/in/nijatismayilzada">
                                                <p>in/nijatismayilzada</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="level">
                                <div class="level-left">
                                    <div class="level-item">
                                        <figure className="image is-24x24 ">
                                            <img src="/assets/location-dark.svg" alt="location" />
                                        </figure>

                                    </div>
                                    <div class="level-item">
                                        <div className="content  ">
                                            <p>London area, UK</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content  ">
                                <h4 className="title is-4">EDUCATION</h4>
                                <h6 className="title is-6">The University of Manchester</h6>
                                <h6 className="subtitle is-6"><em>2013 - 2016</em>  Bachelor of Science</h6>

                                <ul>
                                    <li>
                                        Upper second-class Honours in Computer Science
                                    </li>
                                    <li>
                                        <span class="tag is-dark is-rounded">Java</span> <span class="tag is-dark is-rounded">C#</span> <span class="tag is-dark is-rounded">Python</span> <span class="tag is-dark is-rounded">C</span> <span class="tag is-dark is-rounded">Linux</span> <span class="tag is-dark is-rounded">Android SDK</span>
                                    </li>
                                    <li>
                                        Full scholarship by Azerbaijani government as part of a “State Program on the study of Azerbaijani youth in abroad for 2007-2015”
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content  ">
                                <h4 className="title is-4">PROJECTS</h4>
                                <h6 className="title is-6">Different Snake Game</h6>

                                <ul>
                                    <li>
                                        Available in Play Store.
                                    </li>
                                    <li>
                                        Built with <span class="tag is-dark is-rounded">Java</span>, <span class="tag is-dark is-rounded">Android</span> Graphics Library and <span class="tag is-dark is-rounded">SQLite</span>.
                                    </li>
                                </ul>


                                <h6 className="title is-6">www.ganira.net & www.ismayilzada.com</h6>

                                <ul>
                                    <li>
                                        Built with <span class="tag is-dark is-rounded">Next.JS</span>, <span class="tag is-dark is-rounded">React</span>, Vercel <span class="tag is-dark is-rounded">JAMStack</span>.
                                    </li>
                                </ul>


                                <h6 className="title is-6">Concept Bank Transaction and Account Manager</h6>

                                <ul>
                                    <li>
                                        "Spring-less" microservices runs on embedded <span class="tag is-dark is-rounded">Jersey</span> container and <span class="tag is-dark is-rounded">ActiveMQ</span> message broker.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <article className="media">
                            <div className="media-content">
                                <div className="content ">
                                    <h4 className="title is-4">EXPERIENCE</h4>

                                    <h5 className="title is-5">Software Engineer at Deliveroo</h5>
                                    <h6 className="subtitle is-6"><em>August 2021 - ∞</em> (Remote, London based) </h6>
                                    <ul>
                                        <li>
                                            In User Generated Content team (reviews, ratings, etc.), maintaining and building <span class="tag is-dark is-rounded">Golang</span> microservices on <span class="tag is-dark is-rounded">AWS</span>.
                                        </li>
                                        <li>
                                            Using <span class="tag is-dark is-rounded">Kafka</span>, <span class="tag is-dark is-rounded">PostgreSQL</span>, <span class="tag is-dark is-rounded">DynamoDB</span> to build low latency <span class="tag is-dark is-rounded">GraphQL</span>, <span class="tag is-dark is-rounded">REST</span>, <span class="tag is-dark is-rounded">gRPC</span> APIs.
                                        </li>
                                    </ul>

                                    <h5 className="title is-5">Associate Software Engineer at JPMorgan Chase</h5>
                                    <h6 className="subtitle is-6"><em>March 2019 - August 2021</em> (Glasgow) </h6>
                                    <ul>
                                        <li>
                                            In Big Data team, migrated Credit Risk Applications to <span class="tag is-dark is-rounded">Spark</span> microservices on <span class="tag is-dark is-rounded">Hadoop</span> cluster.
                                        </li>
                                        <li>
                                            Maintained legacy Prime Brokerage Risk Analysis and Control application suite built on <span class="tag is-dark is-rounded">Java Spring MVC</span> and <span class="tag is-dark is-rounded">Oracle PL/SQL</span>.
                                        </li>
                                        <li>
                                            Built Spring Boot Cloud app to support Wealth Management business rules through the <span class="tag is-dark is-rounded">Drools</span> engine.
                                        </li>
                                    </ul>

                                    <h5 className="title is-5">Software Engineering Manager at THE HUT GROUP</h5>
                                    <h6 className="subtitle is-6"><em>July 2018 - March 2019</em> (Manchester) </h6>
                                    <ul>
                                        <li>
                                            Lead a team of four to build Customer Support web application with <span class="tag is-dark is-rounded">Java Spring</span> to answer customer requests and examine orders in single unified application.
                                        </li>
                                    </ul>

                                    <h5 className="title is-5">Software Engineer at THE HUT GROUP</h5>
                                    <h6 className="subtitle is-6"><em>January 2018 - July 2018</em> (Northwich) </h6>
                                    <ul>
                                        <li>
                                            Built new dockerised microservice in <span class="tag is-dark is-rounded">Java Spring</span> for Fraud team to control lifecycle of order refund/replace actions.
                                        </li>
                                        <li>
                                            Used <span class="tag is-dark is-rounded">ActiveMQ</span> message broker to provide async processing of order actions and <span class="tag is-dark is-rounded">MS SQL Server</span> database.
                                        </li>
                                    </ul>

                                    <h5 className="title is-5">Graduate Software Engineer at THE HUT GROUP</h5>
                                    <h6 className="subtitle is-6"><em>October 2016 - December 2017</em> (Northwich) </h6>
                                    <ul>
                                        <li>
                                            In Order Pipeline team, developed and maintained <span class="tag is-dark is-rounded">Java Spring</span> microservices for an automated flow of the order progression with Netflix's <span class="tag is-dark is-rounded">Hystrix</span> based event-driven architecture and best warehouse selection optimisation problems.
                                        </li>
                                    </ul>

                                    <h5 className="title is-5">Test & Automation Engineer at YouView</h5>
                                    <h6 className="subtitle is-6"><em>June 2015 - August 2015</em> (London) </h6>
                                    <ul>
                                        <li>
                                            Implemented library and custom test runner with <span class="tag is-dark is-rounded">Python</span> to execute automated tests on Sony YouView TVs over <span class="tag is-dark is-rounded">Android</span> Debug Bridge.
                                        </li>
                                    </ul>

                                    <h5 className="title is-5">Junior Android Developer at SOCAR</h5>
                                    <h6 className="subtitle is-6"><em>July 2014 - September 2014</em> (Baku, Azerbaijan) </h6>
                                    <ul>
                                        <li>
                                            Developed <span class="tag is-dark is-rounded">Android</span> application with <span class="tag is-dark is-rounded">ASP.NET</span> web service, <span class="tag is-dark is-rounded">MS SQL Server</span> database and KSOAP to manage SOCAR's vacancy structure.
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </article>
                    </div>
                </div>

            </Container>
        </>
    )
}