/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useState } from "react";

type UserInfos = {
	token: string;
	firstname: string;
	lastname: string;
	phone: string;
	userId: string;
};

export const MainContext = createContext<{
	search: string;
	setSearch: (search: string) => void;
	sidebar: string;
	setSidebar: (sidebar: string) => void;
	isAuth: boolean;
	setIsAuth: (isAuth: boolean) => void;
	auth: any;
	setAuth: (auth: any) => void;
	phone: string;
	setPhone: (phone: string) => void;
	token: string | null;
	setToken: (token: string) => void;
	userInfos: UserInfos | null;
	setUserInfos: (userInfos: any) => void;
}>({
	search: "",
	setSearch: () => {
		return;
	},
	sidebar: "",
	setSidebar: () => {
		return;
	},
	isAuth: false,
	setIsAuth: () => {
		return;
	},
	auth: null,
	setAuth: () => {
		return;
	},
	phone: "",
	setPhone: (phone: string) => {
		return;
	},
	token: null,
	setToken: (token: string) => {
		return;
	},
	userInfos: null,
	setUserInfos: () => {
		return;
	},
});

export const MainProvider = ({ children }: { children: ReactNode }) => {
	const [search, setSearch] = useState<string>("");
	const [sidebar, setSidebar] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [token, setToken] = useState<string | null>(null);
	const [userInfos, setUserInfos] = useState<UserInfos | null>(null);

	const [isAuth, setIsAuth] = useState<boolean>(false);
	const [auth, setAuth] = useState<any>(null);

	return (
		<MainContext.Provider
			value={{
				sidebar,
				setSidebar,
				search,
				setSearch,
				isAuth,
				setIsAuth,
				auth,
				setAuth,
				phone,
				setPhone,
				token,
				setToken,
				userInfos,
				setUserInfos,
			}}
		>
			{children}
		</MainContext.Provider>
	);
};
