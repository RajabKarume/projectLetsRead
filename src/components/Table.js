import React from "react";

function TableData({formData}){
    return(
        <div style={{paddingTop:"50px"}}>
        <table style={{fontSize:"25px"}} class="table table-success table-striped">
            <thead>
                <tr>
                    <th>Reader's Name</th>
                    <th>Author's Name</th>
                    <th>Book Title</th>
                    <th>Comments</th>
                    <th>Recommendation</th>
                </tr>
            </thead>
            <tbody>
                {formData.map((data, index)=>(
                    <tr key={index}>
                        <td>{data.readersName}</td>
                        <td>{data.authorName}</td>
                        <td>{data.bookTitle}</td>
                        <td>{data.comments}</td>
                        <td>{data.recomendation}</td>
                    </tr>
               ))}
            </tbody>
        </table>
        </div>
    )
}

export default TableData;