import { red, green, blue, gray, yellow, bgRed, bgGreen, bgBlue, bgYellow } from "colorette";

export class Color {
  static red(text: string) {
    return red(text);
  }
  static green(text: string) {
    return green(text);
  }
  static blue(text: string) {
    return blue(text);
  }
  static gray(text: string) {
    return gray(text);
  }
  static yellow(text: string) {
    return yellow(text);
  }
  static bgRed(text: string) {
    return bgRed(text);
  }
  static bgGreen(text: string) {
    return bgGreen(text);
  }
  static bgBlue(text: string) {
    return bgBlue(text);
  }
  static bgYellow(text: string) {
    return bgYellow(text);
  }
}
