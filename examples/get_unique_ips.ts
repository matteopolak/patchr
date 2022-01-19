import Patchr from '../src/index.js';

const patchr = new Patchr();

// authenticate with a privileged user
await patchr.authenticate('walfakoot@gmail.com', 'Jaw5U3SttEja742');

// get all tracked events
const trackers = await patchr.getCurious();

// create a Set to store IPs
const ips = new Set<string>();

for (const tracker of trackers) {
	ips.add(tracker.ip);
}

console.log('Unique IPs:', ips);