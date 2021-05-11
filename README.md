# Frontend Take home

For this take home exercise you're tasked with building a quiz taking module. You're free to use whatever libraries/packages you want in order to get the job done. 

In addition a lot of the default Next.js scaffolding has been left in case it's helpful. Run `yarn dev` and navigate to `localhost:3000/` to see getting started with Next.js tips.

## Instructions

You will be implementing [the flow in this figma prototype](https://www.figma.com/file/oF5CSyc3SnAJKcx2ZuEDNs/Mastery-Coding---Front-end-Take-Home?node-id=1%3A289). There's most likely more to do here than can be done in 2 hours. If you'd like, fork the repo and submit a PR with your solution, otherwise feel free to commit directly to this repo. 

Focus on the following things first:

### Requirements

- [ ] Get the Next.js app up and running(see the bottom of this for thorough instructions)
- [ ] All 2 pages are fully functional with a minimal required focus on design
  - [ ] User can start the quiz
  - [ ] Quiz answers are logged when the user clicks on "start over"
  - [ ] Quiz is reset and starts at the "Quiz Start" screen when user clicks on "start over"

Once the flow is functional you should turn your attention to places that you think best show off your skills. These could include(not in any particular order):

- [ ] Allow the user to choose which question they want to navigate to
- [ ] Making the app "pixel perfect"
- [ ] Implementing animations
- [ ] Adding unit tests
- [ ] Restructuring the code that was provided

### Turning in the assignment

Once you are satisfied with your implementation given the alloted time please email justin@masterycoding.com a link to the repo that you forked.

---

### Quiz Taking Flow

The flow consists of 2 screens:

- **A Quiz Start Screen**: After the user has clicked on "Start Quiz" they should be taken to the "Quiz Taking" screen. They can only come back to the "Quiz Start" screen after they've clicked on the "Start Over" button from the last quiz question.
- **A Quiz Taking Screen**: The user will then be presented with paginated quiz questions. Clicking on the "Next Question" button will let them move onto the next question.
  - **A Quiz Resubmit Option**: When the user is on the last question, the "Next Question" button will turn into a "Start Over" button. When the user clicks on "Start Over" we should see their results logged in our terminal. It's up to you to decide on what's the best way to structure this data.


#### Designs

A mock up and simple prototype has been created by our design team.

- [figma designs](https://www.figma.com/file/oF5CSyc3SnAJKcx2ZuEDNs/Mastery-Coding---Front-end-Take-Home?node-id=1%3A289)

#### Screen Requirements

**Quiz Start**

The "Start Quiz" buttons should take the user to the "Quiz Taking" screen.

**Quiz Taking**

The user should be able to see how far they are in the quiz. They should also be able to select a multiple-choice option. Lastly, clicking on the "Next Question" button should take them to the next question.

**Quiz End**

Clicking on "Start Over" on the last question should take them back to the "Quiz Start" screen and log their answers.

**Quiz Object Data**

Use this for the quiz taking screen. 

```JS
const quizQuestionData = [{
    question: 'Which of the following most closely describes the language that computers innately understand?',
    id: 'q1',
    options: [{
      name: 'Assembly',
      id: 'a1'
    }, {
      name: 'Binary x',
      id: 'a2'
    }, {
      name: 'C++',
      id: 'a3'
    }, {
      name: 'Compiled Language',
      id: 'a4'
    }, {
      name: 'Interpreted Language',
      id: 'a5'
    }]
  },
  {
    question: 'What is the key difference between a script and a program?',
    id: 'q2',
    options: [{
      name: 'Scripts are written in English for human developers to understand the code. Programs are the actual code.',
      id: 'b1'
    }, {
      name: 'A program uses an interpreter to interpret the code into binary. A script is the interpreted binary code.',
      id: 'b2'
    }, {
      name: 'Scripts talk to applications to tell them what to do. Programs talk to the computer or operating system after being translated.',
      id: 'b3'
    }, {
      name: 'A script is like Microsoft Word. A program is like Adobe Photoshop.',
      id: 'b4'
    }]
  },
  {
    question: 'Is C# a compiled language or an interpreted language?',
    id: 'q3',
    options: [{
      name: 'C# is compiled to 64-bit WASM Assembly. It is a compiled language.',
      id: 'c1'
    }, {
      name: 'C# is interpreted by .NET and Unity. It is an interpreted language.',
      id: 'c2'
    }, {
      name: 'C# is compiled to Intermediary Language (IL) by the JIT. It has traits of both compiled and interpreted languages.',
      id: 'c3'
    }, ]
  },
  {
    question: 'Which of these is not true about C#?',
    id: 'q4',
    options: [{
      name: 'Code written once can often be used on multiple platforms.',
      id: 'd1'
    }, {
      name: 'It is faster than old programming languages, like C.',
      id: 'd2'
    }, {
      name: 'It handles memory management for you.',
      id: 'd3'
    }, {
      name: 'It uses a JIT compiler so it can be portable, like Java.',
      id: 'd4'
    }]
  },
  {
    question: 'The characters "", {}, () are examples of:',
    id: 'q5',
    options: [{
      name: 'Reserved Keywords',
      id: 'e1'
    }, {
      name: 'Symbols',
      id: 'e2'
    }, {
      name: 'Bracket Pairs',
      id: 'e3'
    }, {
      name: 'Dereference Operators',
      id: 'e4'
    }]
  }
]
```

---
## Auto Generated Docs from Next.js

**The docs were generated when this project was generated and were left in case they are helpful in getting you started.**

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
