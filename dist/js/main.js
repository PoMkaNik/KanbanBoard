function toggleSidebar() {
  const sidebar = document.getElementById('js--sidebar');
  sidebar.classList.toggle('translate-x-0');
  sidebar.classList.toggle('-translate-x-full');

  const sidebarContentOverlay = document.getElementById(
    'js--sidebar-content-overlay',
  );
  sidebarContentOverlay.classList.toggle('hidden');
}
