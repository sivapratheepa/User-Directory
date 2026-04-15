let users = [
  {name: "Pratheepa", email: "pratheepa@gmail.com", phone: "1234567890", company: "ABC Ltd"},
  {name: "Lakshmi", email: "lakshmi@gmail.com", phone: "9876543210", company: "XYZ Ltd"},
  {name: "Ramar", email: "ramar@gmail.com", phone: "1112223333", company: "Tech Corp"},
  {name: "Suganthi Raj", email: "suganthiraj@gmail.com", phone: "4445556666", company: "Soft Inc"}
];

const container = document.getElementById("userContainer");
const searchInput = document.getElementById("search");

function displayUsers(data) {
  container.innerHTML = "";
  data.forEach(user => {
    container.innerHTML += `
      <div class="card">
        <h3>${user.name}</h3>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Company:</b> ${user.company}</p>
      </div>
    `;
  });
}

searchInput.addEventListener("keyup", () => {
  let value = searchInput.value.toLowerCase();
  let filtered = users.filter(user =>
    user.name.toLowerCase().includes(value)
  );
  displayUsers(filtered);
});

function sortAZ() {
  let sorted = [...users].sort((a, b) => a.name.localeCompare(b.name));
  displayUsers(sorted);
}

function sortZA() {
  let sorted = [...users].sort((a, b) => b.name.localeCompare(a.name));
  displayUsers(sorted);
}

// Initial load
displayUsers(users);
