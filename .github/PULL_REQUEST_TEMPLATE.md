## Vulnerability fixed

This was a secret in git history. 

## Where was it?

It can be found by entering git log in the terminal and itt will show previous commits. It showed that .env was removed, and that file contains hardcoded secrets. 

## Why is it dangerous?

It's dangerous because an attacker could get the API key. The attacker could pretend to be me and lock me out of the system completely. 

## How did you fix it?

I deleted the .env file and created a new .env file and added it to gitignore. It's secure because now the keys are hidden. 


## Checklist

- [ ] Tested the fix locally with `npm run dev`
- [ ] Commit message clearly describes the security fix
