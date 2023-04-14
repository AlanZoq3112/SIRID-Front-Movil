import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "@react-navigation/native";
import AuthContext from "./authcontext/AuthContext";

export function RoleRoute() {
  const { isRole } = useContext(AuthContext);

  return (
    <Router>
        <Routes>
            {/* <Route exact path="/" 
                element={
                    isRole === 'SuperAdmin' ? 
                    <>HOMEADMIN</>

                    :isRole === 'Docente' ?
                    <>HOMEDOCENTE</>

                    : isRole === 'Soporte Tecnico'? 
                    <>HOMESOPRTE</>
                }
            /> */}
        </Routes>
    </Router>
  );
}
