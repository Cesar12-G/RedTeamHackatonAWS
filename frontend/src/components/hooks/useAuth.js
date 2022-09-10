import { useContext } from "react";
import { AuthContext } from "../context/authProvider";

export default function useAuth() {
    return useContext(AuthContext)
}