import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";

function Header() {
  const [user] = useAuthState(auth);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );


  return (
    <HeaderContainer>
      {/* {Header Left} */}
      <HeaderLeft>
        <HeaderAvatar
          src={user?.photoURL}
          alt={user?.displayName}
          onClick={() => auth.signOut()}
        />
        <AccessTimeIcon />
      </HeaderLeft>

      {/* {Header Search} */}
      <HeaderSearch>
        <SearchIcon />
        <input
          placeholder={`Search ${
            roomId && roomDetails ? roomDetails?.data().name : "channel"
          }`}
        />
      </HeaderSearch>

      {/* {Header Right} */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;
