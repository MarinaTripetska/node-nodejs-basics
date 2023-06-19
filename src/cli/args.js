const parseArgs = () => {
  const argv = process.argv.slice(2);

  for (let i = 0; i < argv.length; i += 2) {
    console.log(`${argv[i].slice(2)} is ${argv[i + 1]}`);
  }
};

parseArgs();
