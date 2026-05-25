const assets = [
  {
    id: 215,
    code: "TEST",
    description: "TEST",
    brand: "-",
    model: "-",
    serial: "SN-TEST-215",
    location: "Head Office",
    department: "IT",
    category: "Electronics",
    status: "Active",
    external: "-"
  },
  {
    id: 216,
    code: "LAPTOP-001",
    description: "Lenovo ThinkPad",
    brand: "Lenovo",
    model: "ThinkPad T14",
    serial: "LT-2026-001",
    location: "Head Office",
    department: "IT",
    category: "Electronics",
    status: "Active",
    external: "IT-LT-001"
  },
  {
    id: 217,
    code: "CHAIR-001",
    description: "Office Chair",
    brand: "-",
    model: "Ergo",
    serial: "CH-001",
    location: "Warehouse",
    department: "Admin",
    category: "Furniture",
    status: "Active",
    external: "ADM-CH-001"
  },
  {
    id: 218,
    code: "PRN-001",
    description: "HP LaserJet Printer",
    brand: "HP",
    model: "LaserJet Pro",
    serial: "HP-LJ-2201",
    location: "Head Office",
    department: "Finance",
    category: "Electronics",
    status: "Active",
    external: "FIN-PRN-001"
  },
  {
    id: 219,
    code: "DESK-001",
    description: "Working Desk",
    brand: "-",
    model: "120 cm",
    serial: "DK-001",
    location: "Warehouse",
    department: "Admin",
    category: "Furniture",
    status: "Active",
    external: "ADM-DK-001"
  }
];

const state = {
  mode: "landing",
  webPage: "asset",
  mobilePage: "home",
  setupOpen: true,
  template: {
    templateType: "asset-label",
    size: "medium",
    codeType: "qr",
    showLogo: false,
    preview: false
  },
  modal: null,
  mobileSheet: false,
  mobileOptions: {
    size: "medium",
    codeType: "qr"
  },
  massSelected: new Set(),
  massFiltered: false,
  preview: null,
  toast: ""
};

const app = document.getElementById("app");

function setState(patch) {
  Object.assign(state, patch);
  render();
}

function showToast(message) {
  state.toast = message;
  render();
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    state.toast = "";
    render();
  }, 1800);
}

function getDefaultOptions() {
  return {
    size: state.template.size,
    codeType: state.template.codeType,
    showLogo: state.template.showLogo
  };
}

function labelSizeLabel(size) {
  return {
    small: "Small - 50 x 25 mm",
    medium: "Medium - 70 x 35 mm",
    large: "Large - 100 x 50 mm"
  }[size];
}

function codeTypeLabel(codeType) {
  return codeType === "qr" ? "QR Code" : "Barcode";
}

function templateTypeLabel(templateType) {
  return {
    "asset-label": "Asset Label"
  }[templateType];
}

function render() {
  if (state.mode === "web") {
    app.innerHTML = renderWeb();
  } else if (state.mode === "mobile") {
    app.innerHTML = renderMobile();
  } else {
    app.innerHTML = renderLanding();
  }
}

function renderLanding() {
  return `
    <main class="landing">
      <section class="landing-panel">
        <h1 class="landing-title">iReap Asset Mockup</h1>
        <p class="landing-copy">Clickable prototype for the Asset Label Printing workflow.</p>
        <div class="landing-grid">
          <button class="landing-card" data-action="choose-mode" data-mode="web">
            <span class="landing-icon">W</span>
            <strong>Web Mockup</strong>
            <span>Desktop layout with sidebar, asset list, template settings, mass print, and label preview.</span>
          </button>
          <button class="landing-card mobile" data-action="choose-mode" data-mode="mobile">
            <span class="landing-icon">M</span>
            <strong>Mobile Mockup</strong>
            <span>Mobile app prototype inside a phone frame with asset detail, print options, and preview.</span>
          </button>
        </div>
      </section>
    </main>
  `;
}

