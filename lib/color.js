import chalk from "chalk";
export class Color {
    static red(text) {
        return chalk.hex(this.redHex)(text);
    }
    static green(text) {
        return chalk.hex(this.greenHex)(text);
    }
    static blue(text) {
        return chalk.hex(this.blueHex)(text);
    }
    static gray(text) {
        return chalk.hex(this.grayHex)(text);
    }
    static yellow(text) {
        return chalk.hex(this.yellowHex)(text);
    }
    static bgRed(text) {
        return chalk.bgHex(this.redHex)(text);
    }
    static bgGreen(text) {
        return chalk.bgHex(this.greenHex)(text);
    }
    static bgBlue(text) {
        return chalk.bgHex(this.blueHex)(text);
    }
    static bgGray(text) {
        return chalk.bgHex(this.grayHex)(text);
    }
    static bgYellow(text) {
        return chalk.bgHex(this.yellowHex)(text);
    }
    static hex(text) {
        return chalk.hex(text);
    }
    static bgHex(text) {
        return chalk.bgHex(text);
    }
}
Color.grayHex = "#4b5563";
Color.redHex = "#dc2626";
Color.greenHex = "#16a34a";
Color.blueHex = "#2563eb";
Color.yellowHex = "#ca8a04";
