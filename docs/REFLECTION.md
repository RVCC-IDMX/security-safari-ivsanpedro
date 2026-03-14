# Reflection

Answer each question in 2-3 sentences.

## Most surprising discovery

Which vulnerability surprised you the most to find? Why didn't you expect it?

I was not expecting to find the keys in the source code. It is not something I check for, but now I can see how easy it is for attackers to get important data. 

## Real-world risk

Pick one vulnerability you found. How would you explain its danger to a teammate who's never heard of it?

The XSS vulnerability, the innerHTML one to be exact, was one that intrigued me the most. The way the code is set up is crucial to how the browser reads user input. An attacker could enter code that is meant to return important data and the browser will run the code, and the attacker will then get the information they are searching for just because the coder put innerHTML rather than textContent. 

## Future practice

What specific habit or check will you add to your own coding workflow to catch these issues before they ship?

I will make sure to put textContent and JSON.parse to prevent attackers from gaining access to the system. It will save me a lot of trouble in the future. 
