import CliTable from "cli-table3";
export declare class Table extends CliTable {
    constructor(opts: object);
    /**
     * Calculate the terms width.
     */
    static termsWidth(...values: number[]): number;
}
export declare class DefaultTable extends Table {
    constructor(termLength?: number);
}
