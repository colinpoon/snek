const net = require('net');
const { IP, PORT } = require('./constants');

//establishing Connection with server & communicate on connection
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT,
  });
  //interpret data
  conn.setEncoding('utf-8');

  //print message when connection established
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: CPP");
    // const arr = ["Move: right", "Move: up", "Move: left"]
    //  let i = 0;
    // setInterval(() => {
    //   conn.write(arr[i]);
    //   i = (i + 1) % arr.length;
    // }, 200);
  });

  // connectListner to the server for response...
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  // reponse on disconnect
  conn.on('end', () => {
    console.log('disconnect...');
  });
  
  return conn;
};

// module.exports = connect;
module.exports = {
  connect
};