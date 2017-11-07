// Get posts from WordPress
export const fetchPosts = () =>
  fetch('http://54.175.208.171/wp-json/wp/v2/posts').then(data => data.json());
