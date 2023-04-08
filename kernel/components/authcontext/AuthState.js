import React, {useState} from "react";
import AuthContext from "./AuthContext";

const AuthState = (props)=>{
    const initialAuthState = {
        auth: false,
        role: ''
    }
     const [state, setState] = useState(initialAuthState);

     return (
        <AuthContext.Provider value={{
            isAuth: state.auth,
            isRole: state.role,
            setState
        }}>
            {props.children}
        </AuthContext.Provider>
     );
}

export default AuthState;