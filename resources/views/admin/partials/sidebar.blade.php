<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo">
      <a href="/admin" class="d-flex">
        <img style="max-width: 50px" src="{{ asset('assets/xgrassdesk.png') }}" alt="">
        <span class="app-brand-text demo menu-text fw-bolder ms-2 text-danger">admin</span>
      </a>

      <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
        <i class="bx bx-chevron-left bx-sm align-middle"></i>
      </a>
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
        <li class="menu-header small text-uppercase">
          <span class="menu-header-text">Main Event</span>
        </li>
        <!-- Dashboard -->
        <li class="menu-item {{ ($title === 'Dashboard') ? 'active' : '' }}">
          <a href="/admin" class="menu-link">
              <div data-i18n="Account">Dashboard</div>
          </a>
        </li>
        <li class="menu-item {{ ($title === 'Payments') ? 'active' : '' }}">
            <a href="/payments" class="menu-link">
                <div data-i18n="Account">Payments</div>
            </a>
        </li>
    </ul>
  </aside>
