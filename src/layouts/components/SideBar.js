import React from 'react'
import Link from 'next/link'

const SideBar = () => {
  return (
    <>
      <div className='offcanvas-body'>
        <h5>Fanavaran Sections</h5>

        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <Link href='/engineering'>Engineering</Link>
          </li>
          <li className='list-group-item'>
            <Link href='/project-management'>Project Management</Link>
          </li>
          <li className='list-group-item'>
            <Link href='/architecture'>Architect</Link>
          </li>
          <li className='list-group-item'>
            <Link href='/technician'>Technician</Link>
          </li>
          <li className='list-group-item'>
            <Link href='/Job-Seeking'>Job Seeker</Link>
          </li>
          <li className='list-group-item'>
            <Link href='/technical-self-employment'>Technical self employee</Link>
          </li>
          <li className='list-group-item'>
            <Link href='#'>Plumbing</Link>
          </li>
          <li className='list-group-item'>
            <Link href='#'>Electrician</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideBar
