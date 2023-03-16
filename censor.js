var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];

function censor(instr)
  {
   for (idx in censoredWords)
     {
       instr = instr.replaceAll(censoredWords[idx], "***"); 
     }
   for (idx in customCensoredWords) 
     {
        instr = instr.replaceAll(customCensoredWords[idx], "****"); 
     }
   return instr;
  }


function addCensoredWord(word)
  {
    customCensoredWords.push(word);
  }


function getCensoredWords()
  {
     return censoredWords.concat(customCensoredWords);
  }

console.log(censor("How sad and bad to hear the mad man being sad"));
console.log(censor("hear the mad man being sad"));

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
