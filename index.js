const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value; //getting the input from the goalInput from the html
    const goalList = document.querySelector('#goalList');//this line selects the html with an Id 'goalList' using the query selector method. it retrieves a reference to this element and stores it in the goalList.
    
    // Check if the goalInput is not empty
    if (goalInput === "") {
        alert("Input empty. Please enter a goal."); // Display an alert if the input is empty
        return; // Exit the function early
    }
    
    // ⚠️ Hint 1: Check for duplicates
    // Use 'goalList' to get all existing goals and check if 'goalInput' matches any of them.
    const existingGoals = goalList.querySelectorAll('li'); // Get all existing goals.
    for (const goal of existingGoals) {
        // ⚠️ Hint 3: Code structure
        // You might want to wrap the duplicate-checking logic in an 'if' statement.
        if (goal.textContent === goalInput) {
            alert("This Goal already exists."); // Display an alert if the goal already exists
            return; // Exit the function early
        }
    }
    
     // ⚠️ Hint 2: Prevent duplicates
    // If a duplicate is found, display an alert to the user and don't add the goal to the list.
    // If it's not a duplicate, proceed with adding it as a new goal.
    const newGoal = document.createElement('li'); //This line creates a new html list item ('li') element using the creatElement Method to create an empty list item and stores it in the new variable newGoal.
    newGoal.textContent = goalInput; // it assigns the value of goalInput (the user-entered goal) to the text content of the newly created <li> element (newGoal). This effectively displays the goal text inside the list item in the user interface.
    goalList.appendChild(newGoal); // this line appends a newly created list item (newGoal) to the 'goalList' unordered list element. it adds the 'newGoal' list item as a new item in the list of the fitness goals.

    
    // Clear the input field after adding the goal
    document.querySelector('#goalInput').value = ""; //this line ensures the input field is empty for the next goal entry after the form is submitted.
};


 // ⚠️ Hint 4: Event listener
    // The event listener that removes goals when clicked is not related to this issue.
document.querySelector('#submitGoal').addEventListener('click', addNewGoal); //this line adds an eventlistener to the button element for the submitGoal event. When the form is submitted the provided function is exicuted.


///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);