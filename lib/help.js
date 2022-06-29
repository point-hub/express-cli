import { Color } from "./color.js";
import { DefaultTable } from "./table.js";
export class Help {
    static rootHelp(command, options) {
        this.outputRoot += Color.yellow("USAGE");
        this.outputRoot += this.br();
        this.outputRoot += ` ${command.name} [options] <command>`;
        this.outputRoot += this.br();
        // Commands
        this.outputRoot += this.br();
        this.outputRoot += Color.yellow("COMMANDS");
        this.outputRoot += this.br();
        const termsLength = DefaultTable.termsWidth(Help.commandTermLength(command.getCommands()), Help.optionTermLength(options));
        const commandsTable = new DefaultTable(termsLength + this.separatorLength + Math.round(termsLength / 2));
        command.getCommands().forEach((el) => {
            commandsTable.push([Color.green(el.name), Color.gray(el.summary)]);
        });
        this.outputRoot += commandsTable.toString();
        this.outputRoot += this.br();
        // Options
        const optionsTable = new DefaultTable(termsLength + this.separatorLength + Math.round(termsLength / 2));
        this.outputRoot += this.br();
        this.outputRoot += Color.yellow("OPTIONS");
        this.outputRoot += this.br();
        options.forEach((el) => {
            let term = Color.green(el.flag);
            if (el.type === "boolean" && el.shorthand) {
                term += `, ${Color.green(el.shorthand)}`;
            }
            if (el.type === "boolean") {
                optionsTable.push([term, Color.gray(el.description)]);
            }
        });
        this.outputRoot += optionsTable.toString();
        this.outputRoot += this.br();
        // Print output
        console.log(this.outputRoot);
    }
    static commandHelp(command, currentCommand) {
        // Usage
        this.output += Color.yellow("USAGE");
        this.output += this.br();
        this.output += ` ${command.name} ${currentCommand.name}`;
        if (currentCommand.options.length) {
            this.output += ` [options]`;
        }
        currentCommand.arguments.forEach((el) => {
            this.output += ` <${el.name}>`;
        });
        this.output += this.br();
        // Arguments
        this.output += this.br();
        this.output += Color.yellow("ARGUMENTS");
        this.output += this.br();
        const termsLength = DefaultTable.termsWidth(Help.argumentTermLength(currentCommand.arguments), Help.optionTermLength(currentCommand.options));
        const argumentsTable = new DefaultTable(termsLength + this.separatorLength + Math.round(termsLength / 2));
        currentCommand.arguments.forEach((el) => {
            argumentsTable.push([Color.green(el.name), Color.gray(el.description)]);
        });
        this.output += argumentsTable.toString();
        this.output += this.br();
        // Options
        this.output += this.br();
        this.output += Color.yellow("OPTIONS");
        this.output += this.br();
        const optionsTable = new DefaultTable(termsLength + this.separatorLength + Math.round(termsLength / 2));
        currentCommand.options.forEach((el) => {
            let term = Color.green(el.flag);
            if (el.type === "boolean" && el.shorthand) {
                term += `, ${Color.green(el.shorthand)}`;
            }
            if (el.type === "boolean") {
                optionsTable.push([term, Color.gray(el.description)]);
            }
        });
        this.output += optionsTable.toString();
        this.output += this.br();
        // Alias
        if (currentCommand.alias.length) {
            this.output += this.br();
            this.output += Color.yellow("ALIAS");
            this.output += this.br();
            this.output += ` ${Color.green(currentCommand.alias.join(","))}`;
        }
        // Print output
        console.log(this.output);
    }
    /**
     * Break line symbol
     */
    static br(count = 1) {
        let br = "";
        for (let i = 0; i < count; i++) {
            br += "\n";
        }
        return br;
    }
    /**
     * Get the longest commands name length
     */
    static commandTermLength(commands) {
        return commands.reduce((max, term) => {
            return Math.max(max, term.name.length);
        }, 0);
    }
    /**
     * Get the longest command options length
     */
    static optionTermLength(options) {
        return options.reduce((max, option) => {
            return Math.max(max, option.flag.length);
        }, 0);
    }
    /**
     * Get the longest command arguments length
     */
    static argumentTermLength(args) {
        return args.reduce((max, arg) => {
            return Math.max(max, arg.name.length);
        }, 0);
    }
}
Help.separatorLength = 10;
Help.outputRoot = "";
Help.output = "";
