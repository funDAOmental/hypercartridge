import type { Text64Node } from './Text64Node.ts';
import { renderTitle } from './components/title.ts';
import { renderCodeEditor } from './components/codeEditor.ts';
import { renderFileList } from './components/fileList.ts';

export default function main(t: number, [cx, cy]: [number, number]): Text64Node {
  return [
    // renderTitle(t, [cx, cy]),
    // renderCodeEditor('file1.ts', [
    //   `class Player {`,
    //   `  constructor(public x: number, public y: number) {}`,
    //   ``,
    //   `  move(dx: number, dy: number) {`,
    //   `    this.x += dx;`,
    //   `    this.y += dy;`,
    //   `  }`,
    //   `}`,
    //   ``,
    //   `let player = new Player(0, 0);`,
    // ], 0),
    renderFileList('CARTI', [
      { id: '1', name: 'file1.ts' },
      { id: '2', name: 'file2.ts' },
      { id: '3', name: 'file3.ts' },
      { id: '4', name: 'file4.ts' },
      { id: '5', name: 'file5.ts' },
      { id: '6', name: 'file6.ts' },
      { id: '7', name: 'file7.ts' },
      { id: '8', name: 'file8.ts' },
      { id: '9', name: 'file9.ts' },
      { id: '10', name: 'file10.ts' },
    ], 2),

    {
      pos: [cx, cy],
      width: 100,
      text: '█',
    },
  ];
}
