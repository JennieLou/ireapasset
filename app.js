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

const inboxSeed = [
  { id: 1, category: "Agreement", severity: "Warning", title: "Agreement Expiring Soon", description: "Laptop Warranty will expire within 30 days.", date: "12-Jun-2026 09:15", read: false },
  { id: 2, category: "Subscription", severity: "Warning", title: "Trial Expiring Soon", description: "Your trial period has 11 days remaining.", date: "12-Jun-2026 08:30", read: false },
  { id: 3, category: "System", severity: "Info", title: "New Feature Available", description: "Report dashboard drilldown is now available.", date: "11-Jun-2026 16:45", read: false },
  { id: 4, category: "Agreement", severity: "Critical", title: "Agreement Expired", description: "Printer Warranty has expired.", date: "10-Jun-2026 10:20", read: true },
  { id: 5, category: "Subscription", severity: "Critical", title: "Payment Failed", description: "Subscription payment could not be processed.", date: "09-Jun-2026 13:00", read: false },
  { id: 6, category: "User Adoption", severity: "Info", title: "Users Inactive 30 Days", description: "3 users have not accessed the system in 30 days.", date: "08-Jun-2026 11:40", read: true },
  { id: 7, category: "System", severity: "Info", title: "Scheduled Maintenance", description: "Maintenance is scheduled this weekend.", date: "07-Jun-2026 17:00", read: true },
  { id: 8, category: "Subscription", severity: "Info", title: "Subscription Order Created", description: "A subscription order has been created.", date: "06-Jun-2026 14:05", read: true },
  { id: 9, category: "Subscription", severity: "Critical", title: "Trial Expired", description: "The trial period has ended.", date: "05-Jun-2026 09:00", read: true },
  { id: 10, category: "Subscription", severity: "Warning", title: "Subscription Expiring Soon", description: "Subscription will expire soon.", date: "04-Jun-2026 15:10", read: true },
  { id: 11, category: "Subscription", severity: "Critical", title: "Subscription Expired", description: "Subscription has expired.", date: "03-Jun-2026 12:25", read: true },
  { id: 12, category: "Subscription", severity: "Info", title: "Subscription Activated", description: "Subscription has been activated.", date: "02-Jun-2026 10:20", read: true },
  { id: 13, category: "Subscription", severity: "Warning", title: "Subscription Order Expired", description: "A pending subscription order has expired.", date: "01-Jun-2026 17:35", read: true },
  { id: 14, category: "User Adoption", severity: "Warning", title: "Users Never Logged In", description: "2 invited users have never logged in.", date: "31-May-2026 08:45", read: true },
  { id: 15, category: "User Adoption", severity: "Info", title: "Mobile App Installed but Never Used", description: "Some users installed the app but have not used it.", date: "30-May-2026 14:15", read: true },
  { id: 16, category: "User Adoption", severity: "Warning", title: "Users Inactive 60 Days", description: "1 user has been inactive for 60 days.", date: "29-May-2026 11:05", read: true },
  { id: 17, category: "User Adoption", severity: "Critical", title: "Users Inactive 90 Days", description: "1 user has been inactive for 90 days.", date: "28-May-2026 09:50", read: true },
  { id: 18, category: "System", severity: "Info", title: "Announcement", description: "New asset management tips are available.", date: "27-May-2026 16:20", read: true }
];

const state = {
  mode: "landing",
  webPage: "home",
  webReportType: "rep-asset-register",
  webColumnSettingsOpen: false,
  webReportAdvancedOpen: false,
  webRecentOpen: false,
  webDashAssetDimension: "category",
  webDashOperationPeriod: "year",
  webDashSections: {
    asset: true,
    agreement: true,
    operation: true
  },
  webReportHiddenColumns: {},
  reportsOpen: false,
  mobilePage: "home",
  assetOpen: false,
  operationsOpen: false,
  setupOpen: false,
  assetTab: "detail",
  categoryPage: 0,
  dashboardTab: "assets",
  dashAssetBy: "category",
  dashAssetMetric: "count",
  reportFlow: "criteria",
  reportIssueFilter: "all",
  reportSource: "reports",
  reportAdvancedOpen: false,
  reportPreviewPage: 1,
  reportTemplatePreviewPage: 1,
  reportCriteria: {},
  inboxItems: inboxSeed.map((item) => ({ ...item })),
  inboxShowUnreadOnly: true,
  inboxPageSize: 10,
  selectedInboxId: null,
  mobileInboxLimit: 5,
  notificationOpen: false,
  moreMenuOpen: false,
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
  reportTemplate: {
    paperSize: "A4",
    showLogo: true,
    showCriteria: true,
    showSummary: true,
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
    transaction: "Transaction",
    report: "Report"
  }[templateType];
}

function initCategoryScroll() {
  const row = document.getElementById("cat-scroll");
  const thumb = document.getElementById("cat-thumb");
  if (!row || !thumb) return;
  function syncThumb() {
    const ratio = row.scrollLeft / (row.scrollWidth - row.clientWidth);
    const trackW = thumb.parentElement.clientWidth;
    const thumbW = Math.max(28, trackW * (row.clientWidth / row.scrollWidth));
    thumb.style.width = thumbW + "px";
    thumb.style.left = (ratio * (trackW - thumbW)) + "px";
  }
  syncThumb();
  row.addEventListener("scroll", syncThumb, { passive: true });
}

function render() {
  if (state.mode === "web") {
    app.innerHTML = renderWeb();
  } else if (state.mode === "mobile") {
    app.innerHTML = renderMobile();
  } else {
    app.innerHTML = renderLanding();
  }
  if (state.mode === "mobile" && state.mobilePage === "home") initCategoryScroll();
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
            ${renderNotificationBell("web")}
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
      ${state.modal === "assetLookup" ? renderAssetLookupModal() : state.modal === "retirementAssetLookup" ? renderRetirementAssetLookupModal() : state.modal === "technicalNotes" ? renderTechnicalNotesModal() : state.modal === "inboxDetail" ? renderInboxDetailModal() : state.modal ? renderPrintModal() : ""}
      ${state.notificationOpen === "web" ? renderNotificationDropdown("web") : ""}
      ${state.toast ? `<div class="mock-toast">${state.toast}</div>` : ""}
    </div>
  `;
}

function webPageMeta() {
  if (state.webPage === "home") {
    return { title: "Dashboard", breadcrumb: "Home <span>/</span> <strong>Dashboard</strong>" };
  }
  if (state.webPage === "asset") {
    return { title: "Asset", breadcrumb: "Home <span>/</span> Asset <span>/</span> <strong>Asset List</strong>" };
  }
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
  if (state.webPage === "webReport") {
    const meta = currentReportMetaFor(state.webReportType);
    return { title: meta.name, breadcrumb: `Home <span>/</span> Reports <span>/</span> <strong>${meta.name}</strong>` };
  }
  if (state.webPage === "webReportPdf") {
    const meta = currentReportMetaFor(state.webReportType);
    return { title: `${meta.name} PDF Preview`, breadcrumb: `Home <span>/</span> Reports <span>/</span> ${meta.name} <span>/</span> <strong>PDF Preview</strong>` };
  }
  if (state.webPage === "inbox") {
    return { title: "Inbox", breadcrumb: "Home <span>/</span> <strong>Inbox</strong>" };
  }
  return { title: "Asset", breadcrumb: "Home <span>/</span> Asset <span>/</span> <strong>Asset</strong>" };
}

function renderSidebar() {
  const isAsset = state.webPage === "asset" || state.webPage === "assetDetail" || state.webPage === "mass" || state.webPage === "preview";
  const isOperations = state.webPage === "transfer" || state.webPage === "transferNew" || state.webPage === "transferView" || state.webPage === "retirement" || state.webPage === "retirementNew" || state.webPage === "retirementView" || state.webPage === "transactionPreview";
  const isTemplates = state.webPage === "templates";
  const isInbox = state.webPage === "inbox";
  const isReports = state.webPage === "webReport" || state.webPage === "webReportPdf";
  const assetOpen = state.assetOpen;
  const operationsOpen = state.operationsOpen;
  const reportsOpen = state.reportsOpen;
  const setupOpen = state.setupOpen;
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
        <button class="side-item ${isInbox ? "active" : ""}" data-action="web-page" data-page="inbox"><span class="side-icon">I</span>Inbox</button>
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
          <button class="side-item ${isReports ? "active" : ""}" data-action="toggle-reports"><span class="side-icon">R</span>Reports <span class="side-caret">${reportsOpen ? "v" : ">"}</span></button>
          ${reportsOpen ? `
            <button class="side-subitem ${state.webReportType === "rep-asset-register" && isReports ? "active" : ""}" data-action="web-report-nav" data-report="rep-asset-register">Asset Register</button>
            <button class="side-subitem ${state.webReportType === "rep-data-quality" && isReports ? "active" : ""}" data-action="web-report-nav" data-report="rep-data-quality">Asset Data Quality</button>
            <button class="side-subitem ${state.webReportType === "rep-agreement" && isReports ? "active" : ""}" data-action="web-report-nav" data-report="rep-agreement">Agreement Report</button>
            <button class="side-subitem ${state.webReportType === "rep-asset-movement" && isReports ? "active" : ""}" data-action="web-report-nav" data-report="rep-asset-movement">Asset Movement</button>
            <button class="side-subitem ${state.webReportType === "rep-asset-retirement" && isReports ? "active" : ""}" data-action="web-report-nav" data-report="rep-asset-retirement">Asset Retirement</button>
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
  if (state.webPage === "webReport") return renderWebReportPage();
  if (state.webPage === "webReportPdf") return renderWebReportPdfPreview();
  if (state.webPage === "home") return renderWebHome();
  if (state.webPage === "inbox") return renderWebInbox();
  return renderAssetList();
}

function renderWebHome() {
  const assetDimension = state.webDashAssetDimension;
  const assetCountData = webAssetInsightData(assetDimension, "count");
  const assetValueData = webAssetInsightData(assetDimension, "value");
  const agreementTypes = [
    { label: "Warranty", raw: 21, val: "21", report: "rep-agreement", type: "Warranty", action: "web-dashboard-report" },
    { label: "Insurance", raw: 15, val: "15", report: "rep-agreement", type: "Insurance", action: "web-dashboard-report" },
    { label: "Contract / License", raw: 11, val: "11", report: "rep-agreement", type: "Contract / License", action: "web-dashboard-report" }
  ];
  const agreementStatus = [
    { label: "Active", raw: 38, val: "38", report: "rep-agreement", status: "Active", action: "web-dashboard-report" },
    { label: "Expiring", raw: 5, val: "5", report: "rep-agreement", status: "Expiring Soon", action: "web-dashboard-report" },
    { label: "Expired", raw: 4, val: "4", report: "rep-agreement", status: "Expired", action: "web-dashboard-report" }
  ];
  const expiryBuckets = [
    { label: "0-30", raw: 5, val: "5", report: "rep-agreement", expiring: "Next 30 Days", action: "web-dashboard-report", color: "#f59e0b" },
    { label: "31-60", raw: 3, val: "3", report: "rep-agreement", expiring: "31-60 Days", action: "web-dashboard-report", color: "#5b8cf5" },
    { label: "61-90", raw: 2, val: "2", report: "rep-agreement", expiring: "61-90 Days", action: "web-dashboard-report", color: "#4fb7a8" },
    { label: "90+", raw: 8, val: "8", report: "rep-agreement", expiring: "After 90 Days", action: "web-dashboard-report", color: "#8b63d9" }
  ];
  const operationData = webOperationInsightData(state.webDashOperationPeriod);
  return `
    <div class="web-dashboard">
      <section class="web-dashboard-section">
        <div class="web-section-head">
          <div>
            <h2>Overview</h2>
            <p>Current asset status and report shortcuts.</p>
          </div>
        </div>
        <div class="web-overview-grid">
          ${webDashboardKpi("Total Assets", "142", "Asset Register", "rep-asset-register", { field: "assetStatus", value: "All" }, "m-blue")}
          ${webDashboardKpi("Total Asset Value", "IDR 2.4B", "Asset Register", "rep-asset-register", { field: "assetStatus", value: "All" }, "m-teal")}
          ${webDashboardKpi("Active Agreements", "38", "Agreement Report", "rep-agreement", { status: "Active" }, "m-purple")}
          ${webDashboardKpi("Expiring Soon", "5", "Agreement Report", "rep-agreement", { status: "Expiring Soon" }, "m-orange")}
        </div>
      </section>

      <section class="web-dashboard-section">
        <div class="web-section-head">
          <div>
            <h2>Attention Required</h2>
            <p>Issues that may require follow-up.</p>
          </div>
        </div>
        <div class="web-attention-grid">
          ${webAttentionCard("Assets Without Photo", "18", "Complete asset documentation", "rep-data-quality", { issue: "without-photo" }, "warning")}
          ${webAttentionCard("Assets Without Value", "31", "Review acquisition value data", "rep-data-quality", { issue: "without-value" }, "danger")}
          ${webAttentionCard("Assets Without Attachment", "9", "No attachment or document file.", "rep-data-quality", { issue: "without-attachment" }, "warning")}
          ${webAttentionCard("Expiring Within 30 Days", "5", "Review upcoming agreement expiry", "rep-agreement", { expiring: "Next 30 Days" }, "warning")}
          ${webAttentionCard("Uncovered Assets", "12", "No active warranty, insurance, contract, or license.", "rep-agreement", { coverage: "Uncovered" }, "danger")}
        </div>
      </section>

      <section class="web-dashboard-section">
        <div class="web-section-head">
          <div>
            <h2>Analytics</h2>
            <p>High-level monitoring. Drill into reports for detailed analysis.</p>
          </div>
        </div>
        <div class="web-analytics-grid">
          ${webDashboardSectionPanel("asset", "Asset Insights", webAssetDimensionToggle(), `
            <div class="web-paired-insights">
              <div class="web-dashboard-chart">
                <div class="dash-chart-label">Asset Count by ${assetDimensionLabel(assetDimension)}</div>
                ${donutChart(assetCountData, "142", "Assets")}
              </div>
              <div class="web-dashboard-chart">
                <div class="dash-chart-label">Asset Value by ${assetDimensionLabel(assetDimension)}</div>
                ${horizontalBarChart(assetValueData)}
              </div>
            </div>
          `)}
          ${webDashboardSectionPanel("agreement", "Agreement Insights", "", `
            <div class="web-three-insights">
              <div class="web-dashboard-chart">
                <div class="dash-chart-label">Agreements by Type</div>
                ${donutChart(agreementTypes, "47", "Agreements")}
              </div>
              <div class="web-dashboard-chart">
                <div class="dash-chart-label">Agreements by Status</div>
                ${donutChart(agreementStatus, "47", "Agreements")}
              </div>
              <div class="web-dashboard-chart">
                <div class="dash-chart-label">Agreement Expiry Timeline</div>
                ${columnChart(expiryBuckets)}
              </div>
            </div>
          `)}
          ${webDashboardSectionPanel("operation", "Operation Insights", webOperationPeriodToggle(), `
            <div class="web-three-insights">
              <div class="web-dashboard-chart">
                <div class="dash-chart-label">Transfer Trend</div>
                ${trendColumnChart(operationData.transferTrend, "#5b8cf5")}
              </div>
              <div class="web-dashboard-chart">
                <div class="dash-chart-label">Retirement Trend</div>
                ${trendColumnChart(operationData.retirementTrend, "#e8736b")}
              </div>
              <div class="web-dashboard-chart">
                <div class="dash-chart-label">Retirement by Reason</div>
                ${columnChart(operationData.retirementReasons)}
              </div>
            </div>
          `)}
        </div>
      </section>

      <section class="web-dashboard-section recent-section">
        <button class="web-recent-toggle" data-action="toggle-web-recent">
          <span>Recent Activities</span>
          <em>${state.webRecentOpen ? "Hide" : "Show"}</em>
        </button>
        ${state.webRecentOpen ? `
          <div class="web-recent-grid">
            ${webRecentList("Recent Assets", [
              { main: "LAPTOP-001", sub: "Lenovo ThinkPad", page: "assetDetail", assetId: 216 },
              { main: "CHAIR-001", sub: "Office Chair", page: "assetDetail", assetId: 217 },
              { main: "DESK-001", sub: "Working Desk", page: "assetDetail", assetId: 219 }
            ])}
            ${webRecentList("Recent Agreements", [
              { main: "WAR-2026-0001", sub: "Laptop Warranty", page: "webReport", report: "rep-agreement", type: "Warranty" },
              { main: "INS-2026-0001", sub: "Asset Insurance", page: "webReport", report: "rep-agreement", type: "Insurance" }
            ])}
            ${webRecentList("Recent Transfers", [
              { main: "TRF-2026050001", sub: "Head Office to Warehouse", page: "transferView", transferNo: "TRF-2026050001" },
              { main: "TRF-2026050002", sub: "IT to GA", page: "transferView", transferNo: "TRF-2026050002" }
            ])}
            ${webRecentList("Recent Retirements", [
              { main: "RET-2026050001", sub: "Scrapped - 3 assets", page: "retirementView", retirementNo: "RET-2026050001" }
            ])}
          </div>
        ` : ""}
      </section>
    </div>
  `;
}

