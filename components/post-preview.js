import DateFormatter from '../components/date-formatter'
import Link from 'next/link'

export default function PostPreview({
                                        title,
                                        date,
                                        excerpt,
                                        slug,
                                    }) {
    return (
        <div>

            <div className="box is-shadowless">
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <Link as={`/posts/${slug}`} href="/posts/[slug]">
                                <p className="is-size-5"><strong>{title}</strong></p>
                            </Link>
                            <small>
                                <DateFormatter dateString={date}/>
                            </small>
                            <br/>
                            <p>{excerpt}</p>
                        </div>
                    </div>
                </article>
            </div>

        </div>
    )
}
