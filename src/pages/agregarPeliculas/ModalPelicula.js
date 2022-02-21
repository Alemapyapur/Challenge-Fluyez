// import { useState } from 'react';
// import { useDispatch } from 'react-redux'
// import { addMovies } from '../../store/newMovies';

// Modal Manual falta actualizar para editar

// function ModalPelicula({ children, modal, setModal }) {
//   const [name, setName] = useState("")
//   const [date, setDate] = useState()
//   const [state, setState] = useState("")
//   const dispatch = useDispatch();

//   const onSubmit = (e) => {
//     e.preventDefault()
//     if (name) {
//       dispatch(addMovies({ Id: Math.random().toString(36).slice(2), Title: name, Year: date, State: state }))
//     }
//     // dispatch(addMovies(movie))
//   }
//   return (
//     <section>
//       {modal &&
//         <form onSubmit={onSubmit} className="m-10 text-black">
//           <div className="flex justify-end">
//             <button onClick={() => setModal(false)}>X</button>
//           </div>

//           <div className="py-4 md:flex md:items-center">
//             <div className="mb-1 md:mb-0 md:w-1/3">
//               <label>Nombre de la Película</label>
//             </div>
//             <div className="text-black w-2/6 md:w-2/3 md:flex-grow">
//               <input value={name} onChange={(e) => setName(e.target.value)} className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Ingresa el nombre de la pelicula" />
//             </div>
//           </div>

//           <div className="py-4 md:flex md:items-center">
//             <div className=" mb-1 md:mb-0 md:w-1/3">
//               <label>Fecha de Publicación</label>
//             </div>
//             <div className="md:w-2/3 md:flex-grow">
//               <input value={date} onChange={(e) => setDate(e.target.value)} className="w-full h-10 px-3 text-base placeholder-gray-600  border rounded-lg focus:shadow-outline" type="date" />
//             </div>
//           </div>

//           <div className="py-4 md:flex md:items-center">
//             <div className=" mb-1 md:mb-0 md:w-1/3">
//               <label>Estado</label>
//             </div>
//             <div value={state} onChange={(e) => setState(e.target.value)} className="text-black md:w-2/3 md:flex-grow">
//               <select className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
//                 <option selected>Escoge una opción</option>
//                 <option value="activo">Activo</option>
//                 <option value="inactivo">Inactivo</option>
//               </select>
//             </div>
//           </div>

//           <button type="submit" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Guardar</button>
//           {children}
//         </form>
//       }
//     </section>
//   )
// }

// export default ModalPelicula;