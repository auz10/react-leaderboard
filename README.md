# react-leaderboard

Example: [https://auz10.github.io/react-leaderboard/](https://auz10.github.io/react-leaderboard/)

Takes in name, start and end time and renders into a sorted scoreboard.

### install

npm install\
npm start

### build

dev: npm run dev\
prod: npm run prod

### data format

```
{
    "name": "Elena",
    "timeStart": "2018-05-24T20:46:07-07:00",
    "timeEnd": "2018-05-24T21:22:41-07:00"
}, 
{
    "name": "Gerrard",
    "timeStart": "2018-05-25T08:36:07-07:00"
}
```

### TODO

* Tests
* Fix dynamic row in progress being ranked
* Skeleton Loading
* Update via websockets
* Seperate styles