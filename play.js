// Snek Server IP: 135.23.223.133
// Snek Port: 50542

const net = require('net');

//establish connection
const connect = function (){
  const conn = net.createConnection({
  host: '135.23.223.133',
  port: 50542,
  });
  //interpret data 
  conn.setEncoding('utf-8');

  // connectListner to the server for response...
  conn.on('connect', () => {
    console.log(`${net.connect()}`);
  });
  
  return conn;
};
console.log('Connecting...');
connect();

