import { useContext } from "react";
import { MainContext } from "@/providers/MainProvider";

const useMainState = () => {
	return useContext(MainContext);
};

export default useMainState;
