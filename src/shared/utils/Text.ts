export class Text {
  static getCharacterAtPosition(text: string, position: number) {
    return text.charAt(position);
  }

  static getFirstCharacter(text: string) {
    return Text.getCharacterAtPosition(text, 0);
  }

  static upperCase(text: string) {
    return text.toUpperCase();
  }
}
