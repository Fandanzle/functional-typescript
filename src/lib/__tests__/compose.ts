import { userValue, getFirstProjects, getProjects, getProjectTitle, IProject } from '../common'
import { compose } from '../compose'

test('Compose get projects selector', () => {
  const initialString: IProject[] = compose(
    getProjects
  )(userValue)
  expect(userValue.projects).toEqual(initialString)
})

test('Compose first project selector', () => {
  const initialString: IProject = compose(
    getFirstProjects,
    getProjects
  )(userValue)
  expect(userValue.projects[0]).toEqual(initialString)
})

test('Compose first project title selector', () => {
  const initialString: string = compose(
    getProjectTitle,
    getFirstProjects,
    getProjects
  )(userValue)
  expect(userValue.projects[0].title).toEqual(initialString)
})
