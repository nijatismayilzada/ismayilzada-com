import Container from '../components/container'
import Seo from '../components/seo'


export default function ThePot() {
    const seo = {
        metaTitle: "ismayilzada.com",
        metaDescription: "nijat ismayilzada's blog",
        shareImage: ""
    };

    return (
        <>
            <Seo seo={seo}/>
            <Container>
                <div className="content">
                    <h4 className="title is-4">NIJAT ISMAYILZADA</h4>
                </div>
                <div className="columns">

                    <div className="column is-4">
                        <div className="box is-shadowless">
                            <div className="columns is-gapless is-mobile  mb-1">
                                <div className="column is-2">
                                    <a href="https://ismayilzada.com">
                                        <figure className="image is-24x24 ">
                                            <img src="/assets/pot.svg" alt="pot"/>
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
                            <div className="columns is-gapless is-mobile mb-1">
                                <div className="column is-2">
                                    <a href="mailto:nijat@ismayilzada.com">
                                        <figure className="image is-24x24 ">
                                            <img src="/assets/email.svg" alt="email"/>
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
                            <div className="columns is-gapless is-mobile mb-1">
                                <div className="column is-2">
                                    <a href="https://github.com/nijatismayilzada">
                                        <figure className="image is-24x24 ">
                                            <img src="/assets/github.svg" alt="github"/>
                                        </figure>
                                    </a>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        <a href="https://github.com/nijatismayilzada">
                                            <p>/nijatismayilzada</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-gapless is-mobile mb-1">
                                <div className="column is-2">
                                    <a href="https://linkedin.com/in/nijatismayilzada">
                                        <figure className="image is-24x24 ">
                                            <img src="/assets/linkedin.svg" alt="linkedin"/>
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
                            <div className="columns is-gapless is-mobile mb-1">
                                <div className="column is-2">
                                    <figure className="image is-24x24 ">
                                        <img src="/assets/location.svg" alt="location"/>
                                    </figure>

                                </div>
                                <div className="column">
                                    <div className="content">
                                        <p>London area, UK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="box is-shadowless">
                            <div className="content">
                                <h6 className="title is-6"><a href="https://www.manchester.ac.uk/">The University of
                                    Manchester</a></h6>
                                <h6 className="subtitle is-6 mb-0"><em>2013 - 2016</em></h6>

                                <ul className="mt-2">
                                    <li>
                                        Bachelor of Computer Science. <span
                                        className="tag is-dark is-rounded">Java</span> <span
                                        className="tag is-dark is-rounded">C#</span> <span
                                        className="tag is-dark is-rounded">Python</span> <span
                                        className="tag is-dark is-rounded">C</span> <span
                                        className="tag is-dark is-rounded">Linux</span>
                                    </li>
                                    <li>
                                        Full scholarship by the Azerbaijani Government as part of a <a
                                        href="https://www.oilfund.az/en/projects/7">“State Program on the study of
                                        Azerbaijani youth in abroad for 2007-2015”</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="column">
                    <article className="media">
                        <div className="media-content">
                            <div className="content">

                                <h5 className="title is-5">Senior Software Engineer at <a
                                    href="https://deliveroo.co.uk/">Deliveroo</a></h5>
                                <h6 className="subtitle is-6 mb-0"><em>February 2025 - ∞. Remote, London based</em></h6>
                                <ul className="mt-2">
                                    <li>
                                        Working on the migration of legacy <span
                                        className="tag is-dark is-rounded">Ruby</span>/<span
                                        className="tag is-dark is-rounded">Scala</span> subscription services to Go
                                        microservices on <span
                                        className="tag is-dark is-rounded">AWS</span> with <span
                                        className="tag is-dark is-rounded">DynamoDB</span> and <span
                                        className="tag is-dark is-rounded">Kafka</span> event streams. Using <span
                                        className="tag is-dark is-rounded">Redis</span>, <span
                                        className="tag is-dark is-rounded">Kafka</span>, <span
                                        className="tag is-dark is-rounded">PostgreSQL</span>, <span
                                        className="tag is-dark is-rounded">DynamoDB</span> to build sub 60ms latency
                                        <span className="tag is-dark is-rounded">GraphQL</span>, <span
                                        className="tag is-dark is-rounded">REST</span>, <span
                                        className="tag is-dark is-rounded">gRPC</span> endpoints with over 1K RPS.
                                    </li>
                                    <li>
                                        In the Plus team, delivered a new "Diamond" premium subscription tier for UK
                                        customers with <span className="tag is-dark is-rounded">GraphQL</span>-server
                                        driven UI, Click-to-Claim On-Time-Promise
                                        experience serving 700 RPS and processing 3K claims a day. Led the migration of
                                        legacy <span className="tag is-dark is-rounded">Ruby</span>-based flow claims to
                                        the new system.
                                    </li>
                                    <li>
                                        Introduced annual subscription billing for EU & UK markets, which was adopted by
                                        6K customers in the first month; led the implementation of idempotent payment
                                        workflows for the high-cost transaction tier switches.
                                    </li>
                                </ul>

                                <h5 className="title is-5">Software Engineer at <a
                                    href="https://deliveroo.co.uk/">Deliveroo</a></h5>
                                <h6 className="subtitle is-6 mb-0"><em>August 2021 - February 2025. Remote, London
                                    based</em></h6>
                                <ul className="mt-2">
                                    <li>
                                        Built a restaurant recommendation engine in <span
                                        className="tag is-dark is-rounded">Go</span> that used <span
                                        className="tag is-dark is-rounded">OpenAI GPT-3 LLM</span> to understand and act
                                        on user prompts.
                                    </li>
                                    <li>
                                        Owned reviews & ratings microservices fleet (<span
                                        className="tag is-dark is-rounded">Go</span> + <span
                                        className="tag is-dark is-rounded">PostgreSQL</span> + <span
                                        className="tag is-dark is-rounded">Snowflake</span>),
                                        storing 200M+ reviews annually and serving 1K RPS. Built a <span
                                        className="tag is-dark is-rounded">Kafka</span> event stream
                                        and a <span className="tag is-dark is-rounded">DynamoDB</span>-backed Content
                                        Moderation service in <span className="tag is-dark is-rounded">Go</span> to
                                        interact with
                                        third-party moderation APIs.
                                    </li>
                                    <li>
                                        Owned and maintained a tier-0 Order History <span
                                        className="tag is-dark is-rounded">Go</span> microservice with <span
                                        className="tag is-dark is-rounded">PostgreSQL</span>
                                        database serving 3K RPS. By redesigning queries, table structures, and index
                                        conditions, reduced the average latency by 2x and eliminated 99.99%
                                        of timeout errors. Reduced the <span
                                        className="tag is-dark is-rounded">AWS</span> Database cost by 40%.
                                    </li>
                                </ul>

                                <h5 className="title is-5">Associate Software Engineer at <a
                                    href="https://www.jpmorganchase.com/">JPMorgan Chase</a></h5>
                                <h6 className="subtitle is-6 mb-0"><em>March 2019 - August 2021. Glasgow</em></h6>
                                <ul className="mt-2">
                                    <li>
                                        In the Big Data team, migrated Credit Risk Applications to <span
                                        className="tag is-dark is-rounded">Spark</span> microservices on the <span
                                        className="tag is-dark is-rounded">Hadoop</span> cluster.
                                    </li>
                                    <li>
                                        Maintained legacy Prime Brokerage Risk Analysis and Control application
                                        suite on <span
                                        className="tag is-dark is-rounded">Java Spring MVC</span> and Oracle PL/SQL.
                                    </li>
                                    <li>
                                        Built Spring Boot Cloud app to support Wealth Management business rules
                                        through the <span className="tag is-dark is-rounded">Drools</span> engine.
                                    </li>
                                </ul>

                                <h5 className="title is-5">Software Engineering Manager at <a
                                    href="https://www.thg.com/">THG</a></h5>
                                <h6 className="subtitle is-6 mb-0"><em>July 2018 - March 2019. Manchester</em></h6>
                                <ul className="mt-2">
                                    <li>
                                        Led a team of four to build a Customer Support web application with <span
                                        className="tag is-dark is-rounded">Java Spring</span> to answer customer
                                        requests and examine orders in a single unified application.
                                    </li>
                                </ul>

                                <h5 className="title is-5">Software Engineer at <a
                                    href="https://www.thg.com/">THG</a></h5>
                                <h6 className="subtitle is-6 mb-0"><em>January 2018 - July 2018. Northwich</em></h6>
                                <ul className="mt-2">
                                    <li>
                                        Built a new dockerised microservice in <span
                                        className="tag is-dark is-rounded">Java Spring</span> for the Fraud team to
                                        control the lifecycle of order actions.
                                    </li>
                                    <li>
                                        Used <span className="tag is-dark is-rounded">ActiveMQ</span> message broker
                                        to provide async processing of order actions over <span
                                        className="tag is-dark is-rounded">MS SQL Server</span> database.
                                    </li>
                                </ul>

                                <h5 className="title is-5">Graduate Software Engineer at <a
                                    href="https://www.thg.com/">THG</a></h5>
                                <h6 className="subtitle is-6 mb-0"><em>October 2016 - December 2017. Northwich</em></h6>
                                <ul className="mt-2">
                                    <li>
                                        In the Order Pipeline team, developed and maintained <span
                                        className="tag is-dark is-rounded">Java Spring</span> microservices for an
                                        automated flow of the order progression with an event-driven
                                        architecture and best warehouse selection optimisation problems.
                                    </li>
                                </ul>

                                <h5 className="title is-5">Test & Automation Engineer at <a
                                    href="https://www.youview.com/">YouView</a></h5>
                                <h6 className="subtitle is-6 mb-0"><em>June 2015 - August 2015. London</em></h6>

                                <h5 className="title is-5 mt-4">Junior Android Developer at <a
                                    href="https://socar.az/en/home">SOCAR</a></h5>
                                <h6 className="subtitle is-6 mb-0"><em>July 2014 - September 2014. Baku, Azerbaijan</em>
                                </h6>

                            </div>
                        </div>
                    </article>
                </div>

            </Container>
        </>
    )
}