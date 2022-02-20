import axios from 'axios'

const github = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API,
  headers: {
    authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
})

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })
  const response = await github.get(`/search/users?${params}`)
  return response.data.items
}
export const getUser = async (login) => {
  const response = await github.get(`/users/${login}`)
  return response.data
}
