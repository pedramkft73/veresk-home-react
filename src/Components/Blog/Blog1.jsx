import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";
import BlogCard1 from "../BlogCard/BlogCard1";
import BlogCardStyle2 from "../BlogCard/BlogCardStyle2";

const postsEndpoint = "https://veresk.com.au/wp-json/wp/v2/posts?per_page=3&_embed";
const postsArchiveUrl = "https://veresk.com.au/blog/";
const fallbackImage = "/assets/images/veresk-harbour-bridge.jpg";
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const textFromHtml = (html = "") => {
    const documentFragment = new DOMParser().parseFromString(html, "text/html");

    return (documentFragment.body.textContent || "")
        .replace(/\s*(?:\u2026|\.\.\.)?\s*Read more\s*$/i, "")
        .replace(/\s+/g, " ")
        .trim();
};

const truncateWords = (text, limit = 26) => {
    const words = text.split(/\s+/).filter(Boolean);

    if (words.length <= limit) {
        return words.join(" ");
    }

    return `${words.slice(0, limit).join(" ")}\u2026`;
};

const formatPostDate = (dateString) => {
    if (!dateString) {
        return "";
    }

    const [year, month, day] = dateString.slice(0, 10).split("-").map(Number);

    return `${day} ${monthNames[month - 1]} ${year}`;
};

const mapWordPressPost = (post) => {
    const media = post._embedded?.["wp:featuredmedia"]?.[0];
    const mediaSizes = media?.media_details?.sizes;
    const terms = post._embedded?.["wp:term"]?.flat() || [];
    const category = terms.find((term) => {
        const categoryName = term.name?.trim().toLowerCase();

        return term.taxonomy === "category"
            && categoryName
            && !["uncategorised", "uncategorized"].includes(categoryName);
    });
    const excerptSource = post.excerpt?.rendered || post.content?.rendered || "";

    return {
        id: post.id,
        title: textFromHtml(post.title?.rendered),
        date: formatPostDate(post.date),
        excerpt: truncateWords(textFromHtml(excerptSource)),
        image: mediaSizes?.large?.source_url || media?.source_url || mediaSizes?.medium_large?.source_url || fallbackImage,
        imageAlt: media?.alt_text || textFromHtml(post.title?.rendered),
        link: post.link,
        category: category ? textFromHtml(category.name) : "",
    };
};

const WordPressInsights = () => {
    const [posts, setPosts] = useState([]);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        const controller = new AbortController();

        const loadPosts = async () => {
            try {
                const response = await fetch(postsEndpoint, {
                    headers: { Accept: "application/json" },
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error(`WordPress posts request failed with status ${response.status}`);
                }

                const latestPosts = await response.json();
                setPosts(latestPosts.map(mapWordPressPost));
                setStatus("ready");
            } catch (error) {
                if (error.name === "AbortError") {
                    return;
                }

                console.error("Unable to load the latest Veresk WordPress posts.", error);
                setStatus("error");
            }
        };

        loadPosts();

        return () => controller.abort();
    }, []);

    return (
        <section className="blog-area veresk-insights-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title text-left">
                            <SectionTitle
                                SubTitle="LATEST INSIGHTS"
                                Title="Engineering <span>Insights</span> &amp; Updates"
                            ></SectionTitle>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="project-right">
                            <div className="solutek-btn">
                                <a href={postsArchiveUrl}>
                                    VIEW ALL POSTS
                                    <div className="solutek-hover-btn hover-bx"></div>
                                    <div className="solutek-hover-btn hover-bx2"></div>
                                    <div className="solutek-hover-btn hover-bx3"></div>
                                    <div className="solutek-hover-btn hover-bx4"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {status === "loading" && (
                    <div className="veresk-insights-status" role="status" aria-live="polite">
                        Loading latest insights…
                    </div>
                )}

                {status === "error" && (
                    <div className="veresk-insights-status" role="status">
                        Latest insights are temporarily unavailable.
                    </div>
                )}

                {status === "ready" && posts.length === 0 && (
                    <div className="veresk-insights-status" role="status">
                        No insights are available yet.
                    </div>
                )}

                {status === "ready" && posts.length > 0 && (
                    <div className="row veresk-insights-posts">
                        <div className="col-xl-5 col-lg-6 col-md-6">
                            <BlogCard1
                                BlogImg={posts[0].image}
                                Title={posts[0].title}
                                Content={posts[0].excerpt}
                                Date={posts[0].date}
                                Category={posts[0].category}
                                BlogUrl={posts[0].link}
                                ImageAlt={posts[0].imageAlt}
                                IsWordPressPost
                            ></BlogCard1>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-6">
                            {posts.slice(1, 3).map((post) => (
                                <BlogCardStyle2
                                    key={post.id}
                                    BlogImg={post.image}
                                    Title={post.title}
                                    Content={post.excerpt}
                                    Date={post.date}
                                    Category={post.category}
                                    BlogUrl={post.link}
                                    ImageAlt={post.imageAlt}
                                    IsWordPressPost
                                ></BlogCardStyle2>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

const Blog1 = ({ variant = "default" }) => {
    if (variant === "wordpress-insights") {
        return <WordPressInsights />;
    }

    return (
        <div className="blog-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title text-left">
                            <SectionTitle
                                SubTitle="OUR LATEST BLOG"
                                Title="Exploring Its Potential in<br> Various <span>Industries.</span>"
                            ></SectionTitle>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="project-right">
                            <div className="solutek-btn">
                                <Link to="/blog">
                                    VIEW  all post
                                    <div className="solutek-hover-btn hover-bx"></div>
                                    <div className="solutek-hover-btn hover-bx2"></div>
                                    <div className="solutek-hover-btn hover-bx3"></div>
                                    <div className="solutek-hover-btn hover-bx4"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-6">
                        <BlogCard1
                            BlogImg="/assets/images/blog1.png"
                            Title="Leveraging Descriptive Solutions for Business Growth."
                            Content="Appropriatel promote enterprise-wide vortals throuh in information without equity best  revolutioniz enterprise-wide vortals throuh."
                        ></BlogCard1>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-6">
                        <BlogCardStyle2
                            BlogImg="/assets/images/blog2.png"
                            Title="How to Create Modern Web Site For Your Business.."
                            Content="Appropriatel promote enterprise-wide vortals throuh in information without equity best  revolutioniz"
                        ></BlogCardStyle2>

                        <BlogCardStyle2
                            BlogImg="/assets/images/blog3.png"
                            Title="How to Create Modern Web Site For Your Business.."
                            Content="Appropriatel promote enterprise-wide vortals throuh in information without equity best  revolutioniz"
                        ></BlogCardStyle2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog1;
