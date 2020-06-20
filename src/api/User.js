import request from "./Request.js";

const user = {
	getUser: (formData) => {
		return request.get('/user/me');
	},
	updateUserData: (data) => {
		return request.put('/user/me', data);
	}
};

export default user;
