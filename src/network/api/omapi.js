/**
 * 封装部分 [JSONPlaceholder](http://jsonplaceholder.typicode.com) 接口
 */
import { net } from '../net'

export const posts = {
  get: (id = '', params) =>
    net({
      url: `/omapi/posts/${id}`,
      method: 'get',
      params,
    }),
  post: (data) =>
    net({
      url: `/omapi/posts`,
      method: 'get',
      data,
    }),
}

export const users = (data) =>
  net({
    url: '/omapi/users',
    methods: 'get',
    data,
  })
