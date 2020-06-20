import request from "./Request.js";

const ideas = {
	postIdea: (data) => {
		return request.post('/idea-cards',{

			headers: {
				Authorization:
					`Bearer ${localStorage.getItem('token')}`,
			},
			body: data});
	},
	getIdeas: () => {
		return request.get('/idea-cards', {
			headers: {
				Authorization:
					`Bearer ${localStorage.getItem('token')}`,
			},
		});
	}
};

export default ideas;
