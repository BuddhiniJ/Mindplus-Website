(function () {
  const searchInput = document.getElementById("globalSearch");
  const searchForm = document.querySelector(".search-form");

  if (!searchInput || !searchForm) {
    return;
  }

  const inPagesFolder = window.location.pathname.includes("/pages/");
  const prefix = inPagesFolder ? "../" : "";

  const pageIndex = [
    { url: "index.html", title: "home", terms: ["home", "abstract", "components", "mind+"] },
    { url: "pages/domain.html", title: "domain", terms: ["literature", "research", "gap", "methodology", "technologies"] },
    { url: "pages/milestones.html", title: "milestones", terms: ["proposal", "progress", "final", "viva", "assessment"] },
    { url: "pages/documents.html", title: "documents", terms: ["charter", "proposal", "checklist", "final document"] },
    { url: "pages/presentations.html", title: "presentations", terms: ["slides", "presentation", "progress presentation", "final presentation"] },
    { url: "pages/about.html", title: "about us", terms: ["team", "members", "roles", "research team"] },
    { url: "pages/contact.html", title: "contact us", terms: ["contact", "phone", "email", "message"] }
  ];

  function normalize(text) {
    return text.toLowerCase().trim();
  }

  function scoreEntry(query, entry) {
    if (entry.title === query) {
      return 100;
    }

    if (entry.title.includes(query)) {
      return 80;
    }

    let score = 0;
    entry.terms.forEach(function (term) {
      if (term === query) {
        score = Math.max(score, 75);
      } else if (term.includes(query) || query.includes(term)) {
        score = Math.max(score, 60);
      }
    });

    return score;
  }

  function searchWithinPage(query) {
    const candidates = document.querySelectorAll("h1, h2, h3, p, li, td, summary");
    for (let i = 0; i < candidates.length; i += 1) {
      const node = candidates[i];
      if (normalize(node.textContent || "").includes(query)) {
        node.scrollIntoView({ behavior: "smooth", block: "center" });
        return true;
      }
    }

    return false;
  }

  function resolveUrl(path) {
    if (!inPagesFolder) {
      return path;
    }

    if (path.startsWith("pages/")) {
      return path.replace("pages/", "");
    }

    return prefix + path;
  }

  function runSearch(rawQuery) {
    const query = normalize(rawQuery);
    if (!query) {
      return;
    }

    const scored = pageIndex
      .map(function (entry) {
        return { entry: entry, score: scoreEntry(query, entry) };
      })
      .sort(function (a, b) {
        return b.score - a.score;
      });

    if (scored[0].score > 0) {
      const targetUrl = resolveUrl(scored[0].entry.url);
      window.location.href = targetUrl;
      return;
    }

    const foundOnPage = searchWithinPage(query);
    if (!foundOnPage) {
      window.alert("No matching section found. Try terms like domain, milestones, documents, presentations, about, or contact.");
    }
  }

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    runSearch(searchInput.value);
  });
})();
