document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("cdForm");
  const tableBody = document.querySelector("#cdTable tbody");

  // startdata
  const cds = [
    { author: "Pat Metheny Group", title: "Still Life (Talking)", year: 1987 },
    { author: "John Coltrane", title: "A Love Supreme", year: 1964 },
    { author: "Clifford Brown & Max Roach", title: "Clifford Brown & Max Roach", year: 1956 },
    { author: "Miles Davis", title: "Kind of Blue", year: 1959 },
    { author: "Steps Ahead", title: "Magnetic", year: 1986 },
    { author: "Esbjörn Svensson Trio", title: "Seven Days of Falling", year: 2003 },
  ];

  // funktion til at lave en ny række
  function addRow(cd) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${cd.author}</td>
      <td>${cd.title}</td>
      <td>${cd.year}</td>
      <td><button type="button" class="delete">🗑️</button></td>
    `;
    tableBody.appendChild(row);
  }

  // vis startdata
  cds.forEach(cd => addRow(cd));

  // tilføj ny CD
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const author = document.getElementById("author").value.trim();
    const title = document.getElementById("title").value.trim();
    const year = parseInt(document.getElementById("year").value);

    if (!author || !title || isNaN(year)) {
      alert("Please fill in all fields correctly.");
      return;
    }

    addRow({ author, title, year });
    form.reset();
  });

  // slet række
  tableBody.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
      event.target.closest("tr").remove();
    }
  });
});
