export type dialogsType = {
  id: number
  name: string
}
export type messagesType = {
  id: number
  message: string
}
export type postsType = {
  id: number
  message: string
  likesCount: number
}
export type ProfilePageType = {
  posts: Array<postsType>
}
export type DialogsPageType = {
  dialogs: Array<dialogsType>
  messages: Array<messagesType>
}
export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

let state: RootStateType = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you ?', likesCount: 2 },
      { id: 2, message: 'sdfsdgsdgsf ', likesCount: 14 },
      { id: 3, message: 'Hi', likesCount: 22 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Dimich' },
      { id: 2, name: 'Svetich' },
      { id: 3, name: 'Petrovich' },
    ],
    messages: [
      { id: 1, message: 'sdfsd' },
      { id: 2, message: 'sfdd' },
      { id: 3, message: 'sdf232sd' },
    ],
  },
}


export let addPost = (postMessage: string) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
}

export default state