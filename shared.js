// ========== Date Format (Bangladesh Time) ==========
function getBangladeshTime(timestamp) {
    if (!timestamp) return '-';
    return new Date(timestamp).toLocaleString('bn-BD', {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// ========== Notification System ==========
function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    if (!container) {
        const newContainer = document.createElement('div');
        newContainer.id = 'notificationContainer';
        newContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-width: 380px;
            width: 100%;
        `;
        document.body.appendChild(newContainer);
    }
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        padding: 14px 18px;
        border-radius: 14px;
        background: #ffffff;
        box-shadow: 0 12px 32px -8px rgba(0,0,0,0.12);
        display: flex;
        align-items: center;
        gap: 12px;
        animation: slideIn 0.4s ease;
        border-left: 5px solid ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
    `;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };
    
    notification.innerHTML = `
        <i class="fas ${icons[type]}" style="color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};"></i>
        <span style="flex: 1;">${message}</span>
    `;
    
    document.getElementById('notificationContainer').appendChild(notification);
    setTimeout(() => notification.remove(), 4000);
}

// ========== Table Filter ==========
function filterTable(inputId, tbodyId) {
    const filter = document.getElementById(inputId).value.toLowerCase();
    const rows = document.getElementById(tbodyId).querySelectorAll('tr');
    rows.forEach(row => {
        if (row.classList.contains('table-empty')) return;
        row.style.display = row.textContent.toLowerCase().includes(filter) ? '' : 'none';
    });
}
