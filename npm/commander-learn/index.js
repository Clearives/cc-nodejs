var program = require("commander");
var shell = require("shelljs");

program
  .version("1.0.0", "-v, --version")
  .description('a test cli program')
  .command('pwd <dir>')
  // .option('-p, --recursive', 'Remove recursively')
  .action(function (dir) {
    console.log(dir)
    shell.exec('pwd')
  })
  

  program.parse(process.argv);
