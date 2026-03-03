import Link from "next/link";

export default function BlogArea({ dictionary, lang }: { dictionary: any, lang: string }) {
  const sidebarDict = dictionary.sidebar;
  const imageMap = ["1", "2", "3", "8", "9", "10"];
  const recentPostImages = ["1", "2", "3"];

  return (
    <div className="section azzle-section-padding6">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {dictionary.posts.map((post: any, i: number) => (
                <div key={post.id} className="col-xl-6">
                  <div className="single-post-item" data-aos="fade-up" data-aos-delay={500 + i * 100}>
                    <div className="post-thumbnail">
                      <img src={`/assets/images/blog/blog${imageMap[i]}.png`} alt={post.title} />
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <div className="post-category">
                          <a href="#">{post.category}</a>
                        </div>
                        <div className="post-date">
                          {post.date}
                        </div>
                      </div>
                      <Link href={`/${lang}/single-blog`}>
                        <h3 className="entry-title">
                          {post.title}
                        </h3>
                      </Link>
                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <!-- navigation --> */}
            <div className="azzle-navigation">
              <nav className="navigation pagination" aria-label="Posts">
                <div className="nav-links">
                  <span aria-current="page" className="page-numbers current">1</span>
                  <a className="page-numbers" href="#">2</a>
                  <a className="page-numbers" href="#">3</a>
                  <a className="next page-numbers" href="#">
                    <img src="/assets/images/blog/angle.png" alt={dictionary.pagination_next} />
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="right-sidebar" data-aos="fade-up" data-aos-delay="500">
              <div className="widget">
                <div className="wp-block-search__inside-wrapper">
                  <input type="search" placeholder={sidebarDict.search_placeholder} className="wp-block-search__input" />
                  <button id="wp-block-search__button" type="submit">
                    <img src="/assets/images/blog/search.png" alt="search" />
                  </button>
                </div>
              </div>
              <div className="widget">
                <h3 className="wp-block-heading">{sidebarDict.categories_title}</h3>
                <ul>
                  {sidebarDict.categories.map((cat: string, i: number) => (
                    <li key={i}><a href="#">{cat}</a></li>
                  ))}
                </ul>
              </div>
              <div className="widget azzle_recent_posts_Widget">
                <h3 className="wp-block-heading">{sidebarDict.recent_posts_title}</h3>
                {sidebarDict.recent_posts.map((post: any, i: number) => (
                  <Link key={i} className="post-item" href={`/${lang}/single-blog`}>
                    <div className="post-thumb">
                      <img src={`/assets/images/blog/blog${recentPostImages[i]}.png`} alt={post.title} />
                    </div>
                    <div className="post-text">
                      <div className="post-date">
                        {post.date}
                      </div>
                      <p>{post.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="widget">
                <h3 className="wp-block-heading">{sidebarDict.tags_title}</h3>
                <div className="wp-block-tag-cloud">
                  {sidebarDict.tags.map((tag: string, i: number) => (
                    <a key={i} href="#">{tag}</a>
                  ))}
                </div>
              </div>
              <div className="widget">
                <h3 className="wp-block-heading">{sidebarDict.subscribe_title}</h3>
                <p>{sidebarDict.subscribe_desc}</p>
                <form action="#">
                  <div className="azzle-blog-subscriber">
                    <input type="email" placeholder={sidebarDict.subscribe_placeholder} />
                    <button id="azzle-blog-subscribe" type="button">{sidebarDict.subscribe_button}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
