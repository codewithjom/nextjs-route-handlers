import { prisma } from "@/prisma/client"
import { redirect } from "next/navigation"

function readData() {
  return prisma.data.findMany()
}

async function createData(data: FormData) {
  'use server'

  const post = data.get('post')?.valueOf()
  if (typeof post !== 'string' || post.length === 0)   {
    throw new Error('Invalid Post')
  }

  await prisma.data.create({ data: { post }})
  redirect('/')
}

export default async function Home() {

  const posts = await readData()

  return (
    <main>
      <form action={createData}>
        <div className='bg-white p-2 border space-x-2 flex justify-center items-center'>
          <input type='text' name='post' className='border pl-2' />
          <button type='submit' className='border px-2 bg-gray-300 hover:bg-gray-400'>Send</button>
        </div>
      </form>
      <ul className='mt-2'>
        {posts.map(post => (
          <li key={post.id} className='flex px-2'>
            {post.post}
            <button type='submit' name='data' className='text-red-500 underline px-2'>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  )
}
