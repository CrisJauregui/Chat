document.getElementById('formUser1').addEventListener('submit', function(e) {
    e.preventDefault(); 
    sendMessage('user1');
});

document.getElementById('formUser2').addEventListener('submit', function(e) {
    e.preventDefault(); 
    sendMessage('user2');
});

function sendMessage(user) {
    const input = user === 'user1' ? document.getElementById('messageInput1') : document.getElementById('messageInput2');
    const messageText = input.value.trim();

  
    if (messageText === "") {
        return;
    }

    const chatWindow = document.getElementById('chat-window');

    const message = document.createElement('div');
    message.classList.add('message', user); 
    message.textContent = messageText;

    chatWindow.appendChild(message);

    chatWindow.scrollTop = chatWindow.scrollHeight;

    input.value = '';
}

