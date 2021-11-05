const socket = io('https://socketio-realtime-chat.herokuapp.com/');

socket.on('message', text => {
    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el);
});

document.querySelector('button').onclick = () => {
    const name = document.getElementById('name').value;
    const text = document.getElementById('message').value;
    document.getElementById('message').value ="";
    socket.emit('message', name, text);
}

function enterkey() {
    if (window.event.keyCode == 13) {
        const name = document.getElementById('name').value;
        const text = document.getElementById('message').value;
        document.getElementById('message').value ="";
        socket.emit('message', name, text);
    }
}
