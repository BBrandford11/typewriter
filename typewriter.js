const sentence = "hello there from lighthouse labs";
let timer = 1000;
const sentence2 = sentence + "\n"

for (const char of sentence2) {
  //process.stdout.write(char)
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 50;
}

