
import React from 'react'
import DataTable from 'react-data-table-component';

const Table = ({columns, data, handleCheckboxChange}) => {

  return (
	<div>
		<DataTable 
			columns={columns}
			data={data}
			selectableRows
			onSelectedRowsChange={handleCheckboxChange}
			pagination
			highlightOnHover
		/>
	</div>
  )
}

export default Table