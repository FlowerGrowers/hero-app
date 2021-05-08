import Hero from './hero';
const heroList: Hero[] = [];

for (let i = 0; i < 10; i++) {
  heroList.push({
    id: i + 1,
    age: Math.random() * 100,
    name: 'jack ' + i + ' ok',
  });
}

export default heroList;
