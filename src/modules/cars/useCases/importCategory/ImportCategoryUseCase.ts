import fs from "fs";
import { parse } from "csv-parse";

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createWriteStream(file.path)
    const parseFile = parse();
    stream.pipe(parseFile)
    parseFile.on("data", async (line) => {
      console.log(line);
    })
  }
}

export { ImportCategoryUseCase };