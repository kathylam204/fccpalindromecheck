document.getElementById("check-btn").addEventListener("click", function() {
    const textInput = document.getElementById("text-input").value.trim();
    const resultElement = document.getElementById("result");

    if (textInput === "") {
        alert("Please input a value");
        resultElement.textContent = "";
        return;
    }

    const processedInput = textInput.toLowerCase().replace(/[^a-z0-9]/g, "");
    const isPalindrome = processedInput === processedInput.split('').reverse().join('');

    if (isPalindrome) {
        resultElement.textContent = `${textInput} is a palindrome`;
    } else {
        resultElement.textContent = `${textInput} is not a palindrome`;
    }
});
