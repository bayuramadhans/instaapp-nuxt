export interface User {
  id: string
  name: string
  username: string
  email: string
  avatar: string
  bio: string
}

export interface Post {
  id: string
  userId: string
  user: User
  imageUrl: string
  caption: string
  likesCount: number
  commentsCount: number
  comments: Comment[]
  isLiked: boolean
  createdAt: string
}

export interface Comment {
  id: string
  userId: string
  user: User
  postId: string
  text: string
  createdAt: string
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
}