const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === '\u0077') {
    // stdout.write('HELLO');
    connection.write("Move: up");
  }
  if (key === '\u0061') {
    connection.write("Move: left");
  }
  if (key === '\u0073') {
    connection.write("Move: down");
  }
  if (key === '\u0064') {
    connection.write("Move: right");
  }
  if (key === '\u0078') {
    connection.write("Say: zoom zoom");
  }
};

let connection;

// connect();

module.exports = {
  setupInput
};

/*

w = U+0077  \u0077

a = U+0061  \u0061

s = U+0073  \u0073

d = U+0064  \u0064

*/