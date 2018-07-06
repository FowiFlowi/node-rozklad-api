## KPI rozklad Lib
Schedule API based on [Rozklad API](https://api.rozklad.org.ua/)

It has built-in caching (maxAge = 6 days)

## Install
```bash
npm i node-rozklad-api
```
## Usage
```js
const r = require('node-rozklad-api')
```
## Debug
To enable debug mode
```bash
DEBUG=rozklad node app.js
```
## Method
Each method can accept either identifier or name
- [timetable](#timetable)
- [lessons](#lessons)
- [teacherLessons](#teacherlessons)
- [groups](#groups)
- [teachers](#teachers)
- [groupTeachers](#groupteachers)
- [currWeek](#currweek)

## timetable

Group schedule in a hierarchical form

```js
const schedule = await r.timetable('kv-51')
```

## lessons

Group lessons with [filters](https://api.rozklad.org.ua/v2/doc_groups)

```js
// if second parameter doesn't specified then all lessons will be requested
// lessons with (day_number = 1 and lesson_week = 1) or (day_number = 2)
const lessons = await r.lessons(802, [{ day_number: 1, lesson_week: 1 }, { day_number: 2 }])
```

## teacherLessons

Teacher lessons

```js
const lessons = await r.teacherLessons('Сапсай Тетяна Григорівна')
```

## groups

Search groups or get particular group

```js
const group = await r.groups('кв-51')
const groups = await r.groups() // all groups
const groups = await r.groups({ search: { query: 'кв' } })
const groups = await r.groups({ filter: { offset: 100, limit: 5 } })
```

## teachers

Search teachers or get particular teacher (like groups)

```js
const teacher = await r.teachers('Романкевич Віталій Олексійович')
```

## groupTeachers

Teachers of particular group

```js
const teachers = await r.groupTeachers('кв-51')
```

## currWeek

Get current study week

```js
const currWeek = await r.currWeek()
```
