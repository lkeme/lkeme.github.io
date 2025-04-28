// 密钥检测相关功能
function initKeyCheck() {
    const iidInput = document.getElementById('iid');
    const indicator = document.getElementById('iid-indicator');
    const checkBtn = document.getElementById('btn-get-cid');
    
    if (iidInput) {
        iidInput.addEventListener('input', function() {
            let value = this.value.replace(/[^\w]/g,'');
            
            if (value.length === 25) {
                indicator.textContent = '5位数';
                indicator.className = 'badge badge-blue';
                checkBtn.disabled = false;
                this.className = 'form-input';
            } else {
                this.value = value;
                checkBtn.disabled = true;
                indicator.textContent = value.length > 0 ? '错误Key' : '未输入';
                indicator.className = value.length > 0 ? 'badge badge-orange' : 'badge badge-black';
                this.className = 'form-input ' + (value.length > 0 ? 'invalid' : 'noiid');
            }
        });
    }
}

// 确认ID检测相关功能
function initCidCheck() {
    const iidInput = document.getElementById('iid');
    const indicator = document.getElementById('iid-indicator');
    const checkBtn = document.getElementById('btn-get-cid');
    
    if (iidInput) {
        iidInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            
            if (value.length === 54 || value.length === 63) {
                this.value = value.match(new RegExp('.{1,' + value.length / 9 + '}', 'g')).join('-');
                indicator.textContent = value.length / 9 + '位数';
                indicator.className = 'badge badge-blue';
                checkBtn.disabled = false;
                this.className = 'form-input';
            } else {
                this.value = value;
                checkBtn.disabled = true;
                indicator.textContent = value.length > 0 ? '错误IID' : '没有IID';
                indicator.className = value.length > 0 ? 'badge badge-orange' : 'badge badge-black';
                this.className = 'form-input ' + (value.length > 0 ? 'invalid' : 'noiid');
            }
        });
    }
}

// 加密的API配置
const _0x2f8a = ['aHR0cHM6Ly9waWRrZXkuY29tL2FqYXgvcGlkbXNfYXBp', 'aHR0cHM6Ly9waWRrZXkuY29tL2FqYXgvY2lkbXNfYXBp', 'blZIQnozUklzSHBYSG9mTHYzQjg5aUZLOA=='];
const _0xd3c9 = str => atob(str);

// 检测密钥
function checkKey() {
    const iid = document.getElementById('iid').value;
    const checkBtn = document.getElementById('btn-get-cid');
    const loadingIndicator = document.getElementById('loading-indicator');
    
    checkBtn.disabled = true;
    checkBtn.textContent = '检测中';
    loadingIndicator.style.display = 'flex';
    
    // 清空结果
    document.getElementById('pid-name').value = '';
    document.getElementById('pid-prd').value = '';
    document.getElementById('pid-code').value = '';
    document.getElementById('pid-time').value = '';
    
    fetch(`${_0xd3c9(_0x2f8a[0])}?keys=${iid}&justforcheck=0&apikey=${_0xd3c9(_0x2f8a[2])}`)
        .then(response => response.json())
        .then(data => {
            if (data[0].is_retail === 1 || data[0].is_retail === 2) {
                document.getElementById('pid-name').value = data[0].keyname_with_dash;
                document.getElementById('pid-prd').value = data[0].prd;
                
                if (data[0].is_retail === 2 && data[0].remaining >= 0) {
                    document.getElementById('pid-code').value = data[0].remaining;
                    document.getElementById('err').textContent = '次数';
                } else {
                    document.getElementById('pid-code').value = data[0].errorcode;
                    document.getElementById('err').textContent = '代码';
                }
                
                document.getElementById('pid-time').value = data[0].datetime_checked_done;
            } else {
                document.getElementById('pid-name').value = '请求超时，请稍后重试';
            }
        })
        .catch(() => {
            showError('请求超时，请稍后重试');
        })
        .finally(() => {
            checkBtn.disabled = false;
            checkBtn.textContent = '检测密钥';
            loadingIndicator.style.display = 'none';
        });
}

