import { PATH } from './path.js';

export const BOARD = Object.freeze({
  [PATH.root]: {
    id: 1,
    path: PATH.allBoard,
    name: 'All Student',
    title: 'Sookmyung Women’s Univ. All',
    describe: '우리 학교에 재학 중인 모든 재학생 및 유학생을 만날 수 있습니다.',
  },
  [PATH.allBoard]: {
    id: 1,
    path: PATH.allBoard,
    name: 'All Student',
    title: 'Sookmyung Women’s Univ. All',
    describe: '우리 학교에 재학 중인 모든 재학생 및 유학생을 만날 수 있습니다.',
  },
  [PATH.internationalBoard]: {
    id: 2,
    path: PATH.internationalBoard,
    name: 'International Student',
    title: 'Sookmyung Women’s Univ. International',
    describe: '우리 학교에 재학 중인 유학생을 만날 수 있습니다.',
  },
});
