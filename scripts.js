// Function to fetch content from Markdown files
async function fetchMarkdownContent(filePath) {
  const response = await fetch(filePath);
  const content = await response.text();
  return content;
}

// Function to render content in the main section
async function renderContent(page) {
  try {
    let content;
    if (page === 'transparency') {
      content = await fetchMarkdownContent('../content/transparencypolicy.md');
    } else {
      content = await fetchMarkdownContent(`../content/${page}.md`);
    }

    document.querySelector('#content').innerHTML = marked(content);
  } catch (error) {
    document.querySelector('#content').innerHTML = '<p>Content not found.</p>';
  }
}

// Function to handle click events on navigation links
function handleNavigationClick(event) {
  event.preventDefault();
  const page = event.target.dataset.page;
  renderContent(page);
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
  const navigationLinks = document.querySelectorAll('.navigation-link');
  navigationLinks.forEach(link => link.addEventListener('click', handleNavigationClick));

  // Default to rendering the 'about' page on initial load
  renderContent('about');
});
