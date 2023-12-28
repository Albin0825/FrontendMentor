import Link from 'next/link'

const paths = [
  'qr-code-component'
]

export default function Home() {
  return (
    <>
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
