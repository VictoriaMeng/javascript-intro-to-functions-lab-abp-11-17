function whisper(string) {
  return string.toLowerCase()
}


function sayHiToGrandma(string) {
  if (string === whisper(string)) {
    return "I can't hear you!";
  };
}

sayHiToGrandma("hi")
