import { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import { COLUMNS } from './ColumTurnos';
import DATA from './DATA.json';

function TablaTurnos() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination,
  );

  const { pageIndex } = state;
  return (
    <section>
      <div className="py-12" striped bordered hover {...getTableProps()} id="data table">
        <thead className="border-collapse border text-center border-slate-400">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className="border border-slate-300 w-96 py-4" {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽 ' : ' 🔼 ') : ''}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td className="border border-slate-300  text-center py-3" {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
        <div />
        <div className="flex justify-center py-10">
          <div className="ml-4">
            <button className="text-white bg-purple-700 rounded-md p-2 mx-2 w-24 hover:bg-purple-800" onClick={() => previousPage()} disabled={!canPreviousPage}>
              Previous
            </button>

            <span className="mx-4">
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>

            <button className="text-white bg-purple-700 rounded-md p-2 mx-2 w-24 hover:bg-purple-800" onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TablaTurnos