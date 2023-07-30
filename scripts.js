// Function to fetch content from Markdown files
async function fetchMarkdownContent(filePath) {
  const response = await fetch(filePath);
  const content = await response.text();
  return content;
}

// Function to render content in the main section
async function renderContent() {
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get('page') || 'about'; // Default to 'about' if the page parameter is not specified

  try {
    let content;
    if (page === 'transparency' || page === 'transparencypolicy') {
      content = await fetchMarkdownContent('content/transparencypolicy.md');
    } else {
      content = await fetchMarkdownContent('content/' + page + '.md');
    }

    document.querySelector('#content').innerHTML = marked(content);
  } catch (error) {
    document.querySelector('#content').innerHTML = '<p>Welcome! Hello world!</p>';
  }
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
  renderContent();
});
