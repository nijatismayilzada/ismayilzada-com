import Container from '../components/container'
import Seo from '../components/seo'
import {useEffect} from "react";


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
            <Seo seo={seo}/>
            <Container>
                <div className="columns">
                    <div className="column is-4">
                        <div className="box is-shadowless">
                            <div className="content">
                                <h4 className="title is-4">NIJAT ISMAYILZADA</h4>
                            </div>

                            <div className="columns is-gapless is-mobile">
                                <div className="column is-2">
                                    <a href="https://ismayilzada.com">
                                        <figure className="image is-24x24 ">
                                            <img src="/assets/pot-dark.svg" alt="pot"/>
                                        </figure>
                                    </a>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        <a href="https://ismayilzada.com">
                                            <p>ismayilzada.com</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-gapless is-mobile">
                                <div className="column is-2">
                                    <a href="mailto:nijat@ismayilzada.com">
                                        <figure className="image is-24x24 ">
                                            <img src="/assets/email-dark.svg" alt="email"/>
                                        </figure>
                                    </a>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        <a href="mailto:nijat@ismayilzada.com">
                                            <p>nijat@ismayilzada.com</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-gapless is-mobile">
                                <div className="column is-2">
                                    <a href="https://github.com/nijatismayilzada">
                                        <figure className="image is-24x24 ">
                                            <img src="/assets/github-dark.svg" alt="github"/>
                                        </figure>
                                    </a>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        <a href="https://github.com/nijatismayilzada">
                                            <p>github.com/nijatismayilzada</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-gapless is-mobile">
                                <div className="column is-2">
                                    <a href="https://linkedin.com/in/nijatismayilzada">
                                        <figure className="image is-24x24 ">
                                            <img src="/assets/linkedin-dark.svg" alt="linkedin"/>
                                        </figure>

                                    </a>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        <a href="https://linkedin.com/in/nijatismayilzada">
                                            <p>in/nijatismayilzada</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-gapless is-mobile">
                                <div className="column is-2">
                                    <figure className="image is-24x24 ">
                                        <img src="/assets/location-dark.svg" alt="location"/>
                                    </figure>

                                </div>
                                <div className="column">
                                    <div className="content">
                                        <p>London area, UK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box is-shadowless">
                            <div className="content  ">
                                <h4 className="title is-4">EDUCATION</h4>
                                <h6 className="title is-6"><a href="https://www.manchester.ac.uk/">The University of
                                    Manchester</a></h6>
                                <h6 className="subtitle is-6"><em>2013 - 2016</em></h6>

                                <ul>
                                    <li>
                                        Bachelor of Science in Computer Science with Honours in the Second Class,
                                        Division One.
                                    </li>
                                    <li>
                                        <span className="tag is-dark is-rounded">Java</span> <span
                                        className="tag is-dark is-rounded">C#</span> <span
                                        className="tag is-dark is-rounded">Python</span> <span
                                        className="tag is-dark is-rounded">C</span> <span
                                        className="tag is-dark is-rounded">Linux</span>
                                    </li>
                                    <li>
                                        Full scholarship by the Azerbaijani government as part of a <a
                                        href="https://www.oilfund.az/en/projects/7">“State Program on the study of
                                        Azerbaijani youth in abroad for 2007-2015”</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="box is-shadowless">
                            <div className="content  ">
                                <h4 className="title is-4">PROJECTS</h4>
                                <h6 className="title is-6"><a
                                    href="https://github.com/nijatismayilzada/different-snake-game">Different Snake
                                    Game</a></h6>

                                <ul>
                                    <li>
                                        Available in <a
                                        href="https://play.google.com/store/apps/details?id=com.thepot.differentsnakegame">Play
                                        Store</a>.
                                    </li>
                                    <li>
                                        Built with <span className="tag is-dark is-rounded">Java</span>, Android
                                        Graphics Library and SQLite.
                                    </li>
                                </ul>


                                <h6 className="title is-6"><a
                                    href="https://github.com/nijatismayilzada/ganira-net">www.ganira.net</a> & <a
                                    href="https://github.com/nijatismayilzada/ismayilzada-com">www.ismayilzada.com</a>
                                </h6>

                                <ul>
                                    <li>
                                        Built with <span className="tag is-dark is-rounded">Next.JS</span>, <span
                                        className="tag is-dark is-rounded">React</span>, Vercel JAMStack.
                                    </li>
                                </ul>


                                <h6 className="title is-6">Concept <a
                                    href="https://github.com/nijatismayilzada/bank-transaction-manager">Bank Transaction
                                    and Account Manager</a></h6>

                                <ul>
                                    <li>
                                        "Spring-less" microservices run on embedded Jersey container and <span
                                        className="tag is-dark is-rounded">ActiveMQ</span> message broker.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <article className="media">
                            <div className="media-content">
                                <div className="content ">

                                    <h4 className="title is-4">EXPERIENCE</h4>

                                    <h5 className="title is-5">Software Engineer at <a
                                        href="https://deliveroo.co.uk/">Deliveroo</a></h5>
                                    <h6 className="subtitle is-6"><em>August 2021 - ∞. Remote, London based</em></h6>
                                    <ul>
                                        <li>
                                            In Plus team, delivered a new "Diamond" premium subscription tier for UK
                                            customers. Migrated legacy <span
                                            className="tag is-dark is-rounded">Scala</span> and <span
                                            className="tag is-dark is-rounded">Ruby</span> systems to <span
                                            className="tag is-dark is-rounded">Golang</span> architecture.
                                        </li>
                                        <li>
                                            In User Generated Content team (reviews, ratings, etc.), built and
                                            maintained <span
                                            className="tag is-dark is-rounded">Golang</span> microservices on <span
                                            className="tag is-dark is-rounded">AWS</span>.
                                        </li>
                                        <li>
                                            Using <span className="tag is-dark is-rounded">Kafka</span>, <span
                                            className="tag is-dark is-rounded">PostgreSQL</span>, <span
                                            className="tag is-dark is-rounded">DynamoDB</span> to build low-latency
                                            GraphQL, REST, gRPC APIs.
                                        </li>
                                    </ul>

                                    <h5 className="title is-5">Associate Software Engineer at <a
                                        href="https://www.jpmorganchase.com/">JPMorgan Chase</a></h5>
                                    <h6 className="subtitle is-6"><em>March 2019 - August 2021. Glasgow</em></h6>
                                    <ul>
                                        <li>
                                            In the Big Data team, migrated Credit Risk Applications to <span
                                            className="tag is-dark is-rounded">Spark</span> microservices on the <span
                                            className="tag is-dark is-rounded">Hadoop</span> cluster.
                                        </li>
                                        <li>
                                            Maintained legacy Prime Brokerage Risk Analysis and Control application
                                            suite built on <span
                                            className="tag is-dark is-rounded">Java Spring MVC</span> and Oracle PL/SQL.
                                        </li>
                                        <li>
                                            Built Spring Boot Cloud app to support Wealth Management business rules
                                            through the <span className="tag is-dark is-rounded">Drools</span> engine.
                                        </li>
                                    </ul>

                                    <h5 className="title is-5">Software Engineering Manager at <a
                                        href="https://www.thg.com/">THG</a></h5>
                                    <h6 className="subtitle is-6"><em>July 2018 - March 2019. Manchester</em></h6>
                                    <ul>
                                        <li>
                                            Lead a team of four to build a Customer Support web application with <span
                                            className="tag is-dark is-rounded">Java Spring</span> to answer customer
                                            requests and examine orders in a single unified application.
                                        </li>
                                    </ul>

                                    <h5 className="title is-5">Software Engineer at <a
                                        href="https://www.thg.com/">THG</a></h5>
                                    <h6 className="subtitle is-6"><em>January 2018 - July 2018. Northwich</em></h6>
                                    <ul>
                                        <li>
                                            Built a new dockerised microservice in <span
                                            className="tag is-dark is-rounded">Java Spring</span> for the Fraud team to
                                            control the lifecycle of order refund/replace actions.
                                        </li>
                                        <li>
                                            Used <span className="tag is-dark is-rounded">ActiveMQ</span> message broker
                                            to provide async processing of order actions and <span
                                            className="tag is-dark is-rounded">MS SQL Server</span> database.
                                        </li>
                                    </ul>

                                    <h5 className="title is-5">Graduate Software Engineer at <a
                                        href="https://www.thg.com/">THG</a></h5>
                                    <h6 className="subtitle is-6"><em>October 2016 - December 2017. Northwich</em></h6>
                                    <ul>
                                        <li>
                                            In the Order Pipeline team, developed and maintained <span
                                            className="tag is-dark is-rounded">Java Spring</span> microservices for an
                                            automated flow of the order progression with Netflix's <span
                                            className="tag is-dark is-rounded">Hystrix</span>-based event-driven
                                            architecture and best warehouse selection optimisation problems.
                                        </li>
                                    </ul>

                                    <h5 className="title is-5">Test & Automation Engineer at <a
                                        href="https://www.youview.com/">YouView</a></h5>
                                    <h6 className="subtitle is-6"><em>June 2015 - August 2015. London</em></h6>
                                    <ul>
                                        <li>
                                            Implemented library and custom test runner with <span
                                            className="tag is-dark is-rounded">Python</span> to execute automated tests
                                            on Sony YouView TVs over <span
                                            className="tag is-dark is-rounded">Android</span> Debug Bridge.
                                        </li>
                                    </ul>

                                    <h5 className="title is-5">Junior Android Developer at <a
                                        href="https://socar.az/en/home">SOCAR</a></h5>
                                    <h6 className="subtitle is-6"><em>July 2014 - September 2014. Baku, Azerbaijan</em>
                                    </h6>
                                    <ul>
                                        <li>
                                            Developed <span
                                            className="tag is-dark is-rounded">Android</span> application with ASP.NET
                                            web service, MS SQL Server database and KSOAP to manage SOCAR's vacancy
                                            structure.
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