import fs from 'fs';

import { input } from './helpers/prompt';

function showIntro(): void {
  console.clear();
  console.log('-----------------------');
  console.log('     File Manager');
  console.log('-----------------------\n');
}

function handleError(error: unknown): Error {
  console.error(error);

  throw new Error();
}

function fileCreate(error: unknown): void {
  if (error) handleError(error);

  console.log('\nFile created successfully.\n');
}

function createTextFile(name: string, content: string): void {
  fs.writeFile(`./src/files/${name}.txt`, content, fileCreate);
}

function createFile(): void {
  console.clear();
  console.log('CREATE FILE\n');

  const name = input('File name: ');

  if (!name) {
    console.error('\nError: Name is required.\n');

    return;
  }

  const content = input('Content: ');

  createTextFile(name, content);
}

function getMainOption(): void {
  console.log(
    'OPTIONS\n[1] Create File\n[2] Read File\n[3] Move File\n[4] Move All Files\n'
  );

  const option = input('Option: ');

  switch (Number(option)) {
    case 1:
      createFile();
      break;
    case 2:
      console.log('read file');
      break;
    case 3:
      console.log('move');
      break;
    case 4:
      console.log('move all');
      break;
    default:
      break;
  }
}

function main(): void {
  showIntro();

  getMainOption();
}

main();
