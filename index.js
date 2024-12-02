
// 1) Introduction with name
function introduction(name) {
  return `Hi, my name is ${name}.`;
}

// 2) Introduction with name and language
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// 3) Introduction with name and optional language (default to JavaScript)
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
