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

      <div className="box my-4">
        <article className="media">
          <div className="media-content">
            <div className="content has-text-light">
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a><strong>{title}</strong></a>
              </Link>
              <br />
              <small>
                <DateFormatter dateString={date} />
              </small>
              <br />
              <p>{excerpt}</p>
            </div>
          </div>
        </article>
      </div>

    </div>
  )
}
