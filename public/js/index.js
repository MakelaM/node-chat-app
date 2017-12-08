var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');

    // socket.emit('createEmail', {
    //     to: "jukka@emample.com",
    //     text: "Moikka"
    // })

    socket.on('newMessage', (message) => {
        console.log('newMessage', message);
    });
});

socket.on('disconnect', () => {
    console.log('Disconnected from the server');
});

socket.on('newEmail', function (email) {
    console.log('New email', email);
});