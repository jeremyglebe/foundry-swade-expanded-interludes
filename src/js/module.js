import * as jsonData from '../module.json' assert { type: 'json' };
const moduleId = jsonData.id;

Hooks.once('init', () => {
  console.log(`${moduleId} | Hook: init`);
});
