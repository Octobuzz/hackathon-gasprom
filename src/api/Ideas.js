import request from "./Request.js";

const ideas = {
	postIdea: (data) => {
		return request.post('/idea-cards',data, {

			headers: {
				Authorization:
					`Bearer ${localStorage.getItem('token')}`,
			},
		});
	},
	getIdeas: () => {
		return request.get('/idea-cards', {
			headers: {
				Authorization:
					`Bearer ${localStorage.getItem('token')}`,
			},
		});
	},
	getIdea: (id) => {
		return request.get(`/idea-cards/${id}`, {
			headers: {
				Authorization:
					`Bearer ${localStorage.getItem('token')}`,
			},
		});
	},
	updateIdea: (id, data) => {
		return request.put(`/idea-cards/${id}`, data);
	}
};

export default ideas;
