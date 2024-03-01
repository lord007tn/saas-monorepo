import bcrypt  from 'bcryptjs';
import {prisma} from '../client.js'
export default async function seedDev(){
  await prisma.user.create({
    data: {
      password: bcrypt.hashSync('passer'),
      email: 'text@example.com',
    }
  })
}