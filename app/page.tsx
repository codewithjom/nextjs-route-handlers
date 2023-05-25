export default function Home() {
  return (
    <main>
      <form>
        <div className='bg-white p-2 border space-x-2 flex justify-center items-center'>
          <input type='text' className='border pl-2' />
          <input type='text' className='border pl-2' />
          <button className='border px-2 bg-gray-300'>Send</button>
        </div>
      </form>
      <div>
        <h1>Data</h1>
      </div>
    </main>
  )
}
