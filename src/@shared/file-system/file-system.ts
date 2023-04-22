import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as xlsx from 'xlsx';

@Injectable()
export class FileSystem {
  public checkPathExists(path: string): void {
    try {
      fs.accessSync(path);
    } catch (err) {
      console.log(err);
      throw new Error(`File not found: ${path}`);
    }
  }

  public readFile(path: string): unknown[] {
    try {
      const workbook = xlsx.readFile(path);
      const sheet_name_list = workbook.SheetNames;
      const xlData = xlsx.utils.sheet_to_json(
        workbook.Sheets[sheet_name_list[0]],
      );
      return xlData;
    } catch (err) {
      console.log(err);
      throw new Error(`File not found: ${path}`);
    }
  }
}
