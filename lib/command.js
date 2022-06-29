export class Command {
    constructor(name) {
        this.commands = [];
        this.name = name;
    }
    getCommands() {
        return this.commands.filter((el) => el.name !== "");
    }
    getCommand(name) {
        var _a;
        return (_a = this.commands.find((el) => el.name === name)) !== null && _a !== void 0 ? _a : this.commands.find((el) => el.alias.includes(name));
    }
    createCommand(cmd) {
        this.addHelpFlag(cmd);
        this.commands.push(cmd);
    }
    findDuplicate() {
        const seenCommands = new Set();
        const duplicateCommands = [];
        const duplicateArguments = [];
        const duplicateOptions = [];
        this.commands.forEach((el) => {
            // Duplicate commands
            if (seenCommands.size === seenCommands.add(el.name).size) {
                duplicateCommands.push(el.name);
            }
            // Duplicate arguments
            const args = [];
            const seenArguments = new Set();
            el.arguments.forEach((arg) => {
                if (seenArguments.size === seenArguments.add(arg.name).size) {
                    args.push(arg.name);
                }
            });
            if (args.length > 0) {
                duplicateArguments.push({
                    command: el.name,
                    arguments: args,
                });
            }
            // Duplicate options
            const opts = [];
            const seenOptions = new Set();
            el.options.forEach((option) => {
                if (seenOptions.size === seenOptions.add(option.flag).size) {
                    opts.push(option.flag);
                }
                if (option.type === "boolean" &&
                    option.shorthand &&
                    seenOptions.size === seenOptions.add(option.shorthand).size) {
                    opts.push(option.shorthand);
                }
            });
            if (opts.length > 0) {
                duplicateOptions.push({
                    command: el.name,
                    options: opts,
                });
            }
        });
        return {
            isDuplicate: duplicateCommands.length > 0 || duplicateArguments.length > 0 || duplicateOptions.length > 0,
            commands: duplicateCommands,
            arguments: duplicateArguments,
            options: duplicateOptions,
        };
    }
    addHelpFlag(cmd) {
        cmd.options.push({
            type: "boolean",
            flag: "--help",
            shorthand: "-h",
            description: "Display help",
        });
    }
}
