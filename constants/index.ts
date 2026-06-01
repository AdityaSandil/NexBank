export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/rupee-circle.svg", 
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];

// Test user credentials
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e",
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9",
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
  },
];

// ✅ Indian Banks List
export const INDIAN_BANKS = [
  { id: "sbi", name: "State Bank of India", short: "SBI" },
  { id: "hdfc", name: "HDFC Bank", short: "HDFC" },
  { id: "icici", name: "ICICI Bank", short: "ICICI" },
  { id: "bob", name: "Bank of Baroda", short: "BOB" },
  { id: "pnb", name: "Punjab National Bank", short: "PNB" },
  { id: "axis", name: "Axis Bank", short: "AXIS" },
  { id: "kotak", name: "Kotak Mahindra Bank", short: "KOTAK" },
  { id: "canara", name: "Canara Bank", short: "CANARA" },
  { id: "union", name: "Union Bank of India", short: "UBI" },
  { id: "idbi", name: "IDBI Bank", short: "IDBI" },
];

// ✅ Indian Payment Methods
export const PAYMENT_METHODS = [
  { id: "upi", label: "UPI", limit: "₹1,00,000/day" },
  { id: "imps", label: "IMPS", limit: "₹2,00,000/txn" },
  { id: "neft", label: "NEFT", limit: "No limit" },
  { id: "rtgs", label: "RTGS", limit: "Min ₹2,00,000" },
];

// ✅ Updated categories to Indian context
export const topCategoryStyles = {
  "Food and Drink": {
    bg: "bg-blue-25",
    circleBg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: "/icons/monitor.svg",
  },
  Travel: {
    bg: "bg-success-25",
    circleBg: "bg-success-100",
    text: {
      main: "text-success-900",
      count: "text-success-700",
    },
    progress: {
      bg: "bg-success-100",
      indicator: "bg-success-700",
    },
    icon: "/icons/coins.svg",
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transactionCategoryStyles = {
  "Food and Drink": {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  Payment: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Bank Fees": {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  Transfer: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  Travel: {
    borderColor: "border-[#0047AB]",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  // ✅ Added Indian specific categories
  "UPI Transfer": {
    borderColor: "border-purple-600",
    backgroundColor: "bg-purple-500",
    textColor: "text-purple-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Mobile Recharge": {
    borderColor: "border-orange-600",
    backgroundColor: "bg-orange-500",
    textColor: "text-orange-700",
    chipBackgroundColor: "bg-inherit",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};