
document.addEventListener("DOMContentLoaded", async () => {
  const dois = await fetch("dois.txt").then(r => r.text()).then(t => t.split('\n').filter(Boolean));
  const container = document.getElementById("pub-list");
  for (let doi of dois) {
    try {
      const res = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`);
      const data = await res.json();
      const item = data.message;
      const authors = (item.author || []).map(a => `${a.family}, ${a.given}`).join("; ");
      const title = item.title?.[0] || "";
      const journal = item["container-title"]?.[0] || "";
      const year = item.issued?.["date-parts"]?.[0]?.[0] || "";
      const volume = item.volume || "";
      const issue = item.issue || "";
      const pages = item.page || "";
      const citation = `${authors}. <em>${journal}</em>, ${year}, ${volume}(${issue}), ${pages}. ${doi}. <a href="https://doi.org/${doi}" target="_blank">Link</a>`;
      const li = document.createElement("li");
      li.innerHTML = citation;
      container.appendChild(li);
    } catch (err) {
      console.error("DOI fetch error for:", doi, err);
    }
  }
});
