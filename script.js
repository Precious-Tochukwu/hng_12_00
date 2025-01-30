function updateDate() {
        const dateElement = document.getElementById('date');
        const currentDate = new Date().toLocaleDateString();
        dateElement.textContent = currentDate;
    }
    function updateTime() {
        const timeElement = document.getElementById('currentTime');
        const currentTime = new Date().toUTCString();
        timeElement.textContent = `Current UTC Time: ${currentTime}`;
    }
    updateDate(); // Initialize with current date
    updateTime();
    setInterval(updateTime, 1000); // Update time every second