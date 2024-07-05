function checkPerson() {
    let inputField = document.getElementById("name");
    let inputValue = inputField.value.trim();
    
    // Regular expression to validate a Facebook profile URL
    let fbUrlPattern = new RegExp('^(https?:\\/\\/)?(www\\.)?facebook\\.com\\/[a-zA-Z0-9\\/.]+$');

    if (inputValue === "") {
        alert("The input field cannot be empty. Please enter a link.");
        return;
    }

    if (!fbUrlPattern.test(inputValue)) {
        alert("Please enter a valid Facebook profile link (e.g., https://facebook.com/username).");
        return;
    }

    // Extracting username or user ID from the input value
    let fbUserID = inputValue.split("facebook.com/")[1];

    // Constructing the URL for the profile picture
    let fbProfilePicURL = `https://graph.facebook.com/${fbUserID}/picture?type=large`;

    // Setting the src attribute of the img tag to the profile picture URL
    document.getElementById("fbProfilePic").src = fbProfilePicURL;

    let number = document.getElementById("number");
    let circle = document.querySelector("circle");
    let randomValue = Math.floor(Math.random() * 101); // Generate random value between 0 and 100

    document.getElementById("output").style.display = "block"; // Show the output section

    let counter = 0;
    let dasharray = 439.82;
    let interval = setInterval(() => {
        if (counter >= randomValue) {
            clearInterval(interval);
        } else {
            counter += 1;
            number.innerHTML = counter + "%";
            circle.style.strokeDashoffset = dasharray * (1 - (counter / 100));
        }
    }, 30);

    number.innerHTML = randomValue + "%"; // Display the random value initially
}
