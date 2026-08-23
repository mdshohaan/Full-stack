const cities = [
  { name: "Los Angeles", population: 3_792_621 },
  { name: "New York", population: 8_175_133 },
  { name: "Chicago", population: 2_695_598 },
  { name: "Houston", population: 2_099_451 },
  { name: "Philadelphia", population: 1_526_006 },
];
cities.filter((city) => {
  return (city.population = 100);
});

console.log(cities);
