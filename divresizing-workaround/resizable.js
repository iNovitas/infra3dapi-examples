// Select the resizable div and the resize handle
const resizable = document.getElementById('resizable');
const resizeHandle = document.querySelector('.resize-handle');

// Variables to store initial mouse and div dimensions
let isResizing = false;
let initialWidth, initialHeight, initialMouseX, initialMouseY;

resizeHandle.addEventListener('mousedown', (e) => {
    isResizing = true;

    // Capture the initial width, height, and mouse position
    initialWidth = resizable.offsetWidth;
    initialHeight = resizable.offsetHeight;
    initialMouseX = e.clientX;
    initialMouseY = e.clientY;

    // Prevent default behavior to avoid selecting text while resizing
    e.preventDefault();
});

// Mouse move event to resize the div
document.addEventListener('mousemove', (e) => {
    if (isResizing) {
        // Calculate the new width and height
        const newWidth = initialWidth + (e.clientX - initialMouseX);
        const newHeight = initialHeight + (e.clientY - initialMouseY);

        // Set the new size of the resizable div
        resizable.style.width = newWidth + 'px';
        resizable.style.height = newHeight + 'px';
    }
});

// Stop resizing on mouse up
document.addEventListener('mouseup', () => {
    isResizing = false;
});
