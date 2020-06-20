import request from "./Request.js";

const ideas = {
  postIdea: (formData) => {
    return request.post('/idea-cards', formData);
  }
};

export default ideas;
