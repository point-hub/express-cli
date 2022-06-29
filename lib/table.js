import CliTable from "cli-table3";
export class Table extends CliTable {
    constructor(opts) {
        super(opts);
    }
    /**
     * Calculate the terms width.
     */
    static termsWidth(...values) {
        return Math.max(...values);
    }
}
export class DefaultTable extends Table {
    constructor(termLength = 30) {
        super({
            colWidths: [termLength, process.stdout.columns - termLength],
            wordWrap: true,
            chars: {
                top: "",
                "top-mid": "",
                "top-left": "",
                "top-right": "",
                bottom: "",
                "bottom-mid": "",
                "bottom-left": "",
                "bottom-right": "",
                left: "",
                "left-mid": "",
                mid: "",
                "mid-mid": "",
                right: "",
                "right-mid": "",
                middle: "",
            },
        });
    }
}
