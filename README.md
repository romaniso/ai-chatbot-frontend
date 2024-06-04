# AI Chatbot powered with ChatGPT

<p align="center">
   
</p>

## Overview

This short gif presents the main features of the app:

![Quick overview of the project](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeG1kczM3YWR4bXd5eXVsbXFncnFiemZ4dW5iYmYxZGZjYzAxYXpiZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sfDD088ymJcPnaESNJ/giphy.gif)

This repository implements a versatile AI chatbot powered by ChatGPT, offering two distinct frontend integration methods:

**Web Component Integration**: Seamlessly embed the chatbot functionality directly within your webpages using a script tag. This approach provides tight control over the chatbot's appearance and behavior within your existing application.

**iFrame Integration**: Utilize an iFrame to embed the chatbot as a self-contained unit. This method offers a simpler integration process and is well-suited for scenarios where you want to keep the chatbot's styling and behavior independent.

## Frontend

### Technology Stack:

- Vanilla JavaScript (JS): Provides the core functionality for the chatbot's interactive elements and logic.

- CSS: Manages the visual presentation of the chatbot, including its styling and layout.

### Branch Structure:

The project is divided into **two main branches**, each catering to a specific frontend integration style:

- **component-approach**: This branch focuses on the web component approach, providing the necessary code to embed the chatbot as a custom web component within your webpages. [link to the branch](https://github.com/romaniso/ai-chatbot-frontend/tree/component-approach).

- **iframe-approach**: This branch houses the code for the iFrame integration, allowing you to embed the chatbot using an iFrame element.
  This structure facilitates a clear separation of concerns and simplifies the integration process for your chosen approach. [link to the branch](https://github.com/romaniso/ai-chatbot-frontend/tree/iframe-approach)

## Backend

[You can find the repo of the backend here](https://github.com/romaniso/ai-chatbot).

### Technology Stack:

Node.js with Express.js

### Functionality:

- Acts as a lightweight microservice.
- Handles incoming requests from the frontend.
- Utilizes Express.js for efficient request routing and handling.
- Interacts with the OpenAI API to send user messages to ChatGPT for processing.
- Manages conversation context by storing past messages with cookies.
- Returns the generated response from ChatGPT to the frontend.

## Check out

**Add script tag at the end of the body tag of a existing webpage**

```
<script defer src="https://temp.staticsave.com/665ee62aefa8d.js"></script>
```

**Or add iframe tag at the end of the body tag of a existing webpage**

```
<iframe
      id="chatbox"
      src="https://ai-chatbot-iframe.onrender.com"
      frameborder="0"
      width="100%"
      style="
        height: 100%;
        min-height: 700px;
        position: fixed;
        right: 0px;
        bottom: 0px;
      "
></iframe>
```

## Authors

- [@romaniso](https://www.github.com/romaniso)

## License

**MIT**: [For more information](https://en.wikipedia.org/wiki/MIT_License).
