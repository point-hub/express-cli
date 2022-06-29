import chalk from "chalk";

export class Color {
  static grayHex = "#4b5563";
  static redHex = "#dc2626";
  static greenHex = "#16a34a";
  static blueHex = "#2563eb";
  static yellowHex = "#ca8a04";

  static red(text: string) {
    return chalk.hex(this.redHex)(text);
  }
  static green(text: string) {
    return chalk.hex(this.greenHex)(text);
  }
  static blue(text: string) {
    return chalk.hex(this.blueHex)(text);
  }
  static gray(text: string) {
    return chalk.hex(this.grayHex)(text);
  }
  static yellow(text: string) {
    return chalk.hex(this.yellowHex)(text);
  }
  static bgRed(text: string) {
    return chalk.bgHex(this.redHex)(text);
  }
  static bgGreen(text: string) {
    return chalk.bgHex(this.greenHex)(text);
  }
  static bgBlue(text: string) {
    return chalk.bgHex(this.blueHex)(text);
  }
  static bgGray(text: string) {
    return chalk.bgHex(this.grayHex)(text);
  }
  static bgYellow(text: string) {
    return chalk.bgHex(this.yellowHex)(text);
  }
  static hex(text: string) {
    return chalk.hex(text);
  }
  static bgHex(text: string) {
    return chalk.bgHex(text);
  }
}
