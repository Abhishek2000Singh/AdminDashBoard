import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material"
import "./user.css"
import { Link } from "react-router-dom"

export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser" >
                    <button className="userAddButton">Create</button>
                </Link>
            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://i.pravatar.cc/150?img=5" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Pekker</span>
                            <span className="userShowUserTitle">SoftwareEngineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>

                        {/*------------- Info Of the USer------------- */}
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">annaPekker99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">10.12.2003</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>

                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+91 3245634665</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">annapekker@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">Kolkata |India</span>
                        </div>

                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input
                                    type="text"
                                    className="userUpdateInput"
                                    placeholder="annapekker99"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input
                                    type="text"
                                    className="userUpdateInput"
                                    placeholder="Anna Pekker"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input
                                    type="text"
                                    className="userUpdateInput"
                                    placeholder="annapekker@gmail.com"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label >Phone</label>
                                <input
                                    type="text"
                                    className="userUpdateInput"
                                    placeholder="+91 3245634665"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label >Address</label>
                                <input
                                    type="text"
                                    className="userUpdateInput"
                                    placeholder="Kolkata | West Bengal"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.pexels.com/photos/18178725/pexels-photo-18178725/free-photo-of-man-in-short-sleeved-brown-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt=""
                                    className="userUpdateImg"
                                />
                                <label htmlFor="file">
                                    <Publish
                                        className="userUpdateIcon"
                                    />
                                </label>
                                <input type="file" id="file" className="userUpdateInput" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateBtn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
