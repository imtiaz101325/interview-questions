export default function mapNumToWord(num, caps) {
  switch (num) {
    case 1:
      return caps ? "One" : "one";
    case 2:
      return caps ? "Two" : "two";
    case 3:
      return caps ? "Three" : "three";
    case 4:
      return caps ? "Four" : "four";
    default:
      return null;
  }
}