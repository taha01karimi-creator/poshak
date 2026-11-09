# Digistyle (front-end)

باز کردن در VS Code با افزونه Live Server: روی `index.html` راست‌کلیک و Open with Live Server.

- index.html — صفحه اصلی
- category.html?gender=men|women|kids — صفحه هر دسته (۵ ردیف: کفش، لباس، شلوار، پاییز و زمستان، بهار و تابستان)
- css/style.css — استایل‌ها
- js/utils.js — ابزارهای کوچک
- js/data.js — برندها و محصولات
- js/store.js — سبد خرید، علاقه‌مندی‌ها، کاربر (localStorage)
- js/components.js — هدر، کارت، سبد، مودال، جستجو
- js/home.js و js/category.js — منطق هر صفحه

## پنل مدیریت
- آدرس: `admin.html`
- حساب‌ها و رمزها: `js/admin-config.js` (مالک: owner / Owner@2026، ادمین: admin / Admin@2026)
- دسترسی‌ها در `ROLE_PERMISSIONS` همان فایل قابل تغییر است.
- داده‌ها (محصولات، سفارش‌ها، تنظیمات) در localStorage مرورگر ذخیره می‌شوند.
