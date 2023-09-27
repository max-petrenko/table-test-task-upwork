## Hello, dear client

My name is Maksym Petrenko, I am a professional Web Developer (here is my [LinkedIn](https://www.linkedin.com/in/maksym-petrenko-8946001a9/)). This repo is my submission for the test assignment for [this Upwork Job Posting](https://www.upwork.com/jobs/~0154fa1d1a34403d14).

### Installation and booting

As it is a `create-next-app` project, the setup procedure is standard:

```bash
npm i
#then 

npm run dev
# or
npm run build
npm run start
```

The page with the table is located on `/table` route, which can be accessed via link from the Home page. 

### Used libraries and rationale behind choosing them

As I decided to not introduce some fancy Server Components or async data fetching to this simple example, the only external dependency I used was [`dnd-kit`](https://dndkit.com/).
It is a fairly lightweight and straightforward library created to facilitate implementation of drag-and-drop interfaces. Though I started prototyping with `react-beautiful-dnd`, I quickly ran into a lot of issues and noticed that the library is in maintenance mode, which made me switch to the `dnd-kit`.

### Design features

The only design choice I made was to make the table horizontally scrollable on mobile devices as I believe it is he most convenient way to operate such innately mobile-unfriendly interface on small screens.
