## Vulnerability fixed

This is an outdated dependency.

## Where was it?

The file path is package.json and it was in line 19. 

## Why is it dangerous?

An attacker could access sensitive data from the development server by tricking it into responding to malicious requests. 

## How did you fix it?

I entered npm audit fix --force into the terminal which updated Vite to 7.3.1. 

## Screenshots (optional)
![Before:](<Screenshot 2026-02-20 at 7.29.58 PM.png>)
![After:](<Screenshot 2026-02-20 at 7.30.45 PM.png>)

## Checklist

- [ ] Tested the fix locally with `npm run dev`
- [ ] Commit message clearly describes the security fix