function webDashboardKpi(label, value, reportLabel, report, filters, tone) {
  return `
    <button class="web-kpi-card ${tone}" data-action="web-dashboard-report" data-report="${report}" ${webDashboardFilterAttrs(filters)}>
      <small>${label}</small>
      <strong>${value}</strong>
      <span>${reportLabel}</span>
    </button>
  `;
}

function webAttentionCard(title, value, note, report, filters, tone) {
  return `
    <button class="web-attention-card ${tone}" data-action="web-dashboard-report" data-report="${report}" ${webDashboardFilterAttrs(filters)}>
      <div>
        <strong>${title}</strong>
        <span>${note}</span>
      </div>
      <em>${value}</em>
    </button>
  `;
}

function webDashboardFilterAttrs(filters = {}) {
  return Object.entries(filters).map(([key, value]) => `data-${key}="${value}"`).join(" ");
}

function dataQualityIssueLabel(issue) {
  return {
    "without-photo": "Without Photo",
    "without-value": "Without Value",
    "without-attachment": "Without Attachment"
  }[issue] || "All";
}

function dataQualityIssueKey(label) {
  return {
    "Without Photo": "without-photo",
    "Without Value": "without-value",
    "Without Attachment": "without-attachment"
  }[label] || "all";
}

function webRecentList(title, rows) {
  return `
    <div class="web-recent-list">
      <h3>${title}</h3>
      ${rows.map((row) => `
        <button data-action="web-recent-view" ${webRecentAttrs(row)}>
          <strong>${row.main}</strong>
          <span>${row.sub}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function webRecentAttrs(row) {
  return Object.entries(row)
    .filter(([key]) => !["main", "sub"].includes(key))
    .map(([key, value]) => `data-${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}="${value}"`)
    .join(" ");
}

function webDashboardSectionPanel(key, title, controls, content) {
  const open = state.webDashSections[key];
  return `
    <div class="web-insight-panel">
      <div class="web-insight-head">
        <button data-action="toggle-web-dashboard-section" data-section="${key}">
          <span>${title}</span>
        </button>
        ${open && controls ? `<div class="web-insight-controls">${controls}</div>` : ""}
        <button class="web-insight-visibility" data-action="toggle-web-dashboard-section" data-section="${key}">${open ? "Hide" : "Show"}</button>
      </div>
      ${open ? `
        ${content}
      ` : ""}
    </div>
  `;
}

function webAssetDimensionToggle() {
  return webSegmentedControl("web-dash-asset-dimension", state.webDashAssetDimension, [
    ["category", "Category"],
    ["department", "Department"],
    ["location", "Location"]
  ]);
}

function webOperationPeriodToggle() {
  return webSegmentedControl("web-dash-operation-period", state.webDashOperationPeriod, [
    ["month", "This Month"],
    ["year", "This Year"],
    ["all", "All Time"]
  ]);
}

function webSegmentedControl(action, current, options) {
  return `
    <div class="web-dash-segment">
      ${options.map(([value, label]) => `<button class="${current === value ? "active" : ""}" data-action="${action}" data-value="${value}">${label}</button>`).join("")}
    </div>
  `;
}

function assetDimensionLabel(dimension) {
  return { category: "Category", department: "Department", location: "Location" }[dimension] || "Category";
}

function webAssetInsightData(dimension, metric) {
  const data = {
    count: {
      category: [
        ["Electronics", 58, "58"],
        ["Furniture", 41, "41"],
        ["Vehicles", 23, "23"],
        ["Other", 20, "20"]
      ],
      department: [
        ["IT", 45, "45"],
        ["Admin", 38, "38"],
        ["GA", 30, "30"],
        ["Finance", 29, "29"]
      ],
      location: [
        ["Head Office", 72, "72"],
        ["Warehouse", 46, "46"],
        ["Branch", 24, "24"]
      ]
    },
    value: {
      category: [
        ["Electronics", 1100, "IDR 1.1B"],
        ["Vehicles", 890, "IDR 890M"],
        ["Furniture", 220, "IDR 220M"],
        ["Other", 90, "IDR 90M"]
      ],
      department: [
        ["IT", 980, "IDR 980M"],
        ["GA", 640, "IDR 640M"],
        ["Finance", 440, "IDR 440M"],
        ["Admin", 240, "IDR 240M"]
      ],
      location: [
        ["Head Office", 1450, "IDR 1.45B"],
        ["Warehouse", 620, "IDR 620M"],
        ["Branch", 330, "IDR 330M"]
      ]
    }
  };
  return (data[metric][dimension] || data[metric].category).map(([label, raw, val], index) => ({
    label,
    raw,
    val,
    report: "rep-asset-register",
    field: dimension,
    value: label,
    action: "web-dashboard-report",
    color: CHART_COLORS[index % CHART_COLORS.length]
  }));
}

function webOperationInsightData(period) {
  const map = {
    month: {
      transferTrend: [
        { label: "01", val: 2, month: "2026-06" },
        { label: "07", val: 1, month: "2026-06" },
        { label: "14", val: 4, month: "2026-06" },
        { label: "21", val: 3, month: "2026-06" },
        { label: "28", val: 4, month: "2026-06" }
      ],
      retirementTrend: [
        { label: "01", val: 0, month: "2026-06" },
        { label: "07", val: 1, month: "2026-06" },
        { label: "14", val: 0, month: "2026-06" },
        { label: "21", val: 1, month: "2026-06" },
        { label: "28", val: 1, month: "2026-06" }
      ],
      retirementReasons: [
        ["Sold", 1],
        ["Damaged", 1],
        ["Obsolete", 0],
        ["Donated", 0],
        ["Scrapped", 1]
      ]
    },
    year: {
      transferTrend: [
        { label: "Jan", val: 6, month: "2026-01" },
        { label: "Feb", val: 8, month: "2026-02" },
        { label: "Mar", val: 5, month: "2026-03" },
        { label: "Apr", val: 10, month: "2026-04" },
        { label: "May", val: 12, month: "2026-05" },
        { label: "Jun", val: 14, month: "2026-06" }
      ],
      retirementTrend: [
        { label: "Jan", val: 1, month: "2026-01" },
        { label: "Feb", val: 2, month: "2026-02" },
        { label: "Mar", val: 1, month: "2026-03" },
        { label: "Apr", val: 3, month: "2026-04" },
        { label: "May", val: 2, month: "2026-05" },
        { label: "Jun", val: 3, month: "2026-06" }
      ],
      retirementReasons: [
        ["Sold", 3],
        ["Damaged", 4],
        ["Obsolete", 2],
        ["Donated", 1],
        ["Scrapped", 2]
      ]
    },
    all: {
      transferTrend: [
        { label: "2022", val: 44, year: "2022" },
        { label: "2023", val: 58, year: "2023" },
        { label: "2024", val: 63, year: "2024" },
        { label: "2025", val: 71, year: "2025" },
        { label: "2026", val: 55, year: "2026" }
      ],
      retirementTrend: [
        { label: "2022", val: 8, year: "2022" },
        { label: "2023", val: 11, year: "2023" },
        { label: "2024", val: 15, year: "2024" },
        { label: "2025", val: 13, year: "2025" },
        { label: "2026", val: 12, year: "2026" }
      ],
      retirementReasons: [
        ["Sold", 12],
        ["Damaged", 18],
        ["Obsolete", 10],
        ["Donated", 4],
        ["Scrapped", 15]
      ]
    }
  };
  const data = map[period] || map.year;
  return {
    transferTrend: data.transferTrend.map((item) => ({ ...item, report: "rep-asset-movement", action: "web-dashboard-report" })),
    retirementTrend: data.retirementTrend.map((item) => ({ ...item, report: "rep-asset-retirement", action: "web-dashboard-report" })),
    retirementReasons: data.retirementReasons.map(([label, raw], index) => ({
      label,
      raw,
      val: String(raw),
      report: "rep-asset-retirement",
      reason: label,
      action: "web-dashboard-report",
      ...(period === "month" ? { month: "2026-06" } : {}),
      ...(period === "year" ? { year: "2026" } : {}),
      color: CHART_COLORS[index % CHART_COLORS.length]
    }))
  };
}

function horizontalBarChart(items) {
  const max = Math.max(...items.map((item) => item.raw), 1);
  return `
    <div class="horizontal-bars">
      ${items.map((item) => `
        <button class="horizontal-bar-row" ${dashboardAttrs(item)}>
          <span>${item.label}</span>
          <div><i style="width:${Math.max(8, Math.round((item.raw / max) * 100))}%;background:${item.color || "#5b8cf5"}"></i></div>
          <strong>${item.val}</strong>
        </button>
      `).join("")}
    </div>
  `;
}

function renderWebReportPage() {
  const meta = currentReportMetaFor(state.webReportType);
  const criteria = ensureReportCriteria(state.webReportType);
  return `
    <div class="content-card web-report-page">
      <div class="web-report-head">
        <div>
          <h2>${meta.name}</h2>
          <p>Filter, analyze, review details, and export report results.</p>
        </div>
      </div>
      <div class="web-report-criteria">
        ${renderWebReportCriteria(state.webReportType, criteria)}
        <div class="web-report-actions">
          <button class="btn primary" data-action="web-report-search">Filter</button>
          <button class="btn ghost" data-action="web-report-reset">Reset</button>
        </div>
      </div>
      <div class="web-report-summary">
        ${webReportSummaryItems(state.webReportType).map(([label, value], index) => `
          <div class="web-report-kpi ${["m-blue", "m-teal", "m-orange", "m-red", "m-purple"][index % 5]}">
            <small>${label}</small>
            <strong>${value}</strong>
          </div>
        `).join("")}
      </div>
      <div class="toolbar web-report-toolbar">
        <button class="btn" data-action="toggle-web-column-settings">Column Settings</button>
        <button class="btn" data-action="mock-only">CSV</button>
        <button class="btn" data-action="mock-only">Excel</button>
        <button class="btn" data-action="web-report-pdf">PDF</button>
        <span class="show">Show</span>
        <select aria-label="Show Entries"><option>10</option><option>25</option><option>50</option></select>
        <span>Entries</span>
        <span class="spacer"></span>
        <label>Search : <input aria-label="Search Report" /></label>
      </div>
      ${state.webColumnSettingsOpen ? renderWebColumnSettings(state.webReportType) : ""}
      <div class="web-report-grid-wrap">
        ${renderWebReportGrid(state.webReportType)}
      </div>
      <div class="table-footer">
        <span>Showing 1 To ${webReportRowCount(state.webReportType)} Of ${webReportRowCount(state.webReportType)} Entries</span>
        <div class="pagination"><button>Previous</button><button>1</button><button>Next</button></div>
      </div>
    </div>
  `;
}

function renderWebColumnSettings(reportType) {
  return `
    <div class="web-column-settings">
      ${webReportColumns(reportType).map((column) => `
        <button class="web-column-option ${isWebColumnVisible(reportType, column.key) ? "selected" : ""}" data-action="web-column-toggle" data-key="${column.key}">
          ${column.label}
        </button>
      `).join("")}
    </div>
  `;
}

function webReportColumns(reportType) {
  const map = {
    "rep-asset-register": [
      { key: "no", label: "No." },
      { key: "assetCode", label: "Asset Code" },
      { key: "assetDesc", label: "Asset Desc" },
      { key: "assetStatus", label: "Asset Status" },
      { key: "externalCode", label: "External Code" },
      { key: "brandModel", label: "Brand Model" },
      { key: "serialNumber", label: "Serial Number" },
      { key: "category", label: "Category" },
      { key: "department", label: "Department" },
      { key: "location", label: "Location" },
      { key: "purchaseDate", label: "Purchase Date" },
      { key: "amount", label: "Purchase Amount" },
      { key: "attribute1", label: "Attribute 1" },
      { key: "attribute2", label: "Attribute 2" },
      { key: "attribute3", label: "Attribute 3" },
      { key: "vendor", label: "Vendor" },
      { key: "createdBy", label: "Created By" },
      { key: "createdDate", label: "Created Date" }
    ],
    "rep-data-quality": [
      { key: "no", label: "No." },
      { key: "assetCode", label: "Asset Code" },
      { key: "assetDesc", label: "Asset Desc" },
      { key: "assetStatus", label: "Asset Status" },
      { key: "externalCode", label: "External Code" },
      { key: "brandModel", label: "Brand Model" },
      { key: "serialNumber", label: "Serial Number" },
      { key: "attribute1", label: "Attribute 1" },
      { key: "attribute2", label: "Attribute 2" },
      { key: "attribute3", label: "Attribute 3" },
      { key: "category", label: "Category" },
      { key: "department", label: "Department" },
      { key: "location", label: "Location" },
      { key: "issue", label: "Issue Type" },
      { key: "createdBy", label: "Created By" },
      { key: "createdDate", label: "Created Date" }
    ],
    "rep-agreement": [
      { key: "no", label: "No." },
      { key: "agreementTitle", label: "Agreement Title" },
      { key: "agreementDesc", label: "Agreement Desc" },
      { key: "agreementType", label: "Agreement Type" },
      { key: "assetCount", label: "Asset Count" },
      { key: "assetCode", label: "Asset Code" },
      { key: "assetName", label: "Asset Name" },
      { key: "assetStatus", label: "Asset Status" },
      { key: "category", label: "Category" },
      { key: "department", label: "Department" },
      { key: "location", label: "Location" },
      { key: "status", label: "Agreement Status" },
      { key: "startDate", label: "Start Date" },
      { key: "endDate", label: "End Date" },
      { key: "value", label: "Value (IDR)" },
      { key: "cost", label: "Cost" },
      { key: "premium", label: "Premium" },
      { key: "deductible", label: "Deductible" },
      { key: "coverage", label: "Coverage" },
      { key: "fee", label: "Fee" },
      { key: "createdBy", label: "Created By" },
      { key: "createdDate", label: "Created Date" }
    ],
    "rep-asset-movement": [
      { key: "no", label: "No." },
      { key: "transferNo", label: "Transfer No" },
      { key: "transferDate", label: "Transfer Date" },
      { key: "transferType", label: "Transfer Type" },
      { key: "origin", label: "Origin" },
      { key: "destination", label: "Destination" },
      { key: "assetCount", label: "Asset Count" },
      { key: "assetCode", label: "Asset Code" },
      { key: "assetName", label: "Asset Name" },
      { key: "assetStatus", label: "Asset Status" },
      { key: "category", label: "Category" },
      { key: "department", label: "Department" },
      { key: "location", label: "Location" },
      { key: "createdBy", label: "Created By" },
      { key: "createdDate", label: "Created Date" }
    ],
    "rep-asset-retirement": [
      { key: "no", label: "No." },
      { key: "retirementNo", label: "Retirement No" },
      { key: "retirementDate", label: "Retirement Date" },
      { key: "reason", label: "Reason" },
      { key: "assetCount", label: "Asset Count" },
      { key: "assetCode", label: "Asset Code" },
      { key: "assetName", label: "Asset Name" },
      { key: "assetStatus", label: "Asset Status" },
      { key: "category", label: "Category" },
      { key: "department", label: "Department" },
      { key: "location", label: "Location" },
      { key: "createdBy", label: "Created By" },
      { key: "createdDate", label: "Created Date" }
    ]
  };
  return map[reportType] || [];
}

function isWebColumnVisible(reportType, key) {
  const hidden = state.webReportHiddenColumns[reportType] || {};
  if (hidden[key] !== undefined) return !hidden[key];
  return !defaultHiddenWebColumns(reportType).includes(key);
}

function defaultHiddenWebColumns(reportType) {
  const sharedAssetColumns = ["externalCode", "brandModel", "serialNumber", "attribute1", "attribute2", "attribute3"];
  const auditColumns = ["createdBy", "createdDate"];
  const agreementValueColumns = ["cost", "premium", "deductible", "coverage", "fee"];
  const assetMetaColumns = ["assetStatus", "category", "department", "location"];
  if (reportType === "rep-asset-register" || reportType === "rep-data-quality") return [...sharedAssetColumns, ...auditColumns];
  if (reportType === "rep-agreement") {
    const detailColumns = ensureReportCriteria(reportType).agreementDetailLevel !== "Include Asset List" ? ["assetCode", "assetName", ...assetMetaColumns] : assetMetaColumns;
    return [...detailColumns, ...agreementValueColumns, ...auditColumns];
  }
  if (reportType === "rep-asset-movement" || reportType === "rep-asset-retirement") {
    const detailColumns = ensureReportCriteria(reportType).detailLevel !== "Include Asset List" ? ["assetCode", "assetName", ...assetMetaColumns] : assetMetaColumns;
    return [...detailColumns, ...auditColumns];
  }
  return auditColumns;
}

function renderWebReportCriteria(reportType, criteria) {
  const fields = reportFields[reportType] || reportFields["rep-asset-register"];
  return `
    <section class="web-report-filter-section">
      <h3>Basic Filters</h3>
      <div class="web-report-filter-grid">
        ${renderWebReportFieldList(reportType, fields.basic, criteria)}
      </div>
    </section>
    <section class="web-report-filter-section">
      <button class="web-advanced-toggle" data-action="toggle-web-report-advanced">
        <span>Advanced Filters</span>
        <em>${state.webReportAdvancedOpen ? "Hide" : "Show"}</em>
      </button>
      ${state.webReportAdvancedOpen ? `
        <div class="web-report-filter-grid">
          ${renderWebReportFieldList(reportType, fields.advanced, criteria)}
        </div>
      ` : ""}
    </section>
  `;
}

function shouldShowWebReportField(reportType, field, criteria) {
  if (reportType !== "rep-asset-movement") return true;
  if (criteria.transferType === "Department Transfer" && (field === "originLocation" || field === "destinationLocation")) return false;
  if (criteria.transferType === "Location Transfer" && (field === "originDepartment" || field === "destinationDepartment")) return false;
  return true;
}

function renderWebReportField(field, value = "") {
  const label = reportFieldLabels[field] || field;
  if (field === "asset") return `<div class="web-report-field"><label>${label}</label><input data-field="web-report-${field}" value="${value}" placeholder="Search Asset Code or Asset Name" /></div>`;
  if (field.endsWith("DateFrom") || field.endsWith("DateTo")) return `<div class="web-report-field"><label>${label}</label><input data-field="web-report-${field}" type="date" value="${value}" /></div>`;
  if (reportOptions[field]) {
    return `<div class="web-report-field"><label>${label}</label><select data-field="web-report-${field}">${reportOptions[field].map((item) => option(item, item, value)).join("")}</select></div>`;
  }
  return `<div class="web-report-field"><label>${label}</label><input data-field="web-report-${field}" value="${value}" /></div>`;
}

function renderWebReportFieldList(reportType, fields, criteria) {
  const visibleFields = fields.filter((field) => shouldShowWebReportField(reportType, field, criteria));
  const html = [];
  for (let index = 0; index < visibleFields.length; index += 1) {
    const field = visibleFields[index];
    const next = visibleFields[index + 1];
    if (field.endsWith("DateFrom") && next === field.replace("DateFrom", "DateTo")) {
      html.push(renderWebReportDateRange(field, next, criteria));
      index += 1;
    } else {
      html.push(renderWebReportField(field, criteria[field]));
    }
  }
  return html.join("");
}

function renderWebReportDateRange(fromField, toField, criteria) {
  const label = (reportFieldLabels[fromField] || fromField).replace(" From", "");
  return `
    <div class="web-report-field web-report-date-field">
      <label>${label}</label>
      <div class="web-date-range">
        <input data-field="web-report-${fromField}" type="date" value="${criteria[fromField] || ""}" aria-label="${label} From" />
        <input data-field="web-report-${toField}" type="date" value="${criteria[toField] || ""}" aria-label="${label} To" />
      </div>
    </div>
  `;
}

function webReportSummaryItems(reportType) {
  const map = {
    "rep-asset-register": [["Total Assets", "142"], ["Active", "118"], ["Inactive", "16"], ["Retired", "8"], ["Total Amount", "IDR 2.4B"]],
    "rep-asset-movement": [["Total Transfers", "14"], ["Department Transfers", "6"], ["Location Transfers", "8"], ["Total Assets Moved", "41"]],
    "rep-asset-retirement": [["Total Retirements", "12"], ["Sold", "3"], ["Damaged", "4"], ["Obsolete", "2"], ["Donated", "1"], ["Scrapped", "2"]],
    "rep-agreement": [["Total Agreements", "47"], ["Active", "38"], ["Expired", "4"], ["Expiring Soon", "5"], ["Warranty", "21"], ["Insurance", "15"], ["Contract / License", "11"]],
    "rep-data-quality": [["Without Photo", "18"], ["Without Value", "31"], ["Without Attachment", "9"]]
  };
  return map[reportType] || [];
}

function renderWebReportGrid(reportType) {
  if (reportType === "rep-asset-register") return renderWebAssetRegisterGrid();
  if (reportType === "rep-data-quality") return renderWebDataQualityGrid();
  if (reportType === "rep-agreement") return renderWebAgreementGrid();
  if (reportType === "rep-asset-movement") return renderWebMovementGrid();
  if (reportType === "rep-asset-retirement") return renderWebRetirementGrid();
  return "";
}

function renderWebAssetRegisterGrid() {
  const amounts = ["18,500,000", "21,000,000", "1,250,000", "4,800,000", "3,200,000"];
  const vendors = ["PT Vendor Alpha", "PT Digital Nusantara", "Office Supply Co.", "PT Printindo", "Furniture Central"];
  const rows = assets.map((asset, index) => ({
    no: index + 1,
    assetCode: asset.code,
    assetDesc: asset.description,
    assetStatus: webAssetStatusBadge(asset),
    externalCode: asset.external,
    brandModel: webBrandModel(asset),
    serialNumber: asset.serial,
    category: asset.category,
    department: asset.department,
    location: asset.location,
    purchaseDate: `0${index + 1}-06-2026`,
    amount: pdfMoney(amounts[index] || "1,000,000"),
    attribute1: "-",
    attribute2: "-",
    attribute3: "-",
    vendor: vendors[index] || "-",
    createdBy: ["Jennie", "Administrator", "Jennie", "Finance User", "GA User"][index] || "Jennie",
    createdDate: `0${index + 1}-06-2026`
  }));
  return webDataTable(webReportColumns("rep-asset-register"), rows);
}

function renderWebDataQualityGrid() {
  const rows = [
    [assets[0], ["Without Photo"]],
    [assets[1], ["Without Value"]],
    [assets[2], ["Without Photo", "Without Value", "Without Attachment"]],
    [assets[3], ["Without Attachment"]],
    [assets[4], ["Without Value"]]
  ].map(([asset, issues], index) => ({
    no: index + 1,
    assetCode: asset.code,
    assetDesc: asset.description,
    assetStatus: webAssetStatusBadge(asset),
    externalCode: asset.external,
    brandModel: webBrandModel(asset),
    serialNumber: asset.serial,
    attribute1: "-",
    attribute2: "-",
    attribute3: "-",
    category: asset.category,
    department: asset.department,
    location: asset.location,
    issue: pdfList(issues),
    createdBy: ["Jennie", "Administrator", "Finance User", "GA User"][index] || "Jennie",
    createdDate: `0${index + 1}-06-2026`
  }));
  return webDataTable(webReportColumns("rep-data-quality"), rows);
}

function renderWebAgreementGrid() {
  const criteria = ensureReportCriteria("rep-agreement");
  const rows = criteria.agreementDetailLevel === "Include Asset List"
    ? agreementDetailRows().flatMap((item, parentIndex) => item.assetList.map((asset, assetIndex) => ({
      no: `${parentIndex + 1}.${assetIndex + 1}`,
      agreementTitle: item.title,
      agreementDesc: item.desc,
      agreementType: item.type,
      assetCount: `${item.assetList.length} assets`,
      assetCode: asset.code,
      assetName: asset.description,
      assetStatus: webAssetStatusBadge(asset),
      category: asset.category,
      department: asset.department,
      location: asset.location,
      status: webAgreementStatusBadge(item.statusText),
      startDate: item.start,
      endDate: item.end,
      value: pdfList(item.valueItems),
      cost: item.cost || "",
      premium: item.premium || "",
      deductible: item.deductible || "",
      coverage: item.coverage || "",
      fee: item.fee || "",
      createdBy: item.createdBy,
      createdDate: item.createdDate
    })))
    : agreementDetailRows().map((item) => ({
      no: item.no,
      agreementTitle: item.title,
      agreementDesc: item.desc,
      agreementType: item.type,
      assetCount: `${item.assetList.length} assets`,
      assetCode: "",
      assetName: "",
      assetStatus: "",
      category: "",
      department: "",
      location: "",
      status: webAgreementStatusBadge(item.statusText),
      startDate: item.start,
      endDate: item.end,
      value: pdfList(item.valueItems),
      cost: item.cost || "",
      premium: item.premium || "",
      deductible: item.deductible || "",
      coverage: item.coverage || "",
      fee: item.fee || "",
      createdBy: item.createdBy,
      createdDate: item.createdDate
    }));
  return webDataTable(webReportColumns("rep-agreement"), rows);
}

function renderWebMovementGrid() {
  const criteria = ensureReportCriteria("rep-asset-movement");
  const rows = criteria.detailLevel === "Include Asset List"
    ? transfers.flatMap((transfer, parentIndex) => transfer.assetIds.map((id, assetIndex) => {
      const asset = assets.find((item) => item.id === id);
      return {
        no: `${parentIndex + 1}.${assetIndex + 1}`,
        transferNo: transfer.no,
        transferDate: transfer.date,
        transferType: transfer.type === "Department" ? "Department Transfer" : "Location Transfer",
        origin: transfer.type === "Department" ? transfer.fromDepartment : transfer.fromLocation,
        destination: transfer.type === "Department" ? transfer.toDepartment : transfer.toLocation,
        assetCount: `${transfer.assetIds.length} assets`,
        assetCode: asset?.code || "",
        assetName: asset?.description || "",
        assetStatus: asset ? webAssetStatusBadge(asset) : "",
        category: asset?.category || "",
        department: asset?.department || "",
        location: asset?.location || "",
        createdBy: transfer.user,
        createdDate: transfer.createdAt
      };
    }))
    : transfers.map((transfer, index) => ({
      no: index + 1,
      transferNo: transfer.no,
      transferDate: transfer.date,
      transferType: transfer.type === "Department" ? "Department Transfer" : "Location Transfer",
      origin: transfer.type === "Department" ? transfer.fromDepartment : transfer.fromLocation,
      destination: transfer.type === "Department" ? transfer.toDepartment : transfer.toLocation,
      assetCount: `${transfer.assetIds.length} assets`,
      assetCode: "",
      assetName: "",
      assetStatus: "",
      category: "",
      department: "",
      location: "",
      createdBy: transfer.user,
      createdDate: transfer.createdAt
    }));
  return webDataTable(webReportColumns("rep-asset-movement"), rows);
}

function renderWebRetirementGrid() {
  const criteria = ensureReportCriteria("rep-asset-retirement");
  const rows = criteria.detailLevel === "Include Asset List"
    ? retirements.flatMap((retirement, parentIndex) => retirement.assetIds.map((id, assetIndex) => {
      const asset = assets.find((item) => item.id === id);
      return {
        no: `${parentIndex + 1}.${assetIndex + 1}`,
        retirementNo: retirement.no,
        retirementDate: retirement.date,
        reason: retirement.reason,
        assetCount: `${retirement.assetIds.length} assets`,
        assetCode: asset?.code || "",
        assetName: asset?.description || "",
        assetStatus: asset ? webAssetStatusBadge(asset) : "",
        category: asset?.category || "",
        department: asset?.department || "",
        location: asset?.location || "",
        createdBy: retirement.user,
        createdDate: retirement.createdAt
      };
    }))
    : retirements.map((retirement, index) => ({
      no: index + 1,
      retirementNo: retirement.no,
      retirementDate: retirement.date,
      reason: retirement.reason,
      assetCount: `${retirement.assetIds.length} assets`,
      assetCode: "",
      assetName: "",
      assetStatus: "",
      category: "",
      department: "",
      location: "",
      createdBy: retirement.user,
      createdDate: retirement.createdAt
    }));
  return webDataTable(webReportColumns("rep-asset-retirement"), rows);
}

function webAssetStatusBadge(asset) {
  const retired = isRetiredAsset(asset);
  return `<span class="status ${retired ? "retired" : "green"}">${assetStatusLabel(asset)}</span>`;
}

function webBrandModel(asset) {
  return [asset.brand, asset.model].filter((item) => item && item !== "-").join(" / ") || "-";
}

function webAgreementStatusBadge(status) {
  const className = status === "Expired" ? "retired" : status === "Active" ? "green" : "warning-status";
  return `<span class="status ${className}">${status}</span>`;
}

function webDataTable(columns, rows) {
  const visible = columns.filter((column) => isWebColumnVisible(state.webReportType, column.key));
  return `
    <table class="data-table web-report-table">
      <thead><tr>${visible.map((column) => `<th class="sort">${column.label}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((row) => `<tr>${visible.map((column) => `<td>${row[column.key] || ""}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
}

function webReportRowCount(reportType) {
  if (reportType === "rep-agreement" && ensureReportCriteria(reportType).agreementDetailLevel === "Include Asset List") {
    return agreementDetailRows().reduce((total, row) => total + row.assetList.length, 0);
  }
  if (reportType === "rep-asset-movement" && ensureReportCriteria(reportType).detailLevel === "Include Asset List") {
    return transfers.reduce((total, transfer) => total + transfer.assetIds.length, 0);
  }
  if (reportType === "rep-asset-retirement" && ensureReportCriteria(reportType).detailLevel === "Include Asset List") {
    return retirements.reduce((total, retirement) => total + retirement.assetIds.length, 0);
  }
  return {
    "rep-asset-register": assets.length,
    "rep-data-quality": 5,
    "rep-agreement": 4,
    "rep-asset-movement": transfers.length,
    "rep-asset-retirement": retirements.length
  }[reportType] || 0;
}

function renderWebReportPdfPreview() {
  const meta = currentReportMetaFor(state.webReportType);
  state.reportType = state.webReportType;
  const pages = getPdfReportPages(state.webReportType);
  const currentPage = Math.min(state.reportPreviewPage, pages.length);
  return `
    <div class="content-card">
      <div class="preview-top">
        <button class="btn ghost" data-action="web-page" data-page="webReport">Back</button>
        <button class="btn primary" data-action="mock-only">Download PDF</button>
        <button class="btn primary" data-action="mock-only">Print</button>
      </div>
      <div class="web-report-pdf-canvas">
        <h2>${meta.name}</h2>
        ${renderPageNavigator("web-report-preview-page", currentPage, pages.length)}
        ${pages[currentPage - 1]}
      </div>
    </div>
  `;
}

function unreadInboxItems() {
  return state.inboxItems.filter((item) => !item.read);
}

function unreadBadgeText() {
  const count = unreadInboxItems().length;
  if (!count) return "";
  return count > 99 ? "99+" : String(count);
}

function renderNotificationBell(surface) {
  const badge = unreadBadgeText();
  return `
    <button class="${surface === "web" ? "notification-bell web" : "mobile-icon-btn notification-bell"}" data-action="toggle-notifications" data-surface="${surface}" title="Notifications">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      ${badge ? `<span class="notification-badge">${badge}</span>` : ""}
    </button>
  `;
}

function renderNotificationDropdown(surface) {
  const items = unreadInboxItems().slice(0, 5);
  return `
    <div class="notification-dropdown ${surface}">
      <strong>Notifications</strong>
      ${items.length ? items.map((item) => `
        <button data-action="open-inbox-item" data-id="${item.id}">
          <span>${item.title}</span>
          <em>${item.category}</em>
        </button>
      `).join("") : `<p>No unread notifications.</p>`}
      <button class="show-all" data-action="open-inbox" data-tab="unread">Go To Inbox</button>
    </div>
  `;
}

function renderWebInbox() {
  const items = inboxItemsForCurrentTab();
  const visible = items.slice(0, state.inboxPageSize);
  const hasUnread = unreadInboxItems().length > 0;
  return `
    <div class="content-card inbox-page">
      <div class="inbox-head">
        <div class="inbox-actions">
          <span>Show</span>
          <select data-field="inbox-page-size" aria-label="Show Entries">
            ${[10, 25, 50].map((size) => `<option value="${size}" ${state.inboxPageSize === size ? "selected" : ""}>${size}</option>`).join("")}
          </select>
          <span>Entries</span>
          <label class="inbox-unread-toggle">
            <input type="checkbox" data-action="toggle-inbox-unread" ${state.inboxShowUnreadOnly ? "checked" : ""}>
            Show unread only
          </label>
        </div>
        <div class="inbox-actions">
          ${hasUnread ? `<button class="btn ghost" data-action="mark-all-inbox-read">Mark All as Read</button>` : ""}
          <button class="btn ghost" data-action="open-technical-notes">Technical Notes</button>
        </div>
      </div>
      <table class="data-table inbox-table">
        <thead><tr><th>Category</th><th>Severity</th><th>Title</th><th>Date</th></tr></thead>
        <tbody>
          ${visible.map((item) => `
            <tr class="${item.read ? "read" : "unread"}" data-action="open-inbox-item" data-id="${item.id}">
              <td>${item.category}</td>
              <td><span class="severity ${item.severity.toLowerCase()}">${item.severity}</span></td>
              <td><strong>${item.title}</strong><span>${item.description}</span></td>
              <td>${item.date}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <div class="table-footer">
        <span>Showing ${items.length ? 1 : 0} To ${Math.min(visible.length, items.length)} Of ${items.length} Entries</span>
        <div class="pagination"><button>Previous</button><button>1</button><button>Next</button></div>
      </div>
    </div>
  `;
}

function inboxItemsForCurrentTab() {
  return state.inboxShowUnreadOnly ? unreadInboxItems() : state.inboxItems;
}

const technicalNoteTabs = [
  {
    id: "architecture",
    label: "Architecture",
    content: `
      <h4>Inbox Architecture</h4>
      <p>Inbox acts as the master event repository.</p>
      <ul>
        <li>Notification Bell displays unread inbox items from the Inbox repository.</li>
        <li>Mobile and Web share the same Inbox data source.</li>
      </ul>
    `
  },
  {
    id: "agreement",
    label: "Agreement",
    content: `
      <h4>Agreement Notifications</h4>
      <p>Agreement reminders are controlled through Agreement Setup. Reminder timing is configurable per agreement type.</p>
      <p><strong>Reminder examples:</strong></p>
      <ul>
        <li>90 Days Before Expiry</li>
        <li>30 Days Before Expiry</li>
        <li>7 Days Before Expiry</li>
      </ul>
      <p><strong>Supported Inbox events:</strong></p>
      <ul>
        <li>Agreement Expiring Soon</li>
        <li>Agreement Expired</li>
      </ul>
      <p class="tn-note">These events may also trigger mobile push notifications.</p>
    `
  },
  {
    id: "subscription",
    label: "Subscription",
    content: `
      <h4>Subscription Notifications</h4>
      <p><strong>Supported Inbox events:</strong></p>
      <ul>
        <li>Trial Expiring Soon</li>
        <li>Trial Expired</li>
        <li>Subscription Expiring Soon</li>
        <li>Subscription Expired</li>
        <li>Subscription Order Created</li>
        <li>Subscription Activated</li>
        <li>Subscription Order Expired</li>
        <li>Payment Failed</li>
      </ul>
      <p class="tn-note"><strong>Note:</strong> Subscription Order Expired is triggered when payment is not completed within 24 hours after order creation. Users must create a new order after the previous order expires.</p>
      <p class="tn-note">These events may also trigger mobile push notifications.</p>
    `
  },
  {
    id: "adoption",
    label: "User Adoption",
    content: `
      <h4>User Adoption Monitoring</h4>
      <p>The system may generate administrator-only mobile push notifications to help monitor application adoption and usage.</p>
      <p><strong>Examples:</strong></p>
      <ul>
        <li>Users Never Logged In</li>
        <li>Mobile App Installed but Never Used</li>
        <li>Users Inactive for 30 Days</li>
        <li>Users Inactive for 60 Days</li>
        <li>Users Inactive for 90 Days</li>
      </ul>
      <p><strong>Intended recipients:</strong> Tenant Owner · Administrator · Manager</p>
      <p class="tn-note tn-warn">These alerts do NOT create Inbox records and do NOT appear in Notification Bell. Delivered via mobile push notifications only.</p>
    `
  },
  {
    id: "system",
    label: "System",
    content: `
      <h4>System Notifications</h4>
      <p><strong>Supported Inbox events:</strong></p>
      <ul>
        <li>Announcement</li>
        <li>Scheduled Maintenance</li>
        <li>New Feature Available</li>
      </ul>
      <p class="tn-note">These events may also trigger mobile push notifications depending on importance and system configuration.</p>
    `
  },
  {
    id: "dashboard",
    label: "Dashboard",
    content: `
      <h4>Dashboard Monitoring vs Inbox Events</h4>
      <p>The following items are monitoring conditions and should remain within Dashboard and Reports. They should <strong>NOT</strong> generate recurring Inbox notifications.</p>
      <p><strong>Examples:</strong></p>
      <ul>
        <li>Assets Without Photo</li>
        <li>Assets Without Value</li>
        <li>Assets Without Attachment</li>
        <li>Uncovered Assets</li>
      </ul>
      <p class="tn-note">These conditions may remain unresolved for long periods and could create repetitive or unnecessary notifications.</p>
    `
  },
  {
    id: "retention",
    label: "Retention",
    content: `
      <h4>Inbox Retention</h4>
      <p><strong>Suggested retention period:</strong> 365 Days</p>
      <p><strong>Users may:</strong></p>
      <ul>
        <li>Mark as Read</li>
      </ul>
      <p class="tn-note">Manual deletion is not required. Older records may be automatically purged by the system.</p>
    `
  }
];

function renderTechnicalNotesModal() {
  const active = state.technicalNoteTab || "architecture";
  const tab = technicalNoteTabs.find(t => t.id === active) || technicalNoteTabs[0];
  return `
    <div class="modal-backdrop">
      <div class="modal technical-modal" role="dialog" aria-modal="true" aria-label="Technical Notes">
        <div class="modal-head">Technical Notes</div>
        <div class="tn-tabs">
          ${technicalNoteTabs.map(t => `
            <button class="tn-tab ${t.id === active ? "active" : ""}" data-action="switch-tn-tab" data-tab="${t.id}">${t.label}</button>
          `).join("")}
        </div>
        <div class="modal-body tn-body">${tab.content}</div>
        <div class="modal-actions"><button class="btn primary" data-action="close-modal">Close</button></div>
      </div>
    </div>
  `;
}

function renderInboxDetailModal() {
  const item = state.inboxItems.find((entry) => entry.id === state.selectedInboxId);
  if (!item) return "";
  const target = inboxTargetFor(item);
  return `
    <div class="modal-backdrop">
      <div class="modal technical-modal inbox-detail-modal" role="dialog" aria-modal="true" aria-label="Inbox Detail">
        <div class="modal-head">Inbox Detail</div>
        <div class="modal-body">
          <div class="inbox-detail-meta">
            <span>${item.category}</span>
            <span class="severity ${item.severity.toLowerCase()}">${item.severity}</span>
            <span>${item.date}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <p class="inbox-detail-note">This mockup item is displayed as an inbox event detail.</p>
        </div>
        <div class="modal-actions">
          <button class="btn ghost" data-action="close-modal">Cancel</button>
          ${target ? `<button class="btn primary" data-action="inbox-target" data-id="${item.id}">${target.label}</button>` : ""}
        </div>
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

function renderReportTemplateDocument() {
  const pages = getReportTemplatePreviewPages();
  const currentPage = Math.min(state.reportTemplatePreviewPage, pages.length);
  return `
    <div class="report-template-preview-wrap">
      ${renderPageNavigator("report-template-preview-page", currentPage, pages.length)}
      ${pages[currentPage - 1]}
    </div>
  `;
}

function getReportTemplatePreviewPages() {
  const header = renderReportTemplateHeader();
  const summary = state.reportTemplate.showSummary ? `<section class="pdf-section"><h2>Summary</h2>${pdfSummaryTable([["Summary Field 1", "Value"], ["Summary Field 2", "Value"], ["Summary Field 3", "Value"]])}</section>` : "";
  const detail = `
    <section class="pdf-section pdf-detail-section">
      <h2>Table Content</h2>
      <table class="pdf-table">
        <thead><tr><th>No</th><th>Field 1</th><th>Field 2</th><th>Field 3</th></tr></thead>
        <tbody>
          ${[1, 2, 3, 4, 5, 6, 7, 8].map((no) => `<tr><td>${no}</td><td>Field 1</td><td>Field 2</td><td>Field 3</td></tr>`).join("")}
        </tbody>
      </table>
    </section>
  `;
  if (state.reportTemplate.showCriteria) {
    return [`
      <article class="transaction-doc report-template-doc paper-${state.reportTemplate.paperSize.toLowerCase()}">
          ${header}
          <section class="pdf-section">
            <h2>Criteria Selection</h2>
            <div class="pdf-criteria-grid">
              ${pdfInfo("Filter Field 1", "Value")}
              ${pdfInfo("Filter Field 2", "Value")}
              ${pdfInfo("Filter Field 3", "Value")}
              ${pdfInfo("Filter Field 4", "Value")}
              ${pdfInfo("Filter Field 5", "All")}
              ${pdfInfo("Filter Field 6", "Value")}
              ${pdfInfo("Date Range 1", "01-Jun-2026 - 30-Jun-2026")}
              ${pdfInfo("Date Range 2", "All")}
              ${pdfInfo("Created By", "All")}
              ${pdfInfo("Detail Level", "Document Only")}
            </div>
          </section>
          ${summary}
          ${renderPdfFooter()}
        </article>
    `, `
        <article class="transaction-doc report-template-doc paper-${state.reportTemplate.paperSize.toLowerCase()}">
          ${detail}
          ${renderPdfFooter()}
        </article>
    `];
  }
  return [`
    <article class="transaction-doc report-template-doc paper-${state.reportTemplate.paperSize.toLowerCase()}">
      ${header}
      ${summary}
      ${detail}
      ${renderPdfFooter()}
    </article>
  `];
}

function renderReportTemplateHeader() {
  return `
    <section class="pdf-section pdf-report-header">
      ${state.reportTemplate.showLogo ? `<div class="transaction-logo">LOGO</div>` : ""}
      <h1>REPORT TITLE</h1>
    </section>
  `;
}

function renderPrintTemplates() {
  const isTransaction = state.template.templateType === "transaction";
  const isReport = state.template.templateType === "report";
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
            ${option("report", "Report", state.template.templateType)}
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
        ` : isReport ? `
          <div class="template-settings-box transaction-template-box">
            <h2 class="content-title">Report Template</h2>
            <div class="settings-field">
              <label>Default Paper Size</label>
              <select class="form-control" data-field="report-template-paper">
                ${option("A4", "A4", state.reportTemplate.paperSize)}
                ${option("Letter", "Letter", state.reportTemplate.paperSize)}
                ${option("Legal", "Legal", state.reportTemplate.paperSize)}
                ${option("F4", "F4 / Folio", state.reportTemplate.paperSize)}
              </select>
            </div>
            <div class="settings-field">
              <label>Show Company Logo</label>
              <label class="plain-check">
                <input type="checkbox" data-field="report-template-logo" ${state.reportTemplate.showLogo ? "checked" : ""} />
                Show company logo
              </label>
            </div>
            <div class="settings-field">
              <label>Show Criteria Section</label>
              <label class="plain-check">
                <input type="checkbox" data-field="report-template-criteria" ${state.reportTemplate.showCriteria ? "checked" : ""} />
                Show criteria section
              </label>
            </div>
            <div class="settings-field">
              <label>Show Summary Section</label>
              <label class="plain-check">
                <input type="checkbox" data-field="report-template-summary" ${state.reportTemplate.showSummary ? "checked" : ""} />
                Show summary section
              </label>
            </div>
          </div>
          ${state.reportTemplate.preview ? `<div class="inline-preview transaction-settings-preview">${renderReportTemplateDocument()}</div>` : ""}
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
          ${state.modal === "technicalNotes" ? renderTechnicalNotesModal() : ""}
          ${state.modal === "inboxDetail" ? renderInboxDetailModal() : ""}
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
  if (state.mobilePage === "dashboard") return renderMobileDashboard();
  if (state.mobilePage === "reports") return renderMobileReports();
  if (state.mobilePage === "inbox") return renderMobileInbox();
  if (state.mobilePage === "reportCriteria") return renderReportCriteria();
  if (state.mobilePage === "reportSummary") return renderReportSummary();
  if (state.mobilePage === "reportPreview") return renderReportPreview();
  if (state.mobilePage === "reportPlaceholder") return renderMobileReportPlaceholder();
  return renderMobileHome();
}

function renderMobileHome() {
  const menuItems = [
    { label: "Assets", icon: "A", bg: "linear-gradient(135deg,#71d1ff,#806bff)", action: "mobile-page", page: "assets" },
    { label: "Agreements", icon: "G", bg: "linear-gradient(135deg,#ffd454,#ff5f6d)", action: "mock-only" },
    { label: "Operations", icon: "O", bg: "linear-gradient(135deg,#32a7ee,#4837e3)", action: "mobile-page", page: "operations" },
    { label: "Reports", icon: "R", bg: "linear-gradient(135deg,#ff7c5c,#e8003d)", action: "mobile-page", page: "reports" },
    { label: "Setup", icon: "S", bg: "linear-gradient(135deg,#28d5cd,#10c46a)", action: "mobile-page", page: "setup" }
  ];
  return `
    <div class="mobile-header" style="overflow:visible;position:relative;">
      <div class="mobile-home-top">
        <div class="mobile-title">iReap Asset</div>
        <div class="mobile-icons">
          ${renderNotificationBell("mobile")}
          <button class="mobile-icon-btn" data-action="toggle-more-menu" title="More">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
          </button>
        </div>
      </div>
      ${state.moreMenuOpen ? `
        <div class="more-menu">
          <button class="more-menu-item" data-action="mock-only">About</button>
          <button class="more-menu-item" data-action="mock-only">How To</button>
          <button class="more-menu-item" data-action="open-support-sheet">Support</button>
          <button class="more-menu-item" data-action="mock-only">Share App</button>
          <button class="more-menu-item logout" data-action="landing">Logout</button>
        </div>
      ` : ""}
      ${state.notificationOpen === "mobile" ? renderNotificationDropdown("mobile") : ""}
    </div>
    <div class="home-scroll">
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
      <h2>Menu</h2>
      <div class="category-scroll-wrap">
        <div class="category-scroll-row" id="cat-scroll">
          ${menuItems.map(item => mobileCategory(item.label, item.icon, item.bg, item.action, item.page)).join("")}
        </div>
        <div class="cat-scrollbar-track"><div class="cat-scrollbar-thumb" id="cat-thumb"></div></div>
      </div>
    </section>
    <section class="mobile-section">
      <h2>Summary</h2>
      <div class="summary-grid">
        <button class="summary-card m-blue clickable-card" data-action="mock-only"><small>Active Assets</small>142</button>
        <button class="summary-card m-teal clickable-card" data-action="mock-only"><small>Active Agreements</small>37</button>
        <button class="summary-card m-orange clickable-card" data-action="mock-only"><small>Total Asset Value</small>IDR 2.4B</button>
        <button class="summary-card m-red clickable-card" data-action="mock-only"><small>Expiring Soon</small>5</button>
      </div>
      <button class="view-dashboard-btn" data-action="mobile-page" data-page="dashboard">View Full Dashboard →</button>
    </section>
    </div>
  `;
}

function renderMobileDashboard() {
  const tabs = ["assets", "agreements", "operations"];
  const tabLabels = { assets: "Assets", agreements: "Agreements", operations: "Operations" };
  const t = state.dashboardTab;
  return `
    ${mobileHeader("Dashboard Analytics", "home")}
    <div class="dash-tabs">
      ${tabs.map(tab => `<button class="dash-tab ${t === tab ? "active" : ""}" data-action="dashboard-tab" data-tab="${tab}">${tabLabels[tab]}</button>`).join("")}
    </div>
    <div class="dash-content">
      ${t === "assets" ? renderDashAssets() : ""}
      ${t === "agreements" ? renderDashAgreements() : ""}
      ${t === "operations" ? renderDashOperations() : ""}
    </div>
  `;
}

function segmentControl(field, options, current) {
  return `<div class="dash-segment">${options.map(o => `<button class="dash-seg-btn ${current === o.val ? "active" : ""}" data-action="dash-asset-seg" data-field="${field}" data-val="${o.val}">${o.label}</button>`).join("")}</div>`;
}

const CHART_COLORS = ["#4f94e8","#f5a623","#7ed321","#d0021b","#9b59b6","#1abc9c","#e67e22"];

function donutChart(slices, centerLine1, centerLine2) {
  const total = slices.reduce((s, r) => s + r.raw, 0);
  const cx = 80, cy = 80, r = 62, ri = 38;
  let angle = -Math.PI / 2;
  const paths = slices.map((s, i) => {
    const sweep = (s.raw / total) * 2 * Math.PI;
    const x1 = cx + r * Math.cos(angle), y1 = cy + r * Math.sin(angle);
    angle += sweep;
    const x2 = cx + r * Math.cos(angle), y2 = cy + r * Math.sin(angle);
    const ix1 = cx + ri * Math.cos(angle - sweep), iy1 = cy + ri * Math.sin(angle - sweep);
    const ix2 = cx + ri * Math.cos(angle), iy2 = cy + ri * Math.sin(angle);
    const large = sweep > Math.PI ? 1 : 0;
    const color = CHART_COLORS[i % CHART_COLORS.length];
    return `<path d="M${x1.toFixed(2)},${y1.toFixed(2)} A${r},${r} 0 ${large},1 ${x2.toFixed(2)},${y2.toFixed(2)} L${ix2.toFixed(2)},${iy2.toFixed(2)} A${ri},${ri} 0 ${large},0 ${ix1.toFixed(2)},${iy1.toFixed(2)} Z" fill="${color}" stroke="#fff" stroke-width="2"/>`;
  }).join("");
  const center = centerLine1 ? `
    <text x="${cx}" y="${cy - 6}" text-anchor="middle" font-size="18" font-weight="700" fill="#1a2030">${centerLine1}</text>
    <text x="${cx}" y="${cy + 13}" text-anchor="middle" font-size="11" fill="#8a929e">${centerLine2 || ""}</text>` : "";
  const legend = slices.map((s, i) => {
    const color = CHART_COLORS[i % CHART_COLORS.length];
    const attrs = dashboardAttrs(s);
    const tag = attrs ? "button" : "div";
    return `<${tag} class="donut-legend-item ${attrs ? "clickable-drill" : ""}" ${attrs}><span class="donut-legend-dot" style="background:${color}"></span><span class="donut-legend-label">${s.label}</span><span class="donut-legend-val">${s.val}</span></${tag}>`;
  }).join("");
  return `
    <div class="donut-wrap">
      <svg viewBox="0 0 160 160" width="140" height="140"><g>${paths}</g>${center}</svg>
      <div class="donut-legend">${legend}</div>
    </div>`;
}

function columnChart(bars) {
  const maxVal = Math.max(...bars.map(b => b.raw));
  const w = 280, h = 90, pad = 6;
  const bw = Math.floor((w - pad * (bars.length + 1)) / bars.length);
  const rects = bars.map((b, i) => {
    const bh = Math.round((b.raw / maxVal) * (h - 20));
    const x = pad + i * (bw + pad);
    const y = h - bh - 18;
    const color = b.color || CHART_COLORS[i % CHART_COLORS.length];
    const attrs = dashboardAttrs(b);
    const content = `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="3" fill="${color}"/>
            <text x="${x + bw / 2}" y="${h - 2}" text-anchor="middle" font-size="9" fill="#8a929e">${b.label}</text>
            <text x="${x + bw / 2}" y="${y - 3}" text-anchor="middle" font-size="9" fill="${color}" font-weight="700">${b.val}</text>`;
    return attrs ? `<g class="svg-drill" ${attrs}>${content}</g>` : content;
  }).join("");
  return `<div class="column-chart-wrap"><svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}">${rects}</svg></div>`;
}

function trendColumnChart(series, color) {
  const maxVal = Math.max(...series.map(p => p.val));
  const w = 280, h = 100, padH = 22, padV = 18;
  const bw = Math.floor((w - padH * (series.length + 1)) / series.length);
  const rects = series.map((p, i) => {
    const bh = Math.max(4, Math.round((p.val / maxVal) * (h - padV - 14)));
    const x = padH + i * (bw + padH);
    const y = h - padV - bh;
    const attrs = dashboardAttrs(p);
    const content = `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="3" fill="${color}"/>
            <text x="${x + bw / 2}" y="${h - 4}" text-anchor="middle" font-size="9" fill="#8a929e">${p.label}</text>
            <text x="${x + bw / 2}" y="${y - 3}" text-anchor="middle" font-size="9" fill="${color}" font-weight="700">${p.val}</text>`;
    return attrs ? `<g class="svg-drill" ${attrs}>${content}</g>` : content;
  }).join("");
  return `<div class="line-chart-wrap"><svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}">${rects}</svg></div>`;
}

function dashboardAttrs(item) {
  if (!item.report) return "";
  const attrs = [
    `data-action="${item.action || "dashboard-report"}"`,
    `data-report="${item.report}"`
  ];
  if (item.field) attrs.push(`data-field="${item.field}"`);
  if (item.value) attrs.push(`data-value="${item.value}"`);
  if (item.issue) attrs.push(`data-issue="${item.issue}"`);
  if (item.status) attrs.push(`data-status="${item.status}"`);
  if (item.type) attrs.push(`data-type="${item.type}"`);
  if (item.expiring) attrs.push(`data-expiring="${item.expiring}"`);
  if (item.month) attrs.push(`data-month="${item.month}"`);
  if (item.year) attrs.push(`data-year="${item.year}"`);
  if (item.reason) attrs.push(`data-reason="${item.reason}"`);
  return attrs.join(" ");
}

function renderDashAssets() {
  const by = state.dashAssetBy;
  const metric = state.dashAssetMetric;

  const data = {
    category: {
      count: [
        { label: "Electronics", raw: 58, val: "58" },
        { label: "Furniture",   raw: 41, val: "41" },
        { label: "Vehicles",    raw: 23, val: "23" },
        { label: "Other",       raw: 20, val: "20" }
      ],
      value: [
        { label: "Electronics", raw: 1100, val: "IDR 1.1B" },
        { label: "Vehicles",    raw: 890,  val: "IDR 890M" },
        { label: "Furniture",   raw: 220,  val: "IDR 220M" },
        { label: "Other",       raw: 90,   val: "IDR 90M"  }
      ]
    },
    department: {
      count: [
        { label: "IT",      raw: 45, val: "45" },
        { label: "Admin",   raw: 38, val: "38" },
        { label: "GA",      raw: 30, val: "30" },
        { label: "Finance", raw: 29, val: "29" }
      ],
      value: [
        { label: "IT",      raw: 980, val: "IDR 980M" },
        { label: "GA",      raw: 640, val: "IDR 640M" },
        { label: "Finance", raw: 440, val: "IDR 440M" },
        { label: "Admin",   raw: 240, val: "IDR 240M" }
      ]
    },
    location: {
      count: [
        { label: "Head Office", raw: 82, val: "82" },
        { label: "Warehouse",   raw: 37, val: "37" },
        { label: "Branch",      raw: 23, val: "23" }
      ],
      value: [
        { label: "Head Office", raw: 1600, val: "IDR 1.6B" },
        { label: "Branch",      raw: 520,  val: "IDR 520M" },
        { label: "Warehouse",   raw: 180,  val: "IDR 180M" }
      ]
    }
  };

  const slices = data[by][metric].map((slice) => ({
    ...slice,
    report: "rep-asset-register",
    field: by,
    value: slice.label
  }));

  return `
    <div class="dash-chart-card">
      <div class="dash-chart-label">Asset Distribution</div>
      <div class="dash-seg-row">
        <span class="dash-seg-label">By</span>
        ${segmentControl("dashAssetBy", [
          { val: "category",   label: "Category"   },
          { val: "department", label: "Department"  },
          { val: "location",   label: "Location"    }
        ], by)}
      </div>
      <div class="dash-seg-row">
        <span class="dash-seg-label">Metric</span>
        ${segmentControl("dashAssetMetric", [
          { val: "count", label: "Count" },
          { val: "value", label: "Value" }
        ], metric)}
      </div>
      ${donutChart(slices, metric === "count" ? "142" : "IDR 2.4B", metric === "count" ? "Assets" : "")}
    </div>
    <div class="dash-chart-card">
      <div class="dash-chart-label">Asset Data Quality</div>
      <button class="dq-item" data-action="dashboard-report" data-report="rep-data-quality" data-issue="without-photo">
        <span>Without Photo</span><span class="dq-badge">18</span>
      </button>
      <button class="dq-item" data-action="dashboard-report" data-report="rep-data-quality" data-issue="without-value">
        <span>Without Value</span><span class="dq-badge">31</span>
      </button>
      <button class="dq-item" data-action="dashboard-report" data-report="rep-data-quality" data-issue="without-attachment">
        <span>Without Attachment</span><span class="dq-badge">9</span>
      </button>
    </div>
  `;
}

function renderDashAgreements() {
  const typeSlices = [
    { label: "Warranty",           raw: 21, val: "21", report: "rep-agreement", type: "Warranty" },
    { label: "Insurance",          raw: 15, val: "15", report: "rep-agreement", type: "Insurance" },
    { label: "Contract / License", raw: 11, val: "11", report: "rep-agreement", type: "Contract / License" }
  ];
  const expiryBars = [
    { label: "0–30d",  raw: 5, val: "5", color: "#dc2626" },
    { label: "31–60d", raw: 3, val: "3", color: "#f59e0b" },
    { label: "61–90d", raw: 2, val: "2", color: "#eab308" },
    { label: "90+d",   raw: 4, val: "4", color: "#16a34a" }
  ];
  const expiryDrillBars = expiryBars.map((bar, index) => ({
    ...bar,
    report: "rep-agreement",
    expiring: ["Next 30 Days", "31-60 Days", "61-90 Days", "After 90 Days"][index]
  }));
  return `
    <div class="dash-kpi-grid">
      <button class="dash-kpi clickable-card" style="background:#f59e0b;" data-action="dashboard-report" data-report="rep-agreement" data-status="Expiring Soon">
        <small>Expiring Soon</small><strong>5</strong>
      </button>
      <button class="dash-kpi clickable-card" style="background:#dc2626;" data-action="dashboard-report" data-report="rep-agreement" data-status="Expired">
        <small>Expired</small><strong>4</strong>
      </button>
    </div>
    <div class="dash-chart-card">
      <div class="dash-chart-label">Agreements by Type</div>
      ${donutChart(typeSlices, "47", "Agreements")}
    </div>
    <div class="dash-chart-card">
      <div class="dash-chart-label">Upcoming Expirations</div>
      ${columnChart(expiryDrillBars)}
    </div>
  `;
}

function renderDashOperations() {
  const transferSeries = [
    { label: "Jan", val: 8, report: "rep-asset-movement", month: "2026-01"  },
    { label: "Feb", val: 12, report: "rep-asset-movement", month: "2026-02" },
    { label: "Mar", val: 7, report: "rep-asset-movement", month: "2026-03"  },
    { label: "Apr", val: 15, report: "rep-asset-movement", month: "2026-04" },
    { label: "May", val: 11, report: "rep-asset-movement", month: "2026-05" },
    { label: "Jun", val: 14, report: "rep-asset-movement", month: "2026-06" }
  ];
  const retirementSeries = [
    { label: "Jan", val: 1, report: "rep-asset-retirement", month: "2026-01" },
    { label: "Feb", val: 2, report: "rep-asset-retirement", month: "2026-02" },
    { label: "Mar", val: 1, report: "rep-asset-retirement", month: "2026-03" },
    { label: "Apr", val: 4, report: "rep-asset-retirement", month: "2026-04" },
    { label: "May", val: 2, report: "rep-asset-retirement", month: "2026-05" },
    { label: "Jun", val: 3, report: "rep-asset-retirement", month: "2026-06" }
  ];
  return `
    <div class="dash-kpi-grid">
      <button class="dash-kpi clickable-card" style="background:#5b8cf5;" data-action="dashboard-report" data-report="rep-asset-movement" data-month="2026-06"><small>Transfers This Month</small><strong>14</strong></button>
      <button class="dash-kpi clickable-card" style="background:#e8736b;" data-action="dashboard-report" data-report="rep-asset-retirement" data-month="2026-06"><small>Retirements This Month</small><strong>3</strong></button>
    </div>
    <div class="dash-chart-card">
      <div class="dash-chart-label">Transfer Trend (Last 6 Months)</div>
      ${trendColumnChart(transferSeries, "#5b8cf5")}
    </div>
    <div class="dash-chart-card">
      <div class="dash-chart-label">Retirement Trend (Last 6 Months)</div>
      ${trendColumnChart(retirementSeries, "#e8736b")}
    </div>
  `;
}

function renderMobileReports() {
  return `
    ${mobileHeader("Reports", "home", `<button class="mobile-header-help" data-action="report-info" title="Report info">?</button>`)}
    <div class="screen-content reports-screen">
      <div class="reports-group-label">Assets</div>
      ${reportItem("Asset Register", "Master asset listing", "rep-asset-register", "A", "report-blue")}
      ${reportItem("Asset Data Quality Report", "Assets missing required information", "rep-data-quality", "Q", "report-purple")}
      <div class="reports-group-label">Agreements</div>
      ${reportItem("Agreement Report", "Warranty, insurance, and license expiry", "rep-agreement", "G", "report-orange")}
      <div class="reports-group-label">Operations</div>
      ${reportItem("Asset Movement", "Transfers by department or location", "rep-asset-movement", "M", "report-cyan")}
      ${reportItem("Asset Retirement", "Retired assets by reason and date", "rep-asset-retirement", "R", "report-red")}
    </div>
  `;
}

function renderMobileInbox() {
  const items = inboxItemsForCurrentTab();
  const visible = items.slice(0, state.mobileInboxLimit);
  const hasUnread = unreadInboxItems().length > 0;
  return `
    ${mobileHeader("Inbox", "home", `<button class="mobile-header-help" data-action="open-technical-notes">Notes</button>`)}
    <div class="screen-content mobile-inbox-screen">
      <div class="mobile-inbox-top">
        <label class="inbox-unread-toggle mobile">
          <input type="checkbox" data-action="toggle-inbox-unread" ${state.inboxShowUnreadOnly ? "checked" : ""}>
          Show unread only
        </label>
        ${hasUnread ? `<button class="mobile-mark-all" data-action="mark-all-inbox-read">Mark All Read</button>` : ""}
      </div>
      ${visible.map((item) => `
        <div class="mobile-inbox-item ${item.read ? "read" : "unread"}" data-action="open-inbox-item" data-id="${item.id}">
          <div class="inbox-icon">${item.category.charAt(0)}</div>
          <div>
            <span>${item.category} · ${item.severity}</span>
            <strong>${item.title}</strong>
            <p>${item.description}</p>
            <small>${item.date} · ${item.read ? "Read" : "Unread"}</small>
          </div>
        </div>
      `).join("") || `<div class="mobile-empty">No inbox items.</div>`}
      ${visible.length < items.length ? `<button class="mobile-load-more" data-action="load-more-inbox">Load More</button>` : ""}
    </div>
  `;
}

const reportMeta = {
  "rep-asset-register":   { name: "Asset Register",    back: "reports" },
  "rep-asset-movement":   { name: "Asset Movement",    back: "reports" },
  "rep-asset-retirement": { name: "Asset Retirement",  back: "reports" },
  "rep-agreement":        { name: "Agreement Report",  back: "reports" },
  "rep-data-quality":     { name: "Asset Data Quality Report", back: "reports" },
  "rep-transfer":         { name: "Transfer Report",   back: "dashboard" },
  "rep-retirement":       { name: "Retirement Report", back: "dashboard" }
};

function currentReportMeta() {
  return reportMeta[state.reportType] || { name: "Report", back: "reports" };
}

function currentReportMetaFor(reportType) {
  return reportMeta[reportType] || { name: "Report", back: "reports" };
}

const reportDefaults = {
  "rep-asset-register": {
    asset: "",
    assetStatus: "Active",
    category: "All",
    department: "All",
    location: "All",
    acquisitionDateFrom: "",
    acquisitionDateTo: "",
    createdBy: "",
    createdDateFrom: "",
    createdDateTo: ""
  },
  "rep-asset-movement": {
    asset: "",
    transferType: "All",
    originDepartment: "All",
    destinationDepartment: "All",
    originLocation: "All",
    destinationLocation: "All",
    transferDateFrom: "2026-06-01",
    transferDateTo: "2026-06-30",
    detailLevel: "Document Only",
    createdBy: "",
    createdDateFrom: "",
    createdDateTo: ""
  },
  "rep-asset-retirement": {
    asset: "",
    retirementReason: "All",
    category: "All",
    department: "All",
    location: "All",
    retirementDateFrom: "2026-06-01",
    retirementDateTo: "2026-06-30",
    detailLevel: "Document Only",
    createdBy: "",
    createdDateFrom: "",
    createdDateTo: ""
  },
  "rep-agreement": {
    agreementType: "All",
    agreementStatus: "Active",
    coverageStatus: "All",
    agreementDetailLevel: "Agreement Only",
    asset: "",
    category: "All",
    department: "All",
    location: "All",
    expiringWithin: "No Filter",
    startDateFrom: "",
    startDateTo: "",
    expiryDateFrom: "",
    expiryDateTo: "",
    createdBy: "",
    createdDateFrom: "",
    createdDateTo: ""
  },
  "rep-data-quality": {
    issueType: "All",
    asset: "",
    assetStatus: "Active",
    category: "All",
    department: "All",
    location: "All",
    createdBy: "",
    createdDateFrom: "",
    createdDateTo: ""
  }
};

const reportOptions = {
  assetStatus: ["All", "Active", "Inactive", "Retired"],
  category: ["All", "Electronics", "Furniture", "Vehicles", "Other"],
  department: ["All", "IT", "Admin", "Finance", "GA"],
  location: ["All", "Head Office", "Warehouse", "Branch"],
  originDepartment: ["All", "IT", "Admin", "Finance", "GA"],
  destinationDepartment: ["All", "IT", "Admin", "Finance", "GA"],
  originLocation: ["All", "Head Office", "Warehouse", "Branch"],
  destinationLocation: ["All", "Head Office", "Warehouse", "Branch"],
  createdBy: ["All", "Jennie", "Administrator", "Finance User", "GA User"],
  transferType: ["All", "Department Transfer", "Location Transfer"],
  detailLevel: ["Document Only", "Include Asset List"],
  agreementDetailLevel: ["Agreement Only", "Include Asset List"],
  retirementReason: ["All", "Sold", "Damaged", "Obsolete", "Donated", "Scrapped"],
  agreementType: ["All", "Warranty", "Insurance", "Contract / License"],
  agreementStatus: ["All", "Active", "Expired", "Expiring Soon"],
  coverageStatus: ["All", "Covered", "Uncovered"],
  expiringWithin: ["No Filter", "Next 30 Days", "31-60 Days", "61-90 Days", "After 90 Days", "Next 60 Days", "Next 90 Days"],
  issueType: ["All", "Without Photo", "Without Value", "Without Attachment"]
};

const reportFieldLabels = {
  asset: "Asset",
  assetStatus: "Asset Status",
  category: "Category",
  department: "Department",
  location: "Location",
  originDepartment: "Origin Department",
  destinationDepartment: "Destination Department",
  originLocation: "Origin Location",
  destinationLocation: "Destination Location",
  acquisitionDateFrom: "Acquisition Date From",
  acquisitionDateTo: "Acquisition Date To",
  transferType: "Transfer Type",
  transferDateFrom: "Transfer Date From",
  transferDateTo: "Transfer Date To",
  detailLevel: "Detail Level",
  agreementDetailLevel: "Detail Level",
  retirementReason: "Retirement Reason",
  retirementDateFrom: "Retirement Date From",
  retirementDateTo: "Retirement Date To",
  agreementType: "Agreement Type",
  agreementStatus: "Agreement Status",
  coverageStatus: "Coverage Status",
  expiryDateFrom: "Expiry Date From",
  expiryDateTo: "Expiry Date To",
  expiringWithin: "Expiring Within",
  startDateFrom: "Start Date From",
  startDateTo: "Start Date To",
  issueType: "Issue Type",
  createdBy: "Created By",
  createdDateFrom: "Created Date From",
  createdDateTo: "Created Date To"
};

const reportFields = {
  "rep-asset-register": {
    basic: ["assetStatus", "category", "department", "location", "acquisitionDateFrom", "acquisitionDateTo", "asset"],
    advanced: ["createdBy", "createdDateFrom", "createdDateTo"]
  },
  "rep-asset-movement": {
    basic: ["detailLevel", "transferDateFrom", "transferDateTo", "transferType", "originDepartment", "destinationDepartment", "originLocation", "destinationLocation", "asset"],
    advanced: ["createdBy", "createdDateFrom", "createdDateTo"]
  },
  "rep-asset-retirement": {
    basic: ["detailLevel", "retirementReason", "retirementDateFrom", "retirementDateTo", "category", "department", "location", "asset"],
    advanced: ["createdBy", "createdDateFrom", "createdDateTo"]
  },
  "rep-agreement": {
    basic: ["agreementDetailLevel", "agreementType", "agreementStatus", "coverageStatus", "category", "department", "location", "asset"],
    advanced: ["startDateFrom", "startDateTo", "expiryDateFrom", "expiryDateTo", "expiringWithin", "createdBy", "createdDateFrom", "createdDateTo"]
  },
  "rep-data-quality": {
    basic: ["issueType", "assetStatus", "category", "department", "location", "asset"],
    advanced: ["createdBy", "createdDateFrom", "createdDateTo"]
  }
};

function defaultCriteriaFor(reportType) {
  return { ...(reportDefaults[reportType] || {}) };
}

function ensureReportCriteria(reportType) {
  if (!state.reportCriteria[reportType]) {
    state.reportCriteria[reportType] = defaultCriteriaFor(reportType);
  }
  return state.reportCriteria[reportType];
}

function setReportDefaults(reportType) {
  state.reportCriteria[reportType] = defaultCriteriaFor(reportType);
  state.reportAdvancedOpen = false;
}

function openDashboardReport(target) {
  const reportType = target.dataset.report;
  state.moreMenuOpen = false;
  state.mobileSheet = false;
  state.reportType = reportType;
  state.reportSource = "dashboard";
  state.reportPreviewPage = 1;
  setReportDefaults(reportType);
  const criteria = ensureReportCriteria(reportType);

  if (reportType === "rep-asset-register" && target.dataset.field) {
    criteria[target.dataset.field] = target.dataset.value;
  }

  if (reportType === "rep-data-quality" && target.dataset.issue) {
    criteria.issueType = dataQualityIssueLabel(target.dataset.issue);
    state.reportIssueFilter = target.dataset.issue;
  }

  if (reportType === "rep-agreement") {
    if (target.dataset.status) criteria.agreementStatus = target.dataset.status;
    if (target.dataset.type) criteria.agreementType = target.dataset.type;
    if (target.dataset.expiring) {
      criteria.agreementStatus = "Active";
      criteria.expiringWithin = target.dataset.expiring;
    }
  }

  if (reportType === "rep-asset-movement" && target.dataset.month) {
    const range = monthRange(target.dataset.month);
    criteria.transferDateFrom = range.from;
    criteria.transferDateTo = range.to;
  }

  if (reportType === "rep-asset-retirement" && target.dataset.month) {
    const range = monthRange(target.dataset.month);
    criteria.retirementDateFrom = range.from;
    criteria.retirementDateTo = range.to;
  }

  setState({ mobilePage: "reportPreview" });
}

function openWebDashboardReport(target) {
  const payload = dashboardPayloadFromDataset(target.dataset);
  const key = `ireap-dashboard-report-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  localStorage.setItem(key, JSON.stringify(payload));
  const url = new URL(window.location.href);
  url.searchParams.set("dashboardReport", key);
  const opened = window.open(url.toString(), "_blank");
  if (!opened) {
    applyWebDashboardReportPayload(payload);
    setState({ webPage: "webReport" });
  }
}

function dashboardPayloadFromDataset(dataset) {
  return {
    report: dataset.report,
    field: dataset.field,
    value: dataset.value,
    issue: dataset.issue,
    status: dataset.status,
    type: dataset.type,
    expiring: dataset.expiring,
    coverage: dataset.coverage,
    month: dataset.month,
    year: dataset.year,
    reason: dataset.reason
  };
}

function applyWebDashboardReportPayload(payload) {
  const reportType = payload.report;
  state.mode = "web";
  state.webReportType = reportType;
  state.reportType = reportType;
  state.webReportAdvancedOpen = false;
  state.webColumnSettingsOpen = false;
  setReportDefaults(reportType);
  const criteria = ensureReportCriteria(reportType);

  if (reportType === "rep-asset-register") {
    if (payload.field) criteria[payload.field] = payload.value;
    if (payload.status) criteria.assetStatus = payload.status;
  }

  if (reportType === "rep-data-quality" && payload.issue) {
    criteria.issueType = dataQualityIssueLabel(payload.issue);
  }

  if (reportType === "rep-agreement") {
    if (payload.status) criteria.agreementStatus = payload.status;
    if (payload.type) criteria.agreementType = payload.type;
    if (payload.coverage) criteria.coverageStatus = payload.coverage;
    if (payload.expiring) {
      criteria.agreementStatus = "Active";
      criteria.expiringWithin = payload.expiring;
    }
  }

  if (reportType === "rep-asset-movement" && payload.month) {
    const range = monthRange(payload.month);
    criteria.transferDateFrom = range.from;
    criteria.transferDateTo = range.to;
  }
  if (reportType === "rep-asset-movement" && payload.year) {
    const range = yearRange(payload.year);
    criteria.transferDateFrom = range.from;
    criteria.transferDateTo = range.to;
  }

  if (reportType === "rep-asset-retirement" && payload.month) {
    const range = monthRange(payload.month);
    criteria.retirementDateFrom = range.from;
    criteria.retirementDateTo = range.to;
  }
  if (reportType === "rep-asset-retirement" && payload.year) {
    const range = yearRange(payload.year);
    criteria.retirementDateFrom = range.from;
    criteria.retirementDateTo = range.to;
  }

  if (reportType === "rep-asset-retirement" && payload.reason) {
    criteria.retirementReason = payload.reason;
  }
}

function hydrateWebDashboardDrilldown() {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("dashboardReport");
  if (!key) return;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return;
    applyWebDashboardReportPayload(JSON.parse(raw));
    state.webPage = "webReport";
    localStorage.removeItem(key);
    params.delete("dashboardReport");
    const url = `${window.location.pathname}${params.toString() ? `?${params}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", url);
  } catch (error) {
    console.warn("Unable to open dashboard report drilldown", error);
  }
}

function openWebRecentView(target) {
  const payload = {
    page: target.dataset.page,
    assetId: target.dataset.assetId,
    transferNo: target.dataset.transferNo,
    retirementNo: target.dataset.retirementNo,
    report: target.dataset.report,
    type: target.dataset.type
  };
  const key = `ireap-recent-view-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  localStorage.setItem(key, JSON.stringify(payload));
  const url = new URL(window.location.href);
  url.searchParams.set("recentView", key);
  const opened = window.open(url.toString(), "_blank");
  if (!opened) {
    applyWebRecentViewPayload(payload);
    render();
  }
}

function applyWebRecentViewPayload(payload) {
  state.mode = "web";
  if (payload.page === "assetDetail") {
    state.selectedAssetId = Number(payload.assetId);
    state.assetTab = "detail";
    state.webPage = "assetDetail";
    return;
  }
  if (payload.page === "transferView") {
    const transfer = transfers.find((item) => item.no === payload.transferNo) || transferDefaults;
    state.transferViewNo = transfer.no;
    state.transferViewIds = [...transfer.assetIds];
    state.webPage = "transferView";
    return;
  }
  if (payload.page === "retirementView") {
    const retirement = retirements.find((item) => item.no === payload.retirementNo) || retirementDefaults;
    state.retirementViewNo = retirement.no;
    state.retirementViewIds = [...retirement.assetIds];
    state.webPage = "retirementView";
    return;
  }
  if (payload.page === "webReport" && payload.report) {
    state.webReportType = payload.report;
    state.reportType = payload.report;
    setReportDefaults(payload.report);
    if (payload.report === "rep-agreement" && payload.type) {
      ensureReportCriteria(payload.report).agreementType = payload.type;
    }
    state.webPage = "webReport";
    return;
  }
  if (payload.page) {
    state.webPage = payload.page;
  }
}

function hydrateWebRecentView() {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("recentView");
  if (!key) return;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return;
    applyWebRecentViewPayload(JSON.parse(raw));
    localStorage.removeItem(key);
    params.delete("recentView");
    const url = `${window.location.pathname}${params.toString() ? `?${params}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", url);
  } catch (error) {
    console.warn("Unable to open recent activity", error);
  }
}

function openInboxItem(id) {
  const item = state.inboxItems.find((entry) => entry.id === Number(id));
  if (!item) return;
  item.read = true;
  state.notificationOpen = false;
  state.selectedInboxId = item.id;
  state.modal = "inboxDetail";
  render();
}

function inboxTargetFor(item) {
  if (item.category === "Agreement") {
    return {
      label: "Go to Report",
      report: "rep-agreement",
      status: item.title.includes("Expired") ? "Expired" : "Expiring Soon"
    };
  }
  if (item.category === "Subscription") {
    return { label: "Go to Subscription", page: "templates" };
  }
  return null;
}

function openInboxTarget(id) {
  const item = state.inboxItems.find((entry) => entry.id === Number(id));
  const target = item ? inboxTargetFor(item) : null;
  if (!target) return;
  state.modal = null;
  if (target.report) {
    const payload = { report: target.report, status: target.status };
    const key = `ireap-dashboard-report-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(key, JSON.stringify(payload));
    const url = new URL(window.location.href);
    url.searchParams.set("dashboardReport", key);
    const opened = window.open(url.toString(), "_blank");
    if (opened) return;
    if (state.mode === "mobile") {
      state.reportType = target.report;
      setReportDefaults(target.report);
      ensureReportCriteria(target.report).agreementStatus = target.status;
      state.reportSource = "inbox";
      state.reportPreviewPage = 1;
      setState({ mobilePage: "reportPreview" });
      return;
    }
    applyWebDashboardDrilldownPayload(payload);
    render();
    return;
  }
  if (target.page) {
    if (state.mode === "mobile") {
      setState({ mobilePage: "setup" });
      return;
    }
    const payload = { page: target.page };
    const key = `ireap-recent-view-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(key, JSON.stringify(payload));
    const url = new URL(window.location.href);
    url.searchParams.set("recentView", key);
    const opened = window.open(url.toString(), "_blank");
    if (!opened) {
      applyWebRecentViewPayload(payload);
      render();
    }
  }
}

function monthRange(monthValue) {
  const [year, month] = monthValue.split("-").map(Number);
  const last = new Date(year, month, 0).getDate();
  return {
    from: `${year}-${String(month).padStart(2, "0")}-01`,
    to: `${year}-${String(month).padStart(2, "0")}-${String(last).padStart(2, "0")}`
  };
}

function yearRange(yearValue) {
  return {
    from: `${yearValue}-01-01`,
    to: `${yearValue}-12-31`
  };
}

function renderReportCriteria() {
  const meta = currentReportMeta();
  const reportType = state.reportType;
  const criteria = ensureReportCriteria(reportType);
  const fields = reportFields[reportType] || reportFields["rep-asset-register"];
  return `
    ${mobileHeader(meta.name, meta.back)}
    <div class="screen-content report-criteria-screen">
      <section class="mobile-form-section report-section">
        <h2>Basic Filters</h2>
        ${renderReportFieldList(fields.basic, criteria)}
      </section>
      <section class="mobile-form-section report-section advanced-report-section ${state.reportAdvancedOpen ? "open" : ""}">
        <button class="advanced-toggle" data-action="toggle-report-advanced">
          <span>Advanced Filters</span>
          <em>${state.reportAdvancedOpen ? "Hide" : "Show"}</em>
        </button>
        ${state.reportAdvancedOpen ? `<div class="advanced-fields">${renderReportFieldList(fields.advanced, criteria)}</div>` : ""}
      </section>
    </div>
    <div class="mobile-form-actions">
      <button class="btn ghost" data-action="reset-report-filters">Reset Filters</button>
      <button class="btn primary" data-action="mobile-page" data-page="reportPreview">Generate Report</button>
    </div>
  `;
}

function renderReportFieldList(fields, criteria) {
  const visibleFields = fields.filter((field) => shouldShowReportField(field, criteria));
  const html = [];
  for (let index = 0; index < visibleFields.length; index += 1) {
    const field = visibleFields[index];
    const next = visibleFields[index + 1];
    if (field.endsWith("DateFrom") && next === field.replace("DateFrom", "DateTo")) {
      html.push(renderReportDatePair(field, next, criteria));
      index += 1;
    } else if (isOriginDestinationPair(field, next)) {
      html.push(renderReportCompactPair(field, next, criteria));
      index += 1;
    } else {
      html.push(renderReportField(field, criteria[field]));
    }
  }
  return html.join("");
}

function isOriginDestinationPair(field, next) {
  return (field === "originDepartment" && next === "destinationDepartment") || (field === "originLocation" && next === "destinationLocation");
}

function shouldShowReportField(field, criteria) {
  if (state.reportType !== "rep-asset-movement") return true;
  if (criteria.transferType === "Department Transfer" && (field === "originLocation" || field === "destinationLocation")) return false;
  if (criteria.transferType === "Location Transfer" && (field === "originDepartment" || field === "destinationDepartment")) return false;
  return true;
}

function renderReportDatePair(fromField, toField, criteria) {
  return `
    <div class="report-date-pair">
      ${renderReportField(fromField, criteria[fromField])}
      ${renderReportField(toField, criteria[toField])}
    </div>
  `;
}

function renderReportCompactPair(leftField, rightField, criteria) {
  return `
    <div class="report-date-pair report-compact-pair">
      ${renderReportField(leftField, criteria[leftField])}
      ${renderReportField(rightField, criteria[rightField])}
    </div>
  `;
}

function renderReportField(field, value = "") {
  const label = reportFieldLabels[field] || field;
  if (field === "asset") {
    return `
      <div class="mobile-line-field report-field">
        <label>${label}</label>
        <input data-field="report-${field}" value="${value}" placeholder="Search Asset Code or Asset Name" />
      </div>
    `;
  }
  if (field.endsWith("DateFrom") || field.endsWith("DateTo")) {
    return `
      <div class="mobile-line-field report-field">
        <label>${label}</label>
        <input data-field="report-${field}" type="date" value="${value}" />
      </div>
    `;
  }
  if (reportOptions[field]) {
    return `
      <div class="mobile-line-field report-field">
        <label>${label}</label>
        <select data-field="report-${field}">
          ${reportOptions[field].map((item) => option(item, item, value)).join("")}
        </select>
      </div>
    `;
  }
  return `
    <div class="mobile-line-field report-field">
      <label>${label}</label>
      <input data-field="report-${field}" value="${value}" />
    </div>
  `;
}

function renderReportSummary() {
  const meta = currentReportMeta();
  const isDQ = state.reportType === "rep-data-quality";
  return `
    ${mobileHeader(meta.name, "reportCriteria")}
    <div class="screen-content mobile-transfer-form">
      <section class="mobile-form-section">
        <h2>Summary</h2>
        ${isDQ ? `
          <div class="transfer-info-card">
            <div><span>Without Photo</span><strong>18 assets</strong></div>
            <div><span>Without Value</span><strong>31 assets</strong></div>
            <div><span>Without Attachment</span><strong>9 assets</strong></div>
          </div>
        ` : `
          <div class="transfer-info-card">
            <div><span>Total Records</span><strong>142</strong></div>
            <div><span>Period</span><strong>01-06-2026 – 30-06-2026</strong></div>
            <div><span>Generated</span><strong>10-06-2026 09:41</strong></div>
          </div>
        `}
      </section>
    </div>
    <div class="mobile-form-actions">
      <button class="btn ghost" data-action="mobile-page" data-page="reportCriteria">Back</button>
      <button class="btn primary" data-action="mobile-page" data-page="reportPreview">Preview</button>
    </div>
  `;
}

function renderReportPreview() {
  const meta = currentReportMeta();
  const isDQ = state.reportType === "rep-data-quality";
  const dqSamples = [
    { code: "AST-0001", desc: "Laptop Dell",    issue: "Missing Photo"          },
    { code: "AST-0002", desc: "Forklift",       issue: "Missing Purchase Value" },
    { code: "AST-0007", desc: "Office Chair",   issue: "Missing Photo"          },
    { code: "AST-0011", desc: "Server Rack",    issue: "Missing Purchase Value" },
    { code: "AST-0015", desc: "Projector",      issue: "Missing Attachment"     }
  ];
  const filtered = isDQ && state.reportIssueFilter !== "all"
    ? dqSamples.filter(s => s.issue === {
      "without-photo": "Missing Photo",
      "without-value": "Missing Purchase Value",
      "without-attachment": "Missing Attachment"
    }[state.reportIssueFilter])
    : dqSamples;
  return `
    ${mobileHeader(meta.name, "reportSummary")}
    <div class="screen-content" style="padding:16px 14px 100px;">
      ${isDQ ? filtered.map(s => `
        <div class="dq-preview-card">
          <div class="dq-preview-code">${s.code}</div>
          <div class="dq-preview-desc">${s.desc}</div>
          <div class="dq-preview-issue">Issue: ${s.issue}</div>
        </div>
      `).join("") : `
        <div class="dash-chart-card" style="text-align:center;">
          <div class="dash-chart-label">${meta.name}</div>
          <div class="dash-chart-mock">Report preview — mockup only</div>
        </div>
      `}
    </div>
    <div class="mobile-form-actions">
      <button class="btn ghost" data-action="mobile-page" data-page="reportSummary">Back</button>
      <button class="btn primary" data-action="mock-only">Export PDF</button>
    </div>
  `;
}

function renderMobileReportPlaceholder() {
  return renderReportCriteria();
}

function renderReportPreview() {
  const meta = currentReportMeta();
  const pages = getPdfReportPages(state.reportType);
  const currentPage = Math.min(state.reportPreviewPage, pages.length);
  const backPage = state.reportSource === "dashboard" ? "dashboard" : "reportCriteria";
  return `
    ${mobileHeader(meta.name, backPage)}
    <div class="report-viewer-actions">
      <button class="report-action-btn" data-action="mock-only">Share</button>
      <button class="report-action-btn primary" data-action="mock-only">Download</button>
    </div>
    <div class="screen-content report-preview-screen">
      ${renderPageNavigator("report-preview-page", currentPage, pages.length)}
      ${pages[currentPage - 1]}
    </div>
  `;
}

function renderPdfReport(reportType) {
  return getPdfReportPages(reportType).join("");
}

function getPdfReportPages(reportType) {
  const meta = currentReportMeta();
  const header = renderPdfHeader(pdfReportTitle(meta.name));
  const summary = state.reportTemplate.showSummary ? `<section class="pdf-section"><h2>Summary</h2>${renderPdfSummary(reportType)}</section>` : "";
  if (state.reportTemplate.showCriteria) {
    return [`
      <div class="pdf-page">
        ${header}
        <section class="pdf-section">
          <h2>Criteria Selection</h2>
          ${renderPdfCriteria(reportType)}
        </section>
        ${summary}
        ${renderPdfFooter()}
      </div>
    `, `
      <div class="pdf-page">
        <section class="pdf-section pdf-detail-section">
          <h2>Detail</h2>
          ${renderPdfDetail(reportType)}
        </section>
        ${renderPdfFooter()}
      </div>
    `];
  }
  return [`
    <div class="pdf-page">
      ${header}
      ${summary}
      <section class="pdf-section pdf-detail-section">
        <h2>Detail</h2>
        ${renderPdfDetail(reportType)}
      </section>
      ${renderPdfFooter()}
    </div>
  `];
}

function renderPageNavigator(action, page, total) {
  if (total <= 1) return "";
  return `
    <div class="pdf-page-nav">
      <button data-action="${action}" data-dir="-1" ${page <= 1 ? "disabled" : ""}>&lt; Previous Page</button>
      <span>Page ${page} of ${total}</span>
      <button data-action="${action}" data-dir="1" ${page >= total ? "disabled" : ""}>Next Page &gt;</button>
    </div>
  `;
}

function pdfReportTitle(name) {
  return name.endsWith("Report") ? name : `${name} Report`;
}

function renderPdfHeader(title) {
  return `
    <section class="pdf-section pdf-report-header">
      ${state.reportTemplate.showLogo ? `<div class="transaction-logo report-pdf-logo">LOGO</div>` : ""}
      <h1>${title}</h1>
    </section>
  `;
}

function renderPdfFooter() {
  return `
    <footer class="pdf-footer">
      <span>Generated from iReap Asset</span>
      <span>Print Time : 11-Jun-2026 14:35</span>
    </footer>
  `;
}

function pdfInfo(label, value) {
  return `<div><span>${label}</span><strong>${value}</strong></div>`;
}

function pdfStack(lines) {
  return `<div class="pdf-stack">${lines.filter(Boolean).map((line, index) => index ? `<span>${line}</span>` : `<strong>${line}</strong>`).join("")}</div>`;
}

function pdfList(lines) {
  return `<div class="pdf-stack">${lines.filter(Boolean).map((line) => `<span>${line}</span>`).join("")}</div>`;
}

function pdfMoney(value) {
  return `IDR ${value}`;
}

function renderPdfCriteria(reportType) {
  const criteria = ensureReportCriteria(reportType);
  const fields = reportFields[reportType] || reportFields["rep-asset-register"];
  const names = compactCriteriaFields([...fields.basic, ...fields.advanced]).filter((field) => shouldShowPdfCriteriaField(reportType, field, criteria));
  return `
    <div class="pdf-criteria-grid">
      ${names.map((field) => pdfInfo(compactCriteriaLabel(field), compactCriteriaValue(field, criteria))).join("")}
    </div>
  `;
}

function shouldShowPdfCriteriaField(reportType, field, criteria) {
  if (reportType !== "rep-asset-movement") return true;
  if (criteria.transferType === "Department Transfer" && (field === "originLocation" || field === "destinationLocation")) return false;
  if (criteria.transferType === "Location Transfer" && (field === "originDepartment" || field === "destinationDepartment")) return false;
  return true;
}

function compactCriteriaFields(fields) {
  return fields.filter((field) => !field.endsWith("DateTo"));
}

function compactCriteriaLabel(field) {
  if (field.endsWith("DateFrom")) return reportFieldLabels[field].replace(" From", "");
  return reportFieldLabels[field];
}

function compactCriteriaValue(field, criteria) {
  if (field.endsWith("DateFrom")) {
    const toField = field.replace("DateFrom", "DateTo");
    return formatCriteriaDateRange(criteria[field], criteria[toField]);
  }
  return criteria[field] || "All";
}

function formatCriteriaDateRange(from, to) {
  if (from && to) return `${formatReportDate(from)} - ${formatReportDate(to)}`;
  if (from) return `From ${formatReportDate(from)}`;
  if (to) return `Until ${formatReportDate(to)}`;
  return "All";
}

function formatReportDate(value) {
  if (!value) return "";
  const parts = value.split("-");
  if (parts.length !== 3) return value;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${parts[2]}-${months[Number(parts[1]) - 1] || parts[1]}-${parts[0]}`;
}

function renderPdfSummary(reportType) {
  const items = {
    "rep-asset-register": [
      ["Total Assets", "142"],
      ["Active", "118"],
      ["Inactive", "16"],
      ["Retired", "8"],
      ["Total Amount", "IDR 2.4B"]
    ],
    "rep-asset-movement": [
      ["Total Transfers", "14"],
      ["Department Transfer", "6"],
      ["Location Transfer", "8"],
      ["Total Assets Moved", "41"]
    ],
    "rep-asset-retirement": [
      ["Total Retirements", "12"],
      ["Sold", "3"],
      ["Damaged", "4"],
      ["Obsolete", "2"],
      ["Donated", "1"],
      ["Scrapped", "2"]
    ],
    "rep-agreement": [
      ["Status", "Warranty", "Insurance", "Contract / License"],
      ["All", "21", "15", "11"],
      ["Active", "16", "13", "9"],
      ["Expiring Soon", "3", "1", "1"],
      ["Expired", "2", "1", "1"]
    ],
    "rep-data-quality": [
      ["Affected Assets", "42"],
      ["Without Photo", "18"],
      ["Without Value", "31"],
      ["Without Attachment", "9"]
    ]
  }[reportType] || [];
  if (reportType === "rep-agreement") return pdfMatrixSummary(items);
  return pdfSummaryTable(items);
}

function pdfMatrixSummary(rows) {
  const [headers, ...body] = rows;
  return `
    <table class="pdf-summary-table agreement-summary-table">
      <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
      <tbody>${body.map((row) => `<tr>${row.map((value) => `<td>${value}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
}

function pdfSummaryTable(items) {
  return `
    <table class="pdf-summary-table">
      <thead><tr>${items.map(([label]) => `<th>${label}</th>`).join("")}</tr></thead>
      <tbody><tr>${items.map(([, value]) => `<td>${value}</td>`).join("")}</tr></tbody>
    </table>
  `;
}

function renderPdfDetail(reportType) {
  if (reportType === "rep-asset-register") return renderAssetRegisterPdfDetail();
  if (reportType === "rep-asset-movement") return renderMovementPdfDetail();
  if (reportType === "rep-asset-retirement") return renderRetirementPdfDetail();
  if (reportType === "rep-agreement") return renderAgreementPdfDetail();
  if (reportType === "rep-data-quality") return renderDataQualityPdfDetail();
  return "";
}

function renderAssetRegisterPdfDetail() {
  const rows = assets.map((asset, index) => ({
    no: index + 1,
    asset: pdfStack([asset.code, asset.description, assetStatusLabel(asset)]),
    allocation: pdfStack([asset.category, asset.department, asset.location]),
    purchase: pdfStack([`0${index + 1}-06-2026`, pdfMoney(["18,500,000", "21,000,000", "1,250,000", "4,800,000", "3,200,000"][index] || "1,000,000"), ["PT Vendor Alpha", "PT Digital Nusantara", "Office Supply Co.", "PT Printindo", "Furniture Central"][index]])
  }));
  return pdfTable(["No.", "Asset", "Allocation", "Purchase"], rows, ["no", "asset", "allocation", "purchase"], "asset-register-table");
}

function renderMovementPdfDetail() {
  const criteria = ensureReportCriteria("rep-asset-movement");
  const rows = transfers.map((transfer, index) => ({
      no: index + 1,
      transfer: pdfStack([transfer.no, transfer.date]),
      type: transfer.type === "Department" ? "Department Transfer" : "Location Transfer",
      movement: transfer.type === "Department" ? `${transfer.fromDepartment} → ${transfer.toDepartment}` : `${transfer.fromLocation} → ${transfer.toLocation}`,
      assets: `${transfer.assetIds.length} assets`
    }));
  if (criteria.detailLevel !== "Include Asset List") {
    return pdfTable(["No.", "Transfer", "Type", "Movement", "Assets"], rows, ["no", "transfer", "type", "movement", "assets"], "movement-detail-table");
  }
  return pdfMasterDetailTable(
    ["No.", "Transfer", "Type", "Movement", "Assets"],
    rows,
    ["no", "transfer", "type", "movement", "assets"],
    transfers.map((transfer) => transfer.assetIds.map((id) => assets.find((asset) => asset.id === id))),
    "movement-detail-table"
  );
}

function renderRetirementPdfDetail() {
  const criteria = ensureReportCriteria("rep-asset-retirement");
  const rows = retirements.map((retirement, index) => ({
      no: index + 1,
      retirement: pdfStack([retirement.no, retirement.date]),
      reason: retirement.reason,
      assets: `${retirement.assetIds.length} assets`
    }));
  if (criteria.detailLevel !== "Include Asset List") {
    return pdfTable(["No.", "Retirement", "Reason", "Assets"], rows, ["no", "retirement", "reason", "assets"], "retirement-detail-table");
  }
  return pdfMasterDetailTable(
    ["No.", "Retirement", "Reason", "Assets"],
    rows,
    ["no", "retirement", "reason", "assets"],
    retirements.map((retirement) => retirement.assetIds.map((id) => assets.find((asset) => asset.id === id))),
    "retirement-detail-table"
  );
}

function renderAgreementPdfDetail() {
  const criteria = ensureReportCriteria("rep-agreement");
  const rows = agreementDetailRows();
  if (criteria.agreementDetailLevel !== "Include Asset List") {
    return pdfTable(["No.", "Agreement", "Assets", "Status", "Value (IDR)"], rows, ["no", "agreement", "assetCount", "period", "value"], "agreement-detail-table");
  }
  return pdfMasterDetailTable(
    ["No.", "Agreement", "Assets", "Status", "Value (IDR)"],
    rows,
    ["no", "agreement", "assetCount", "period", "value"],
    rows.map((row) => row.assetList),
    "agreement-detail-table"
  );
}

function agreementDetailRows() {
  return [
    { type: "Warranty", no: "WAR-2026-0001", title: "Laptop Warranty", desc: "Extended service coverage", status: "Active", assetIds: [216, 215], start: "01-Jan-2026", end: "31-Dec-2026", value: ["Cost: 2,500,000"], cost: "2,500,000", createdBy: "Jennie", createdDate: "01-01-2026 09:30" },
    { type: "Warranty", no: "WAR-2026-0002", title: "Printer Warranty", desc: "Parts and service", status: "Expiring Soon", assetIds: [218], start: "01-Jul-2025", end: "30-Jun-2026", value: ["Cost: 900,000"], cost: "900,000", createdBy: "Administrator", createdDate: "01-07-2025 10:15" },
    { type: "Insurance", no: "INS-2026-0001", title: "Asset Insurance", desc: "Operational asset policy", status: "Active", assetIds: [217, 219], start: "01-Feb-2026", end: "31-Jan-2027", value: ["Premium: 1,200,000", "Deductible: 500,000", "Coverage: 75,000,000"], premium: "1,200,000", deductible: "500,000", coverage: "75,000,000", createdBy: "Finance User", createdDate: "01-02-2026 11:00" },
    { type: "Contract / License", no: "CON-2026-0001", title: "Software License", desc: "Annual application license", status: "Active", assetIds: [215, 216, 217], start: "01-Mar-2026", end: "28-Feb-2027", value: ["Fee: 6,000,000"], fee: "6,000,000", createdBy: "Jennie", createdDate: "01-03-2026 14:45" }
  ].map((item, index) => ({
    no: index + 1,
    title: item.title,
    desc: item.desc,
    type: item.type,
    assetList: item.assetIds.map((id) => assets.find((asset) => asset.id === id)).filter(Boolean),
    statusText: item.status,
    start: item.start,
    end: item.end,
    valueItems: item.value,
    cost: item.cost,
    premium: item.premium,
    deductible: item.deductible,
    coverage: item.coverage,
    fee: item.fee,
    createdBy: item.createdBy,
    createdDate: item.createdDate,
    agreement: pdfStack([item.title, item.desc, `Type: ${item.type}`]),
    assetCount: `${item.assetIds.length} assets`,
    period: pdfStack([item.status, item.start, item.end]),
    value: pdfList(item.value)
  }));
}

function renderDataQualityPdfDetail() {
  const rows = [
    [assets[0], ["Without Photo"]],
    [assets[1], ["Without Value"]],
    [assets[2], ["Without Photo", "Without Value", "Without Attachment"]],
    [assets[3], ["Without Attachment"]],
    [assets[4], ["Without Value"]]
  ].map(([asset, issues], index) => ({
    no: index + 1,
    asset: pdfStack([asset.code, asset.description, assetStatusLabel(asset)]),
    allocation: pdfStack([asset.category, asset.department, asset.location]),
    issue: pdfList(issues)
  }));
  return pdfTable(["No.", "Asset", "Allocation", "Issue Type"], rows, ["no", "asset", "allocation", "issue"], "data-quality-table");
}

function pdfTable(headers, rows, keys, className = "") {
  return `
    <table class="pdf-table ${className}">
      <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
      <tbody>
        ${rows.map((row) => `<tr>${keys.map((key) => `<td>${row[key] || ""}</td>`).join("")}</tr>`).join("")}
      </tbody>
    </table>
  `;
}

function pdfMasterDetailTable(headers, rows, keys, childGroups, className = "") {
  return `
    <table class="pdf-table master-detail-table ${className}">
      <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
      <tbody>
        ${rows.map((row, index) => `
          <tr class="master-row">${keys.map((key) => `<td>${row[key] || ""}</td>`).join("")}</tr>
          <tr class="child-row">
            <td colspan="${headers.length}">
              <div class="asset-child-block">
                <div class="asset-child-list">
                  ${childGroups[index].map((asset, childIndex) => `
                    <div class="asset-child-item">
                      <span>${childIndex + 1}</span>
                      <strong>${asset.code}</strong>
                      <em>${asset.description}</em>
                    </div>
                  `).join("")}
                </div>
              </div>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function reportItem(label, description, reportType, icon, colorClass) {
  return `
    <button class="report-item" data-action="report-nav" data-page="reportCriteria" data-report="${reportType}">
      <span class="report-icon ${colorClass}">${icon}</span>
      <span class="report-text">
        <strong>${label}</strong>
        <em>${description}</em>
      </span>
      <span class="setup-arrow">&gt;</span>
    </button>
  `;
}

function mobileCategory(label, icon, bg, action, page) {
  return `
    <button class="category-btn" data-action="${action}" ${page ? `data-page="${page}"` : ""}>
      <span class="category-icon" style="background:${bg}">${icon}</span>
      <span class="category-label">${label}</span>
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

function mobileHeader(title, backPage, rightContent = "") {
  return `
    <header class="mobile-header compact">
      <button class="mobile-back" data-action="mobile-page" data-page="${backPage}">&lt;</button>
      <div class="mobile-title">${title}</div>
      ${rightContent ? `<div class="mobile-header-right">${rightContent}</div>` : ""}
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
  const isReport = state.template.templateType === "report";
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
          ${option("report", "Report", state.template.templateType)}
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
      ` : isReport ? `
        <div class="mobile-template-box transaction-mobile-box">
          <h2>Report Template</h2>
          <div class="mobile-field">
            <label>Default Paper Size</label>
            <select class="mobile-select" data-field="report-template-paper">
              ${option("A4", "A4", state.reportTemplate.paperSize)}
              ${option("Letter", "Letter", state.reportTemplate.paperSize)}
              ${option("Legal", "Legal", state.reportTemplate.paperSize)}
              ${option("F4", "F4 / Folio", state.reportTemplate.paperSize)}
            </select>
          </div>
          <label class="mobile-check">
            <input type="checkbox" data-field="report-template-logo" ${state.reportTemplate.showLogo ? "checked" : ""} />
            Show company logo
          </label>
          <label class="mobile-check">
            <input type="checkbox" data-field="report-template-criteria" ${state.reportTemplate.showCriteria ? "checked" : ""} />
            Show criteria section
          </label>
          <label class="mobile-check">
            <input type="checkbox" data-field="report-template-summary" ${state.reportTemplate.showSummary ? "checked" : ""} />
            Show summary section
          </label>
        </div>
        ${state.reportTemplate.preview ? `<div class="mobile-template-preview transaction-mobile-preview">${renderReportTemplateDocument()}</div>` : ""}
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

function renderSupportSheet() {
  return `
    <div class="bottom-sheet-backdrop">
      <div class="bottom-sheet">
        <div class="sheet-title">
          <h3>Contact Support</h3>
          <button class="mobile-icon-btn" data-action="close-mobile-sheet" style="color:#8a929e;font-size:22px;line-height:1;">&#x2715;</button>
        </div>
        <p style="margin:0 0 22px;color:#6d7480;font-size:15px;">Need help with iReap Asset?</p>
        <div class="support-sheet-actions">
          <button class="support-btn whatsapp" data-action="mock-only">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.962-1.418A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.065-1.112l-.291-.173-3.024.865.84-3.094-.19-.317A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg>
            WhatsApp Support
          </button>
          <button class="support-btn email" data-action="mock-only">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
            Email Support
          </button>
          <button class="support-btn cancel" data-action="close-mobile-sheet">Cancel</button>
        </div>
      </div>
    </div>
  `;
}

function renderMobileSheet() {
  if (state.mobileSheet === "support") return renderSupportSheet();
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
    state.moreMenuOpen = false;
    setState({ mode: "landing" });
    return;
  }

  if (action === "web-page") {
    state.modal = null;
    state.notificationOpen = false;
    if (target.dataset.page === "webReport") state.reportType = state.webReportType;
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

  if (action === "web-report-nav") {
    state.webReportType = target.dataset.report;
    state.reportType = target.dataset.report;
    state.webReportAdvancedOpen = false;
    setReportDefaults(target.dataset.report);
    setState({ webPage: "webReport" });
    return;
  }

  if (action === "web-report-search") {
    render();
    return;
  }

  if (action === "web-report-reset") {
    setReportDefaults(state.webReportType);
    state.webReportAdvancedOpen = false;
    render();
    return;
  }

  if (action === "web-report-pdf") {
    state.reportType = state.webReportType;
    state.reportPreviewPage = 1;
    setState({ webPage: "webReportPdf" });
    return;
  }

  if (action === "toggle-notifications") {
    state.notificationOpen = state.notificationOpen === target.dataset.surface ? false : target.dataset.surface;
    state.moreMenuOpen = false;
    render();
    return;
  }

  if (action === "open-inbox") {
    state.notificationOpen = false;
    state.inboxShowUnreadOnly = target.dataset.tab !== "all";
    state.mobileInboxLimit = 5;
    if (state.mode === "mobile") {
      setState({ mobilePage: "inbox" });
    } else {
      setState({ webPage: "inbox" });
    }
    return;
  }

  if (action === "toggle-inbox-unread") {
    state.inboxShowUnreadOnly = event.target.checked;
    state.mobileInboxLimit = 5;
    render();
    return;
  }

  if (action === "mark-all-inbox-read") {
    unreadInboxItems().forEach((item) => { item.read = true; });
    render();
    return;
  }

  if (action === "open-inbox-item") {
    openInboxItem(target.dataset.id);
    return;
  }

  if (action === "inbox-target") {
    openInboxTarget(target.dataset.id);
    return;
  }

  if (action === "load-more-inbox") {
    state.mobileInboxLimit += 5;
    render();
    return;
  }

  if (action === "open-technical-notes") {
    state.modal = "technicalNotes";
    state.technicalNoteTab = "architecture";
    render();
    return;
  }

  if (action === "switch-tn-tab") {
    state.technicalNoteTab = target.dataset.tab;
    render();
    return;
  }

  if (action === "web-dashboard-report") {
    openWebDashboardReport(target);
    return;
  }

  if (action === "toggle-web-recent") {
    state.webRecentOpen = !state.webRecentOpen;
    render();
    return;
  }

  if (action === "web-recent-view") {
    openWebRecentView(target);
    return;
  }

  if (action === "toggle-web-dashboard-section") {
    const section = target.dataset.section;
    state.webDashSections[section] = !state.webDashSections[section];
    render();
    return;
  }

  if (action === "web-dash-asset-dimension") {
    state.webDashAssetDimension = target.dataset.value;
    render();
    return;
  }

  if (action === "web-dash-operation-period") {
    state.webDashOperationPeriod = target.dataset.value;
    render();
    return;
  }

  if (action === "toggle-web-column-settings") {
    state.webColumnSettingsOpen = !state.webColumnSettingsOpen;
    render();
    return;
  }

  if (action === "toggle-web-report-advanced") {
    state.webReportAdvancedOpen = !state.webReportAdvancedOpen;
    render();
    return;
  }

  if (action === "web-column-toggle") {
    const reportType = state.webReportType;
    state.webReportHiddenColumns[reportType] = state.webReportHiddenColumns[reportType] || {};
    const key = target.dataset.key;
    state.webReportHiddenColumns[reportType][key] = isWebColumnVisible(reportType, key);
    render();
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

  if (action === "toggle-reports") {
    state.reportsOpen = !state.reportsOpen;
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
    const label = templateTypeLabel(state.template.templateType);
    showToast(`${label} template settings saved for mockup.`);
    return;
  }

  if (action === "preview-template") {
    state.reportTemplatePreviewPage = 1;
    if (state.template.templateType === "transaction") state.transactionTemplate.preview = true;
    else if (state.template.templateType === "report") state.reportTemplate.preview = true;
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
    state.moreMenuOpen = false;
    if (target.dataset.id) state.selectedAssetId = Number(target.dataset.id);
    if (target.dataset.page === "detail") state.assetTab = "detail";
    if (target.dataset.page === "reportPreview") {
      state.reportPreviewPage = 1;
      state.reportSource = "reports";
    }
    if (target.dataset.report) {
      state.reportType = target.dataset.report;
      setReportDefaults(state.reportType);
    }
    setState({ mobilePage: target.dataset.page });
    return;
  }

  if (action === "toggle-more-menu") {
    state.moreMenuOpen = !state.moreMenuOpen;
    state.notificationOpen = false;
    render();
    return;
  }

  if (action === "open-support-sheet") {
    state.moreMenuOpen = false;
    state.mobileSheet = "support";
    render();
    return;
  }

  if (action === "category-page") {
    state.categoryPage = Number(target.dataset.p);
    render();
    return;
  }

  if (action === "dashboard-tab") {
    state.dashboardTab = target.dataset.tab;
    render();
    return;
  }

  if (action === "dash-asset-seg") {
    state[target.dataset.field] = target.dataset.val;
    render();
    return;
  }

  if (action === "dashboard-report") {
    openDashboardReport(target);
    return;
  }

  if (action === "report-nav") {
    state.moreMenuOpen = false;
    state.mobileSheet = false;
    state.reportType = target.dataset.report;
    state.reportSource = "reports";
    state.reportIssueFilter = target.dataset.issue || "all";
    state.reportFlow = "criteria";
    setReportDefaults(state.reportType);
    if (state.reportType === "rep-data-quality" && target.dataset.issue) {
      state.reportCriteria[state.reportType].issueType = dataQualityIssueLabel(target.dataset.issue);
    }
    if (state.reportType === "rep-agreement" && target.dataset.issue) {
      state.reportCriteria[state.reportType].agreementStatus = target.dataset.issue === "expired" ? "Expired" : "Expiring Soon";
    }
    setState({ mobilePage: "reportCriteria" });
    return;
  }

  if (action === "report-info") {
    showToast("Mobile Reports are optimized for quick PDF generation. For Excel, CSV, and advanced columns, use iReap Asset Web.");
    return;
  }

  if (action === "toggle-report-advanced") {
    state.reportAdvancedOpen = !state.reportAdvancedOpen;
    render();
    return;
  }

  if (action === "reset-report-filters") {
    setReportDefaults(state.reportType);
    render();
    return;
  }

  if (action === "report-preview-page") {
    const total = getPdfReportPages(state.reportType).length;
    state.reportPreviewPage = Math.max(1, Math.min(total, state.reportPreviewPage + Number(target.dataset.dir)));
    render();
    return;
  }

  if (action === "web-report-preview-page") {
    const total = getPdfReportPages(state.webReportType).length;
    state.reportPreviewPage = Math.max(1, Math.min(total, state.reportPreviewPage + Number(target.dataset.dir)));
    render();
    return;
  }

  if (action === "report-template-preview-page") {
    const total = getReportTemplatePreviewPages().length;
    state.reportTemplatePreviewPage = Math.max(1, Math.min(total, state.reportTemplatePreviewPage + Number(target.dataset.dir)));
    render();
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
    state.moreMenuOpen = false;
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

  if (field === "inbox-page-size") {
    state.inboxPageSize = Number(event.target.value);
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
    state.reportTemplate.preview = false;
    state.reportTemplatePreviewPage = 1;
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

  if (field === "report-template-paper") {
    state.reportTemplate.paperSize = event.target.value;
    state.reportTemplatePreviewPage = 1;
    render();
  }

  if (field === "report-template-logo") {
    state.reportTemplate.showLogo = event.target.checked;
    render();
  }

  if (field === "report-template-criteria") {
    state.reportTemplate.showCriteria = event.target.checked;
    state.reportTemplatePreviewPage = 1;
    render();
  }

  if (field === "report-template-summary") {
    state.reportTemplate.showSummary = event.target.checked;
    state.reportTemplatePreviewPage = 1;
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

  if (field && field.startsWith("report-")) {
    const reportField = field.replace("report-", "");
    const criteria = ensureReportCriteria(state.reportType);
    criteria[reportField] = event.target.value;
    if (reportField === "issueType") {
      state.reportIssueFilter = dataQualityIssueKey(event.target.value);
    }
    render();
  }

  if (field && field.startsWith("web-report-")) {
    const reportField = field.replace("web-report-", "");
    const criteria = ensureReportCriteria(state.webReportType);
    criteria[reportField] = event.target.value;
    if (reportField === "transferType" || reportField === "detailLevel" || reportField === "agreementDetailLevel") render();
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

document.addEventListener("input", (event) => {
  const field = event.target.dataset.field;
  if (!field || !field.startsWith("report-")) return;
  const reportField = field.replace("report-", "");
  const criteria = ensureReportCriteria(state.reportType);
  criteria[reportField] = event.target.value;
});

hydrateWebDashboardDrilldown();
hydrateWebRecentView();
render();
