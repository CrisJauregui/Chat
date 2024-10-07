function sendMessage(user) {
    const chatBox = document.getElementById('chat-box');
    let message = '';
    
    if (user === 'user1') {
        message = document.getElementById('user1-message').value;
        if (message.trim() !== '') {
            const newMessage = `<div class="message user1-message">${message}</div>`;
            chatBox.innerHTML += newMessage;
            document.getElementById('user1-message').value = '';
        }
    } else if (user === 'user2') {
        message = document.getElementById('user2-message').value;
        if (message.trim() !== '') {
            const newMessage = `<div class="message user2-message">${message}</div>`;
            chatBox.innerHTML += newMessage;
            document.getElementById('user2-message').value = '';
        }
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}
