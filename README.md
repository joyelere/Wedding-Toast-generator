# Wedding Toast Generator

A simple web-based Wedding Toast Generator that leverages OpenAI's GPT-3.5 Turbo for creative and personalized wedding toasts.

## Features
- User-friendly interface to input details such as the bride's name, groom's name, and relationship to the couple.
- Generates a unique wedding toast using OpenAI's powerful GPT-3.5 Turbo model.
- Responsive design for a seamless experience on various devices.

## Screenshots

### Form
<p align="center">
  <img src="https://github.com/joyelere/Wedding-Toast-generator/blob/main/img/Screenshot%20(148).png?raw=true">
</p>

### Generated Toast
<p align="center">
  <img src="https://github.com/joyelere/Wedding-Toast-generator/blob/main/img/Screenshot%20(149).png?raw=true">
</p>


## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/wedding-toast-generator.git
   
2. **Set Up Your OpenAI API Key**:
   - Go to [OpenAI's platform](https://platform.openai.com/signup).
   - Sign up for an account and obtain your API key.
   - Replace `YOUR_API_KEY` in the `app.js` file with your actual API key:
     
     ```bash
     const openai = new OpenAI({ apiKey: 'YOUR_API_KEY' });
     
3. Install Dependencies:
    ```bash
    npm install
    
4. Run the Application:
    ```bash
    npm start
    
   Open your web browser and navigate to http://localhost:3000/

5. Enter the required details and click "Generate Toast."

6. The generated toast will be displayed.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.









