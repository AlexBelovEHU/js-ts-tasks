# Tasks: 06 Async

## Task description

<<<<<<< HEAD
<<<<<<< HEAD
### Git

Please install Git on your local machine https://git-scm.com/download

Verify it's done:
- In console type `git --version`
- If you see smth like `git version 2.29.2.windows.2` you're done

### Configuring SSH

We're highly recommend to configure SSH key for your machine (Windows/MacOS/Linux/etc) and put it into your Github account.

Follow this instruction to complete that step: [https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-configure-GitLab-SSH-keys-for-secure-Git-connections](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

#### MacOs tips
you can get your public key by run in terminal `cat ~/.ssh/id_rsa.pub`


### Fork current repository into your account
=======
Here are several small tasks. Each of them is located in their own js files.
>>>>>>> 5a57a13 (feat: add task template)
=======
Here are several simple tasks. Each of them is located in their own js files.
>>>>>>> a184929 (feat: open tasks)

### all.js

Write a function that will work similar to standard Promise.all

### debounce.js

Write a function that receive 2 parameters function {fn} and delay {delay} (in milliseconds) and returns another function which will pass invocation of {fn} only once during the delay period

### mockApi.js

Create the function mocker which will return defined data with 1 second delay

### race.js

Write a function that will work similar to standard Promise.race

## How to run tasks locally

1. Switch to the tasks branch you would like to solve
2. Ensure there's a `node_modules` folder (all packages are installed)
3. In console run `npm run test:local` command to test your solution
4. In console you will see results of your solution
