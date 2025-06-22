HTMLButtonElement.prototype.addEventListener('click', function() {
    const button = this;
    const originalText = button.textContent;
    button.textContent = 'Loading...';
    
    // Simulate a network request or some processing
    setTimeout(() => {
        button.textContent = originalText;
        alert('Button clicked!');
    }, 2000);
});