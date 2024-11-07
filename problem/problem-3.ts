{
  function countWordOccurrences(sentence: string, word: string): number {
    const lowerCaseSentence = sentence.toLowerCase().replace(/[^\w\s]/g, "");
    const lowerCaseWord = word.toLowerCase();

    const words = lowerCaseSentence.split(" ");
    const occurrences = words.filter((w) => w === lowerCaseWord).length;

    return occurrences;
  }

  console.log(
    countWordOccurrences(
      "TypeScript is great. I love TypeScript!",
      "typescript"
    )
  );
}
