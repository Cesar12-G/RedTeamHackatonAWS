import { useContext } from "react";
import { ApiContext } from "../context/apiProvider";

export default function useApi() {
    return useContext(ApiContext)
}