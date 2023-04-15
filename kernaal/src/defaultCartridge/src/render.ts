import { renderTitle } from './components/title.ts';
import { renderCodeEditor } from './components/codeEditor.ts';
import { renderFileList } from './components/fileList.ts';
import type { State, Text64Node } from './types.ts';
import { renderFooterNav } from './components/footerNav.ts';
import { renderDeploy } from './components/deploy.ts';

export default function main(state: State | null, t: number, [cx, cy]: [number, number]): Text64Node {
  return [
    {
      box: {
        pos: [1, 1],
        size: [78, 43],
        color: '#636bff',
      },
    },

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
    // renderFileList('CARTI', [
    //   { id: '1', name: 'file1.ts' },
    //   { id: '2', name: 'file2.ts' },
    //   { id: '3', name: 'file3.ts' },
    //   { id: '4', name: 'file4.ts' },
    //   { id: '5', name: 'file5.ts' },
    //   { id: '6', name: 'file6.ts' },
    //   { id: '7', name: 'file7.ts' },
    //   { id: '8', name: 'file8.ts' },
    //   { id: '9', name: 'file9.ts' },
    //   { id: '10', name: 'file10.ts' },
    // ], 2),
    renderDeploy(t, [cx, cy]),

    {
      pos: [cx, cy],
      width: 100,
      text: '█',
    },

    [
      {
        pos: [cx + 2, cy],
        width: 100,
        text: `${state}`,
      },
      // { onKeyDown: ['ArrowUp', { op: 1 }] },
      // { onKeyDown: ['ArrowDown', { op: -1 }] },
    ],
  ];
}
