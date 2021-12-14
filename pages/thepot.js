import Container from '../components/container'
import Header from '../components/header'
import Seo from '../components/seo'

export default function ThePot() {
    const seo = {
        metaTitle: "ismayilzada.com",
        metaDescription: "nijat ismayilzada's blog",
        shareImage: ""
    };
    return (
        <>
            <Seo seo={seo} />
            <Container>
                <Header />
            </Container>
            <Container>
                <div className="box">
                    <article className="media">
                        <div className="media-content">
                            <div className="content  has-text-light">
                                <h3 className="title is-3">About Me</h3>
                                <p>There will be details about me</p>
                            </div>
                        </div>
                    </article>
                </div>
            </Container>
        </>
    )
}