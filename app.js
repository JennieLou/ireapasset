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
    status: "Retired",
    retiredReason: "Sold",
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

const transferNo = "TRF-2026050001";
const transferDefaults = {
  no: transferNo,
  type: "Location",
  date: "26-05-2026",
  createdAt: "26-05-2026 14:30",
  user: "Jennie",
  fromLocation: "Head Office",
  toLocation: "Warehouse",
  fromDepartment: "-",
  toDepartment: "GA",
  remarks: "Temporary movement for stock opname",
  assetIds: [215, 216, 217]
};

const transfers = [
  transferDefaults,
  {
    no: "TRF-2026050002",
    type: "Department",
    date: "27-05-2026",
    createdAt: "27-05-2026 09:15",
    user: "Jennie",
    fromLocation: "-",
    toLocation: "-",
    fromDepartment: "IT",
    toDepartment: "GA",
    remarks: "Department reassignment for shared equipment",
    assetIds: [215, 216]
  }
];

const retirementNo = "RET-2026050001";
const retirementDefaults = {
  no: retirementNo,
  date: "26-05-2026",
  createdAt: "26-05-2026 15:20",
  user: "Jennie",
  reason: "Scrapped",
  remarks: "Damaged beyond repair",
  assetIds: [215, 216, 217]
};

const retirements = [
  retirementDefaults
];

