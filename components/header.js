import Link from 'next/link'

export default function Header() {
  return (
    <nav className="level">

      <div className="level-left">
        <div className="level-item">
          <Link href="/">
            <a className="is-size-3">nijat ismayilzada's blog</a>
          </Link>
        </div>
      </div>

      <div className="level-right">
        <div className="level-item">
          <table className="table is-narrow">
            <tr>
              <td>
                <Link href="/thepot">
                  <a>
                    <figure className="image is-32x32 ">
                      <img src="/assets/pot.svg" alt="pot" />
                    </figure>
                  </a>
                </Link>
              </td>

              <td>
                <a href="https://github.com/nijatismayilzada">
                  <figure className="image is-32x32 ">
                    <img src="/assets/github.svg" alt="github" />
                  </figure>
                </a>
              </td>

              <td>
                <a href="https://linkedin.com/in/nijatismayilzada">
                  <figure className="image is-32x32">
                    <img src="/assets/linkedin.svg" alt="linkedin" />
                  </figure>
                </a>
              </td>

              <td>
                <a href="mailto:nijat@ismayilzada.com">
                  <figure className="image is-32x32">
                    <img src="/assets/email.svg" alt="email" />
                  </figure>
                </a>
              </td>

              <td>
                <Link href="/feed/rss.xml">
                <a>
                  <figure className="image is-32x32 ">
                    <img src="/assets/rss.svg" alt="rss" />
                  </figure>
                  </a>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </nav>
  )
}
