console.log('Hello World!');

const ownerName = 'Becky Sue';

function showGreeting(name) { 
    return `Hello, my name is ${name}! Welcome to my portfolio!`;
}

document.getElementById('greeting-message').textContent = showGreeting(ownerName);

function daysUntilDeadline(deadline) {
    const today = new Date();
    // Parse the date in MM-DD-YYYY format
    const [month, day, year] = deadline.split('-');
    const targetDate = new Date(`${year}-${month}-${day}`);
    const timeDifference = targetDate - today;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysRemaining;
}

// Display the days remaining until the project's deadline
const deadlineDate = '12-31-2024';
document.getElementById('days-until-deadline').textContent = daysUntilDeadline(deadlineDate);
console.log(`Days until deadline: ${daysUntilDeadline(deadlineDate)}`);

let hasDownloadedResume = false;

document.getElementById('download-resume-btn').addEventListener('click', function () {
    if (!hasDownloadedResume) {
        alert('Your resume downloaded successfully!');
        hasDownloadedResume = true;
    }
});


