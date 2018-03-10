'use strict'

const r = require('./request')

module.exports = {
  currWeek() {
    return r('weeks')
  },

  teacherLessons(name) {
    return r(`teachers/${name}/lessons`)
  },

  groupTeachers(id) {
    return r(`groups/${id}/teachers`)
  },

  timetable(id) {
    return r(`groups/${id}/timetable`)
  },
  
  lessons(id, params = {}) {
    return r(`groups/${id}/lessons`, { filter: params })
  },

  groups(arg = {}) {
    return typeof arg === 'object'
      ? r('groups', arg)
      : r(`groups/${arg}`)
  },

  teachers(arg = {}) {
    return typeof arg === 'object'
      ? r('teachers', arg)
      : r(`teachers/${arg}`)
  }
}