function renderWeb() {
  const page = webPageMeta();
  return `
    <div class="web-shell">
      ${renderSidebar()}
      <main class="web-main">
        <header class="topbar">
          <div class="top-left">
            <button class="hamburger" data-action="landing">=</button>
            <span class="top-brand">iReap Asset</span>
          </div>
          <div class="top-links">
            <button class="top-link" data-action="mock-only">Profile</button>
            <button class="top-link" data-action="mock-only">Language</button>
            <button class="top-link" data-action="mock-only">Support</button>
            <button class="top-link" data-action="landing">Logout</button>
          </div>
        </header>
        <section class="page-head">
          <h1 class="page-title">${page.title}</h1>
          <div class="breadcrumb">${page.breadcrumb}</div>
        </section>
        <section class="web-content">
          ${renderWebPage()}
        </section>
      </main>
      ${state.modal ? renderPrintModal() : ""}
      ${state.toast ? `<div class="mock-toast">${state.toast}</div>` : ""}
    </div>
  `;
}

function webPageMeta() {
  if (state.webPage === "templates") {
    return { title: "Print Templates", breadcrumb: "Home <span>/</span> Setup <span>/</span> Print Templates" };
  }
  if (state.webPage === "mass") {
    return { title: "Mass Print Labels", breadcrumb: "Home <span>/</span> Asset <span>/</span> Mass Print Labels" };
  }
  if (state.webPage === "preview") {
    return { title: "Label Preview", breadcrumb: "Home <span>/</span> Asset <span>/</span> Label Preview" };
  }
  return { title: "Asset", breadcrumb: "Home <span>/</span> Asset <span>/</span> <strong>Asset</strong>" };
}

function renderSidebar() {
  const isAsset = state.webPage === "asset" || state.webPage === "mass" || state.webPage === "preview";
  const isTemplates = state.webPage === "templates";
  const setupOpen = state.setupOpen || isTemplates;
  return `
    <aside class="web-sidebar">
      <div class="web-sidebar-top">
        <div class="logo-mark">
          <div class="logo-ball"></div>
          <div class="logo-text">ASSET</div>
        </div>
        <div class="profile-card">
          <strong>jennie</strong>
          <p>Administrator</p>
          <p>jennie.lou@sterling-team.com</p>
          <div class="trial">Trial - 11 Days Left</div>
          <p>11 days remaining</p>
        </div>
      </div>
      <nav class="side-nav">
        <button class="side-item" data-action="web-page" data-page="home"><span class="side-icon">H</span>Home</button>
        <button class="side-item ${isAsset ? "active" : ""}" data-action="web-page" data-page="asset"><span class="side-icon">A</span>Asset</button>
        <button class="side-item" data-action="mock-only"><span class="side-icon">G</span>Agreement</button>
        <button class="side-item" data-action="mock-only"><span class="side-icon">O</span>Operations</button>
        <div class="side-section">
          <button class="side-item ${isTemplates ? "active" : ""}" data-action="toggle-setup"><span class="side-icon">S</span>Setup <span class="side-caret">${setupOpen ? "v" : ">"}</span></button>
          ${setupOpen ? `
            <button class="side-subitem" data-action="mock-only">Company Information</button>
            <button class="side-subitem" data-action="mock-only">Locations</button>
            <button class="side-subitem" data-action="mock-only">Department</button>
            <button class="side-subitem" data-action="mock-only">Categories</button>
            <button class="side-subitem" data-action="mock-only">General Settings</button>
            <button class="side-subitem ${isTemplates ? "active" : ""}" data-action="web-page" data-page="templates">Print Templates</button>
          ` : ""}
        </div>
        <button class="side-item" data-action="mock-only"><span class="side-icon">U</span>User Management</button>
        <button class="side-item" data-action="mock-only"><span class="side-icon">?</span>How To</button>
        <button class="side-item" data-action="landing"><span class="side-icon">L</span>Logout</button>
      </nav>
      <div class="subscribe"><button data-action="mock-only">Subscribe Now</button></div>
    </aside>
  `;
}

function renderWebPage() {
  if (state.webPage === "templates") return renderPrintTemplates();
  if (state.webPage === "mass") return renderMassPrint();
  if (state.webPage === "preview") return renderWebPreview();
  if (state.webPage === "home") return renderWebHome();
  return renderAssetList();
}

