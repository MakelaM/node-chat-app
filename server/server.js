const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    // socket.emit('newEmail', {
    //     from: 'mika@example.com',
    //     text: "Whats up?",
    //     createAt: "123"
    // });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });
    socket.emit('welcomeMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app!',
        createAt: new Date().getTime()
    });
    
    // socket.broadcast.emit('newUser', {
    //     from: 'Admin',        
    //     text: 'User joined!',
    //     createAt: new Date().getTime()
    // });

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));
    
    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server');
});

socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
})

    socket.on('disconnect', function () {
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});