import request from "./Request.js";

const login = {
	postLogin: (formData) => {
		return request.post('/auth/local', formData);
	}
};

export default login;
