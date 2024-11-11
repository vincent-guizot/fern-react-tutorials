import React from 'react'

function TableData(props) {
    const {data} = props
  return (
    <>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Amount</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(tracker => {
                        const {id, amount, name} = tracker
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>Rp. {amount}</td>
                                <td>{name}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default TableData