import XLSX from "xlsx";

export function parse (filename: string) {
    const data = XLSX.readFile(filename);

    return Object.keys(data.Sheets).map((name) => ({
        name,
        data: XLSX.utils.sheet_to_json(data.Sheets[name])
    }))
}


