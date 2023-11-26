function login() {
    var username = document.getElementById('username').value;

    if (username.trim() !== '') {
        // Save the current user to localStorage
        localStorage.setItem('currentUser', username);

        // Update UI
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('microblog-container').style.display = 'block';
        document.getElementById('current-user').textContent = username;

        // Load posts
        loadPosts();
    } else {
        alert('Please enter a username');
    }
}

function logout() {
    // Clear the current user from localStorage
    localStorage.removeItem('currentUser');

    // Update UI
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('microblog-container').style.display = 'none';

    // Clear posts
    clearPosts();
}

function post() {
    var postContent = document.getElementById('post-content').value;

    if (postContent.trim() !== '') {
        // Create a new post element
        var postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.textContent = postContent;

        // Append the post to the posts container
        document.getElementById('posts-container').appendChild(postElement);

        // Save posts to localStorage
        savePosts();

        // Clear the post content
        document.getElementById('post-content').value = '';
    }
}

function savePosts() {
    var postsContainer = document.getElementById('posts-container').innerHTML;
    localStorage.setItem('posts', postsContainer);
}

function loadPosts() {
    var postsContainer = localStorage.getItem('posts');
    if (postsContainer) {
        document.getElementById('posts-container').innerHTML = postsContainer;
    }
}

function clearPosts() {
    localStorage.removeItem('posts');
    document.getElementById('posts-container').innerHTML = '';
}

// Check if the user is already logged in
var currentUser = localStorage.getItem('currentUser');
if (currentUser) {
    // Auto-login if the user is already logged in
    login();
}
