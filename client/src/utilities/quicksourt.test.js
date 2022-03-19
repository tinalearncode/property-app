import quicksort from './quicksort';

test('properly sort objects', () => {
  let arr = [
    { name: 'jonh', score: '9' },
    { name: 'doe', score: '7' }
  ];
  expect(quicksort(arr, 'score', 0, 1)).toStrictEqual([
    { name: 'doe', score: '7' },
    { name: 'jonh', score: '9' }
  ]);
});
