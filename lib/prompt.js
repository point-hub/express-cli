import prompts from "prompts";
export class Prompt {
    static async ask(questions, options) {
        return prompts(questions, options);
    }
}
