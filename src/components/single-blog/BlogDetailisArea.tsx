import Link from "next/link";

export default function BlogDetailisArea({ dictionary, sidebar, lang }: { dictionary: any, sidebar: any, lang: string }) {
  const recentPostImages = ["1", "2", "3"];
  return (
    <div className="section azzle-section-padding6">
      <div className="container">
        <div className="row">
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="900">
            <div className="post-thumbnail post-thumbnail-details">
              <img src="/assets/images/blog/bd1.jpg" alt={dictionary.title} />
            </div>
            <div className="single-post-content-wrap">
              <div className="post-meta">
                <div className="post-category">
                  <a href="#">{dictionary.meta_category}</a>
                </div>
                <div className="post-date">
                  {dictionary.meta_date}
                </div>
              </div>
              <div className="entry-content">
                <h3>{dictionary.title}</h3>
                <p>{dictionary.p1}</p>

                <span>{dictionary.h_support}</span>
                <p>{dictionary.p_support}</p>

                <span>{dictionary.h_maintenance}</span>
                <p>{dictionary.p_maintenance}</p>

                <span>{dictionary.h_cybersecurity}</span>
                <p>{dictionary.p_cybersecurity}</p>

                <div className="post-thumbnail post-thumbnail-details">
                  <img src="/assets/images/blog/bd2.jpg" alt="" />
                </div>

                <span>{dictionary.h_takeaways}</span>
                <ul className="azzle-blog-details-list">
                  {dictionary.takeaways_list.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p>{dictionary.p_final}</p>

                <div className="post-tag-wrap">
                  <div className="post-tag">
                    <h3>{dictionary.tags_title}</h3>
                    <div className="wp-block-tag-cloud">
                      {dictionary.tags.map((tag: string, i: number) => (
                        <a key={i} href="#">{tag}</a>
                      ))}
                    </div>
                  </div>
                  <div className="post-like-comment">
                    <ul>
                      <li><a href="#"><img src="/assets/images/blog/like.png" alt="likes" />{dictionary.likes}</a></li>
                      <li><a href="#"><img src="/assets/images/blog/comment.png" alt="comments" />{dictionary.comments}</a></li>
                    </ul>
                  </div>
                </div>
                <div className="post-comment">
                  <h3>{dictionary.comments_title}</h3>
                  {/* Comments section is hardcoded, will leave as is for now as it's static example data */}
                  <ul>
                    <li>
                      <div className="post-comment-wrap">
                        <div className="post-comment-thumb">
                          <img src="/assets/images/team/team5.png" alt="" />
                        </div>
                        <div className="post-comment-data">
                          <a className="comment-reply" href="#">{dictionary.reply_button}</a>
                          <strong>Ricky Smith</strong>
                          <span>June 21, 2023</span>
                          <p>It is a long established fact that a reader will be distrac readable content of a page when looking at its layout. The point of using is that it has two.</p>
                        </div>
                      </div>
                    </li>
                    <li className="children">
                      <div className="post-comment-wrap">
                        <div className="post-comment-thumb">
                          <img src="/assets/images/team/team6.png" alt="" />
                        </div>
                        <div className="post-comment-data">
                          <a className="comment-reply" href="#">{dictionary.reply_button}</a>
                          <strong>Joshua Jones</strong>
                          <span>September 22, 2023</span>
                          <p>It is a long established fact that a reader will be distra readable content of a page when looking its layout. The point of using.</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="post-comment-wrap">
                        <div className="post-comment-thumb">
                          <img src="/assets/images/team/team7.png" alt="" />
                        </div>
                        <div className="post-comment-data">
                          <a className="comment-reply" href="#">{dictionary.reply_button}</a>
                          <strong>Mark Jones</strong>
                          <span>June 21, 2023</span>
                          <p>It is a long established fact that a reader will be distrac readable content of a page when looking at its layout. The point of using is that it has two.</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="comment-box">
                  <h3>{dictionary.comment_form_title}</h3>
                  <div className="azzle-contact-box">
                    <form action="#">
                      <div className="azzle-contact-column">
                        <div className="azzle-contact-field">
                          <label>{dictionary.comment_form_name_label}</label>
                          <input type="text" placeholder={dictionary.comment_form_name_placeholder} />
                        </div>
                        <div className="azzle-contact-field">
                          <label>{dictionary.comment_form_email_label}</label>
                          <input type="email" placeholder={dictionary.comment_form_email_placeholder} />
                        </div>
                      </div>
                      <div className="azzle-contact-field">
                        <label>{dictionary.comment_form_message_label}</label>
                        <textarea name="message" placeholder={dictionary.comment_form_message_placeholder}></textarea>
                      </div>
                      <button id="azzle-main-submit-btn" type="button">{dictionary.comment_form_submit_button}</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="right-sidebar" data-aos="fade-up" data-aos-delay="500">
              <div className="widget">
                <div className="wp-block-search__inside-wrapper">
                  <input type="search" placeholder={sidebar.search_placeholder} className="wp-block-search__input" />
                  <button id="wp-block-search__button" type="submit">
                    <img src="/assets/images/blog/search.png" alt="search" />
                  </button>
                </div>
              </div>
              <div className="widget">
                <h3 className="wp-block-heading">{sidebar.categories_title}</h3>
                <ul>
                  {sidebar.categories.map((cat: string, i: number) => (
                    <li key={i}><a href="#">{cat}</a></li>
                  ))}
                </ul>
              </div>
              <div className="widget azzle_recent_posts_Widget">
                <h3 className="wp-block-heading">{sidebar.recent_posts_title}</h3>
                {sidebar.recent_posts.map((post: any, i: number) => (
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
                <h3 className="wp-block-heading">{sidebar.tags_title}</h3>
                <div className="wp-block-tag-cloud">
                  {sidebar.tags.map((tag: string, i: number) => (
                    <a key={i} href="#">{tag}</a>
                  ))}
                </div>
              </div>
              <div className="widget">
                <h3 className="wp-block-heading">{sidebar.subscribe_title}</h3>
                <p>{sidebar.subscribe_desc}</p>
                <form action="#">
                  <div className="azzle-blog-subscriber">
                    <input type="email" placeholder={sidebar.subscribe_placeholder} />
                    <button id="azzle-blog-subscribe" type="button">{sidebar.subscribe_button}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
