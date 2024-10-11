# Tasks: 01 Basic Operators

## Task description

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

### backToFront.js

Copy and paste defined amount of a string's symbols to the front and back of a string

## How to run tasks locally

The following commands are useful to run your code locally

### Run all tasks at once

`npm run test:local` - iterates throught all `src/*.js` files and test your solutions

### Run a certain task

You could specify a name of each individual task to run that locally

`npm run test:local:backToFront` - run test cases only for `backToFront` task
`npm run test:local:sum` - run test cases only for `sum` task

A list of available commands is specified in `package.json` file in `scripts` section

## Commit message rules

Please follow `Commit message rules` instructions provided on `main` branch.
