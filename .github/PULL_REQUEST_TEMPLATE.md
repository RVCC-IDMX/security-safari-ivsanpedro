## Vulnerability fixed

This is an XSS vulnerability. 

## Where was it?

It was in index.js, line 5. 

## Why is it dangerous?

An attacker could write code as input, and the browser will run the code. The attacker could get my login information, get my password, or make the whole page disappear. 

## How did you fix it?

I replaced innerHTML with textContent. The browser now treats the input as simple text and not code to be ran. 

## Screenshots (optional)

<!-- Before/after screenshots showing the vulnerability and fix -->
<!-- Tip: Take a screenshot, then paste (Ctrl+V / Cmd+V) directly here -->
![Before:](<Screenshot 2026-02-22 at 10.44.06 PM.png>)
![After:](<Screenshot 2026-02-22 at 10.46.23 PM.png>)

## Checklist

- [ ] Tested the fix locally with `npm run dev`
- [ ] Commit message clearly describes the security fix
