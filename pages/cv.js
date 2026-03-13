import Container from '../components/container'
import Seo from '../components/seo'

function ContactItem({href, icon, alt, text}) {
    const iconEl = (
        <figure className="image is-24x24 ">
            <img src={`/assets/${icon}.svg`} alt={alt}/>
        </figure>
    );

    const textEl = (
        <div className="content">
            <p>{text}</p>
        </div>
    );

    return (
        <div className="columns is-gapless is-mobile mb-1">
            <div className="column is-2">
                {href ? <a href={href}>{iconEl}</a> : iconEl}
            </div>
            <div className="column">
                {href ? <a href={href}>{textEl}</a> : textEl}
            </div>
        </div>
    );
}

function Tag({children}) {
    return <span className="tag is-dark is-rounded">{children}</span>;
}

export default function CV() {
    const seo = {
        metaTitle: "Nijat Ismayilzada - Senior Software Engineer",
        metaDescription: "CV of Nijat Ismayilzada - Senior Software Engineer at Deliveroo",
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
                            <ContactItem href="https://ismayilzada.com" icon="pot" alt="pot" text="ismayilzada.com"/>
                            <ContactItem href="mailto:nijat@ismayilzada.com" icon="email" alt="email" text="nijat@ismayilzada.com"/>
                            <ContactItem href="https://github.com/nijatismayilzada" icon="github" alt="github" text="/nijatismayilzada"/>
                            <ContactItem href="https://linkedin.com/in/nijatismayilzada" icon="linkedin" alt="linkedin" text="in/nijatismayilzada"/>
                            <ContactItem icon="location" alt="location" text="London area, UK"/>
                        </div>
                    </div>

                    <div className="column">
                        <div className="box is-shadowless">
                            <div className="content">
                                <h6 className="title is-6">
                                    <a href="https://www.manchester.ac.uk/">The University of Manchester</a>
                                </h6>
                                <h6 className="subtitle is-6 mb-0"><em>2013 - 2016</em></h6>
                                <ul className="mt-2">
                                    <li>
                                        Bachelor of Computer Science (2:1). <Tag>Java</Tag> <Tag>C#</Tag> <Tag>Python</Tag> <Tag>C</Tag> <Tag>Linux</Tag>
                                    </li>
                                    <li>
                                        Full scholarship by the Azerbaijani Government as part of a{' '}
                                        <a href="https://www.oilfund.az/en/projects/7">
                                            "State Program on the study of Azerbaijani youth in abroad for 2007-2015"
                                        </a>
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
                                <h5 className="title is-5">
                                    Senior Software Engineer at <a href="https://deliveroo.co.uk/">Deliveroo</a>
                                </h5>
                                <h6 className="subtitle is-6 mb-0">
                                    <em>February 2025 - Present. Remote, London based</em>
                                </h6>
                                <ul className="mt-2">
                                    <li>
                                        As one of the most senior members of the backend team, leading the
                                        rearchitecture of Deliveroo Plus ecosystem integration under <Tag>DoorDash</Tag> platform
                                        with 3 other Senior/Staff engineers.
                                    </li>
                                    <li>
                                        This involves complete decommission of 9+ Deliveroo Plus backend services from
                                        AWS and rewriting in a greenfield "infinitely scalable" Lambda and <Tag>Cassandra</Tag> tech
                                        stack under generalised DoorDash/Wolt/Deliveroo umbrella.
                                    </li>
                                    <li>
                                        In the Plus team, delivered a new "Diamond" premium subscription tier for UK
                                        customers with <Tag>GraphQL</Tag>-server driven UI, Click-to-Claim On-Time-Promise
                                        experience serving 700 RPS and processing 3K claims a day. Led the migration of
                                        legacy <Tag>Ruby</Tag>-based flow claims to the new stack with <Tag>gRPC</Tag> and{' '}
                                        <Tag>DynamoDB</Tag> datastore.
                                    </li>
                                    <li>
                                        Introduced annual subscription billing for EU & UK markets, which was adopted by
                                        6K customers in the first month; led the implementation of idempotent payment
                                        workflows for the high-cost transaction tier switches.
                                    </li>
                                </ul>

                                <h5 className="title is-5">
                                    Software Engineer at <a href="https://deliveroo.co.uk/">Deliveroo</a>
                                </h5>
                                <h6 className="subtitle is-6 mb-0">
                                    <em>August 2021 - February 2025. Remote, London based</em>
                                </h6>
                                <ul className="mt-2">
                                    <li>
                                        Built a restaurant recommendation engine in <Tag>Go</Tag> that used
                                        an <Tag>OpenAI LLM</Tag> to understand and act on user prompts.
                                    </li>
                                    <li>
                                        Owned reviews & ratings microservices fleet
                                        (<Tag>Go</Tag> + <Tag>PostgreSQL</Tag> + <Tag>Snowflake</Tag>),
                                        storing 200M+ reviews annually and serving 1K RPS. Built
                                        a <Tag>Kafka</Tag> event stream and a <Tag>DynamoDB</Tag>-backed Content
                                        Moderation service in <Tag>Go</Tag> to interact with third-party moderation APIs.
                                    </li>
                                    <li>
                                        Owned and maintained a tier-0 Order History <Tag>Go</Tag> microservice
                                        with <Tag>PostgreSQL</Tag> database serving 3K RPS. By redesigning queries, table
                                        structures, and index conditions, reduced the average latency by 2x and eliminated
                                        99.99% of timeout errors. Reduced the <Tag>AWS</Tag> Database cost by 40%.
                                    </li>
                                </ul>

                                <h5 className="title is-5">
                                    Associate Software Engineer at <a href="https://www.jpmorganchase.com/">JPMorgan Chase</a>
                                </h5>
                                <h6 className="subtitle is-6 mb-0">
                                    <em>March 2019 - August 2021. Glasgow</em>
                                </h6>
                                <ul className="mt-2">
                                    <li>
                                        In the Big Data team, migrated Credit Risk Applications
                                        to <Tag>Spark</Tag> microservices on the <Tag>Hadoop</Tag> cluster.
                                    </li>
                                    <li>
                                        Maintained legacy Prime Brokerage Risk Analysis and Control application
                                        suite on <Tag>Java Spring MVC</Tag> and Oracle PL/SQL.
                                    </li>
                                    <li>
                                        Built Spring Boot Cloud app to support Wealth Management business rules
                                        through the <Tag>Drools</Tag> engine.
                                    </li>
                                </ul>

                                <h5 className="title is-5">
                                    Software Engineer and Engineering Manager at <a href="https://www.thg.com/">THG</a>
                                </h5>
                                <h6 className="subtitle is-6 mb-0">
                                    <em>October 2016 - March 2019. Manchester</em>
                                </h6>
                                <ul className="mt-2">
                                    <li>
                                        Led a team of four to build a Customer Support web application
                                        with <Tag>Java Spring</Tag> to answer customer requests and examine orders
                                        in a single unified application.
                                    </li>
                                    <li>
                                        Built a new dockerised microservice in <Tag>Java Spring</Tag> for the Fraud team to
                                        control the lifecycle of order actions. Used <Tag>ActiveMQ</Tag> message broker
                                        to provide async processing of order actions over <Tag>MS SQL Server</Tag> database.
                                    </li>
                                    <li>
                                        In the Order Pipeline team, developed and maintained <Tag>Java Spring</Tag> microservices
                                        for an automated flow of the order progression with an event-driven
                                        architecture and best warehouse selection optimisation problems.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            </Container>
        </>
    )
}
