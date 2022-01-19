import Patchr from '../src/index.js';

const patchr = new Patchr();

// escalate privileges for user `2e4543d5-4978-434c-8bc1-a8134abca47a`
await patchr.updateUser('2e4543d5-4978-434c-8bc1-a8134abca47a', { accountLevel: 5 });