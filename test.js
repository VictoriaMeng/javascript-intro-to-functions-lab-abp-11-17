function whisper(string) {
  return string.toLowerCase()
}


function sayHiToGrandma(string) {
  if (string === whisper(string)) {
    console.log("I can't hear you!");
  };
}

sayHiToGrandma("hi")
