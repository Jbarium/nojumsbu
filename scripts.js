async function renderContent() {
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get('page') || 'about';

  console.log('Fetching content for page:', page);

  try {
    const filePath = `content/${page}.md`;
    console.log('File path:', filePath);

    const content = await fetchMarkdownContent(filePath);
    console.log('Content fetched:', content);

    document.querySelector('#content').innerHTML = marked(content);
  } catch (error) {
    console.error('Error fetching content:', error);
    document.querySelector('#content').innerHTML = '<p>Content not found.</p>';
  }
}
