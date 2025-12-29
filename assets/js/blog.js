/**
 * blog.js
 * Static blog loader via index.json
 * Author: Alperen Erkan
 */

const BLOG_INDEX_URL = "/assets/blogs/index.json";
const BLOGS_BASE_PATH = "/blogs/";

async function loadBlogIndex() {
  try {
    const response = await fetch(BLOG_INDEX_URL);
    if (!response.ok) throw new Error("Index fetch failed");

    const data = await response.json();
    return data.blogs || [];
  } catch (err) {
    console.error("[blog.js] Failed to load index.json", err);
    return [];
  }
}

function renderBlogs(blogs) {
  const container = document.getElementById("blog-list");
  if (!container) return;

  container.innerHTML = "";

  blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach(blog => {
      const card = document.createElement("article");
      card.className = "blog-card";

      card.innerHTML = `
        <h3>${blog.title}</h3>
        <p class="blog-date">${blog.date}</p>
        <p class="blog-summary">${blog.summary}</p>
        <div class="blog-tags">
          ${blog.tags.map(tag => `<span>#${tag}</span>`).join("")}
        </div>
        <a class="read-more" href="${BLOGS_BASE_PATH + blog.file}">
          Read →
        </a>
      `;

      container.appendChild(card);
    });

  console.info(`[blog.js] ${blogs.length} blog entries loaded`);
}

async function initBlog() {
  const blogs = await loadBlogIndex();
  renderBlogs(blogs);
}

document.addEventListener("DOMContentLoaded", initBlog);
