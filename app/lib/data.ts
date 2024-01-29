import { formatCurrency } from "./utils";

export async function fetchRevenue() {
  return null;
}

export async function fetchLatestInvoices() {
  return null;
}

export async function fetchCardData() {
  const numberOfInvoices = Number("0");
  const numberOfCustomers = Number("0");
  const totalPaidInvoices = formatCurrency(0);
  const totalPendingInvoices = formatCurrency(0);

  return {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  };
}

export async function fetchFilteredInvoices() {
  return null;
}

export async function fetchInvoicesPages(query: string) {
  return null;
}

export async function fetchInvoiceById(id: string) {
  return null;
}

export async function fetchCustomers() {
  return null;
}

export async function fetchFilteredCustomers(query: string) {
  return null;
}

export async function getUser(email: string) {
  return null;
}
