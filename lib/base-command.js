export class BaseCommand {
    constructor(command) {
        var _a;
        this.opts = {};
        this.args = {};
        this.name = command.name;
        this.alias = (_a = command.alias) !== null && _a !== void 0 ? _a : [];
        this.description = command.description;
        this.summary = command.summary;
        this.arguments = command.arguments;
        this.options = command.options;
    }
}
