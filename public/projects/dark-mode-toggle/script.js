// Dark mode toggle
const toggle = document.getElementById('dark-toggle');
const sidebar = document.getElementById('sidebar');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

// 初始化 dark mode 狀態
if (localStorage.getItem('mode') === 'dark') {
  document.body.classList.add('dark');
  toggle.checked = true;
} else {
  document.body.classList.remove('dark');
  toggle.checked = false;
}

// 切換 dark mode
toggle.addEventListener('change', function () {
  document.body.classList.toggle('dark', this.checked);
  localStorage.setItem('mode', this.checked ? 'dark' : 'light');
});

// Sidebar menu toggle
menuBtn.addEventListener('click', () => {
  sidebar.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show');
});

// 點 sidebar 空白處可關閉（選擇性功能，可移除）
sidebar.addEventListener('click', e => {
  if (e.target === sidebar) sidebar.classList.remove('show');
});
