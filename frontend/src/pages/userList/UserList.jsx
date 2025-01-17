import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import "./userList.css"
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {

    const [data, setData] = useState(userRows);

    const handleDelete= (id)=>{
        setData(data.filter(item=>item.id !== id))
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user', headerName: ' User', width: 190, renderCell: (params) => {
                return (
                    <div className='userListUser' >
                        <img className='userListImg' src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 190 },

        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className='userListBtn'>
                        
                        <Link to={"/user/"+params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
                    </div>
                )
            }
        },

    ];


    return (
        <div className='userList'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    )
}
