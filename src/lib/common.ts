export interface IProject {
  title: string
  name: string
}

export interface IUser {
  name: string
  title: string
  projects: IProject[]
}

export const userValue: IUser = {
  name: 'Main name',
  title: 'Main title',
  projects: [
    {
      title: 'title',
      name: 'description'
    },
    {
      title: 'title',
      name: 'description'
    },
    {
      title: 'title',
      name: 'description'
    },
    {
      title: 'title',
      name: 'description'
    }
  ]
}

export const getProjects = (user: IUser) => user.projects
export const getFirstProjects = (projects: IProject[]) => projects[0]
export const getProjectTitle = (project: IProject) => project.title
