// js/script.js
const posts = [
  {
    id: 1,
    title: "The Rise of AI in 2025",
    content:
      "Artificial Intelligence is transforming industries in 2025. From healthcare to finance, AI is making things smarter, faster, and more efficient. In this post, we explore how AI is reshaping the world, its challenges, and the opportunities it brings for the future.",
    date: "2025-02-10",
  },
  {
    id: 2,
    title: "The Future of Quantum Computing",
    content:
      "Quantum computing promises to revolutionize industries. Unlike traditional computers, quantum computers use quantum bits that can perform complex calculations at speeds unimaginable with current technology. The possibilities for faster computing, drug development, and cryptography are immense.",
    date: "2025-02-08",
  },
  {
    id: 3,
    title: "5G: The Next Generation of Connectivity",
    content:
      "5G networks are rolling out globally, offering faster internet speeds, lower latency, and greater connectivity. As the backbone of the Internet of Things (IoT), 5G will drive innovation across industries, from autonomous vehicles to smart cities. But how soon will 5G become widely available, and how will it affect our daily lives?",
    date: "2025-02-05",
  },
];

// Displays the post based on URL parameter (post id)
const postId = new URLSearchParams(window.location.search).get("id");

const post = posts.find((p) => p.id === parseInt(postId));

if (post) {
  document.getElementById("post-container").innerHTML = `
        <article>
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p><strong>Published on:</strong> ${post.date}</p>
        </article>
    `;
}
