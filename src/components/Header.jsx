import React from 'react'




const Header = ({tab,setTab}) => {
  return (


<header className='text-gray-400'>
  <nav>
    <ul className="flex flex-col lg:flex-col items-start w-full lg:w-auto [&>li]:py-2 [&>li]:cursor-pointer pl-4">
      <li 
        className={tab==='day'?'current':''}
        onClick={e=>setTab ('day')}
      >Día</li>
      <li
        className={tab==='week'?'current':''}
        onClick={e=>setTab ('week')}
      >Semana</li>
      <li
        className={tab==='month'?'current':''}
        onClick={e=>setTab ('month')}
      >Mes</li>
      <li
        className={tab==='year'?'current':''}
        onClick={e=>setTab ('year')}
      >Año</li>
    </ul>
  </nav>
</header>






  )
}

export default Header