// document.addEventListener("DOMContentLoaded", () => {
//     const tiltBox = document.querySelector(".wrapper");

//     tiltBox.addEventListener("mousemove", (e) => {
//         const { width, height, left, top } = tiltBox.getBoundingClientRect();
//         const x = (e.clientX - left) / width - 0.5;
//         const y = (e.clientY - top) / height - 0.5;

//         tiltBox.style.transform = `rotateY(${x * 30}deg) rotateX(${-y * 30}deg)`;
//     });

//     tiltBox.addEventListener("mouseleave", () => {
//         tiltBox.style.transform = "rotateY(0deg) rotateX(0deg)";
//     });
// });

function updateTime() {
    const timeElement = document.getElementById('currentTime');
    const currentTime = new Date().toUTCString();
    timeElement.textContent = `Current UTC Time: ${currentTime}`;
}

function updateDate() {
        const dateElement = document.getElementById('date');
        const currentDate = new Date().toLocaleDateString();
        dateElement.textContent = currentDate;
    }
    
    updateTime();
    // function updateTime() {
    //     const timeElement = document.getElementById('currentTime');
    //     const currentTime = new Date().toUTCString();
    //     timeElement.textContent = `Current UTC Time: ${currentTime}`;
    // }
    // updateDate(); // Initialize with current date
    
    setInterval(updateTime, 1000); // Update time every second