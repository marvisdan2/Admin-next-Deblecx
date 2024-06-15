import { SvgIconProps } from "@mui/material/SvgIcon";
// CUSTOM ICON COMPONENT
import duotone from "icons/duotone";

export interface ChildNavItem {
  name: string;
  path: string;
}

export interface NavItem {
  name: string;
  path?: string;
  children?: ChildNavItem[];
  Icon: (props: SvgIconProps) => JSX.Element;
}

export const navigation: NavItem[] = [
  {
    name: "Dashboards",
    Icon: duotone.PersonChalkboard,
    children: [
      { name: "Analytics 1", path: "/dashboard" },
      { name: "Analytics 2", path: "/dashboard/analytics-2" },
      { name: "Ecommerce", path: "/dashboard/ecommerce" },
      { name: "CRM", path: "/dashboard/crm" },
      { name: "Logistics", path: "/dashboard/logistics" },
      { name: "SaaS", path: "/dashboard/saas" },
      { name: "Marketing", path: "/dashboard/marketing" },
      { name: "Finance 1", path: "/dashboard/finance" },
      { name: "Finance 2", path: "/dashboard/finance-2" }
    ]
  },

  {
    name: "Profile",
    Icon: duotone.UserProfile,
    path: "/dashboard/profile"
  },
  {
    name: "Account",
    Icon: duotone.Accounts,
    path: "/dashboard/account"
  },
  {
    name: "Users",
    Icon: duotone.UserList,
    children: [
      { name: "Add User", path: "/dashboard/users/add-user" },
      { name: "User List 1", path: "/dashboard/users/user-list-1" },
      { name: "User Grid 1", path: "/dashboard/users/user-grid-1" },
      { name: "User List 2", path: "/dashboard/users/user-list-2" },
      { name: "User Grid 2", path: "/dashboard/users/user-grid-2" }
    ]
  },
  {
    name: "Products",
    Icon: duotone.AdminEcommerce,
    children: [
      { name: "Product List", path: "/dashboard/products/product-list-view" },
      { name: "Product Grid", path: "/dashboard/products/product-grid-view" },
      { name: "Create Product", path: "/dashboard/products/create-product" },
      { name: "Product Details", path: "/dashboard/products/product-details" }
    ]
  },
  {
    name: "Invoice",
    Icon: duotone.Invoice,
    children: [
      { name: "Invoice List", path: "/dashboard/invoices/invoice-list" },
      { name: "Invoice Details", path: "/dashboard/invoices/invoice-details" },
      { name: "Create Invoice", path: "/dashboard/invoices/create-invoice" }
    ]
  },
  {
    name: "Ecommerce",
    Icon: duotone.Ecommerce,
    children: [
      { name: "Cart", path: "/dashboard/cart" },
      { name: "Payment", path: "/dashboard/payment" },
      { name: "Billing Address", path: "/dashboard/billing-address" },
      { name: "Payment Complete", path: "/dashboard/payment-complete" }
    ]
  },
  {
    name: "Projects",
    Icon: duotone.ProjectChart,
    children: [
      { name: "Project 1", path: "/dashboard/projects/project-1" },
      { name: "Project 2", path: "/dashboard/projects/project-2" },
      { name: "Project 3", path: "/dashboard/projects/project-3" },
      { name: "Project Details", path: "/dashboard/projects/details" },
      { name: "Team Member", path: "/dashboard/projects/team-member" }
    ]
  },
  {
    name: "Data Table",
    Icon: duotone.DataTable,
    children: [{ name: "Data Table 1", path: "/dashboard/data-tables/table-1" }]
  },
  {
    name: "Todo List",
    Icon: duotone.TodoList,
    path: "/dashboard/todo-list"
  },
  {
    name: "Chats",
    Icon: duotone.Chat,
    path: "/dashboard/chat"
  },
  {
    name: "Email",
    Icon: duotone.Inbox,
    children: [
      { name: "Inbox", path: "/dashboard/email/all" },
      { name: "Email Details", path: "/dashboard/email/details" },
      { name: "Create Email", path: "/dashboard/email/compose" }
    ]
  },
  {
    name: "Pages",
    Icon: duotone.Pages,
    children: [
      { name: "About", path: "/dashboard/about" },
      { name: "Career", path: "/dashboard/career" },
      { name: "Career Apply", path: "/dashboard/career-apply" },
      { name: "Support", path: "/dashboard/support" },
      { name: "Create Ticket", path: "/dashboard/support/create-ticket" },
      { name: "File Manager", path: "/dashboard/file-manager" }
    ]
  }
];