// 获取确认ID
function getCid() {
    const iid = document.getElementById('iid').value;
    const checkBtn = document.getElementById('btn-get-cid');
    const loadingIndicator = document.getElementById('loading-indicator');
    
    checkBtn.disabled = true;
    checkBtn.textContent = '获取中';
    loadingIndicator.style.display = 'flex';
    
    // 清空结果
    document.getElementById('cid-cont').value = '';
    document.getElementById('cid-split').value = '';
    
    fetch(`${_0xd3c9(_0x2f8a[1])}?iids=${iid}&justforcheck=0&apikey=${_0xd3c9(_0x2f8a[2])}`)
        .then(response => response.json())
        .then(data => {
            const cidCont = document.getElementById('cid-cont');
            const cidSplit = document.getElementById('cid-split');
            
            if (data.typeiid === 1) {
                cidCont.value = data.confirmation_id_no_dash;
                cidSplit.value = data.confirmation_id_with_dash;
            } else if (data.typeiid === 4) {
                cidCont.value = data.short_result === "IID is not correct!!" 
                    ? '安装ID错误，请检查后重新输入'
                    : '密钥失效，请更换密钥激活';
            } else if (data.typeiid === 3) {
                cidCont.value = '无法获取确认ID，建议不要使用020密钥';
            } else {
                cidCont.value = '检测失败，请稍后重试';
            }
        })
        .catch(() => {
            showError('请求超时，请稍后重试');
        })
        .finally(() => {
            checkBtn.disabled = false;
            checkBtn.textContent = '获取确认ID';
            loadingIndicator.style.display = 'none';
        });
}

// 复制确认ID
function copyCid() {
    const cidSplit = document.getElementById('cid-split');
    cidSplit.select();
    document.execCommand('copy');
    alert('已复制好，可贴粘。');
}

// 清除输入框内容
function clearInput() {
    const iidInput = document.getElementById('iid');
    const indicator = document.getElementById('iid-indicator');
    const checkBtn = document.getElementById('btn-get-cid');
    const pageType = document.body.dataset.page;
    
    // 清空输入
    iidInput.value = '';
    iidInput.className = 'form-input noiid';
    
    // 重置状态指示器
    indicator.textContent = pageType === 'key' ? '未输入' : '没有IID';
    indicator.className = 'badge badge-black';
    
    // 禁用检测按钮
    checkBtn.disabled = true;
    
    // 聚焦输入框
    iidInput.focus();
}

// 显示错误信息
function showError(message) {
    const errorContainer = document.createElement('div');
    errorContainer.setAttribute('role', 'alert');
    errorContainer.className = 'error-message';
    errorContainer.textContent = message;
    
    const form = document.querySelector('.form-group');
    form.appendChild(errorContainer);
    
    setTimeout(() => {
        errorContainer.remove();
    }, 5000);
}

// 表格排序功能
function sortTable(button) {
    const table = button.closest('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const isAsc = button.getAttribute('data-order') === 'desc';
    
    // 添加排序动画效果
    rows.forEach(row => row.classList.add('sorting'));
    
    // 排序行
    rows.sort((a, b) => {
        const aValue = parseInt(a.cells[1].textContent.trim()) || 0;
        const bValue = parseInt(b.cells[1].textContent.trim()) || 0;
        return isAsc ? aValue - bValue : bValue - aValue;
    });
    
    // 更新排序方向和按钮状态
    button.setAttribute('data-order', isAsc ? 'asc' : 'desc');
    button.classList.toggle('active');
    
    // 更新箭头方向
    const sortIcon = button.querySelector('.sort-icon');
    sortIcon.textContent = isAsc ? '↑' : '↓';
    
    // 清空并重新插入排序后的行
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    rows.forEach(row => tbody.appendChild(row));
    
    // 移除排序动画效果
    setTimeout(() => {
        rows.forEach(row => row.classList.remove('sorting'));
    }, 300);
}

// 展开/折叠产品组
function toggleProduct(header) {
    const content = header.nextElementSibling;
    header.classList.toggle('active');
    const isExpanded = header.classList.contains('active');
    header.setAttribute('aria-expanded', isExpanded);
    content.classList.toggle('show');
}

// 初始化页面功能
document.addEventListener('DOMContentLoaded', function() {
    const pageType = document.body.dataset.page;
    
    if (pageType === 'key') {
        initKeyCheck();
    } else if (pageType === 'cid') {
        initCidCheck();
    }
});

// 添加键盘支持
document.addEventListener('keydown', function(e) {
    if (e.target.classList.contains('product-header')) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleProduct(e.target);
        }
    }
}); 