'use strict'

const r = require('./request')

module.exports = {
  async currWeek() {
    return r('weeks')
  },

  async teacherLessons(name) {
    return r(`teachers/${name}/lessons`)
  },

  async groupTeachers(id) {
    return r(`groups/${id}/teachers`)
  },

  async timetable(id) {
    return r(`groups/${id}/timetable`)
  },
  
  async lessons(id, params = {}) {
    return r(`groups/${id}/lessons`, { filter: params })
  },

  async groups(arg = {}) {
    return typeof arg === 'object'
      ? r('groups', arg)
      : r(`groups/${arg}`)
  },

  async teachers(arg = {}) {
    return typeof arg === 'object'
      ? r('teachers', arg)
      : r(`teachers/${arg}`)
  }
}