function renderWebHome() {
  return `
    <div class="content-card">
      <div class="action-row">
        <button class="btn primary" data-action="web-page" data-page="asset">Open Asset List</button>
        <button class="btn secondary" data-action="web-page" data-page="templates">Print Templates</button>
      </div>
      <div class="label-grid">
        <div class="summary-card m-blue"><small>Active Assets</small>1</div>
        <div class="summary-card m-teal"><small>Active Agreements</small>0</div>
        <div class="summary-card m-orange"><small>Total Asset Value</small>IDR 0</div>
        <div class="summary-card m-red"><small>Expiring Soon</small>0</div>
      </div>
    </div>
  `;
}

function renderAssetList() {
  return `
    <div class="content-card">
      <div class="action-row">
        <button class="btn primary" data-action="mock-only">+ New Asset</button>
        <button class="btn primary" data-action="mock-only">+ Import Asset</button>
        <button class="btn primary" data-action="web-page" data-page="mass">+ Print Labels</button>
      </div>
      <div class="filter-grid">
        <label>Location</label>${selectHtml("location")}
        <label>Department</label>${selectHtml("department")}
        <label>Category</label>${selectHtml("category")}
        <button class="btn primary" data-action="mock-only">Filter</button>
        <label>Status</label>${selectHtml("status")}
      </div>
      <div class="toolbar">
        <button class="btn" data-action="mock-only">Column Settings</button>
        <button class="btn" data-action="mock-only">CSV</button>
        <button class="btn" data-action="mock-only">Excel</button>
        <button class="btn" data-action="mock-only">PDF</button>
        <span class="show">Show</span>
        <select aria-label="Show Entries"><option>10</option><option>25</option><option>50</option></select>
        <span>Entries</span>
        <span class="spacer"></span>
        <label>Search : <input aria-label="Search" /></label>
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>Photo</th><th class="sort">Asset Code</th><th class="sort">Description</th><th class="sort">Brand</th>
            <th class="sort">Model</th><th class="sort">Location</th><th class="sort">Department</th><th class="sort">Category</th>
            <th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${assets.map(renderAssetRow).join("")}
        </tbody>
      </table>
      <div class="table-footer">
        <span>Showing 1 To ${assets.length} Of ${assets.length} Entries</span>
        <div class="pagination"><button>Previous</button><button>1</button><button>Next</button></div>
      </div>
    </div>
  `;
}

function selectHtml(name) {
  const map = {
    location: ["", "Head Office", "Warehouse"],
    department: ["", "IT", "Admin", "Finance"],
    category: ["", "Electronics", "Furniture"],
    status: ["", "Active", "Inactive"]
  };
  return `<select aria-label="${name}">${map[name].map((item) => `<option>${item}</option>`).join("")}</select>`;
}

function renderAssetRow(asset) {
  return `
    <tr>
      <td><div class="photo-box">NO IMAGE<br />AVAILABLE</div></td>
      <td>${asset.code}</td>
      <td>${asset.description}</td>
      <td>${asset.brand}</td>
      <td>${asset.model}</td>
      <td>${asset.location}</td>
      <td>${asset.department}</td>
      <td>${asset.category}</td>
      <td><span class="status">${asset.status}</span></td>
      <td class="action-cell">
        <div class="action-stack">
          <button class="btn icon success" title="View" data-action="mock-only">View</button>
          <button class="btn icon secondary" title="Edit" data-action="mock-only">Edit</button>
          <button class="btn icon warning" title="Deactivate" data-action="mock-only">Deactivate</button>
          <button class="btn icon dark" title="Duplicate" data-action="mock-only">Duplicate</button>
          <button class="btn icon primary print-action" title="Print Label" data-action="single-print" data-id="${asset.id}">Print Label</button>
        </div>
      </td>
    </tr>
  `;
}

