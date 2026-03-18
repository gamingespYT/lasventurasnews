// ========================================
// SISTEMA DE FACTURAS v2 — Las Venturas News
// ========================================

const STORAGE_PREFIX = 'lvn_invoice_';

// Modal de confirmación personalizado
function showConfirmModal(message, onConfirm) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;animation:fadeIn .2s ease;';
  overlay.innerHTML = `
    <div style="background:#1e293b;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:28px;max-width:380px;width:100%;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,0.5);font-family:'Inter',sans-serif;">
      <div style="width:48px;height:48px;background:rgba(239,68,68,0.15);border-radius:12px;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;">
        <svg width="24" height="24" fill="none" stroke="#ef4444" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>
      </div>
      <p style="color:#f1f5f9;font-size:0.95rem;margin-bottom:24px;line-height:1.5;">${message}</p>
      <div style="display:flex;gap:10px;justify-content:center;">
        <button id="modal-cancel" style="flex:1;padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:transparent;color:#94a3b8;font-weight:600;cursor:pointer;font-size:0.9rem;transition:all .2s;font-family:'Inter',sans-serif;">Cancelar</button>
        <button id="modal-confirm" style="flex:1;padding:10px;border-radius:10px;border:none;background:linear-gradient(135deg,#dc2626,#b91c1c);color:white;font-weight:700;cursor:pointer;font-size:0.9rem;transition:all .2s;font-family:'Oswald',sans-serif;letter-spacing:0.5px;">Confirmar</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const close = () => { overlay.remove(); };
  overlay.querySelector('#modal-cancel').addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  overlay.querySelector('#modal-confirm').addEventListener('click', () => { close(); onConfirm(); });
}

// Obtener datos de la URL
function getInvoiceData() {
  const urlParams = new URLSearchParams(window.location.search);
  const encodedData = urlParams.get('data');
  const invoiceCode = urlParams.get('codigo');

  if (invoiceCode) {
    try {
      return parseCompactInvoice(decodeURIComponent(invoiceCode));
    } catch (error) {
      console.error('Error al decodificar código de factura:', error);
      document.body.innerHTML = '<div style="text-align:center;padding:50px;font-family:Inter,sans-serif;color:#fff;"><h1>❌ Error</h1><p>Código de factura inválido</p><button onclick="window.location.href=\'../login/facturas.html\'" style="margin-top:20px;padding:10px 20px;cursor:pointer;border:none;border-radius:8px;background:#dc2626;color:#fff;font-weight:bold;">Volver</button></div>';
      return null;
    }
  }

  if (!encodedData) {
    showSearchInterface();
    return null;
  }

  try {
    return parseCompactInvoice(decodeURIComponent(encodedData));
  } catch (error) {
    console.error('Error al decodificar datos:', error);
    document.body.innerHTML = '<div style="text-align:center;padding:50px;font-family:Inter,sans-serif;color:#fff;"><h1>❌ Error</h1><p>Datos de factura inválidos</p><button onclick="window.location.href=\'../login/facturas.html\'" style="margin-top:20px;padding:10px 20px;cursor:pointer;border:none;border-radius:8px;background:#dc2626;color:#fff;font-weight:bold;">Volver</button></div>';
    return null;
  }
}

// Parseador del formato compacto v2
// Formato: dateMs|name|org|phone|total|discount|discountPercent|finalTotal|invoiceNumber|notes|item1Concepto~item1Precio,item2Concepto~item2Precio
function parseCompactInvoice(compact) {
  const parts = compact.split('|');
  try {
    const dateMs = parseInt(parts[0], 10) || Date.now();
    const name = decodeURIComponent(parts[1] || '');
    const org = decodeURIComponent(parts[2] || '');
    const phone = decodeURIComponent(parts[3] || '');
    const total = Number(parts[4]) || 0;
    const discount = Number(parts[5]) || 0;
    const discountPercent = Number(parts[6]) || 0;
    const finalTotal = Number(parts[7]) || total;
    const invoiceNumber = parts[8] || '';
    const notes = decodeURIComponent(parts[9] || '');
    const itemsRaw = parts[10] || '';

    const items = itemsRaw.length === 0 ? [] : itemsRaw.split(',').map(it => {
      const f = it.split('~');
      return {
        concepto: decodeURIComponent(f[0] || ''),
        precio: Number(f[1]) || 0
      };
    });

    return {
      date: new Date(dateMs).toISOString(),
      name, org, phone, items, total,
      discount, discountPercent, finalTotal,
      invoiceNumber, notes
    };
  } catch (e) {
    console.error('Error parsing compact invoice:', e);
    return null;
  }
}

// Construir el compact v2 desde un objeto de datos
function buildCompactInvoice(data) {
  const dateMs = Date.parse(data.date) || Date.now();
  const itemsStr = (data.items || []).map(it => {
    return `${encodeURIComponent(it.concepto || '')}~${it.precio || 0}`;
  }).join(',');

  const compact = [
    dateMs,
    encodeURIComponent(data.name || ''),
    encodeURIComponent(data.org || ''),
    encodeURIComponent(data.phone || ''),
    data.total || 0,
    data.discount || 0,
    data.discountPercent || 0,
    data.finalTotal || 0,
    data.invoiceNumber || '',
    encodeURIComponent(data.notes || ''),
    itemsStr
  ].join('|');

  return encodeURIComponent(compact);
}

// Mostrar interfaz de búsqueda
function showSearchInterface() {
  const backHref = (typeof Auth !== 'undefined' && Auth.isAuthenticated()) ? '../login/dashboard.html' : '../index.html';
  document.body.innerHTML = `
    <a href="${backHref}" class="back-home" aria-label="Volver">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5"/>
      </svg>
    </a>
    <div class="search-container">
      <div class="search-box">
        <h1 style="font-family:'Oswald',sans-serif;font-size:1.6rem;letter-spacing:-0.5px;">
          LAS VENTURAS <span style="color:#dc2626;">NEWS</span>
        </h1>
        <p class="search-subtitle" style="margin-top:4px;">Buscar o consultar facturas guardadas</p>
        <form onsubmit="searchInvoice(event)" class="search-form">
          <textarea
            id="invoice-search"
            placeholder="Pega aquí el código de factura completo..."
            class="search-input"
            rows="3"
            required
          ></textarea>
          <button type="submit" class="search-btn">🔍 Buscar Factura</button>
        </form>
        <div id="search-result" class="search-result"></div>
        <div class="recent-invoices">
          <div class="recent-header">
            <h3>Facturas Guardadas</h3>
            <button onclick="clearAllInvoices()" class="clear-btn">🗑️ Borrar Todas</button>
          </div>
          <div id="recent-list"></div>
        </div>
      </div>
    </div>
    <style>
      body {
        margin: 0;
        padding: 0;
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0f172a 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Inter', sans-serif;
      }
      .search-container {
        width: 100%;
        max-width: 560px;
        padding: 20px;
      }
      .search-box {
        background: rgba(255,255,255,0.05);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 1.5rem;
        padding: 36px;
        text-align: center;
        color: #f1f5f9;
      }
      .search-subtitle {
        color: #94a3b8;
        font-size: 0.9rem;
        margin-bottom: 24px;
      }
      .search-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 16px;
      }
      .search-input {
        padding: 14px;
        background: rgba(255,255,255,0.07);
        border: 1px solid rgba(255,255,255,0.12);
        border-radius: 10px;
        font-size: 0.85rem;
        font-family: monospace;
        color: #f1f5f9;
        resize: vertical;
        width: 100%;
        outline: none;
        transition: border-color 0.3s;
      }
      .search-input::placeholder { color: rgba(148,163,184,0.5); }
      .search-input:focus { border-color: #ef4444; }
      .search-btn {
        padding: 13px;
        background: linear-gradient(135deg, #dc2626, #b91c1c);
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s;
        font-family: 'Oswald', sans-serif;
        letter-spacing: 0.5px;
      }
      .search-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(220,38,38,0.4);
      }
      .search-result {
        margin-top: 12px;
        padding: 10px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 0.9rem;
      }
      .search-result.error {
        background: rgba(239,68,68,0.15);
        color: #fca5a5;
      }
      .recent-invoices {
        margin-top: 28px;
        padding-top: 20px;
        border-top: 1px solid rgba(255,255,255,0.1);
        text-align: left;
      }
      .recent-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 14px;
        gap: 10px;
      }
      .recent-invoices h3 {
        color: #f1f5f9;
        margin: 0;
        font-size: 1rem;
        font-family: 'Oswald', sans-serif;
      }
      .clear-btn {
        padding: 6px 14px;
        background: rgba(239,68,68,0.15);
        color: #fca5a5;
        border: 1px solid rgba(239,68,68,0.3);
        border-radius: 8px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
      }
      .clear-btn:hover {
        background: rgba(239,68,68,0.25);
        color: #ef4444;
      }
      #recent-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .recent-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 10px;
        transition: all 0.3s;
        gap: 10px;
      }
      .recent-item:hover {
        background: rgba(255,255,255,0.08);
        border-color: rgba(255,255,255,0.15);
      }
      .recent-item-info {
        text-align: left;
        flex: 1;
        cursor: pointer;
      }
      .recent-item-info:hover { opacity: 0.8; }
      .recent-item-number { font-weight: 700; color: #f1f5f9; font-size: 0.85rem; }
      .recent-item-date { font-size: 0.75rem; color: #64748b; margin-top: 2px; }
      .recent-item-customer { font-size: 0.8rem; color: #94a3b8; margin-top: 2px; }
      .recent-item-actions { display: flex; align-items: center; gap: 8px; }
      .recent-item-amount { font-weight: 700; color: #ef4444; font-size: 1rem; font-family: 'Oswald', sans-serif; }
      .delete-btn {
        padding: 5px 8px;
        background: rgba(239,68,68,0.15);
        color: #fca5a5;
        border: 1px solid rgba(239,68,68,0.2);
        border-radius: 6px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s;
      }
      .delete-btn:hover {
        background: rgba(239,68,68,0.3);
        transform: scale(1.05);
      }
      .no-recent {
        color: #64748b;
        font-style: italic;
        text-align: center;
        padding: 16px;
        font-size: 0.9rem;
      }
      .back-home {
        position: fixed;
        top: 12px;
        left: 12px;
        z-index: 1000;
        width: 48px;
        height: 48px;
        border-radius: 999px;
        background: rgba(255,255,255,0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.15);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        transition: all 0.3s;
      }
      .back-home:hover { background: rgba(255,255,255,0.2); }
    </style>
  `;

  displayRecentInvoices();
}

// Mostrar facturas recientes
function displayRecentInvoices() {
  const recentList = document.getElementById('recent-list');
  if (!recentList) return;

  const invoices = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(STORAGE_PREFIX)) {
      try {
        const invoice = JSON.parse(localStorage.getItem(key));
        invoice.storageKey = key;
        invoices.push(invoice);
      } catch (error) {
        console.error('Error al cargar factura:', error);
      }
    }
  }

  invoices.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (invoices.length === 0) {
    recentList.innerHTML = '<p class="no-recent">No hay facturas guardadas</p>';
    return;
  }

  recentList.innerHTML = invoices.map(inv => {
    const code = buildCompactInvoice(inv);
    return `
      <div class="recent-item">
        <div class="recent-item-info" onclick="window.location.href='?data=${code}'">
          <div class="recent-item-number">${inv.invoiceNumber}</div>
          <div class="recent-item-customer">${inv.name}${inv.org ? ' · ' + inv.org : ''}</div>
          <div class="recent-item-date">${formatDate(inv.date)}</div>
        </div>
        <div class="recent-item-actions">
          <div class="recent-item-amount">${inv.finalTotal}€</div>
          <button onclick="event.stopPropagation(); deleteInvoice('${inv.storageKey}')" class="delete-btn" title="Eliminar">🗑️</button>
        </div>
      </div>
    `;
  }).join('');
}

// Borrar una factura
function deleteInvoice(storageKey) {
  showConfirmModal('¿Estás seguro de que quieres eliminar esta factura?', () => {
  localStorage.removeItem(storageKey);
  displayRecentInvoices();

  const resultDiv = document.getElementById('search-result');
  if (resultDiv) {
    resultDiv.style.background = 'rgba(5,150,105,0.15)';
    resultDiv.style.color = '#6ee7b7';
    resultDiv.textContent = '✅ Factura eliminada';
    setTimeout(() => { resultDiv.textContent = ''; resultDiv.style.background = ''; resultDiv.style.color = ''; }, 3000);
  }
  });
}

// Borrar todas las facturas
function clearAllInvoices() {
  showConfirmModal('¿Borrar todas las facturas guardadas? Esta acción no se puede deshacer.', () => {
    const keysToDelete = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(STORAGE_PREFIX)) keysToDelete.push(key);
    }
    keysToDelete.forEach(key => localStorage.removeItem(key));
    displayRecentInvoices();
  });
}

// Buscar factura
function searchInvoice(event) {
  event.preventDefault();
  const invoiceCode = document.getElementById('invoice-search').value.trim();
  const resultDiv = document.getElementById('search-result');

  try {
    // Verificar que el código es válido intentando parsearlo
    parseCompactInvoice(decodeURIComponent(invoiceCode));
    window.location.href = `?data=${invoiceCode}`;
  } catch (error) {
    resultDiv.className = 'search-result error';
    resultDiv.textContent = '❌ Código de factura inválido.';
    setTimeout(() => { resultDiv.textContent = ''; resultDiv.className = 'search-result'; }, 4000);
  }
}

// Generar número de factura
function generateInvoiceNumber() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const h = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  return `LVN-${y}${m}${d}-${h}${min}${s}`;
}

// Formatear fecha
function formatDate(dateString) {
  const d = new Date(dateString);
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()} - ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

// Llenar la factura con los datos
function populateInvoice() {
  const data = getInvoiceData();
  if (!data) return;

  const invoiceNumber = data.invoiceNumber || generateInvoiceNumber();
  if (!data.invoiceNumber) data.invoiceNumber = invoiceNumber;

  const invoiceCode = buildCompactInvoice(data);
  const isAlreadySaved = localStorage.getItem(`${STORAGE_PREFIX}${invoiceNumber}`) !== null;

  const urlParams = new URLSearchParams(window.location.search);
  const isFromGenerator = urlParams.get('src') === 'gen';

  if (!isAlreadySaved && isFromGenerator) {
    // Auto-guardar solo cuando viene del generador (admin)
    try {
      localStorage.setItem(`${STORAGE_PREFIX}${invoiceNumber}`, JSON.stringify(data));
    } catch (error) {
      console.error('Error al guardar factura:', error);
    }
  } else if (!isAlreadySaved) {
    // Si viene de un código, mostrar botón de guardar
    const saveBtn = document.getElementById('save-btn');
    if (saveBtn) saveBtn.style.display = 'inline-block';
  }

  // Info de factura
  document.getElementById('invoice-number').textContent = invoiceNumber;
  document.getElementById('invoice-date').textContent = formatDate(data.date);

  // Cliente
  document.getElementById('customer-name').textContent = data.name;
  const orgEl = document.getElementById('customer-org');
  const orgRow = document.getElementById('org-row');
  if (data.org && orgEl) {
    orgEl.textContent = data.org;
    if (orgRow) orgRow.style.display = '';
  } else if (orgRow) {
    orgRow.style.display = 'none';
  }
  document.getElementById('customer-phone').textContent = data.phone || '-';

  // Items
  const itemsBody = document.getElementById('items-body');
  itemsBody.innerHTML = '';

  data.items.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.concepto || item.name || 'Servicio'}</td>
      <td><strong>${(item.precio || item.price || 0).toLocaleString('es-ES', { minimumFractionDigits: 2 })}€</strong></td>
    `;
    itemsBody.appendChild(row);
  });

  // Totales
  document.getElementById('subtotal-amount').textContent = `${(data.total || 0).toLocaleString('es-ES', { minimumFractionDigits: 2 })}€`;

  if (data.discount && data.discount > 0) {
    document.getElementById('discount-row').style.display = 'flex';
    document.getElementById('discount-label').textContent = `Descuento (${data.discountPercent || 0}%):`;
    document.getElementById('discount-amount').textContent = `-${(data.discount || 0).toLocaleString('es-ES', { minimumFractionDigits: 2 })}€`;
  }

  document.getElementById('final-amount').textContent = `${(data.finalTotal || 0).toLocaleString('es-ES', { minimumFractionDigits: 2 })}€`;

  // Notas
  const notesSection = document.getElementById('notes-section');
  if (data.notes && notesSection) {
    notesSection.style.display = '';
    document.getElementById('invoice-notes').textContent = data.notes;
  } else if (notesSection) {
    notesSection.style.display = 'none';
  }

  document.title = `Factura ${invoiceNumber} - Las Venturas News`;

  window.currentInvoiceCode = invoiceCode;
  window.currentInvoiceData = data;
  window.currentInvoiceNumber = invoiceNumber;
}

// Guardar factura manualmente
function saveInvoiceManually() {
  if (!window.currentInvoiceData || !window.currentInvoiceNumber) {
    showCodeNotification('⚠️ No hay datos de factura', 'error');
    return;
  }

  try {
    localStorage.setItem(`${STORAGE_PREFIX}${window.currentInvoiceNumber}`, JSON.stringify(window.currentInvoiceData));
    const saveBtn = document.getElementById('save-btn');
    if (saveBtn) saveBtn.style.display = 'none';
    showCodeNotification('✅ Factura guardada', 'success');
  } catch (error) {
    showCodeNotification('❌ Error al guardar', 'error');
  }
}

// Copiar código de factura
function copyInvoiceCode() {
  if (!window.currentInvoiceCode) {
    showCodeNotification('⚠️ No hay código disponible', 'error');
    return;
  }

  navigator.clipboard.writeText(window.currentInvoiceCode).then(() => {
    showCodeNotification('✅ Código copiado al portapapeles', 'success');
  }).catch(() => {
    showCodeNotification('❌ Error al copiar', 'error');
  });
}

// Notificación
function showCodeNotification(message, type) {
  const notification = document.getElementById('code-notification');
  if (!notification) return;
  notification.textContent = message;
  notification.className = `code-notification ${type} show`;
  setTimeout(() => notification.classList.remove('show'), 4000);
}

// Descargar como PNG
async function downloadAsPNG() {
  const container = document.querySelector('.invoice-container');
  const buttons = document.querySelector('.print-button-container');
  const notification = document.getElementById('code-notification');
  const backHome = document.querySelector('.back-home');

  buttons.style.display = 'none';
  if (notification) notification.style.display = 'none';
  if (backHome) backHome.style.display = 'none';

  showCodeNotification('⏳ Generando imagen...', 'success');

  try {
    await new Promise(resolve => setTimeout(resolve, 100));

    const canvas = await html2canvas(container, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true,
      allowTaint: true
    });

    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `Factura_${document.getElementById('invoice-number').textContent}.png`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
      showCodeNotification('✅ Imagen descargada', 'success');
    }, 'image/png');

  } catch (error) {
    console.error('Error al generar PNG:', error);
    showCodeNotification('❌ Error al generar imagen', 'error');
  } finally {
    buttons.style.display = 'flex';
    if (notification) notification.style.display = 'block';
    if (backHome) backHome.style.display = 'inline-flex';
  }
}

// Cargar al iniciar
window.addEventListener('DOMContentLoaded', populateInvoice);
