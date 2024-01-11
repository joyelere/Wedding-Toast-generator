document.getElementById('toastForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    const brideName = document.getElementById('brideName').value;
    const groomName = document.getElementById('groomName').value;
    const relationship = document.getElementById('relationship').value;

    try {
        const response = await fetch('/generate-toast', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ brideName, groomName, relationship }),
        });

        const data = await response.json();

        // Check if the 'toast' property exists in the response
        if ('toast' in data) {
            // Hide the form
            document.getElementById('toastForm').style.display = 'none';

            // Display the generated toast
            const generatedToastDiv = document.getElementById('generatedToast');
            generatedToastDiv.style.display = 'block';
            generatedToastDiv.innerText = data.toast;

            // Display the back button
            const backButton = document.getElementById('backButton');
            backButton.style.display = 'block';
            backButton.addEventListener('click', function () {
                // Show the form again and hide the generated toast and back button
                document.getElementById('toastForm').style.display = 'block';
                generatedToastDiv.style.display = 'none';
                backButton.style.display = 'none';
            });
        } else {
            console.error('Unexpected response format:', data);
            alert('Error generating toast. Please try again.');
        }
    } catch (error) {
        console.error(error);
        alert('Error generating toast. Please try again.');
    }
});
