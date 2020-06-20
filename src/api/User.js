import request from "./Request.js";

const user = {
	getUser: (formData) => {
		return request.get('/users/me', {
			headers: {
				Authorization:
				`Bearer ${localStorage.getItem('token')}`,
			},});
	},
	updateUserData: (data) => {
		return request.put('/users/me', {

			headers: {
				Authorization:
					`Bearer ${localStorage.getItem('token')}`,
			},
			body: data});
	}
};

export default user;
