// Function to retrieve the current visitor count from localStorage
function getVisitorCount() {
// Check if the visitorCount key exists in localStorage
if(localStorage.getItem('visitorCount')) {
    // If it exists, return the value as an integer
    return parseInt(localStorage.getItem('visitorCount'));
} else {
    // If it doesn't exist, return 0
    return 0;
}
}

// Function to update the visitor count on the webpage and in localStorage
function updateVisitorCount(count) {
    // Update the content of the span element with the id 'visitorCount'
    document.getElementById('visitorCount').textContent = count;
    // Update the visitorCount key in localStorage with the new count
    localStorage.setItem('visitorCount', count);
}

// Function to increment the visitor count
function incrementVisitorCount() {
    // Retreive the current visitor count
    let count = getVisitorCount();
    // Increment the count by 1
    count++;
    // Update the visitor count on the webpage and in localStorage
    updateVisitorCount(count);
}

// Call the incrementVisitorCount function when the page loads
window.onload = function() {
    incrementVisitorCount();
};