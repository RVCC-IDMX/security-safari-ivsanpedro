## Vulnerability fixed

It is an XSS vulnerability.

## Where was it?

It was on line 10 of index.js.

## Why is it dangerous?

<!-- Explain what an attacker could do with this vulnerability -->
An attacker could insert code and the browser will evaluate it. They could enter code that returns your password. Whatever they type becomes code that runs in the app. 

## How did you fix it?

<!-- Describe your fix and why it's secure -->
I replaced eval with JSON.parse. It only reads the data in the JSON format and it cannot execute code. 

## Screenshots (optional)

![Before:](<Screenshot 2026-02-22 at 11.00.52 PM.png>)
![After:](<Screenshot 2026-02-22 at 11.01.05 PM.png>)

## Checklist

- [ ] Tested the fix locally with `npm run dev`
- [ ] Commit message clearly describes the security fix
