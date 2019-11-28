CODE ASSIGNMENT - simple api for counting sums and checking for primenumbers

To run it:
- 1. clone it
- 2. cd into the cloned directory
- 3. either execute "yarn && npm start" or "npm install && npm start" depending on your preferences
- 4. visit http://localhost:8000 from the browser to see it
- 5. (optionally) run tests by executing command "npm test"

Some explanation:

FRONTEND
  I approaced doing frontend with as minimal setup as possible. For me this meant doing as little lines as possible and
  not taking frontend framework (react) into the picture. The end result is a little mix of html/css/jquery, which are being
  server statically by the backend (express).

BACKEND
  As the assignment is pretty straightforward and it is expected to be written as compactly and clearly as possible, I tried to
  satisfy both requirements. I'm trying to keep the code well organised with separating most stuff into their own files (which isn't such a big job yet since we're not dealing with complex stuff). I try to avoid chaining function calls too many times to keep readability on a good level but still keep it compact enough

CONFESSIONS
  1. I decided to leave out comments, hoping the code explains itself well enough.
  2. This was the first time for me making requests with jquery.