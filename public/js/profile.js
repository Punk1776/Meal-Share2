const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const calories = document.querySelector('#project-funding').value.trim();
  const ingredients = document.querySelector('#project-desc').value.trim();
  const instructions = document.querySelector('#project-inst').value.trim();
  const protein_g = document.querySelector('#project-protien').value.trim();
  const carbs_g = document.querySelector('#project-carbs').value.trim();
  const fats_g = document.querySelector('#project-fats').value.trim();
  if (name && calories && ingredients && instructions && protein_g && carbs_g && fats_g) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, calories, ingredients, instructions, protein_g, carbs_g, fats_g }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);

