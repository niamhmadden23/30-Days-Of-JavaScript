const newSet = new Set();

console.log(newSet);

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
const setOfLanguages = new Set(languages);
console.log(setOfLanguages);
for (language of setOfLanguages) {
  console.log(language);
}
setOfLanguages.forEach((language) => {
  console.log(`for each ${language}`);
});

setOfLanguages.add("Italian");
console.log(setOfLanguages.size);
console.log(setOfLanguages);
console.log(setOfLanguages.delete("Finnish"));
console.log(setOfLanguages);
console.log(setOfLanguages.has("Portugese"));
console.log(setOfLanguages.has("Italian"));
setOfLanguages.clear();
console.log(setOfLanguages);

const emptySet = new Set();
console.log(emptySet);
for (let i = 0; i < 10; i++) {
  emptySet.add(i);
}
console.log(emptySet);
emptySet.delete(4);
console.log(emptySet);

const newMap = new Map();
newMap.set("England", 7);
console.log(newMap);

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const union = new Set([...a, ...b]);
console.log(union);

const x = new Set([4, 5, 8, 9]);
const y = new Set([3, 4, 5, 7]);

const intersection = new Set([...x].filter((number) => y.has(number)));
console.log(intersection);

const difference = new Set([...x].filter((number) => !y.has(number)));
console.log(difference);

console.log(countries);

let languagesInObj = countries.map((language) => language.languages);
console.log(languagesInObj);
