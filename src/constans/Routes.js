const repName = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? '' : 'react-to-do'

export const rootPath = `/${ repName }`
export const rootName = 'ToDo'
export const deletedPath = `/${ repName }${ repName.length ? '/' : ''}deleted`
export const deletedName = 'Deleted ToDos'
