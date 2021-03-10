#CODE REVIEW RULES

##General
1. Does the code work?
2. Description of the project status is included.
3. KISS. Code is easily understand.
4. Code is written following the coding standarts/guidelines (React in our case).
5. Code is in sync with existing code patterns/technologies.
6. DRY. Is the same code duplicated more than twice?
7. Can the code be easily tested (don't forget about React components)?
8. Are functions/classes/components reasonably small (not too big)?
9. Event listeners removed at teardown.
10. Naming conventions followed for variables, file names, translations.
11. Removed unused packages from NPM.
12. Separation of Concerns followed.
13. Don’t ask why. If code is wrong just ask for fixing it. If someone used loadsh.set() instead of {… , {} }  don’t ask why he decided to do so as far as it serves the purpose.

##Codestyle
1. No hardcoded values, use constants values.
2. Avoid multiple if/else blocks.
3. No commented out code.
4. No unnecessary comments: comments that describe the how.
5. Add necessary comments where needed. Necessary comments are comments that describe the why.

##ES6/7
1. Use ES6 features.
2. Use fat arrow instead of var that = this. Be consistent in your usage of arrow function.
3. Use spread/rest operator.
4. Use default values.
5. Use const over let (avoid var).
6. Use import and export.
7. Use template literals.
8. Use destructuring assignment for arrays and objects.
9. Use Promises or Asyns/Await. Rejection is handled. 

##React code review
1. Keep code DRY (Don't repeat yourself)
2. Components have defined propTypes
3. No unused props are being passed
4. Use shape for propTypes wherever applicable
5. Keep components small
6. setState callback function is used
7. No state updates in loop
8. Stateless components for components that don't use state
9. No useless constructor
10. No unused variables and functions/methods
11. No api calls in containers, delegate to Stores
12. No commented code
13. Move data to constants if used in multiple files, like statusText and status code
14. Event listeners removed
15. JSX markup should be no more than 50 lines
16. Use <Link /> instead of <a />
17. Use fat arrow instead of 'var that = this'
18. Naming conventions followed for variables, file names, translations
19. Removed unused packages from NPM
20. Store mock data for unit tests, avoid cluttering of mock code
21. Create mock data using loops, for easy maintainability 

##Third-Party Libraries
1. Use lodash/ramda functions instead of implementing itself.
2. Is Immutable.js was used correctly?
3. Is any nice/useful library was used wich we didn't know before? 

##ESLint
1. Code has no any linter errors or warnings.
2. No console.logs. 

##CSS/CSS in JS
1. Consistent naming conventions are used (BEM, OOCSS, SMACSS, e.t.c.).
2. CSS selectors are only as specific as they need to be; grouped logically.
3. Is any 'CSS in JS' library was used?
4. Use Hex color codes #000 unless using rgba().
5. Avoid absolute positioning.
6. Use flexbox.
7. Avoid !important.
8. Do not animate width, height, top, left and others. Use transform instead.
9. Use same units for all project.
10. Avoid inline styles. 

##Testing
1. Tests are readable, maintainable, trustworthy.
2. Test names (describe, it) are concise, explicit, descriptive.
3. Avoid logic in your tests.
4. Don't test multiple concerns in the same test.
5. Cover the general case and the edge cases.
6. Test the behaviour, not the internal implementation.
7. Use a mock to simulate/stub complex class structure, methods or async functions. 

##Git
1. Commits are small and divided into logical parts.
2. Commits messages are small and understandable.
3. Use branches for new features.
4. Make sure no dist files, editor/IDE files, etc are checked in. There should be a .gitignore for that.
