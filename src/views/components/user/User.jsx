import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../redux/slices/userSlice";
import "./User.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const User = () => {
  const user = useSelector((state) => state.userReducer);
  //   console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  // console.log(user.users.data);
  return (
    <div class="userPages">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {user?.users?.data?.map((user) => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={`${user.firstName}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {user.role}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            {/* {user?.users?.data?.length - 1 ? (
              <Divider variant="inset" component="li" />
            ) : (
              " "
            )} */}
          </>
        ))}
      </List>
    </div>
    // <div class="userPages">
    //   <h2>List of the total Users {user?.users?.data?.length} </h2>
    //   {user?.users?.data?.map((user) => (
    //     <>
    //       <div key={user.id}>
    //         <p>
    //           Name : {user.firstName} {user.lastName}
    //         </p>
    //         <p> role : {user.role}</p>
    //         <p> Status : {user.status}</p>
    //       </div>
    //     </>
    //   ))}
    // </div>
  );
};
export default User;
