import React from "react"
import {Link} from "gatsby"
import github from "../../content/assets/github.svg";
import linkedin from "../../content/assets/linkedin.svg";
import email from "../../content/assets/email.svg";

const Layout = ({title, children}) => {

    return (
        <>
            <section className="section">
                <div className="container is-max-desktop">
                    <nav className="level">

                        <div className="level-left">
                            <div className="level-item">
                                <Link className="is-size-3" to="/">
                                    {title}
                                </Link>
                            </div>
                        </div>

                        <div className="level-right">
                            <div className="level-item">
                                <table className="table is-narrow">
                                    <tr>
                                        <td>
                                            <a href="https://github.com/nijatismayilzada">
                                                <figure className="image is-32x32 is-centered">
                                                    <img src={github} alt="github"/>
                                                </figure>
                                            </a>
                                        </td>
                                        <td>


                                            <a href="https://linkedin.com/in/nijatismayilzada">
                                                <figure className="image is-32x32">
                                                    <img src={linkedin} alt="linkedin"/>
                                                </figure>
                                            </a>
                                        </td>
                                        <td>

                                            <a href="mailto:nijat@ismayilzada.com">
                                                <figure className="image is-32x32">
                                                    <img src={email} alt="email"/>
                                                </figure>
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>

            <section className="section">
                <div className="container is-max-desktop">
                    <main>{children}</main>
                </div>
            </section>
        </>
    )
}

export default Layout
