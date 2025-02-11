// Data for posts
const posts = [
  {
    id: 1,
    title: "The Rise of AI in 2025",
    content:
      "Artificial Intelligence (AI) is expected to revolutionize multiple sectors by 2025, from healthcare to autonomous vehicles. AI is already enhancing industries by automating repetitive tasks, increasing efficiency, and helping us make more data-driven decisions. In healthcare, AI-driven systems can analyze medical images faster than human radiologists, saving time and lives. Meanwhile, self-driving cars are poised to make roads safer and more efficient, though they come with their own set of challenges regarding safety and ethics. As AI continues to evolve, it will undoubtedly transform how we work, live, and interact with the world.",
    date: "2025-02-10",
  },
  {
    id: 2,
    title: "The Future of Quantum Computing",
    content:
      "Quantum computing is another technology that is expected to change the world by 2025. Unlike traditional computers that process information in binary (0s and 1s), quantum computers use quantum bits or qubits. This allows quantum computers to solve complex problems much faster than classical computers, especially in areas like cryptography and materials science. While quantum computers are still in their infancy, companies and governments are investing heavily to make quantum computing a reality. The impact of this technology could range from breakthroughs in medicine to more secure encryption methods for online transactions.",
    date: "2025-02-09",
  },
  {
    id: 3,
    title: "5G: The Next Generation of Connectivity",
    content:
      "The rollout of 5G networks is expected to have a massive impact on the world by 2025. 5G offers faster internet speeds, lower latency, and the ability to connect more devices simultaneously. This technology will enable innovations in the Internet of Things (IoT), smart cities, and augmented reality (AR). With 5G, we can expect more reliable connections in rural areas, improved remote working experiences, and advancements in healthcare, such as remote surgeries performed in real-time. However, the deployment of 5G also raises concerns about security and privacy, as more connected devices could lead to potential vulnerabilities.",
    date: "2025-02-08",
  },
];

// Function to populate the posts on the homepage
function loadPosts() {
  const postsContainer = document.querySelector(".posts");
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content.slice(0, 150)}...</p>
        <span>${post.date}</span>
        <a href="post.html?id=${post.id}">Read more</a>
      `;
    postsContainer.appendChild(postElement);
  });
}

// Function to load the full post on the post page
function loadPostDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get("id"));
  const post = posts.find((p) => p.id === postId);

  if (post) {
    document.querySelector(".post-details").innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <span>${post.date}</span>
        <nav>
          <a href="index.html">Back to Home</a>
        </nav>
      `;
  }
}

// Call the loadPosts function if on the homepage
if (document.querySelector(".posts")) {
  loadPosts();
}

// Call the loadPostDetails function if on a post detail page
if (document.querySelector(".post-details")) {
  loadPostDetails();
}