const state = {
  mode: "landing",
  webPage: "asset",
  mobilePage: "home",
  assetOpen: true,
  operationsOpen: true,
  setupOpen: true,
  assetTab: "detail",
  template: {
    templateType: "asset-label",
    size: "medium",
    codeType: "qr",
    qrContent: "url",
    showLogo: false,
    preview: false
  },
  transactionTemplate: {
    paperSize: "A4",
    showLogo: true,
    preview: false
  },
  modal: null,
  mobileSheet: false,
  mobileOptions: {
    size: "medium",
    codeType: "qr",
    qrContent: "url",
    showLogo: false
  },
  massSelected: new Set(),
  massFiltered: false,
  transferForm: {
    type: "Location",
    fromLocation: "Head Office",
    toLocation: "Warehouse",
    fromDepartment: "IT",
    toDepartment: "GA"
  },
  transferSelected: new Set([215]),
  transferViewIds: [...transferDefaults.assetIds],
  transferViewNo: transferDefaults.no,
  selectedAssetId: 215,
  retirementSelected: new Set([215]),
  retirementViewIds: [...retirementDefaults.assetIds],
  retirementViewNo: retirementDefaults.no,
  savedRetirement: null,
  retirementReason: "Scrapped",
  retiredAssets: new Set([218]),
  retirementReasonByAsset: { 218: "Sold" },
  transactionPreviewType: "transfer",
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
    qrContent: state.template.qrContent,
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

function qrContentLabel(qrContent) {
  return qrContent === "asset-code" ? "Asset Code" : "Asset Detail URL";
}

function templateTypeLabel(templateType) {
  return {
    "asset-label": "Asset Label",
    transaction: "Transaction"
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
        <p class="landing-copy">Clickable prototype for iReap Asset operations, asset management, templates, and transaction workflows.</p>
        <div class="landing-grid">
          <button class="landing-card" data-action="choose-mode" data-mode="web">
            <span class="landing-icon">W</span>
            <strong>Web Mockup</strong>
            <span>Desktop layout with sidebar, asset list, operations, transfer transactions, templates, and PDF previews.</span>
          </button>
          <button class="landing-card mobile" data-action="choose-mode" data-mode="mobile">
            <span class="landing-icon">M</span>
            <strong>Mobile Mockup</strong>
            <span>Mobile app prototype inside a phone frame with asset detail, operations, transfer, and template previews.</span>
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
      ${state.modal === "assetLookup" ? renderAssetLookupModal() : state.modal === "retirementAssetLookup" ? renderRetirementAssetLookupModal() : state.modal ? renderPrintModal() : ""}
      ${state.toast ? `<div class="mock-toast">${state.toast}</div>` : ""}
    </div>
  `;
}

function webPageMeta() {
  if (state.webPage === "transfer") {
    return { title: "Transfer Asset", breadcrumb: "Home <span>/</span> Operations <span>/</span> <strong>Transfer Asset</strong>" };
  }
  if (state.webPage === "transferNew") {
    return { title: "New Transfer", breadcrumb: "Home <span>/</span> Operations <span>/</span> Transfer Asset <span>/</span> <strong>New Transfer</strong>" };
  }
  if (state.webPage === "transferView") {
    return { title: "View Transfer", breadcrumb: "Home <span>/</span> Operations <span>/</span> Transfer Asset <span>/</span> <strong>View Transfer</strong>" };
  }
  if (state.webPage === "retirement") {
    return { title: "Retirement Asset", breadcrumb: "Home <span>/</span> Operations <span>/</span> <strong>Retirement Asset</strong>" };
  }
  if (state.webPage === "retirementNew") {
    return { title: "New Retirement", breadcrumb: "Home <span>/</span> Operations <span>/</span> Retirement Asset <span>/</span> <strong>New Retirement</strong>" };
  }
  if (state.webPage === "retirementView") {
    return { title: "View Retirement", breadcrumb: "Home <span>/</span> Operations <span>/</span> Retirement Asset <span>/</span> <strong>View Retirement</strong>" };
  }
  if (state.webPage === "transactionPreview") {
    return { title: "Transaction PDF Preview", breadcrumb: "Home <span>/</span> Operations <span>/</span> <strong>PDF Preview</strong>" };
  }
  if (state.webPage === "assetDetail") {
    return { title: "Asset", breadcrumb: "Home <span>/</span> Asset <span>/</span> <strong>View Asset</strong>" };
  }
  if (state.webPage === "templates") {
    return { title: "Print Templates", breadcrumb: "Home <span>/</span> Setup <span>/</span> Print Templates" };
  }
  if (state.webPage === "mass") {
    return { title: "Mass Print Labels", breadcrumb: "Home <span>/</span> Asset <span>/</span> Print Labels" };
  }
  if (state.webPage === "preview") {
    return { title: "Label Preview", breadcrumb: "Home <span>/</span> Asset <span>/</span> Label Preview" };
  }
  return { title: "Asset", breadcrumb: "Home <span>/</span> Asset <span>/</span> <strong>Asset</strong>" };
}

function renderSidebar() {
  const isAsset = state.webPage === "asset" || state.webPage === "assetDetail" || state.webPage === "mass" || state.webPage === "preview";
  const isOperations = state.webPage === "transfer" || state.webPage === "transferNew" || state.webPage === "transferView" || state.webPage === "retirement" || state.webPage === "retirementNew" || state.webPage === "retirementView" || state.webPage === "transactionPreview";
  const isTemplates = state.webPage === "templates";
  const assetOpen = state.assetOpen || isAsset;
  const operationsOpen = state.operationsOpen;
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
        <div class="side-section">
          <button class="side-item ${isAsset ? "active" : ""}" data-action="toggle-asset"><span class="side-icon">A</span>Asset <span class="side-caret">${assetOpen ? "v" : ">"}</span></button>
          ${assetOpen ? `
            <button class="side-subitem ${state.webPage === "asset" ? "active" : ""}" data-action="web-page" data-page="asset">Asset List</button>
            <button class="side-subitem ${state.webPage === "mass" ? "active" : ""}" data-action="web-page" data-page="mass">Print Labels</button>
          ` : ""}
        </div>
        <button class="side-item" data-action="mock-only"><span class="side-icon">G</span>Agreement</button>
        <div class="side-section">
          <button class="side-item ${isOperations ? "active" : ""}" data-action="toggle-operations"><span class="side-icon">O</span>Operations <span class="side-caret">${operationsOpen ? "v" : ">"}</span></button>
          ${operationsOpen ? `
            <button class="side-subitem ${state.webPage === "transfer" || state.webPage === "transferNew" || state.webPage === "transferView" ? "active" : ""}" data-action="web-page" data-page="transfer">Transfer Asset</button>
            <button class="side-subitem ${state.webPage === "retirement" || state.webPage === "retirementNew" || state.webPage === "retirementView" ? "active" : ""}" data-action="web-page" data-page="retirement">Retirement Asset</button>
          ` : ""}
        </div>
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
  if (state.webPage === "transfer") return renderTransferList();
  if (state.webPage === "transferNew") return renderTransferNew();
  if (state.webPage === "transferView") return renderTransferView();
  if (state.webPage === "retirement") return renderRetirementList();
  if (state.webPage === "retirementNew") return renderRetirementNew();
  if (state.webPage === "retirementView") return renderRetirementView();
  if (state.webPage === "transactionPreview") return renderTransactionPdfPreview();
  if (state.webPage === "assetDetail") return renderAssetDetail();
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
    status: ["", "Active", "Inactive", "Retired"]
  };
  return `<select aria-label="${name}">${map[name].map((item) => `<option>${item}</option>`).join("")}</select>`;
}

function renderAssetRow(asset) {
  const retired = isRetiredAsset(asset);
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
      <td><span class="status ${retired ? "retired" : "green"}">${assetStatusLabel(asset)}</span></td>
      <td class="action-cell">
        <div class="action-stack">
          <button class="btn icon success" title="View" data-action="asset-view" data-id="${asset.id}">View</button>
          <button class="btn icon secondary" title="Edit" data-action="mock-only">Edit</button>
          ${retired ? "" : `<button class="btn icon warning" title="Deactivate" data-action="mock-only">Deactivate</button>`}
          <button class="btn icon dark" title="Duplicate" data-action="mock-only">Duplicate</button>
          <button class="btn icon primary print-action" title="Print Label" data-action="single-print" data-id="${asset.id}">Print Label</button>
        </div>
      </td>
    </tr>
  `;
}

function renderAssetDetail() {
  const asset = selectedAsset();
  return `
    <div class="content-card">
      <div class="settings-actions">
        <button class="btn ghost" data-action="web-page" data-page="asset">Back to list</button>
      </div>
      <div class="asset-view-head">
        <div class="photo-box large">NO IMAGE<br />AVAILABLE</div>
        <table class="info-table">
          <tbody>
            <tr><th>Asset Code</th><td>${asset.code}</td></tr>
            <tr><th>Description</th><td>${asset.description}</td></tr>
            <tr><th>Status</th><td><span class="status ${isRetiredAsset(asset) ? "retired" : "green"}">${assetStatusLabel(asset)}</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="web-tabs">
        ${webAssetTab("detail", "Details")}
        ${webAssetTab("history", "History")}
        ${webAssetTab("agreement", "Agreement")}
        ${webAssetTab("photo", "Photo")}
        ${webAssetTab("files", "Files")}
      </div>
      ${state.assetTab === "history" ? renderAssetHistory(asset) : renderAssetInfo(asset)}
    </div>
  `;
}

function webAssetTab(value, label) {
  return `<button class="${state.assetTab === value ? "active" : ""}" data-action="asset-tab" data-tab="${value}">${label}</button>`;
}

function renderAssetInfo(asset) {
  const statusLabel = assetStatusLabel(asset);
  const retired = isRetiredAsset(asset);
  if (state.assetTab !== "detail") {
    return `<div class="empty-state">Mockup only</div>`;
  }
  return `
    <table class="data-table detail-table">
      <tbody>
        <tr><th>External Code</th><td>${asset.external}</td><th>Brand</th><td>${asset.brand}</td></tr>
        <tr><th>Model</th><td>${asset.model}</td><th>Serial No</th><td>${asset.serial}</td></tr>
        <tr><th>Location</th><td>${asset.location}</td><th>Department</th><td>${asset.department}</td></tr>
        <tr><th>Category</th><td>${asset.category}</td><th>Status</th><td><span class="status ${retired ? "retired" : "green"}">${statusLabel}</span></td></tr>
      </tbody>
    </table>
    <div class="asset-bottom-actions">
      <button class="btn secondary" data-action="mock-only">Edit</button>
      <button class="btn dark" data-action="mock-only">Duplicate</button>
      ${retired ? "" : `<button class="btn warning" data-action="mock-only">Deactivate</button>`}
      <button class="btn primary" data-action="single-print" data-id="${asset.id}">Print</button>
    </div>
  `;
}

function assetStatusLabel(asset) {
  return isRetiredAsset(asset)
    ? `Retired - ${state.retirementReasonByAsset[asset.id] || asset.retiredReason || retirementDefaults.reason}`
    : asset.status;
}

function renderAssetHistory() {
  return `
    <div class="history-filters">
      <label>Type</label>
      <select><option>All Types</option><option>Retirement Asset</option><option>Transfer Asset</option><option>Create Asset</option></select>
      <label>User</label>
      <select><option>All Users</option><option>Jennie</option></select>
      <label>Date</label>
      <input value="26-02-2026 - 26-05-2026" aria-label="History date" />
      <button class="btn primary" data-action="mock-only">Submit</button>
    </div>
    <div class="toolbar">
      <span class="show">Show</span>
      <select aria-label="Show Entries"><option>10</option><option>25</option><option>50</option></select>
      <span>Entries</span>
      <span class="spacer"></span>
      <button class="btn" data-action="mock-only">Column Settings</button>
      <span class="spacer"></span>
      <label>Search : <input aria-label="Search History" /></label>
    </div>
    <table class="data-table">
      <thead>
        <tr><th class="sort">Type</th><th class="sort">Date Time</th><th>User</th><th>Related Transaction</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>Retirement Asset</td>
          <td>${retirementDefaults.createdAt}</td>
          <td>Jennie</td>
          <td><button class="link-button" data-action="view-retirement">${retirementNo}</button></td>
        </tr>
        <tr>
          <td>Transfer Asset</td>
          <td>${transferDefaults.createdAt}</td>
          <td>Jennie</td>
          <td><button class="link-button" data-action="view-transfer">${transferNo}</button></td>
        </tr>
        <tr>
          <td>Create Asset</td>
          <td>25-05-2026 14:16</td>
          <td>jennie</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <div class="table-footer">
      <span>Showing 1 To 3 Of 3 Entries</span>
      <div class="pagination"><button>Previous</button><button>1</button><button>Next</button></div>
    </div>
  `;
}

function selectedTransferAssets() {
  const ids = state.transferSelected.size ? [...state.transferSelected] : [];
  return assets.filter((asset) => ids.includes(asset.id) && !state.retiredAssets.has(asset.id));
}

function viewTransferAssets() {
  const ids = state.transferViewIds.length ? state.transferViewIds : transferDefaults.assetIds;
  return assets.filter((asset) => ids.includes(asset.id));
}

function currentTransfer() {
  return transfers.find((transfer) => transfer.no === state.transferViewNo) || transferDefaults;
}

function currentRetirement() {
  if (state.savedRetirement && state.savedRetirement.no === state.retirementViewNo) return state.savedRetirement;
  return retirements.find((retirement) => retirement.no === state.retirementViewNo) || retirementDefaults;
}

function transferRouteLabel(transfer) {
  return transfer.type === "Department"
    ? `${transfer.fromDepartment} -> ${transfer.toDepartment}`
    : `${transfer.fromLocation} -> ${transfer.toLocation}`;
}

function selectedRetirementAssets() {
  const ids = state.retirementSelected.size ? [...state.retirementSelected] : [];
  return assets.filter((asset) => ids.includes(asset.id) && !state.retiredAssets.has(asset.id));
}

function viewRetirementAssets() {
  const ids = state.retirementViewIds.length ? state.retirementViewIds : retirementDefaults.assetIds;
  return assets.filter((asset) => ids.includes(asset.id));
}

function selectedAsset() {
  return assets.find((asset) => asset.id === state.selectedAssetId) || assets[0];
}

function isRetiredAsset(asset) {
  return asset.status === "Retired" || state.retiredAssets.has(asset.id);
}

function renderTransferList() {
  return `
    <div class="content-card">
      <div class="action-row">
        <button class="btn primary" data-action="new-transfer">+ New Transfer</button>
      </div>
      <div class="filter-grid transfer-filter">
        <label>Period</label><input value="01-05-2026 - 31-05-2026" aria-label="Period" />
        <label>Type</label><select aria-label="Type"><option>All Types</option><option>Location</option><option>Department</option></select>
        <label>User</label><select aria-label="User"><option>All Users</option><option>Jennie</option></select>
        <button class="btn primary" data-action="mock-only">Filter</button>
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
            <th class="sort">Transfer No</th><th>Date</th><th>Type</th><th>Asset Count</th><th>From</th><th>To</th>
            <th>Remarks</th><th>Created By</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${transfers.map((transfer) => `
            <tr>
              <td>${transfer.no}</td>
              <td>${transfer.date}</td>
              <td>${transfer.type}</td>
              <td>${transfer.assetIds.length} Assets</td>
              <td>${transfer.type === "Department" ? transfer.fromDepartment : transfer.fromLocation}</td>
              <td>${transfer.type === "Department" ? transfer.toDepartment : transfer.toLocation}</td>
              <td>${transfer.remarks}</td>
              <td>${transfer.user}</td>
              <td class="transfer-action-cell">
                <button class="btn icon success" data-action="view-transfer" data-transfer="${transfer.no}">View</button>
                <button class="btn icon primary" data-action="export-transfer-pdf" data-transfer="${transfer.no}">Export PDF</button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div class="table-footer">
        <span>Showing 1 To ${transfers.length} Of ${transfers.length} Entries</span>
        <div class="pagination"><button>Previous</button><button>1</button><button>Next</button></div>
      </div>
    </div>
  `;
}

function renderTransferNew() {
  const selected = selectedTransferAssets();
  const isLocation = state.transferForm.type === "Location";
  return `
    <div class="content-card">
      <div class="settings-actions">
        <button class="btn primary" data-action="save-transfer">Save Transfer</button>
        <button class="btn ghost" data-action="web-page" data-page="transfer">Back to list</button>
      </div>
      <div class="section-divider"><span>Transfer Details</span></div>
      <div class="agreement-form">
        <label>Transfer No</label><input class="form-control readonly" value="${transferNo}" readonly />
        <label>Date</label><input class="form-control" value="26-05-2026" />
        <label>Remarks</label><textarea class="form-control" rows="3">${transferDefaults.remarks}</textarea>
      </div>
      <div class="section-divider"><span>Transfer Info</span></div>
      <div class="agreement-form">
        <label>Transfer Type</label>
        <select class="form-control" data-field="transfer-type">
          ${option("Location", "Location", state.transferForm.type)}
          ${option("Department", "Department", state.transferForm.type)}
        </select>
        ${isLocation ? `
          <label>From</label>
          <select class="form-control" data-field="transfer-from-location">
            ${option("Head Office", "Head Office", state.transferForm.fromLocation)}
            ${option("Warehouse", "Warehouse", state.transferForm.fromLocation)}
          </select>
          <label>To</label>
          <select class="form-control" data-field="transfer-to-location">
            ${option("Warehouse", "Warehouse", state.transferForm.toLocation)}
            ${option("Head Office", "Head Office", state.transferForm.toLocation)}
          </select>
        ` : `
          <label>From</label>
          <select class="form-control" data-field="transfer-from-department">
            ${option("IT", "IT", state.transferForm.fromDepartment)}
            ${option("GA", "GA", state.transferForm.fromDepartment)}
            ${option("Admin", "Admin", state.transferForm.fromDepartment)}
          </select>
          <label>To</label>
          <select class="form-control" data-field="transfer-to-department">
            ${option("GA", "GA", state.transferForm.toDepartment)}
            ${option("IT", "IT", state.transferForm.toDepartment)}
            ${option("Admin", "Admin", state.transferForm.toDepartment)}
          </select>
        `}
      </div>
      <div class="section-divider"><span>Asset List</span></div>
      <div class="associated-assets">
        <label>Asset Code</label>
        <div class="asset-code-add">
          <input class="form-control" placeholder="Enter asset code" aria-label="Asset Code" />
          <button class="btn primary" data-action="open-asset-lookup">+</button>
        </div>
        <p>Press <kbd>Enter</kbd> To Add Asset</p>
        <table class="data-table selected-table">
          <thead>
            <tr><th>No.</th><th>Asset Code</th><th>Description</th><th>Action</th></tr>
          </thead>
          <tbody>
            ${selected.length ? selected.map((asset, index) => renderSelectedAssetRow(asset, index)).join("") : `<tr><td colspan="4">No assets selected.</td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderSelectableAsset(asset) {
  const chosen = state.transferSelected.has(asset.id);
  return `
    <button class="selectable-asset ${chosen ? "selected" : ""}" data-action="toggle-transfer-asset" data-id="${asset.id}">
      <strong>${asset.code}</strong>
      <span>${asset.description}</span>
    </button>
  `;
}

function renderSelectedAssetRow(asset, index) {
  return `
    <tr>
      <td>${index + 1}</td>
      <td>${asset.code}</td>
      <td>${asset.description}</td>
      <td><button class="btn icon danger small-icon" data-action="remove-transfer-asset" data-id="${asset.id}">Remove</button></td>
    </tr>
  `;
}

function renderTransferView() {
  const transferAssets = viewTransferAssets();
  const transfer = currentTransfer();
  return `
    <div class="content-card">
      <div class="settings-actions view-actions">
        <button class="btn ghost" data-action="web-page" data-page="transfer">Back to List</button>
        <button class="btn primary" data-action="export-transfer-pdf">Export PDF</button>
      </div>
      <div class="transfer-view-grid">
        <section>
          <h2 class="content-title">Header Info</h2>
          <table class="info-table">
            <tbody>
              <tr><th>Transfer No</th><td>${transfer.no}</td></tr>
              <tr><th>Date</th><td>${transfer.date}</td></tr>
              <tr><th>Remarks</th><td>${transfer.remarks}</td></tr>
              <tr><th>Created By</th><td>${transfer.user}</td></tr>
              <tr><th>Created At</th><td>${transfer.createdAt}</td></tr>
            </tbody>
          </table>
        </section>
        <section>
          <h2 class="content-title">Transfer Info</h2>
          <table class="info-table">
            <tbody>
              <tr><th>Transfer Type</th><td>${transfer.type}</td></tr>
              <tr><th>From</th><td>${transfer.type === "Department" ? transfer.fromDepartment : transfer.fromLocation}</td></tr>
              <tr><th>To</th><td>${transfer.type === "Department" ? transfer.toDepartment : transfer.toLocation}</td></tr>
            </tbody>
          </table>
        </section>
      </div>
      <div class="transfer-section">
        <h2 class="content-title">Asset List</h2>
        <table class="data-table">
          <thead>
            <tr><th>Asset Code</th><th>Description</th></tr>
          </thead>
          <tbody>
            ${transferAssets.map((asset) => `
              <tr><td>${asset.code}</td><td>${asset.description}</td></tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderRetirementList() {
  return `
    <div class="content-card">
      <div class="action-row">
        <button class="btn primary" data-action="new-retirement">+ New Retirement</button>
      </div>
      <div class="filter-grid retirement-filter">
        <label>Period</label><input value="01-05-2026 - 31-05-2026" aria-label="Period" />
        <label>Reason</label>${retirementReasonSelect()}
        <label>User</label><select aria-label="User"><option>All Users</option><option>Jennie</option></select>
        <button class="btn primary" data-action="mock-only">Filter</button>
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
          <tr><th class="sort">Retirement No</th><th>Date</th><th>Asset Count</th><th>Reason</th><th>Remarks</th><th>Created By</th><th>Action</th></tr>
        </thead>
        <tbody>
          ${retirements.map((retirement) => `
            <tr>
              <td>${retirement.no}</td>
              <td>${retirement.date}</td>
              <td>${retirement.assetIds.length} Assets</td>
              <td>${retirement.reason}</td>
              <td>${retirement.remarks}</td>
              <td>${retirement.user}</td>
              <td><button class="btn icon success" data-action="view-retirement" data-retirement="${retirement.no}">View</button></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div class="table-footer">
        <span>Showing 1 To ${retirements.length} Of ${retirements.length} Entries</span>
        <div class="pagination"><button>Previous</button><button>1</button><button>Next</button></div>
      </div>
    </div>
  `;
}

function retirementReasonSelect(field) {
  const attr = field ? ` data-field="${field}"` : "";
  const classAttr = field ? ` class="form-control"` : "";
  const selectedValue = field ? state.retirementReason : "";
  return `
    <select aria-label="Retirement Reason"${classAttr}${attr}>
      ${field ? "" : option("", "All Reasons", selectedValue)}
      ${option("Sold", "Sold", selectedValue)}
      ${option("Damaged", "Damaged", selectedValue)}
      ${option("Obsolete", "Obsolete", selectedValue)}
      ${option("Donated", "Donated", selectedValue)}
      ${option("Scrapped", "Scrapped", selectedValue)}
    </select>
  `;
}

function renderRetirementNew() {
  const selected = selectedRetirementAssets();
  return `
    <div class="content-card">
      <div class="settings-actions">
        <button class="btn primary" data-action="save-retirement">Save Retirement</button>
        <button class="btn ghost" data-action="web-page" data-page="retirement">Back to list</button>
      </div>
      <div class="section-divider"><span>Header</span></div>
      <div class="agreement-form">
        <label>Retirement No</label><input class="form-control readonly" value="${retirementNo}" readonly />
        <label>Date</label><input class="form-control" value="26-05-2026" />
        <label>Remarks</label><textarea class="form-control" rows="3">${retirementDefaults.remarks}</textarea>
      </div>
      <div class="section-divider"><span>Retirement Info</span></div>
      <div class="agreement-form">
        <label>Retirement Reason</label>
        ${retirementReasonSelect("retirement-reason")}
      </div>
      <div class="section-divider"><span>Asset List</span></div>
      <div class="associated-assets">
        <label>Asset Code</label>
        <div class="asset-code-add">
          <input class="form-control" placeholder="Enter asset code" aria-label="Asset Code" />
          <button class="btn primary" data-action="open-retirement-asset-lookup">+</button>
        </div>
        <p>Press <kbd>Enter</kbd> To Add Asset</p>
        <table class="data-table selected-table">
          <thead>
            <tr><th>Asset Code</th><th>Description</th><th>Current Location</th><th>Current Department</th><th>Remove Action</th></tr>
          </thead>
          <tbody>
            ${selected.length ? selected.map(renderRetirementSelectedRow).join("") : `<tr><td colspan="5">No assets selected.</td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderRetirementSelectedRow(asset) {
  return `
    <tr>
      <td>${asset.code}</td>
      <td>${asset.description}</td>
      <td>${asset.location}</td>
      <td>${asset.department}</td>
      <td><button class="btn icon danger small-icon" data-action="remove-retirement-asset" data-id="${asset.id}">Remove</button></td>
    </tr>
  `;
}

function renderRetirementView() {
  const retirement = currentRetirement();
  const retirementAssets = viewRetirementAssets();
  return `
    <div class="content-card">
      <div class="settings-actions view-actions">
        <button class="btn ghost" data-action="web-page" data-page="retirement">Back to List</button>
        <button class="btn primary" data-action="export-retirement-pdf">Export PDF</button>
      </div>
      <div class="transfer-view-grid">
        <section>
          <h2 class="content-title">Header Info</h2>
          <table class="info-table">
            <tbody>
              <tr><th>Retirement No</th><td>${retirement.no}</td></tr>
              <tr><th>Date</th><td>${retirement.date}</td></tr>
              <tr><th>Created By</th><td>${retirement.user}</td></tr>
              <tr><th>Retirement Reason</th><td>${retirement.reason}</td></tr>
              <tr><th>Remarks</th><td>${retirement.remarks}</td></tr>
            </tbody>
          </table>
        </section>
      </div>
      <div class="transfer-section">
        <h2 class="content-title">Asset List</h2>
        <table class="data-table">
          <thead>
            <tr><th>Asset Code</th><th>Description</th><th>Previous Location</th><th>Previous Department</th></tr>
          </thead>
          <tbody>
            ${retirementAssets.map((asset) => `<tr><td>${asset.code}</td><td>${asset.description}</td><td>${asset.location}</td><td>${asset.department}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAssetLookupModal() {
  const activeAssets = assets.slice(0, 3).filter((asset) => !state.retiredAssets.has(asset.id));
  return `
    <div class="modal-backdrop">
      <div class="modal asset-modal" role="dialog" aria-modal="true" aria-label="Asset">
        <div class="modal-head">
          Asset
          <button class="modal-close" data-action="close-modal">x</button>
        </div>
        <div class="modal-body">
          <div class="asset-modal-toolbar">
            <span>Show</span>
            <select aria-label="Show Entries"><option>10</option></select>
            <span>Entries</span>
            <span class="spacer"></span>
            <label>Search : <input aria-label="Search Asset" /></label>
          </div>
          <div class="toolbar modal-export-toolbar">
            <button class="btn" data-action="mock-only">Column Settings</button>
            <button class="btn" data-action="mock-only">CSV</button>
            <button class="btn" data-action="mock-only">Excel</button>
            <button class="btn" data-action="mock-only">PDF</button>
          </div>
          <table class="data-table">
            <thead>
              <tr><th class="sort">Asset Code</th><th>Description</th><th>Brand</th><th>Model</th><th>Location</th><th>Department</th><th>Category</th></tr>
            </thead>
            <tbody>
              ${activeAssets.map((asset) => `
                <tr data-action="toggle-transfer-asset" data-id="${asset.id}">
                  <td>${asset.code}</td><td>${asset.description}</td><td>${asset.brand}</td><td>${asset.model}</td>
                  <td>${asset.location}</td><td>${asset.department}</td><td>${asset.category}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
          <div class="table-footer">
            <span>Showing 1 To ${activeAssets.length} Of ${activeAssets.length} Entries</span>
            <div class="pagination"><button>Previous</button><button>1</button><button>Next</button></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderRetirementAssetLookupModal() {
  const activeAssets = assets.slice(0, 3).filter((asset) => asset.status === "Active" && !state.retiredAssets.has(asset.id));
  return `
    <div class="modal-backdrop">
      <div class="modal asset-modal" role="dialog" aria-modal="true" aria-label="Asset">
        <div class="modal-head">
          Asset
          <button class="modal-close" data-action="close-modal">x</button>
        </div>
        <div class="modal-body">
          <div class="asset-modal-toolbar">
            <span>Show</span>
            <select aria-label="Show Entries"><option>10</option></select>
            <span>Entries</span>
            <span class="spacer"></span>
            <label>Search : <input aria-label="Search Asset" /></label>
          </div>
          <div class="toolbar modal-export-toolbar">
            <button class="btn" data-action="mock-only">Column Settings</button>
            <button class="btn" data-action="mock-only">CSV</button>
            <button class="btn" data-action="mock-only">Excel</button>
            <button class="btn" data-action="mock-only">PDF</button>
          </div>
          <table class="data-table">
            <thead>
              <tr><th class="sort">Asset Code</th><th>Description</th><th>Location</th><th>Department</th><th>Status</th></tr>
            </thead>
            <tbody>
              ${activeAssets.map((asset) => `
                <tr data-action="toggle-retirement-asset" data-id="${asset.id}">
                  <td>${asset.code}</td><td>${asset.description}</td><td>${asset.location}</td><td>${asset.department}</td><td>${asset.status}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
          <div class="table-footer">
            <span>Showing 1 To ${activeAssets.length} Of ${activeAssets.length} Entries</span>
            <div class="pagination"><button>Previous</button><button>1</button><button>Next</button></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderTransactionPdfPreview() {
  const transaction = state.transactionPreviewType === "retirement" ? currentRetirement() : currentTransfer();
  return `
    <div class="content-card">
      <div class="preview-top">
        <button class="btn ghost" data-action="transaction-preview-back">Back</button>
        <button class="btn primary" data-action="mock-only">Export PDF</button>
      </div>
      <div class="transaction-preview-canvas">
        ${renderTransactionDocument(transaction)}
      </div>
    </div>
  `;
}

function renderTransactionDocument(transfer) {
  const isTransaction = Boolean(transfer);
  const isRetirement = isTransaction && transfer.no.startsWith("RET-");
  const isTransfer = isTransaction && transfer.no.startsWith("TRF-");
  const docNo = isTransaction ? transfer.no : "XXX-YYYYMMAAAA";
  const docDate = isTransaction ? transfer.date : "DD-YY-MMM";
  const title = isRetirement ? "RETIREMENT ASSET" : isTransfer ? "TRANSFER ASSET" : "TRANSACTION TITLE";
  const documentAssets = isRetirement ? viewRetirementAssets() : viewTransferAssets();
  const rows = isTransaction
    ? documentAssets.map((asset, index) => `
        <tr><td>${index + 1}</td><td>${asset.code}</td><td>${asset.description}</td><td>${isRetirement ? transfer.reason : transferRouteLabel(transfer)}</td></tr>
      `).join("")
    : `<tr><td>1</td><td>Field 1</td><td>Field 2</td><td>Field 3</td></tr>`;
  return `
    <article class="transaction-doc paper-${state.transactionTemplate.paperSize.toLowerCase()}">
      ${state.transactionTemplate.showLogo ? `<div class="transaction-logo">LOGO</div>` : ""}
      <h2>COMPANY NAME</h2>
      <h1>${title}</h1>
      <div class="doc-meta">
        <span>Document No</span><strong>: ${docNo}</strong>
        <span>Date</span><strong>: ${docDate}</strong>
      </div>
      <section>
        <h3>Transaction Information</h3>
        ${isRetirement ? `
          <p>- Retirement Reason: ${transfer.reason}</p>
          <p>- Remarks: ${transfer.remarks}</p>
        ` : `
          <p>- ${isTransfer ? `Transfer Type: ${transfer.type}` : "Header Field 1"}</p>
          <p>- ${isTransfer ? `From: ${transfer.type === "Department" ? transfer.fromDepartment : transfer.fromLocation}` : "Header Field 2"}</p>
          <p>- ${isTransfer ? `To: ${transfer.type === "Department" ? transfer.toDepartment : transfer.toLocation}` : "Header Field 3"}</p>
          <p>- ${isTransfer ? `Remarks: ${transfer.remarks}` : "Remarks: Transaction remarks"}</p>
        `}
      </section>
      <section>
        <h3>Table Content</h3>
        <table>
          <thead><tr><th>No</th><th>Field 1</th><th>Field 2</th><th>Field 3</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </section>
      <div class="created-block">
        <span>Created By</span>
        <strong>${isTransaction ? transfer.user : "Jennie"}</strong>
        <small>${isTransaction ? transfer.createdAt : "26-05-2026 10:00"}</small>
      </div>
      <footer class="transaction-footer">
        <span>Generated from iReap Asset</span>
        <span>Print Time: 26-05-2026 10:30</span>
      </footer>
    </article>
  `;
}

function renderPrintTemplates() {
  const isTransaction = state.template.templateType === "transaction";
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
            ${option("transaction", "Transaction", state.template.templateType)}
          </select>
        </div>
        ${isTransaction ? `
          <div class="template-settings-box transaction-template-box">
            <h2 class="content-title">Transaction Template</h2>
            <div class="settings-field">
              <label>Default Paper Size</label>
              <select class="form-control" data-field="transaction-paper">
                ${option("A4", "A4", state.transactionTemplate.paperSize)}
                ${option("Letter", "Letter", state.transactionTemplate.paperSize)}
                ${option("Legal", "Legal", state.transactionTemplate.paperSize)}
                ${option("F4", "F4 / Folio", state.transactionTemplate.paperSize)}
              </select>
            </div>
            <div class="settings-field">
              <label>Show Company Logo</label>
              <label class="plain-check">
                <input type="checkbox" data-field="transaction-logo" ${state.transactionTemplate.showLogo ? "checked" : ""} />
                Show company logo
              </label>
            </div>
          </div>
          ${state.transactionTemplate.preview ? `<div class="inline-preview transaction-settings-preview">${renderTransactionDocument(null)}</div>` : ""}
        ` : `
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
          ${state.template.codeType === "qr" ? `
            <div class="settings-field">
              <label>QR Code Content</label>
              <select class="form-control" data-field="template-qrContent">
                ${option("url", "Asset Detail URL", state.template.qrContent)}
                ${option("asset-code", "Asset Code", state.template.qrContent)}
              </select>
            </div>
          ` : ""}
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
        `}
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
          ${options.codeType === "qr" ? `
            <div class="field">
              <label>QR Code Content</label>
              <select class="form-control" data-field="modal-qr">
                ${option("url", "Asset Detail URL", options.qrContent)}
                ${option("asset-code", "Asset Code", options.qrContent)}
              </select>
            </div>
          ` : ""}
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
  const qrValue = options.qrContent === "asset-code" ? asset.code : `https://asset.ireappos.com/apps/asset/view/${asset.id}`;
  const codeArt = code === "qr" ? `<div class="code-art qr-art" title="QR Content: ${qrValue}"></div>` : `<div class="code-art barcode-art" title="Barcode: ${asset.code}"></div>`;
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
  if (state.mobilePage === "operations") return renderMobileOperations();
  if (state.mobilePage === "transfer") return renderMobileTransferList();
  if (state.mobilePage === "transferNew") return renderMobileTransferNew();
  if (state.mobilePage === "transferView") return renderMobileTransferView();
  if (state.mobilePage === "retirement") return renderMobileRetirementList();
  if (state.mobilePage === "retirementNew") return renderMobileRetirementNew();
  if (state.mobilePage === "retirementView") return renderMobileRetirementView();
  if (state.mobilePage === "transactionPreview") return renderMobileTransactionPreview();
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
        ${mobileCategory("Operations", "O", "linear-gradient(135deg,#32a7ee,#4837e3)", "mobile-page", "operations")}
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
      ${assets.map(renderMobileAssetCard).join("")}
    </div>
  `;
}

function renderMobileAssetCard(asset) {
  return `
    <button class="mobile-asset-card" data-action="mobile-page" data-page="detail" data-id="${asset.id}">
      <span class="mobile-photo">I</span>
      <span>
        <strong>${asset.code}</strong>
        <p>${asset.description}</p>
        <p>${asset.location}</p>
        ${isRetiredAsset(asset) ? `<em>${assetStatusLabel(asset)}</em>` : ""}
      </span>
      <span class="mobile-arrow">&gt;</span>
    </button>
  `;
}

function renderMobileOperations() {
  return `
    ${mobileHeader("Operations", "home")}
    <div class="screen-content setup-list">
      ${setupItem("Transfer", "T", "setup-blue", "mobile-page", "transfer")}
      ${setupItem("Retirement", "R", "setup-red", "mobile-page", "retirement")}
    </div>
  `;
}

function renderMobileTransferList() {
  return `
    ${mobileHeader("Transfer", "operations")}
    <div class="screen-content">
      <div class="mobile-search-row transfer-mobile-search">
        <div class="mobile-search"><span>Q</span><input placeholder="Search" /></div>
        <button class="filter-plain" data-action="open-transfer-filter">F</button>
      </div>
      <button class="mobile-add" data-action="new-mobile-transfer">+ New Transfer</button>
      <div class="mobile-list-title">Transfer List</div>
      ${transfers.map(renderMobileTransferCard).join("")}
    </div>
  `;
}

function renderMobileTransferCard(transfer) {
  return `
    <button class="mobile-transfer-card" data-action="view-mobile-transfer" data-transfer="${transfer.no}">
      <span class="mobile-transfer-no">${transfer.no}</span>
      <span class="mobile-transfer-count">${transfer.assetIds.length} Assets</span>
      <span class="mobile-transfer-route">${transfer.type}: ${transferRouteLabel(transfer)}</span>
      <span class="mobile-transfer-date">${transfer.date}</span>
      <span class="mobile-transfer-user">${transfer.user}</span>
      <span class="mobile-arrow">&gt;</span>
    </button>
  `;
}

function renderMobileTransferNew() {
  const selected = selectedTransferAssets();
  const isLocation = state.transferForm.type === "Location";
  return `
    ${mobileHeader("New Transfer", "transfer")}
    <div class="screen-content mobile-transfer-form">
      <section class="mobile-form-section">
        <h2>Transfer Detail</h2>
        ${mobileLineInput("Transfer No", transferNo, true)}
        ${mobileLineInput("Date", "26-05-2026")}
        <div class="mobile-line-field">
          <label>Remarks</label>
          <textarea rows="2">${transferDefaults.remarks}</textarea>
        </div>
      </section>
      <section class="mobile-form-section">
        <h2>Transfer Info</h2>
        <div class="mobile-line-field">
          <label>Transfer Type</label>
          <select data-field="transfer-type">
            ${option("Location", "Location", state.transferForm.type)}
            ${option("Department", "Department", state.transferForm.type)}
          </select>
        </div>
        ${isLocation ? `
          <div class="mobile-line-field">
            <label>From</label>
            <select data-field="transfer-from-location">
              ${option("Head Office", "Head Office", state.transferForm.fromLocation)}
              ${option("Warehouse", "Warehouse", state.transferForm.fromLocation)}
            </select>
          </div>
          <div class="mobile-line-field">
            <label>To</label>
            <select data-field="transfer-to-location">
              ${option("Warehouse", "Warehouse", state.transferForm.toLocation)}
              ${option("Head Office", "Head Office", state.transferForm.toLocation)}
            </select>
          </div>
        ` : `
          <div class="mobile-line-field">
            <label>From</label>
            <select data-field="transfer-from-department">
              ${option("IT", "IT", state.transferForm.fromDepartment)}
              ${option("GA", "GA", state.transferForm.fromDepartment)}
              ${option("Admin", "Admin", state.transferForm.fromDepartment)}
            </select>
          </div>
          <div class="mobile-line-field">
            <label>To</label>
            <select data-field="transfer-to-department">
              ${option("GA", "GA", state.transferForm.toDepartment)}
              ${option("IT", "IT", state.transferForm.toDepartment)}
              ${option("Admin", "Admin", state.transferForm.toDepartment)}
            </select>
          </div>
        `}
      </section>
      <section class="mobile-form-section">
        <h2>Assets</h2>
        <div class="mobile-line-field asset-code-mobile">
          <label>Asset Code</label>
          <div>
            <input placeholder="Enter asset code" />
            <button class="qr-mini" data-action="mock-only" title="Scan QR">QR</button>
            <button data-action="open-mobile-asset-picker" title="Add Asset">+</button>
          </div>
        </div>
        <p class="mobile-helper">Press Enter To Add Asset</p>
      </section>
      <section class="mobile-form-section">
        <h2>Selected Assets</h2>
        <div class="mobile-selected-list">
          ${selected.length ? selected.map(renderMobileSelectedAsset).join("") : `<div class="mobile-empty">No assets selected.</div>`}
        </div>
      </section>
    </div>
    <div class="mobile-form-actions">
      <button class="btn ghost" data-action="mobile-page" data-page="transfer">Cancel</button>
      <button class="btn primary" data-action="save-mobile-transfer">Save Transfer</button>
    </div>
  `;
}

function mobileLineInput(label, value, readonly) {
  return `
    <div class="mobile-line-field">
      <label>${label}</label>
      <input value="${value}" ${readonly ? "readonly" : ""} />
    </div>
  `;
}

function renderMobileSelectableAsset(asset) {
  const chosen = state.transferSelected.has(asset.id);
  return `
    <button class="mobile-picker-item ${chosen ? "selected" : ""}" data-action="toggle-transfer-asset" data-id="${asset.id}">
      <strong>${asset.code}</strong>
      <span>${asset.description}</span>
    </button>
  `;
}

function renderMobileSelectedAsset(asset) {
  return `
    <div class="mobile-selected-asset">
      <strong>${asset.code}</strong>
      <span>${asset.description}</span>
      <button data-action="remove-transfer-asset" data-id="${asset.id}" title="Remove">Del</button>
    </div>
  `;
}

function renderMobileTransferView() {
  const transferAssets = viewTransferAssets();
  const transfer = currentTransfer();
  return `
    ${mobileHeader("Transfer", "transfer")}
    <div class="screen-content mobile-transfer-view">
      <section class="transfer-info-card">
        <h2>Transfer Detail</h2>
        ${mobileInfo("Transfer No", transfer.no)}
        ${mobileInfo("Date", transfer.date)}
        ${mobileInfo("Remarks", transfer.remarks)}
        ${mobileInfo("Created By", transfer.user)}
        ${mobileInfo("Created At", transfer.createdAt)}
      </section>
      <section class="transfer-info-card">
        <h2>Transfer Info</h2>
        ${mobileInfo("Transfer Type", transfer.type)}
        ${mobileInfo("From", transfer.type === "Department" ? transfer.fromDepartment : transfer.fromLocation)}
        ${mobileInfo("To", transfer.type === "Department" ? transfer.toDepartment : transfer.toLocation)}
      </section>
      <h2 class="mobile-list-title">Asset List</h2>
      <div class="mobile-selected-list">
        ${transferAssets.map((asset) => `
          <div class="mobile-asset-transfer">
            <strong>${asset.code}</strong>
            <span>${asset.description}</span>
          </div>
        `).join("")}
      </div>
    </div>
    <div class="mobile-form-actions">
      <button class="btn primary" data-action="export-mobile-transfer-pdf">Export PDF</button>
    </div>
  `;
}

function renderMobileTransactionPreview() {
  const transfer = state.transactionPreviewType === "retirement" ? currentRetirement() : currentTransfer();
  return `
    ${mobileHeader("PDF Preview", state.transactionPreviewType === "retirement" ? "retirementView" : "transferView")}
    <div class="screen-content mobile-transaction-preview">
      ${renderTransactionDocument(transfer)}
    </div>
    <div class="mobile-form-actions">
      <button class="btn primary" data-action="mock-only">Export PDF</button>
    </div>
  `;
}

function renderMobileRetirementList() {
  return `
    ${mobileHeader("Retirement", "operations")}
    <div class="screen-content">
      <div class="mobile-search-row transfer-mobile-search">
        <div class="mobile-search"><span>Q</span><input placeholder="Search" /></div>
        <button class="filter-plain" data-action="open-retirement-filter">F</button>
      </div>
      <button class="mobile-add" data-action="new-mobile-retirement">+ New Retirement</button>
      <div class="mobile-list-title">Retirement List</div>
      ${retirements.map(renderMobileRetirementCard).join("")}
    </div>
  `;
}

function renderMobileRetirementCard(retirement) {
  return `
    <button class="mobile-transfer-card" data-action="view-mobile-retirement" data-retirement="${retirement.no}">
      <span class="mobile-transfer-no">${retirement.no}</span>
      <span class="mobile-transfer-count">${retirement.assetIds.length} Assets</span>
      <span class="mobile-transfer-route">Reason: ${retirement.reason}</span>
      <span class="mobile-transfer-date">${retirement.date}</span>
      <span class="mobile-transfer-user">${retirement.user}</span>
      <span class="mobile-arrow">&gt;</span>
    </button>
  `;
}

function renderMobileRetirementNew() {
  const selected = selectedRetirementAssets();
  return `
    ${mobileHeader("New Retirement", "retirement")}
    <div class="screen-content mobile-transfer-form">
      <section class="mobile-form-section">
        <h2>Header</h2>
        ${mobileLineInput("Retirement No", retirementNo, true)}
        ${mobileLineInput("Date", "26-05-2026")}
        <div class="mobile-line-field">
          <label>Remarks</label>
          <textarea rows="2">${retirementDefaults.remarks}</textarea>
        </div>
      </section>
      <section class="mobile-form-section">
        <h2>Retirement Info</h2>
        <div class="mobile-line-field">
          <label>Retirement Reason</label>
          ${retirementReasonSelect("retirement-reason")}
        </div>
      </section>
      <section class="mobile-form-section">
        <h2>Assets</h2>
        <div class="mobile-line-field asset-code-mobile">
          <label>Asset Code</label>
          <div>
            <input placeholder="Enter asset code" />
            <button class="qr-mini" data-action="mock-only" title="Scan QR">QR</button>
            <button data-action="open-mobile-retirement-asset-picker" title="Add Asset">+</button>
          </div>
        </div>
        <p class="mobile-helper">Press Enter To Add Asset</p>
      </section>
      <section class="mobile-form-section">
        <h2>Selected Assets</h2>
        <div class="mobile-selected-list">
          ${selected.length ? selected.map(renderMobileRetirementSelectedAsset).join("") : `<div class="mobile-empty">No assets selected.</div>`}
        </div>
      </section>
    </div>
    <div class="mobile-form-actions">
      <button class="btn ghost" data-action="mobile-page" data-page="retirement">Cancel</button>
      <button class="btn primary" data-action="save-mobile-retirement">Save Retirement</button>
    </div>
  `;
}

function renderMobileRetirementSelectedAsset(asset) {
  return `
    <div class="mobile-selected-asset">
      <strong>${asset.code}</strong>
      <span>${asset.location}</span>
      <span>${asset.department}</span>
      <button data-action="remove-retirement-asset" data-id="${asset.id}" title="Remove">Del</button>
    </div>
  `;
}

function renderMobileRetirementView() {
  const retirement = currentRetirement();
  const retirementAssets = viewRetirementAssets();
  return `
    ${mobileHeader("Retirement", "retirement")}
    <div class="screen-content mobile-transfer-view">
      <section class="transfer-info-card">
        <h2>Retirement Info</h2>
        ${mobileInfo("Retirement No", retirement.no)}
        ${mobileInfo("Date", retirement.date)}
        ${mobileInfo("User", retirement.user)}
        ${mobileInfo("Retirement Reason", retirement.reason)}
        ${mobileInfo("Remarks", retirement.remarks)}
      </section>
      <h2 class="mobile-list-title">Asset List</h2>
      <div class="mobile-selected-list">
        ${retirementAssets.map((asset) => `
          <div class="mobile-asset-transfer">
            <strong>${asset.code}</strong>
            <span>${asset.location}</span>
            <span>${asset.department}</span>
          </div>
        `).join("")}
      </div>
    </div>
    <div class="mobile-form-actions">
      <button class="btn primary" data-action="export-mobile-retirement-pdf">Export PDF</button>
    </div>
  `;
}

function mobileInfo(label, value) {
  return `<div><span>${label}</span><strong>${value}</strong></div>`;
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
  const isTransaction = state.template.templateType === "transaction";
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
          ${option("transaction", "Transaction", state.template.templateType)}
        </select>
      </div>
      ${isTransaction ? `
        <div class="mobile-template-box transaction-mobile-box">
          <h2>Transaction Template</h2>
          <div class="mobile-field">
            <label>Default Paper Size</label>
            <select class="mobile-select" data-field="transaction-paper">
              ${option("A4", "A4", state.transactionTemplate.paperSize)}
              ${option("Letter", "Letter", state.transactionTemplate.paperSize)}
              ${option("Legal", "Legal", state.transactionTemplate.paperSize)}
              ${option("F4", "F4 / Folio", state.transactionTemplate.paperSize)}
            </select>
          </div>
          <label class="mobile-check">
            <input type="checkbox" data-field="transaction-logo" ${state.transactionTemplate.showLogo ? "checked" : ""} />
            Show company logo
          </label>
        </div>
        ${state.transactionTemplate.preview ? `<div class="mobile-template-preview transaction-mobile-preview">${renderTransactionDocument(null)}</div>` : ""}
      ` : `
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
        ${state.template.codeType === "qr" ? `
          <div class="mobile-field">
            <label>QR Code Content</label>
            <select class="mobile-select" data-field="template-qrContent">
              ${option("url", "Asset Detail URL", state.template.qrContent)}
              ${option("asset-code", "Asset Code", state.template.qrContent)}
            </select>
          </div>
        ` : ""}
        <label class="mobile-check">
          <input type="checkbox" data-field="template-logo" ${state.template.showLogo ? "checked" : ""} />
          Show company logo
        </label>
        <p class="mobile-note">Logo only appears on Large labels.</p>
      </div>
      ${state.template.preview ? `<div class="mobile-template-preview">${renderLabel(assets[0], state.template, false)}</div>` : ""}
      `}
    </div>
  `;
}

function renderMobileDetail() {
  const asset = selectedAsset();
  const retired = isRetiredAsset(asset);
  return `
    ${mobileHeader(`Asset - ${asset.code}`, "assets")}
    <div class="tabs">
      <button class="tab ${state.assetTab === "detail" ? "active" : ""}" data-action="asset-tab" data-tab="detail">Detail</button>
      <button class="tab ${state.assetTab === "history" ? "active" : ""}" data-action="asset-tab" data-tab="history">History</button>
      <button class="tab ${state.assetTab === "agreement" ? "active" : ""}" data-action="asset-tab" data-tab="agreement">Agreement</button>
      <button class="tab ${state.assetTab === "photo" ? "active" : ""}" data-action="asset-tab" data-tab="photo">Photos</button>
    </div>
    ${state.assetTab === "history" ? renderMobileAssetHistory() : renderMobileAssetDetailBody(asset)}
    ${state.assetTab === "detail" ? `
      <div class="bottom-actions ${retired ? "three" : ""}">
        <button data-action="mock-only"><span>E</span>Edit</button>
        <button data-action="mock-only"><span>D</span>Duplicate</button>
        ${retired ? "" : `<button data-action="mock-only"><span>X</span>Deactivate</button>`}
        <button data-action="open-mobile-sheet"><span>P</span>Print</button>
      </div>
    ` : ""}
  `;
}

function renderMobileAssetDetailBody(asset) {
  if (state.assetTab !== "detail") {
    return `<div class="detail-body"><div class="mobile-empty">Mockup only</div></div>`;
  }
  return `
    <div class="detail-body">
      <div class="detail-hero">
        <div class="detail-img">I</div>
        <div><strong>${asset.code}</strong><p>${asset.description}</p></div>
      </div>
      ${detailRow("Status", `<span class="status ${isRetiredAsset(asset) ? "retired" : "green"}">${assetStatusLabel(asset)}</span>`)}
      ${detailRow("External Code", asset.external)}
      ${detailRow("Brand", asset.brand)}
      ${detailRow("Model", asset.model)}
      ${detailRow("Serial No", asset.serial)}
      <h2 class="purchase-title">Purchase Details</h2>
      ${detailRow("Purchase Vendor", "-")}
      ${detailRow("Purchase Date", "-")}
      ${detailRow("Purchase Amount", "-")}
    </div>
  `;
}

function renderMobileAssetHistory() {
  return `
    <div class="detail-body mobile-history-body">
      <div class="mobile-history-filters">
        <div class="mobile-filter-line"><label>Period</label><select><option>All</option></select></div>
        <div class="mobile-filter-line"><label>Type</label><select><option>All</option><option>Retirement Asset</option><option>Transfer Asset</option></select></div>
        <div class="mobile-filter-line"><label>User</label><select><option>All</option><option>Jennie</option></select></div>
      </div>
      <button class="mobile-history-card" data-action="view-mobile-retirement">
        <span class="history-title">Retirement Asset</span>
        <em class="history-doc">${retirementNo}</em>
        <span class="history-user">Jennie</span>
        <span class="history-date">${retirementDefaults.createdAt}</span>
      </button>
      <button class="mobile-history-card" data-action="view-mobile-transfer">
        <span class="history-title">Transfer Asset</span>
        <em class="history-doc">${transferNo}</em>
        <span class="history-user">Jennie</span>
        <span class="history-date">${transferDefaults.createdAt}</span>
      </button>
      <div class="mobile-history-card plain">
        <span class="history-title">Create Asset</span>
        <span class="history-user">jennie</span>
        <span class="history-date">25-05-2026 14:16</span>
      </div>
    </div>
  `;
}

function detailRow(label, value) {
  return `<div class="detail-row"><span>${label}</span><span>${value}</span></div>`;
}

function renderMobileSheet() {
  if (state.mobileSheet === "transfer-filter") return renderMobileTransferFilter();
  if (state.mobileSheet === "retirement-filter") return renderMobileRetirementFilter();
  if (state.mobileSheet === "asset-picker") return renderMobileAssetPicker();
  if (state.mobileSheet === "retirement-asset-picker") return renderMobileRetirementAssetPicker();
  return `
    <div class="bottom-sheet-backdrop">
      <div class="bottom-sheet">
        <div class="sheet-title">
          <h3>Print Label Options</h3>
          <button class="info-button" data-action="mobile-print-info" title="Mass print information">i</button>
        </div>
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
        ${state.mobileOptions.codeType === "qr" ? `
          <div class="mobile-field">
            <label>QR Code Content</label>
            <select class="mobile-select" data-field="mobile-print-qr">
              ${option("url", "Asset Detail URL", state.mobileOptions.qrContent)}
              ${option("asset-code", "Asset Code", state.mobileOptions.qrContent)}
            </select>
          </div>
        ` : ""}
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

function renderMobileAssetPicker() {
  const activeAssets = assets.slice(0, 3).filter((asset) => !state.retiredAssets.has(asset.id));
  return `
    <div class="bottom-sheet-backdrop">
      <div class="bottom-sheet asset-picker-sheet">
        <div class="sheet-title"><h3>Select Asset</h3></div>
        <div class="mobile-search picker-search"><span>Q</span><input placeholder="Search Asset" /></div>
        <div class="mobile-picker-list">
          ${activeAssets.map(renderMobileSelectableAsset).join("")}
        </div>
        <div class="sheet-actions">
          <button class="btn ghost" data-action="close-mobile-sheet">Close</button>
          <button class="btn primary" data-action="close-mobile-sheet">Done</button>
        </div>
      </div>
    </div>
  `;
}

function renderMobileRetirementAssetPicker() {
  const activeAssets = assets.slice(0, 3).filter((asset) => asset.status === "Active" && !state.retiredAssets.has(asset.id));
  return `
    <div class="bottom-sheet-backdrop">
      <div class="bottom-sheet asset-picker-sheet">
        <div class="sheet-title"><h3>Select Active Asset</h3></div>
        <div class="mobile-search picker-search"><span>Q</span><input placeholder="Search Asset" /></div>
        <div class="mobile-picker-list">
          ${activeAssets.map(renderMobileRetirementSelectableAsset).join("")}
        </div>
        <div class="sheet-actions">
          <button class="btn ghost" data-action="close-mobile-sheet">Close</button>
          <button class="btn primary" data-action="close-mobile-sheet">Done</button>
        </div>
      </div>
    </div>
  `;
}

function renderMobileRetirementSelectableAsset(asset) {
  const chosen = state.retirementSelected.has(asset.id);
  return `
    <button class="mobile-picker-item ${chosen ? "selected" : ""}" data-action="toggle-retirement-asset" data-id="${asset.id}">
      <strong>${asset.code}</strong>
      <span>${asset.description}</span>
    </button>
  `;
}

function renderMobileTransferFilter() {
  return `
    <div class="bottom-sheet-backdrop">
      <div class="bottom-sheet">
        <div class="sheet-title"><h3>Filter Transfer</h3></div>
        <div class="mobile-field">
          <label>Period</label>
          <select class="mobile-select"><option>01-05-2026 - 31-05-2026</option><option>All</option></select>
        </div>
        <div class="mobile-field">
          <label>Type</label>
          <select class="mobile-select"><option>All Types</option><option>Location</option><option>Department</option></select>
        </div>
        <div class="mobile-field">
          <label>User</label>
          <select class="mobile-select"><option>Jennie</option><option>All Users</option></select>
        </div>
        <div class="sheet-actions">
          <button class="btn ghost" data-action="close-mobile-sheet">Reset</button>
          <button class="btn primary" data-action="close-mobile-sheet">Apply</button>
        </div>
      </div>
    </div>
  `;
}

function renderMobileRetirementFilter() {
  return `
    <div class="bottom-sheet-backdrop">
      <div class="bottom-sheet">
        <div class="sheet-title"><h3>Filter Retirement</h3></div>
        <div class="mobile-field">
          <label>Period</label>
          <select class="mobile-select"><option>01-05-2026 - 31-05-2026</option><option>All</option></select>
        </div>
        <div class="mobile-field">
          <label>Reason</label>
          <select class="mobile-select"><option>All Reasons</option><option>Sold</option><option>Damaged</option><option>Obsolete</option><option>Donated</option><option>Scrapped</option></select>
        </div>
        <div class="mobile-field">
          <label>User</label>
          <select class="mobile-select"><option>Jennie</option><option>All Users</option></select>
        </div>
        <div class="sheet-actions">
          <button class="btn ghost" data-action="close-mobile-sheet">Reset</button>
          <button class="btn primary" data-action="close-mobile-sheet">Apply</button>
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

  if (action === "asset-view") {
    if (target.dataset.id) state.selectedAssetId = Number(target.dataset.id);
    state.assetTab = "detail";
    setState({ webPage: "assetDetail" });
    return;
  }

  if (action === "asset-tab") {
    state.assetTab = target.dataset.tab;
    render();
    return;
  }

  if (action === "toggle-setup") {
    state.setupOpen = !state.setupOpen;
    render();
    return;
  }

  if (action === "toggle-operations") {
    state.operationsOpen = !state.operationsOpen;
    render();
    return;
  }

  if (action === "toggle-asset") {
    state.assetOpen = !state.assetOpen;
    render();
    return;
  }

  if (action === "new-transfer") {
    state.transferForm = {
      type: "Location",
      fromLocation: "Head Office",
      toLocation: "Warehouse",
      fromDepartment: "IT",
      toDepartment: "GA"
    };
    state.transferSelected = new Set([215]);
    setState({ webPage: "transferNew" });
    return;
  }

  if (action === "view-transfer") {
    const transfer = transfers.find((item) => item.no === target.dataset.transfer) || transferDefaults;
    state.transferViewNo = transfer.no;
    state.transferViewIds = [...transfer.assetIds];
    setState({ webPage: "transferView" });
    return;
  }

  if (action === "new-retirement") {
    state.retirementReason = "Scrapped";
    state.retirementSelected = new Set([215]);
    setState({ webPage: "retirementNew" });
    return;
  }

  if (action === "view-retirement") {
    const retirement = retirements.find((item) => item.no === target.dataset.retirement) || retirementDefaults;
    state.retirementViewNo = retirement.no;
    state.retirementViewIds = [...retirement.assetIds];
    setState({ webPage: "retirementView" });
    return;
  }

  if (action === "open-asset-lookup") {
    state.modal = "assetLookup";
    render();
    return;
  }

  if (action === "open-retirement-asset-lookup") {
    state.modal = "retirementAssetLookup";
    render();
    return;
  }

  if (action === "toggle-transfer-asset") {
    const id = Number(target.dataset.id);
    if (state.retiredAssets.has(id)) {
      showToast("Retired assets cannot be transferred.");
      return;
    }
    if (state.transferSelected.has(id)) state.transferSelected.delete(id);
    else state.transferSelected.add(id);
    if (state.modal === "assetLookup") state.modal = null;
    render();
    return;
  }

  if (action === "remove-transfer-asset") {
    state.transferSelected.delete(Number(target.dataset.id));
    render();
    return;
  }

  if (action === "toggle-retirement-asset") {
    const id = Number(target.dataset.id);
    if (state.retiredAssets.has(id)) {
      showToast("Retired assets cannot be selected.");
      return;
    }
    if (state.retirementSelected.has(id)) state.retirementSelected.delete(id);
    else state.retirementSelected.add(id);
    if (state.modal === "retirementAssetLookup") state.modal = null;
    render();
    return;
  }

  if (action === "remove-retirement-asset") {
    state.retirementSelected.delete(Number(target.dataset.id));
    render();
    return;
  }

  if (action === "save-transfer") {
    if (!state.transferSelected.size) {
      window.alert("Please select at least one asset.");
      return;
    }
    state.transferViewIds = [...state.transferSelected];
    state.transferViewNo = transferNo;
    window.alert("Transfer saved successfully.");
    setState({ webPage: "transferView" });
    return;
  }

  if (action === "save-retirement") {
    if (!state.retirementSelected.size) {
      window.alert("Please select at least one asset.");
      return;
    }
    state.retirementViewIds = [...state.retirementSelected];
    state.retirementViewNo = retirementNo;
    state.savedRetirement = {
      ...retirementDefaults,
      reason: state.retirementReason,
      assetIds: [...state.retirementSelected]
    };
    state.retirementSelected.forEach((id) => {
      state.retiredAssets.add(id);
      state.retirementReasonByAsset[id] = state.retirementReason;
    });
    window.alert("Retirement saved successfully.");
    setState({ webPage: "retirementView" });
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

  if (action === "transaction-preview-back") {
    setState({ webPage: state.transactionPreviewType === "retirement" ? "retirementView" : "transferView" });
    return;
  }

  if (action === "save-template") {
    showToast(state.template.templateType === "transaction" ? "Transaction template settings saved for mockup." : "Template settings saved for mockup.");
    return;
  }

  if (action === "preview-template") {
    if (state.template.templateType === "transaction") state.transactionTemplate.preview = true;
    else state.template.preview = true;
    render();
    return;
  }

  if (action === "export-transfer-pdf") {
    state.transactionPreviewType = "transfer";
    if (target.dataset.transfer) {
      const transfer = transfers.find((item) => item.no === target.dataset.transfer) || transferDefaults;
      state.transferViewNo = transfer.no;
      state.transferViewIds = [...transfer.assetIds];
    }
    setState({ webPage: "transactionPreview" });
    return;
  }

  if (action === "export-retirement-pdf") {
    state.transactionPreviewType = "retirement";
    if (target.dataset.retirement) {
      const retirement = retirements.find((item) => item.no === target.dataset.retirement) || retirementDefaults;
      state.retirementViewNo = retirement.no;
      state.retirementViewIds = [...retirement.assetIds];
    }
    setState({ webPage: "transactionPreview" });
    return;
  }

  if (action === "mobile-page") {
    state.mobileSheet = false;
    if (target.dataset.id) state.selectedAssetId = Number(target.dataset.id);
    if (target.dataset.page === "detail") state.assetTab = "detail";
    setState({ mobilePage: target.dataset.page });
    return;
  }

  if (action === "open-mobile-sheet") {
    state.mobileOptions = getDefaultOptions();
    state.mobileSheet = "print";
    render();
    return;
  }

  if (action === "open-transfer-filter") {
    state.mobileSheet = "transfer-filter";
    render();
    return;
  }

  if (action === "open-retirement-filter") {
    state.mobileSheet = "retirement-filter";
    render();
    return;
  }

  if (action === "open-mobile-asset-picker") {
    state.mobileSheet = "asset-picker";
    render();
    return;
  }

  if (action === "open-mobile-retirement-asset-picker") {
    state.mobileSheet = "retirement-asset-picker";
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

  if (action === "mobile-print-info") {
    showToast("Mass label printing is available from Web > Asset > Print Labels.");
    return;
  }

  if (action === "mobile-preview") {
    state.mobileSheet = false;
    setState({ mobilePage: "preview" });
    return;
  }

  if (action === "export-mobile-transfer-pdf") {
    state.transactionPreviewType = "transfer";
    state.mobileSheet = false;
    setState({ mobilePage: "transactionPreview" });
    return;
  }

  if (action === "export-mobile-retirement-pdf") {
    state.transactionPreviewType = "retirement";
    state.mobileSheet = false;
    setState({ mobilePage: "transactionPreview" });
    return;
  }

  if (action === "new-mobile-transfer") {
    state.transferForm = {
      type: "Location",
      fromLocation: "Head Office",
      toLocation: "Warehouse",
      fromDepartment: "IT",
      toDepartment: "GA"
    };
    state.transferSelected = new Set([215]);
    setState({ mobilePage: "transferNew" });
    return;
  }

  if (action === "view-mobile-transfer") {
    const transfer = transfers.find((item) => item.no === target.dataset.transfer) || transferDefaults;
    state.transferViewNo = transfer.no;
    state.transferViewIds = [...transfer.assetIds];
    setState({ mobilePage: "transferView" });
    return;
  }

  if (action === "new-mobile-retirement") {
    state.retirementReason = "Scrapped";
    state.retirementSelected = new Set([215]);
    setState({ mobilePage: "retirementNew" });
    return;
  }

  if (action === "view-mobile-retirement") {
    const retirement = retirements.find((item) => item.no === target.dataset.retirement) || retirementDefaults;
    state.retirementViewNo = retirement.no;
    state.retirementViewIds = [...retirement.assetIds];
    setState({ mobilePage: "retirementView" });
    return;
  }

  if (action === "save-mobile-transfer") {
    if (!state.transferSelected.size) {
      window.alert("Please select at least one asset.");
      return;
    }
    state.transferViewIds = [...state.transferSelected];
    state.transferViewNo = transferNo;
    window.alert("Transfer saved successfully.");
    setState({ mobilePage: "transferView" });
    return;
  }

  if (action === "save-mobile-retirement") {
    if (!state.retirementSelected.size) {
      window.alert("Please select at least one asset.");
      return;
    }
    state.retirementViewIds = [...state.retirementSelected];
    state.retirementViewNo = retirementNo;
    state.savedRetirement = {
      ...retirementDefaults,
      reason: state.retirementReason,
      assetIds: [...state.retirementSelected]
    };
    state.retirementSelected.forEach((id) => {
      state.retiredAssets.add(id);
      state.retirementReasonByAsset[id] = state.retirementReason;
    });
    window.alert("Retirement saved successfully.");
    setState({ mobilePage: "retirementView" });
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

  if (field === "template-qrContent") {
    state.template.qrContent = event.target.value;
    render();
  }

  if (field === "template-type") {
    state.template.templateType = event.target.value;
    state.template.preview = false;
    state.transactionTemplate.preview = false;
    render();
  }

  if (field === "template-logo") {
    state.template.showLogo = event.target.checked;
    render();
  }

  if (field === "transaction-paper") {
    state.transactionTemplate.paperSize = event.target.value;
    render();
  }

  if (field === "transaction-logo") {
    state.transactionTemplate.showLogo = event.target.checked;
    render();
  }

  if (field === "retirement-reason") {
    state.retirementReason = event.target.value;
    render();
  }

  if (field === "modal-size") {
    state.modal.options.size = event.target.value;
  }

  if (field === "modal-code") {
    state.modal.options.codeType = event.target.value;
    render();
  }

  if (field === "modal-qr") {
    state.modal.options.qrContent = event.target.value;
  }

  if (field === "modal-logo") {
    state.modal.options.showLogo = event.target.checked;
  }

  if (field === "mobile-print-logo") {
    state.mobileOptions.showLogo = event.target.checked;
    render();
  }

  if (field === "mobile-print-qr") {
    state.mobileOptions.qrContent = event.target.value;
    render();
  }

  if (field && field.startsWith("transfer-")) {
    const resetFields = ["transfer-type", "transfer-from-location", "transfer-from-department"];
    if (resetFields.includes(field) && state.transferSelected.size) {
      const confirmed = window.confirm("Changing this value will clear selected assets. Continue?");
      if (!confirmed) {
        render();
        return;
      }
      state.transferSelected.clear();
    }

    if (field === "transfer-type") state.transferForm.type = event.target.value;
    if (field === "transfer-from-location") state.transferForm.fromLocation = event.target.value;
    if (field === "transfer-to-location") state.transferForm.toLocation = event.target.value;
    if (field === "transfer-from-department") state.transferForm.fromDepartment = event.target.value;
    if (field === "transfer-to-department") state.transferForm.toDepartment = event.target.value;
    render();
  }
});

render();
