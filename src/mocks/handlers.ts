import { setupServer } from 'msw/node'
import { handlers } from './server'

const server= setupServer(...handlers)

export default server