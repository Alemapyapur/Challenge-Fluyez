import React from 'react'

function TablaPeliculas(props) {
  const { data } = props;

  return (
    <tbody>
      <tr className="border-b text-sm font-light">
        <td className="px-6 py-4 whitespace-nowrap border-r">
          {data.Id}
        </td>
        <td className="px-6 py-4 whitespace-nowrap border-r">
          {data.Title}
        </td>
        <td className="px-6 py-4 whitespace-nowrap border-r">
          {data.Year}
        </td>
        <td className="px-6 py-4 whitespace-nowrap border-r">
          {data.Type}
        </td>
        <td className="px-6 py-4 whitespace-nowrap border-r">
          <button className="mx-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z" /><path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" fill="rgba(255,255,255,1)" /></svg></button>
          <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z" /><path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" fill="rgba(255,255,255,1)" /></svg></button>
        </td>
      </tr>
    </tbody>
  )
}

export default TablaPeliculas