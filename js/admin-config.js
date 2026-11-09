/*
  حساب‌های پنل مدیریت
  نام کاربری و رمز را اینجا مستقیم می‌نویسیم تا بعداً خودتان تغییر بدهید.
  نکته: چون سایت فقط فرانت‌اند است، هر کسی می‌تواند این فایل را ببیند.
  برای امنیت واقعی باید ورود روی سرور انجام شود.
*/

const ADMIN_ACCOUNTS = [
  {
    role: "owner",
    username: "owner",
    password: "Owner@2026",
    title: "مالک فروشگاه",
  },
  {
    role: "admin",
    username: "admin",
    password: "Admin@2026",
    title: "مدیر سایت",
  },
];

// دسترسی‌ها: مالک همه‌چیز، ادمین فقط افزودن/ویرایش محصول و مدیریت وضعیت سفارش
const ROLE_PERMISSIONS = {
  owner: [
    "products.write",
    "products.delete",
    "orders.write",
    "orders.delete",
    "settings",
  ],
  admin: ["products.write", "orders.write"],
};
