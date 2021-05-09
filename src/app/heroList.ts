import Hero from './hero';
const heroList: Hero[] = [];

for (let i = 0; i < 10; i++) {
  heroList.push({
    id: i + 1,
    age: parseInt(Math.random() * 100 + ''),
    name: 'jack ' + i + ' ok',
  });
}

function sleep2000ms(): Promise<Hero[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(heroList);
    }, 2000);
  });
}

export default sleep2000ms;

export { heroList };
