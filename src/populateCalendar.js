import { projectArray, taskArray } from "./getTask";

export function generateCalendar() {
    const calendar = document.getElementById('calendar');
    // month name
    const monthText = document.getElementById('monthName');
    const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    calendar.innerHTML = ''; // Clear any existing content

    // Array of days of the week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Add the days of the week header
    daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.classList.add('day-header');
        dayHeader.textContent = day;
        calendar.appendChild(dayHeader);
    });
    
    // Get today's date and other relevant details
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const currentDate = today.getDate();

    // set calendar month to current month
    monthText.textContent = monthNames[currentMonth];
    
    // Determine the first day of the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startDay = firstDayOfMonth.getDay();
    
    // Total number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Loop through and create the calendar days
    for (let i = 0; i < 35; i++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('calendar-day');

        // Calculate the day number for the calendar grid
        const dayNumber = i - startDay + 1;
        
        if (dayNumber > 0 && dayNumber <= daysInMonth) {
            dayCell.textContent = dayNumber;

            // Format date string for matching (e.g., "2024-11-07")
            const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(dayNumber).padStart(2, '0')}`;
            dayCell.setAttribute('data-date', dateStr);

            // Highlight today’s date
            if (dayNumber === currentDate) {
                dayCell.classList.add('today');
            }

            // Check for matching projects and tasks and display them
            projectArray.forEach(project => {
                if (project.date === dateStr) {
                    const projectName = document.createElement('span');
                    projectName.classList.add('project-name');
                    projectName.textContent = `- ${project.name}`;
                    dayCell.appendChild(projectName);
                }
            });

            taskArray.forEach(task => {
                if (task.date === dateStr) {
                    const taskName = document.createElement('span');
                    taskName.classList.add('task-name');
                    taskName.textContent = `- ${task.name}`;
                    dayCell.appendChild(taskName);
                }
            });
        } else {
            dayCell.textContent = ''; // Leave cells empty if they fall outside the current month
        }

        calendar.appendChild(dayCell);
    }
}