function renderPrintTemplates() {
  return `
    <div class="content-card">
      <div class="settings-actions">
        <button class="btn primary" data-action="save-template">Save</button>
        <button class="btn secondary" data-action="preview-template">Preview Template</button>
      </div>
      <div class="settings-form">
        <div class="settings-field">
          <label>Template</label>
          <select class="form-control" data-field="template-type">
            ${option("asset-label", "Asset Label", state.template.templateType)}
          </select>
        </div>
        <div class="template-settings-box">
          <h2 class="content-title">${templateTypeLabel(state.template.templateType)} Template</h2>
          <div class="settings-field">
            <label>Default Label Size</label>
            <select class="form-control" data-field="template-size">
              ${option("small", "Small - 50 x 25 mm", state.template.size)}
              ${option("medium", "Medium - 70 x 35 mm", state.template.size)}
              ${option("large", "Large - 100 x 50 mm", state.template.size)}
            </select>
          </div>
          <div class="settings-field">
            <label>Default Code Type</label>
            <select class="form-control" data-field="template-codeType">
              ${option("qr", "QR Code", state.template.codeType)}
              ${option("barcode", "Barcode", state.template.codeType)}
            </select>
          </div>
          <div class="settings-field">
            <label>Show Company Logo</label>
            <label class="plain-check">
              <input type="checkbox" data-field="template-logo" ${state.template.showLogo ? "checked" : ""} />
              Show company logo
            </label>
          </div>
          <p class="settings-note">Logo setting is saved as the default. The logo only appears on Large labels.</p>
        </div>
        ${state.template.preview ? `<div class="inline-preview settings-preview">${renderLabel(assets[0], state.template, true)}</div>` : ""}
      </div>
    </div>
  `;
}

function renderMassPrint() {
  const visibleIds = assets.slice(0, 3).map((asset) => asset.id);
  const allVisibleSelected = visibleIds.every((id) => state.massSelected.has(id));
  return `
    <div class="content-card">
      <div class="settings-actions mass-top-actions">
        <button class="btn primary" data-action="mass-print-selected">Print Selected Labels</button>
        <button class="btn ghost" data-action="web-page" data-page="asset">Back to list</button>
      </div>
      <div class="filter-grid mass">
        <label>Location</label>${selectHtml("location")}
        <label>Department</label>${selectHtml("department")}
        <label>Category</label>${selectHtml("category")}
        <label>Status</label>${selectHtml("status")}
        <span></span>
        <button class="btn primary" data-action="mass-filter">Filter</button>
      </div>
      ${state.massFiltered ? `
        <div class="toolbar">
          <button class="btn" data-action="mock-only">Column Settings</button>
          <button class="btn" data-action="mock-only">CSV</button>
          <button class="btn" data-action="mock-only">Excel</button>
          <button class="btn" data-action="mock-only">PDF</button>
          <span class="show">Show</span>
          <select aria-label="Show Entries"><option>10</option><option>25</option><option>50</option></select>
          <span>Entries</span>
          <span class="spacer"></span>
          <label>Search : <input aria-label="Search Assets" /></label>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th><input type="checkbox" data-action="mass-toggle-all" ${allVisibleSelected ? "checked" : ""} /> Select All</th>
              <th>Asset Code</th><th>Description</th><th>Location</th><th>Department</th><th>Category</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${assets.slice(0, 3).map(renderMassRow).join("")}
          </tbody>
        </table>
        <div class="table-footer">
          <span>Showing 1 To 3 Of 3 Entries</span>
          <div class="pagination"><button>Previous</button><button>1</button><button>Next</button></div>
        </div>
      ` : `
        <div class="empty-state">Please filter assets to start selecting labels.</div>
      `}
    </div>
  `;
}

function renderMassRow(asset) {
  return `
    <tr>
      <td><input type="checkbox" data-action="mass-toggle" data-id="${asset.id}" ${state.massSelected.has(asset.id) ? "checked" : ""} /></td>
      <td>${asset.code}</td>
      <td>${asset.description}</td>
      <td>${asset.location}</td>
      <td>${asset.department}</td>
      <td>${asset.category}</td>
      <td><span class="status">${asset.status}</span></td>
    </tr>
  `;
}

