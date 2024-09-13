### _This Web application was made with Next Js latest version._

Tech Stack User -

- Next Js
- Typescript
- Tanstack Query
- Shadcn UI
- Tailwind CSS

Description:

1. All the posts showed in a timeline.
2. Posts includes the name of the person who wrote the post.
3. `show comments` button to toggle view comments.
4. Comments include who commented on the post.
5. Tried to show skeleton while loading the posts.

## How to run this project ?

- git clone `https://github.com/labibahmed10/task-gk-fe.git` on your local machine
- `cd task-gk-fe` and run `npm install`
- Create a `.env.local` on your root file and copy paste the given env variables below.
- Type `npm run dev` to run the application on your local machine.

```javascript
env variables 

NEXT_PUBLIC_POSTS_DATA="https://jsonplaceholder.typicode.com/posts"
NEXT_PUBLIC_USERS_DATA="https://jsonplaceholder.typicode.com/users"
NEXT_PUBLIC_COMMENTS_DATA="https://jsonplaceholder.typicode.com/comments"
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
