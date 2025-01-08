const toggleButton1= document.getElementById('toggle-skills') as HTMLButtonElement | null;
const skills = document.getElementById('skills') as HTMLElement | null;

if (toggleButton && skills) {
  toggleButton.addEventListener('click', () => {
    skills.hidden = !skills.hidden; // Toggle the hidden property directly
  });
} else {
  console.error('Toggle button or skills element not found.');
}
