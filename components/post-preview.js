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
                        <div className="content has-text-light">
                            <Link as={`/posts/${slug}`} href="/posts/[slug]">
                                <p><strong>{title}</strong></p>
                            </Link>
                            <br/>
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
