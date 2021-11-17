# Strivestaurant Typescript

PASTA IS BACK!

 

It's time to convert the Strivestaurant project into TypeScript!

Clone the repo → HERE ←

 

Currently the application is written in plain JS. To start you can choose between:

Create a new TS create-react-app using the command:
npx create-react-app strivestaurant --template typescript
and manually copy all the relevant files and components into it, renaming every .js/.jsx file into .ts/.tsx.

OR
 
In the repo you just cloned execute:
npm i typescript @types/node @types/react @types/react-dom @types/jest
And rename every .js/.jsx file into .ts/.tsx.
When you run the project for the first time, a tsconfig.json file will be automatically generated and the editor will start showing you the missing types in the code.
 

No matter which route you choose, after setting up the project don't forget to install the typings for react-router-dom, because the projects needs them:
npm i @types/react-router-dom

 

Implement typings and interfaces the best you can and make the project run again!
