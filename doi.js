document.addEventListener("DOMContentLoaded", async () => {
  const dois = await fetch("dois.txt").then(r => r.text()).then(t => t.split('\n').filter(Boolean));
  const container = document.getElementById("pub-list") || document.body;
  for (let doi of dois) {
    const res = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`);
    const data = await res.json();
    const item = data.message;
    const authors = (item.author || []).map(a => a.family + ", " + a.given).join("; ");
    const ref = `${authors}. “${item.title?.[0]}.” <em>${item['container-title']?.[0]}</em>, ${item.issued['date-parts'][0][0]}.`;
    const li = document.createElement("li");
    li.innerHTML = ref;
    container.appendChild(li);
  }
});
