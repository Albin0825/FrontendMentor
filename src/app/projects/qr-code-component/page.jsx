'use client'
import Image from 'next/image'
import qrCode from './assets/img/image-qr-code.png'

import './assets/css/style.css'

export default function App() {
  return (
    <>
      <section
        className='
          flex
          justify-center
          items-center
          grow
        '
      >
        <div
          className='
            grid
            gap-6
            bg-[var(--clr-white)]
            w-80
            p-4
            pb-10
            rounded-[20px]
            shadow-[hsla(0,0%,0%,5%)_0_25px_32px]
          '
        >
          <Image
            className='
              w-full
              rounded-[10px]
            '
            src={qrCode}
            alt=''
          />
          <div
            className='
              grid
              justify-items-center
              gap-4
            '
          >
            <h3
              className='
                text-[var(--clr-darkBlue)]
                text-[22px]
                font-bold
                leading-7
                tracking-[.005em]
                text-center
              '
            >
              Improve your front-end skills by building projects
            </h3>
            <p
              className='
                max-w-[26ch]
                text-[var(--clr-grayishBlue)]
                text-[15px]
                font-normal
                leading-[19px]
                tracking-[.015em]
                text-center
              '
            >
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
          </div>
        </div>
      </section>
      <div
        className='
          absolute
          left-0
          bottom-0
          w-full
          text-[11px]
          text-center
        '
      >
        Challenge by
        {'\u0020'}
        <a
          className='
            text-[#3E52A3]
          '
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
        >
          Frontend Mentor
        </a>
        . Coded by
        {'\u0020'}
        <a
          className='
            text-[#3E52A3]
          '
          href='https://www.phadonia.com/'
        >
          Albin Karlsson
        </a>
        .
      </div>
    </>
  )
}