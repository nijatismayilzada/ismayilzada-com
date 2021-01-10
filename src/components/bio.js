import React from "react"
import github from "../../content/assets/github.svg"
import linkedin from "../../content/assets/linkedin.svg"
import email from "../../content/assets/email.svg"

const Bio = () => {


    return (
        <div className="bio">

            <p>

                <a href="https://github.com/nijatismayilzada">
                    <img src={github} alt="github"/>
                </a>

                <a href="https://linkedin.com/in/nijatismayilzada">
                    <img src={linkedin} alt="linkedin"/>
                </a>

                <a href="mailto:nijat@ismayilzada.com">
                    <img src={email} alt="email"/>
                </a>

            </p>

        </div>
    )
}

export default Bio
