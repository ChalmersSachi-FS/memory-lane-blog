const posts = [
  {
    id: 1,
    title: "The Rise of Artificial Intelligence",
    image: "images/AIpost.avif",
    date: "2025-02-16",
    content:
      "AI is revolutionizing industries and changing the way we live. This post explores the breakthroughs in AI and how it is transforming our world.",
  },
  {
    id: 2,
    title: "How Blockchain is Changing the World",
    image: "images/Blockage.avif", // Fixed image name
    date: "2025-01-10",
    content:
      "Blockchain technology is disrupting industries from finance to healthcare. Discover how it is changing the landscape of data security.",
  },
  {
    id: 3,
    title: "The Future of 5G Technology",
    image: "images/5Gpost.avif",
    date: "2024-12-05",
    content:
      "5G promises to revolutionize connectivity. This post dives into what 5G technology means for the future of the internet and smart devices.",
  },
  {
    id: 4,
    title: "Building an API: A Beginner's Guide",
    image: "images/BuildingAPI.jpg",
    date: "2024-11-25",
    content:
      "In this post, we break down the process of building a RESTful API using Node.js and Express. Perfect for beginners.",
  },
  {
    id: 5,
    title: "Securing an API: Best Practices",
    image: "images/SecuringAPI.jpg",
    date: "2025-02-20",
    content:
      "API security is crucial in modern development. This post covers authentication methods, rate limiting, encryption, and best practices for securing your API from cyber threats.",
  },
  {
    id: 6,
    title: "Understanding JSON Web Tokens (JWT)",
    image: "images/JWTTokens.jpg",
    date: "2025-02-23",
    content:
      "JSON Web Tokens (JWT) are a compact, URL-safe way of representing claims between two parties. This article explains how JWTs work & how they enhance security in authentication.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get("id"), 10);

  const post = posts.find((p) => p.id === postId);

  if (post) {
    document.getElementById("post-title").textContent = post.title;
    document.getElementById("post-date-text").textContent = post.date;

    const postImage = document.getElementById("post-image");
    if (postImage) {
      postImage.src = post.image;
      postImage.alt = post.title;
    }

    document.getElementById("post-content").textContent = post.content;
  } else {
    document.querySelector(".post-details").innerHTML =
      "<p>Post not found.</p>";
  }
});
