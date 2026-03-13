import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL || 'https://vyomedge-backend.onrender.com'

const api = axios.create({ baseURL: BASE_URL })

export const getBlogs = async (params = {}) => {
  try {
    const { data } = await api.get('/api/blogs', { params })
    return { blogs: data.blogs || [] }
  } catch (err) {
    console.error('getBlogs error:', err)
    return { blogs: [] }
  }
}

export const getBlogById = async (id) => {
  try {
    const { data } = await api.get(`/api/blogs/${id}`)
    return data
  } catch (err) {
    console.error('getBlogById error:', err)
    return null
  }
}

export const getBlogBySlug = async (slug) => {
  try {
    const { data } = await api.get(`/api/blogs/slug/${slug}`)
    return data
  } catch (err) {
    console.error('getBlogBySlug error:', err)
    return null
  }
}

export const searchBlogs = async (query) => {
  try {
    const { data } = await api.get('/api/blogs', { params: { search: query } })
    return { blogs: data.blogs || [] }
  } catch (err) {
    console.error('searchBlogs error:', err)
    return { blogs: [] }
  }
}

export const getPortfolio = async () => {
  try {
    const { data } = await api.get('/api/portfolio')
    return { portfolio: data.portfolio || [] }
  } catch (err) {
    console.error('getPortfolio error:', err)
    return { portfolio: [] }
  }
}

export const getServices = async () => {
  try {
    const { data } = await api.get('/api/services')
    return { services: data.services || [] }
  } catch (err) {
    console.error('getServices error:', err)
    return { services: [] }
  }
}

export const getCategories = async () => {
  try {
    const { data } = await api.get('/api/blogs/categories')
    return { categories: data.categories || [] }
  } catch (err) {
    console.error('getCategories error:', err)
    return { categories: [] }
  }
}

export const submitInquiry = async (formData) => {
  try {
    const { data } = await api.post('/api/inquiries', formData)
    return data
  } catch (err) {
    console.error('submitInquiry error:', err)
    return null
  }
}

export const subscribe = async (email) => {
  try {
    const { data } = await api.post('/api/subscribers', { email })
    return data
  } catch (err) {
    console.error('subscribe error:', err)
    return null
  }
}

export default api