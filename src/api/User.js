import request from "./Request.js";

const user = {
	getUser: () => {
		return request.get('/users/me', {
			headers: {
				Authorization:
				`Bearer ${localStorage.getItem('token')}`,
			},});
	},
	getUsers:() => {
		return request.get('/users', {
			headers: {
				Authorization:
				`Bearer ${localStorage.getItem('token')}`,
			},
		});
	},
	updateUserData: (id ,data) => {
		return request.put(`/users/${id}`,

		  data,
			{
				headers: {
					Authorization:
          `Bearer ${localStorage.getItem('token')}`,
				}
			}
		);
	},

	setInvestments(data) {
		return request.post('/investments',
			data,
			{
				headers: {
					Authorization:
            `Bearer ${localStorage.getItem('token')}`,
				}
			}
		);
	}
};

export default user;
