# Patchr.io ⚡
An API wrapper for https://patchr.io/api/v1.

## Installation
This library requires TypeScript 4.0.0+ and Node.js 16.0.0+.

```bash
> git clone https://github.com/matteopolk/patchr.git
```

## Usage

```typescript
import Patchr from '../patchr/src';

const patchr = new Patchr();

// authenticate
await patchr.authenticate('email', 'password');

// reset someone's password
await patchr.resetPassword('email');
```