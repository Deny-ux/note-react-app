export function sliceSentence(sentence: string) {
  if (sentence.length > 10) {
    return `${sentence.slice(0, 15)}...`;
  }
  return sentence;
}