function renderPrintModal() {
  const options = state.modal.options;
  return `
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true" aria-label="Print Label Options">
        <div class="modal-head">Print Label Options</div>
        <div class="modal-body">
          <div class="field">
            <label>Label Size</label>
            <select class="form-control" data-field="modal-size">
              ${option("small", "Small - 50 x 25 mm", options.size)}
              ${option("medium", "Medium - 70 x 35 mm", options.size)}
              ${option("large", "Large - 100 x 50 mm", options.size)}
            </select>
          </div>
          <div class="field">
            <label>Code Type</label>
            <select class="form-control" data-field="modal-code">
              ${option("qr", "QR Code", options.codeType)}
              ${option("barcode", "Barcode", options.codeType)}
            </select>
          </div>
          <div class="field">
            <label>Show Company Logo</label>
            <label class="plain-check modal-check">
              <input type="checkbox" data-field="modal-logo" ${options.showLogo ? "checked" : ""} />
              Show company logo
            </label>
          </div>
          <p class="modal-note">Logo only appears when the selected label size is Large.</p>
        </div>
        <div class="modal-actions">
          <button class="btn ghost" data-action="close-modal">Cancel</button>
          <button class="btn primary" data-action="preview-labels">Preview</button>
        </div>
      </div>
    </div>
  `;
}

function option(value, label, selectedValue) {
  return `<option value="${value}" ${value === selectedValue ? "selected" : ""}>${label}</option>`;
}

