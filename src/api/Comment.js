import request from "./Request.js";

const comment = {
	postComment: (formData) => {
		return request.post('/comments', formData, {
			headers: {
				Authorization:
					`Bearer ${localStorage.getItem('token')}`,
			},
		});
	},
	getComments: () => {
		return request.get('/comments', {
			headers: {
				Authorization:
					`Bearer ${localStorage.getItem('token')}`,
			},
		});
	}
};

export default comment;
