import Logo from '../assets/logo-telly.svg'
function Header() {
  return (
    <div className="flex h-20">
      <div className="bg-slate-800 w-1/6 flex justify-center items-center">
        <img className="h-14" src={Logo} alt="logo"/>
      </div>
      <div className="bg-slate-900 w-5/6 flex justify-between items-center p-4">
        <div className="px-4">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(255,255,255,1)"/></svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="rgba(255,252,252,1)"/></svg>
          </button>
        </div>
        <div>
        </div>
        <div className="flex justify-end items-center">
          <div className="px-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="rgba(255,255,255,1)"/></svg>
          </div>
          <div className="relative inline-block mx-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zM9 21h6v2H9v-2z" fill="rgba(255,255,255,1)"/></svg>
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-sky-500 border-2 border-sky-500 rounded-full"></span>
          </div>
          <div className="relative inline-block mx-4">
            <img className="inline-block object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Profile"/>
            <span className="absolute bottom-0 right-0 inline-block w-2 h-2 bg-green-600 border-2 border-green-600 rounded-full"></span>
          </div>
          <div className="flex flex-col text-white text-xs mr-4">
              <h4>Claudia S.</h4>
              <p className="text-gray-500" >Cuenta de Admin</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header