function renderWebPreview() {
  const preview = state.preview || {
    assets: [assets[0]],
    options: getDefaultOptions(),
    source: "single"
  };
  return `
    <div class="content-card">
      <div class="preview-top">
        <button class="btn ghost" data-action="preview-back">Back</button>
        <button class="btn primary" data-action="mock-only">Download PDF</button>
        <button class="btn primary" data-action="mock-only">Print</button>
      </div>
      <div class="preview-canvas">
        <div class="label-grid">
          ${preview.assets.map((asset) => renderLabel(asset, preview.options, true)).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderLabel(asset, options, includeScaleClass) {
  const size = options.size;
  const code = options.codeType;
  const showCompany = size === "large" && Boolean(options.showLogo);
  const labelClass = `asset-label label-${size} ${code === "barcode" ? "label-barcode" : "label-qr"}${includeScaleClass ? "" : ""}`;
  const codeArt = code === "qr" ? `<div class="code-art qr-art" title="QR URL: https://asset.ireappos.com/apps/asset/view/${asset.id}"></div>` : `<div class="code-art barcode-art" title="Barcode: ${asset.code}"></div>`;
  const lines = [
    `<strong>${asset.code}</strong>`,
    `<div>${asset.description}</div>`
  ];
  if (size === "medium" || size === "large") lines.push(`<div>${asset.location}</div>`);
  if (size === "large") {
    lines.push(`<div>${asset.department}</div>`);
    lines.push(`<div>Serial No: ${asset.serial}</div>`);
  }
  return `
    <div class="${labelClass}">
      ${showCompany ? `<div class="label-company">iReap Asset</div>` : ""}
      ${codeArt}
      <div class="label-lines">${lines.join("")}</div>
    </div>
  `;
}

function renderMobile() {
  return `
    <main class="mobile-stage">
      <section class="phone-frame">
        <div class="phone-screen">
          ${renderMobileScreen()}
          ${state.mobileSheet ? renderMobileSheet() : ""}
          ${state.toast ? `<div class="mock-toast">${state.toast}</div>` : ""}
        </div>
      </section>
    </main>
  `;
}

function renderMobileScreen() {
  if (state.mobilePage === "assets") return renderMobileAssets();
  if (state.mobilePage === "detail") return renderMobileDetail();
  if (state.mobilePage === "setup") return renderMobileSetup();
  if (state.mobilePage === "mobileTemplates") return renderMobileTemplates();
  if (state.mobilePage === "preview") return renderMobilePreview();
  return renderMobileHome();
}

function renderMobileHome() {
  return `
    <div class="mobile-header">
      <div class="mobile-home-top">
        <div class="mobile-title">iReap Asset</div>
        <div class="mobile-icons"><span>?</span><span>S</span><span>M</span><button class="mobile-logout" data-action="landing">L</button></div>
      </div>
    </div>
    <div class="mobile-user-card">
      <div class="avatar">J</div>
      <strong>jennie</strong>
      <p>administrator</p>
      <p>Trial Active: 11 days remaining</p>
      <span class="starter">Starter</span>
      <button class="mobile-wide-btn" data-action="mock-only">User Management</button>
      <button class="mobile-outline-btn" data-action="mock-only">View Plans</button>
    </div>
    <section class="mobile-section">
      <h2>Categories</h2>
      <div class="category-grid">
        ${mobileCategory("Assets", "A", "linear-gradient(135deg,#71d1ff,#806bff)", "mobile-page", "assets")}
        ${mobileCategory("Agreements", "G", "linear-gradient(135deg,#ffd454,#ff5f6d)", "mock-only")}
        ${mobileCategory("Operations", "O", "linear-gradient(135deg,#32a7ee,#4837e3)", "mock-only")}
        ${mobileCategory("Setup", "S", "linear-gradient(135deg,#28d5cd,#10c46a)", "mobile-page", "setup")}
      </div>
    </section>
    <section class="mobile-section">
      <h2>Summary</h2>
      <div class="summary-grid">
        <div class="summary-card m-blue"><small>Active Assets</small>0</div>
        <div class="summary-card m-teal"><small>Active Agreements</small>0</div>
        <div class="summary-card m-orange"><small>Total Asset Value</small>IDR 0</div>
        <div class="summary-card m-red"><small>Expiring Soon</small>0</div>
      </div>
    </section>
  `;
}

function mobileCategory(label, icon, bg, action, page) {
  return `
    <button class="category-btn" data-action="${action}" ${page ? `data-page="${page}"` : ""}>
      <span class="category-icon" style="background:${bg}">${icon}</span>
      ${label}
    </button>
  `;
}

function renderMobileAssets() {
  return `
    ${mobileHeader("Assets List", "home")}
    <div class="screen-content">
      <div class="mobile-search-row">
        <div class="mobile-search"><span>Q</span><input placeholder="Search" /><span>QR</span></div>
        <button class="filter-plain" data-action="mock-only">F</button>
      </div>
      <button class="mobile-add" data-action="mock-only">ADD</button>
      <div class="mobile-list-title">Asset List</div>
      <button class="mobile-asset-card" data-action="mobile-page" data-page="detail">
        <span class="mobile-photo">I</span>
        <span>
          <strong>TEST</strong>
          <p>TEST</p>
          <p>Head Office</p>
        </span>
        <span class="mobile-arrow">&gt;</span>
      </button>
    </div>
  `;
}

function mobileHeader(title, backPage) {
  return `
    <header class="mobile-header compact">
      <button class="mobile-back" data-action="mobile-page" data-page="${backPage}">&lt;</button>
      <div class="mobile-title">${title}</div>
    </header>
  `;
}

function renderMobileSetup() {
  return `
    ${mobileHeader("Setup", "home")}
    <div class="screen-content setup-list">
      ${setupItem("Company Information", "B", "setup-green", "mock-only")}
      ${setupItem("Locations", "P", "setup-blue", "mock-only")}
      ${setupItem("Departments", "D", "setup-olive", "mock-only")}
      ${setupItem("Categories", "C", "setup-cyan", "mock-only")}
      ${setupItem("General Settings", "G", "setup-red", "mock-only")}
      ${setupItem("Print Templates", "T", "setup-purple", "mobile-page", "mobileTemplates")}
    </div>
  `;
}

function setupItem(label, icon, colorClass, action, page) {
  return `
    <button class="setup-item" data-action="${action}" ${page ? `data-page="${page}"` : ""}>
      <span class="setup-icon ${colorClass}">${icon}</span>
      <span>${label}</span>
      <span class="setup-arrow">&gt;</span>
    </button>
  `;
}

function renderMobileTemplates() {
  return `
    ${mobileHeader("Print Templates", "setup")}
    <div class="screen-content mobile-template-screen">
      <div class="mobile-template-actions">
        <button class="btn primary" data-action="save-template">Save</button>
        <button class="btn secondary" data-action="preview-template">Preview</button>
      </div>
      <div class="mobile-field">
        <label>Template</label>
        <select class="mobile-select" data-field="template-type">
          ${option("asset-label", "Asset Label", state.template.templateType)}
        </select>
      </div>
      <div class="mobile-template-box">
        <h2>Asset Label Template</h2>
        <div class="mobile-field">
          <label>Default Label Size</label>
          <select class="mobile-select" data-field="template-size">
            ${option("small", "Small - 50 x 25 mm", state.template.size)}
            ${option("medium", "Medium - 70 x 35 mm", state.template.size)}
            ${option("large", "Large - 100 x 50 mm", state.template.size)}
          </select>
        </div>
        <div class="mobile-field">
          <label>Default Code Type</label>
          <select class="mobile-select" data-field="template-codeType">
            ${option("qr", "QR Code", state.template.codeType)}
            ${option("barcode", "Barcode", state.template.codeType)}
          </select>
        </div>
        <label class="mobile-check">
          <input type="checkbox" data-field="template-logo" ${state.template.showLogo ? "checked" : ""} />
          Show company logo
        </label>
        <p class="mobile-note">Logo only appears on Large labels.</p>
      </div>
      ${state.template.preview ? `<div class="mobile-template-preview">${renderLabel(assets[0], state.template, false)}</div>` : ""}
    </div>
  `;
}

function renderMobileDetail() {
  const asset = assets[0];
  return `
    ${mobileHeader("Asset - TEST", "assets")}
    <div class="tabs">
      <button class="tab active">Detail</button>
      <button class="tab">History</button>
      <button class="tab">Agreement</button>
      <button class="tab">Photos</button>
    </div>
    <div class="detail-body">
      <div class="detail-hero">
        <div class="detail-img">I</div>
        <div><strong>${asset.code}</strong><p>${asset.description}</p></div>
      </div>
      ${detailRow("Status", `<span class="status green">${asset.status}</span>`)}
      ${detailRow("External Code", asset.external)}
      ${detailRow("Brand", asset.brand)}
      ${detailRow("Model", asset.model)}
      ${detailRow("Serial No", asset.serial)}
      <h2 class="purchase-title">Purchase Details</h2>
      ${detailRow("Purchase Vendor", "-")}
      ${detailRow("Purchase Date", "-")}
      ${detailRow("Purchase Amount", "-")}
    </div>
    <div class="bottom-actions">
      <button data-action="mock-only"><span>E</span>Edit</button>
      <button data-action="mock-only"><span>D</span>Duplicate</button>
      <button data-action="mock-only"><span>X</span>Deactivate</button>
      <button data-action="open-mobile-sheet"><span>P</span>Print</button>
    </div>
  `;
}

function detailRow(label, value) {
  return `<div class="detail-row"><span>${label}</span><span>${value}</span></div>`;
}

function renderMobileSheet() {
  return `
    <div class="bottom-sheet-backdrop">
      <div class="bottom-sheet">
        <h3>Print Label Options</h3>
        <div class="mobile-field">
          <label>Label Size</label>
          <div class="mobile-segment">
            ${mobileSegment("size", "small", "Small")}
            ${mobileSegment("size", "medium", "Medium")}
            ${mobileSegment("size", "large", "Large")}
          </div>
        </div>
        <div class="mobile-field">
          <label>Code Type</label>
          <div class="mobile-segment two">
            ${mobileSegment("codeType", "qr", "QR Code")}
            ${mobileSegment("codeType", "barcode", "Barcode")}
          </div>
        </div>
        <label class="mobile-check">
          <input type="checkbox" data-field="mobile-print-logo" ${state.mobileOptions.showLogo ? "checked" : ""} />
          Show company logo
        </label>
        <p class="mobile-note">Logo only appears when Large is selected.</p>
        <div class="sheet-actions">
          <button class="btn ghost" data-action="close-mobile-sheet">Cancel</button>
          <button class="btn primary" data-action="mobile-preview">Preview</button>
        </div>
      </div>
    </div>
  `;
}

function mobileSegment(field, value, label) {
  return `<button class="${state.mobileOptions[field] === value ? "active" : ""}" data-action="mobile-option" data-field="${field}" data-value="${value}">${label}</button>`;
}

function renderMobilePreview() {
  return `
    ${mobileHeader("Label Preview", "detail")}
    <div class="mobile-preview">
      ${renderLabel(assets[0], state.mobileOptions, false)}
      <div class="mobile-preview-actions">
        <button class="btn primary" data-action="mock-only">Share PDF</button>
        <button class="btn primary" data-action="mock-only">Print</button>
      </div>
    </div>
  `;
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "choose-mode") {
    setState({ mode: target.dataset.mode });
    return;
  }

  if (action === "landing") {
    state.modal = null;
    state.mobileSheet = false;
    setState({ mode: "landing" });
    return;
  }

  if (action === "web-page") {
    state.modal = null;
    if (target.dataset.page === "mass") {
      state.massFiltered = false;
      state.massSelected.clear();
    }
    setState({ webPage: target.dataset.page });
    return;
  }

  if (action === "toggle-setup") {
    state.setupOpen = !state.setupOpen;
    render();
    return;
  }

  if (action === "single-print") {
    const asset = assets.find((item) => item.id === Number(target.dataset.id));
    state.modal = { source: "single", assets: [asset], options: getDefaultOptions() };
    render();
    return;
  }

  if (action === "mass-toggle") {
    const id = Number(target.dataset.id);
    if (state.massSelected.has(id)) state.massSelected.delete(id);
    else state.massSelected.add(id);
    render();
    return;
  }

  if (action === "mass-toggle-all") {
    const visibleIds = assets.slice(0, 3).map((asset) => asset.id);
    const allSelected = visibleIds.every((id) => state.massSelected.has(id));
    visibleIds.forEach((id) => allSelected ? state.massSelected.delete(id) : state.massSelected.add(id));
    render();
    return;
  }

  if (action === "mass-print-selected") {
    if (!state.massFiltered) {
      window.alert("Please click Filter before selecting assets.");
      return;
    }
    const selected = assets.filter((asset) => state.massSelected.has(asset.id));
    if (!selected.length) {
      window.alert("Please select at least one asset.");
      return;
    }
    state.modal = { source: "mass", assets: selected, options: getDefaultOptions() };
    render();
    return;
  }

  if (action === "mass-filter") {
    state.massFiltered = true;
    render();
    return;
  }

  if (action === "close-modal") {
    state.modal = null;
    render();
    return;
  }

  if (action === "preview-labels") {
    state.preview = {
      source: state.modal.source,
      assets: state.modal.assets,
      options: { ...state.modal.options }
    };
    state.modal = null;
    setState({ webPage: "preview" });
    return;
  }

  if (action === "preview-back") {
    setState({ webPage: state.preview && state.preview.source === "mass" ? "mass" : "asset" });
    return;
  }

  if (action === "save-template") {
    showToast("Template settings saved for mockup.");
    return;
  }

  if (action === "preview-template") {
    state.template.preview = true;
    render();
    return;
  }

  if (action === "mobile-page") {
    state.mobileSheet = false;
    setState({ mobilePage: target.dataset.page });
    return;
  }

  if (action === "open-mobile-sheet") {
    state.mobileOptions = getDefaultOptions();
    state.mobileSheet = true;
    render();
    return;
  }

  if (action === "close-mobile-sheet") {
    state.mobileSheet = false;
    render();
    return;
  }

  if (action === "mobile-option") {
    state.mobileOptions[target.dataset.field] = target.dataset.value;
    render();
    return;
  }

  if (action === "mobile-preview") {
    state.mobileSheet = false;
    setState({ mobilePage: "preview" });
    return;
  }

  if (action === "mock-only") {
    showToast("Mockup only");
  }
});

document.addEventListener("change", (event) => {
  const field = event.target.dataset.field;
  if (!field) return;

  if (field === "template-size") {
    state.template.size = event.target.value;
    render();
  }

  if (field === "template-codeType") {
    state.template.codeType = event.target.value;
    render();
  }

  if (field === "template-type") {
    state.template.templateType = event.target.value;
    state.template.preview = false;
    render();
  }

  if (field === "template-logo") {
    state.template.showLogo = event.target.checked;
    render();
  }

  if (field === "modal-size") {
    state.modal.options.size = event.target.value;
  }

  if (field === "modal-code") {
    state.modal.options.codeType = event.target.value;
  }

  if (field === "modal-logo") {
    state.modal.options.showLogo = event.target.checked;
  }

  if (field === "mobile-print-logo") {
    state.mobileOptions.showLogo = event.target.checked;
    render();
  }
});

render();
