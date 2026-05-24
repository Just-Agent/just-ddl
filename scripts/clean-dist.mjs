import fs from 'node:fs';
import path from 'node:path';

function removeTree(targetPath) {
  if (!fs.existsSync(targetPath)) return;
  const stat = fs.lstatSync(targetPath);
  if (!stat.isDirectory()) {
    fs.unlinkSync(targetPath);
    return;
  }

  for (const entry of fs.readdirSync(targetPath)) {
    removeTree(path.join(targetPath, entry));
  }
  fs.rmdirSync(targetPath);
}

removeTree(path.join(process.cwd(), 'dist'));
