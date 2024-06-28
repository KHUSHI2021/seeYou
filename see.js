const comments = [
    {
      id: 0,
      name: "React Router",
      post: "Project",
      comment: "Developed a single-page application using React Router and Integrated the GitHub API to display user repositories.",
      link: "https://github.com/user/react-router-project"
    },
    { 
        id:1,
        name: "Netflix",
        post: "Internship",
        comment:
          "I developed a Netflix portfolio using HTML, CSS, Bootstrap, and JavaScript. The project is fully responsive.",
        link: "https://github.com/user/Netflix-project"
      },
      { 
        id:2,
        name: "My blog",
        post: "Internship",
        comment:
          "I have developed a fully responsive blog portfolio using HTML, CSS, Bootstrap, and JavaScript.",
        
      },
  ];
  
  const projectListElement = document.getElementById('project-list');
  
  comments.forEach(comment => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';
  
    const projectTitle = document.createElement('h3');
    const projectLink = document.createElement('a');
    projectLink.href = comment.link;
    projectLink.target = "_blank";
    projectLink.rel = "noopener noreferrer";
    projectLink.textContent = comment.name;
  
    projectTitle.appendChild(projectLink);
    projectElement.appendChild(projectTitle);
  
    const projectPost = document.createElement('p');
    projectPost.textContent = comment.post;
    projectElement.appendChild(projectPost);
  
    const projectComment = document.createElement('p');
    projectComment.textContent = comment.comment;
    projectElement.appendChild(projectComment);
  
    projectListElement.appendChild(projectElement);
  });
  