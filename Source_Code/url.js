let url;

if (window.location.hostname === 'localhost') {
    url = 'http://localhost:3000';
} else if (window.location.hostname === 'cropmate.onrender.com') {
    url = 'https://cropmate.onrender.com';
} else {
    // Default URL
    url = 'http://localhost:3000';
}

export default url;
