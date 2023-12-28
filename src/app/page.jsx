import Link from 'next/link'

const paths = [
  'qr-code-component'
]

export default function Home() {
  return (
    <>
      <h1
        className='
          text-4xl
          font-bold
        '
      >
        You can find all the projects i have done bellow
      </h1>
      {paths.map((item, index) => (
        <div key={index}>
          <Link
            href={`projects/${item}`}
          >
            {item}
          </Link>
        </div>
      ))}
    </>
  )
}
