import request from "./Request.js";

const ideas = {
	postIdea: (formData) => {
		return request.post('/idea-cards', formData);
	},
	getIdeas: () => {
		return request.get('/idea-cards');
	}
};

export default ideas;
