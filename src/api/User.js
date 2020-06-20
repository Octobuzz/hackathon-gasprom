import request from "./Request.js";

const user = {
	getUser: () => {
		return request.get('/users/me', {
			headers: {
				Authorization:
				`Bearer ${localStorage.getItem('token')}`,
			},});
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
	}
};

export default user;
