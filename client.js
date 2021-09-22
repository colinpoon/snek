const net = require('net');

const connect = function (){
  const conn = net.createConnection({
  host: '135.23.223.133',
  port: 50542,
  });
  //interpret data 
  conn.setEncoding('utf-8');

  // connectListner to the server for response...
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });
  conn.on('end', () => {
    console.log('disconnect...');
  });
  
  return conn;
};
console.log('Connecting...');

// module.exports = connect;
module.exports = {
  connect
};