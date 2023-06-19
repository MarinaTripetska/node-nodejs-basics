const parseEnv = () => {
  Object.keys(process.env)
    .filter((key) => key.startsWith("RSS_"))
    .forEach((key) => console.log(`${key}=${process.env[key]}`));
};

parseEnv();
