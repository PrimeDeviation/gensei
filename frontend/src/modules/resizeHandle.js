export function initializeResizeHandle() {
    const resizeHandle = document.getElementById('resize-handle');
    if (resizeHandle) {  // Ensure the element is not null
        resizeHandle.addEventListener('mousedown', (event) => {
            document.addEventListener('mousemove', resize);
            document.addEventListener('mouseup', stopResize);
        });

        function resize(event) {
            // Your resize logic here
        }

        function stopResize() {
            document.removeEventListener('mousemove', resize);
            document.removeEventListener('mouseup', stopResize);
        }
    } else {
        console.error('Element with ID "resize-handle" not found.');
    }
}