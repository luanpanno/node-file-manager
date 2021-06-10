import fs from 'fs';
import prompt from 'prompt-sync';

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

function main(): void {
  showIntro();

  const name = prompt()('File name: ');

  if (!name) {
    console.error('\nError: Name is required.\n');

    return;
  }

  const content = prompt()('Content: ');

  createTextFile(name, content);
}

main();
