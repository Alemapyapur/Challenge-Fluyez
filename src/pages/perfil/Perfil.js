import React from 'react'

function Perfil() {
  return (
    <section className="mx-10 py-6 text-white capitalize">
      <nav aria-label="breadcrumb">
        <ol className="flex leading-none text-lg text-indigo-600 divide-x divide-indigo-400">
          <li className="pr-4"><a href="ww">Perfil</a></li>
          <li className="px-4 text-gray-700" aria-current="page">Admin</li>
        </ol>
      </nav>

      <div>
        <h2 className="text-left text-xl py-8">recomendados para tí</h2>
      </div>
    </section>
  )
}

export default Perfil