import { Command } from "commander";
export class BaseCommand extends Command {
    constructor(program) {
        var _a, _b, _c, _d;
        super();
        this.program = program;
        const command = this.program.command(this.attribute().name);
        command.description(this.attribute().description);
        command.summary(this.attribute().summary);
        for (let index = 0; index < this.attribute().arguments.length; index++) {
            command.argument(this.attribute().arguments[index].name, (_a = this.attribute().arguments[index]) === null || _a === void 0 ? void 0 : _a.description, (_b = this.attribute().arguments[index]) === null || _b === void 0 ? void 0 : _b.default);
        }
        for (let index = 0; index < this.attribute().options.length; index++) {
            command.option(this.attribute().options[index].flags, (_c = this.attribute().options[index]) === null || _c === void 0 ? void 0 : _c.description, (_d = this.attribute().options[index]) === null || _d === void 0 ? void 0 : _d.default);
        }
        command.action(this.handle);
    }
}
