![Logo](/public/assets/texmart-landscape.png)

# **TexMart**

An intuitive and responsive e-commerce platform with essential features for a seamless online shopping experience. Includes a powerful CMS for multi-store management and product operations.

## **Main App Features**

**Basic E-Commerce Functionality**

- Browse products by categories via a clean and user-friendly navbar.
- Add products to the cart and proceed through a streamlined checkout process.
- Product pages with detailed information.

![Home Page Screenshot](/public/screenshots/home.png)
![Category Page Screenshot](/public/screenshots/category.png)
![Product Page Screenshot](/public/screenshots/product.png)

**Cart**

- Add and manage products in your cart before proceeding to checkout.

![Cart Page](/public/screenshots/checkout.png)

**Payments**

- Integrated with Razorpay for secure and efficient payment processing.

![Checkout and Payment](/public/screenshots/payment.png)

**Responsive Design**

- Clean and simple UI optimized for devices of all sizes, using the shadcn UI library.

| ![Responsive UI](/public/screenshots/responsive-home.jpg) | ![Responsive UI](/public/screenshots/responsive-category.jpg) | ![Responsive UI](/public/screenshots/responsive-product.jpg) | ![Responsive UI](/public/screenshots/responsive-checkout.jpg) |
| --------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------- |

---

## **CMS Features**

**Multi-Store Management**

- Create and manage multiple stores within the platform.

**Dashboard**

- Provides insights into total revenue, sales, products in stock, and month-wise sales trends.

![Dashboard Overview](/public/screenshots/dashboard.png)

**Billboard Management**

- View, edit, and delete billboards to customize store displays.

![Billboard Management](/public/screenshots/billboard.png)

**Category Management**

- Manage product categories with options to view, edit, and delete.

![Category Management](/public/screenshots/categories.png)

**Color and Size Management**

- Define and manage available colors and sizes for products.

![Color and Size Management](/public/screenshots/colors.png)
![Color and Size Management](/public/screenshots/sizes.png)

**Product Management**

- Add, edit, or delete products with ease.

![Product Management](/public/screenshots/product.png)
![Product Management](/public/screenshots/product-edit.png)

**Orders Management**

- View details of user orders, including statuses and payment confirmations.

**Store Settings**

- Update store-specific settings such as store name and delete store functionality.

![Store Settings](/public/screenshots/settings.png)

**API Documentation**

- Each feature includes API endpoints for CRUD operations. Example for Billboards:
- **GET** (Public): `https://texmart-admin.vercel.app/api/stores/{storeId}/billboards/`
- **POST** (Admin): `https://texmart-admin.vercel.app/api/stores/{storeId}/billboards/`
- **PATCH** (Admin): `https://texmart-admin.vercel.app/api/stores/{storeId}/billboards/{billboardId}`
- **DELETE** (Admin): `https://texmart-admin.vercel.app/api/stores/{storeId}/billboards/{billboardId}`

![Store Settings](/public/screenshots/api.png)

---

## **Environment Variables**

To run this project, add the following environment variables:

**Main App Environment Variables:**

- `NEXT_PUBLIC_RAZORPAY_API_KEY`
- `NEXT_PUBLIC_RAZORPAY_SECRET`
- `NEXT_PUBLIC_API_URL`

**CMS Environment Variables:**

- `FRONTEND_URL`
- `RAZOR_PAY_KEY_SECRET`
- `RAZOR_PAY_KEY_ID`
- `NEXT_PUBLIC_BASE_URL`
- `MONGODB_URI`
- `AUTH_SECRET`
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`

---

## **Installation and Setup**

1.  Clone the repository:

```bash
git clone https://github.com/mehulsaini763/texmart.git
```

2. Navigate to the project directory:

   ```bash
   cd texmart
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables as specified above.

5. Start the development server:
   ```bash
   npm run dev
   ```

---

## **Tech Stack**

- **Frontend**: React.js, Next.js,
- **Backend**: Node.js, MongoDB
- **UI**: Tailwind, ShadCN
- **Payments**: RazorPay

## Links

- **Main App**: [Github](https://github.com/mehulsaini763/texmart) | [Live](https://texmart.vercel.app/)
- **CMS**: [Github](https://github.com/mehulsaini763/texmart-admin) | [Live](https://texmart-admin.vercel.app/)
