import { environment } from "@/environment";
import axios from "axios";

const instance = axios.create({
	baseURL: environment.API_URL,
	timeout: 1000,
	headers: { "X-Custom-Header": "foobar" },
});

export default instance;
