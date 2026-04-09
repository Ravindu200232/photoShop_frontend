import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";

export default function CsvPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
  });

  const toStartOfDayISO = (dateStr) => {
    if (!dateStr) return null;
    return new Date(`${dateStr}T00:00:00`).toISOString();
  };

  const toEndOfDayISO = (dateStr) => {
    if (!dateStr) return null;
    return new Date(`${dateStr}T23:59:59.999`).toISOString();
  };

  const formatDateTime = (value) => {
    if (!value) return "-";
    const date = new Date(value);
    return date.toLocaleString();
  };

  const fetchRows = async (customFilters = filters) => {
    setLoading(true);
    setErrorMsg("");

    try {
      let query = supabase
        .from("inquiries")
        .select("id, full_name, email, phone, looking_to, contact_method, created_at")
        .order("created_at", { ascending: false })
        .range(0, 999);

      if (customFilters.startDate) {
        query = query.gte("created_at", toStartOfDayISO(customFilters.startDate));
      }

      if (customFilters.endDate) {
        query = query.lte("created_at", toEndOfDayISO(customFilters.endDate));
      }

      const { data, error } = await query;

      if (error) throw error;

      setRows(data || []);
    } catch (error) {
      console.error(error);
      setErrorMsg(error.message || "Failed to fetch inquiries.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRows({ startDate: "", endDate: "" });
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    fetchRows(filters);
  };

  const handleReset = () => {
    const resetFilters = { startDate: "", endDate: "" };
    setFilters(resetFilters);
    fetchRows(resetFilters);
  };

  const escapeCsv = (value) => {
    if (value === null || value === undefined) return '""';
    const stringValue = String(value).replace(/"/g, '""');
    return `"${stringValue}"`;
  };

  const downloadCSV = () => {
    if (!rows.length) {
      alert("No data to export.");
      return;
    }

    const headers = [
      "ID",
      "Full Name",
      "Email",
      "Phone",
      "Looking To",
      "Contact Method",
      "Created At",
    ];

    const csvRows = rows.map((row) => [
      row.id,
      row.full_name,
      row.email,
      row.phone,
      row.looking_to,
      row.contact_method || "",
      formatDateTime(row.created_at),
    ]);

    const csvContent = [
      headers.map(escapeCsv).join(","),
      ...csvRows.map((row) => row.map(escapeCsv).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "inquiries-report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadPDF = () => {
    if (!rows.length) {
      alert("No data to export.");
      return;
    }

    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });

    doc.setFontSize(16);
    doc.text("Inquiry Report", 14, 14);

    doc.setFontSize(10);
    doc.text(
      `Date Filter: ${filters.startDate || "All"} to ${filters.endDate || "All"}`,
      14,
      20
    );

    autoTable(doc, {
      startY: 26,
      head: [
        [
          "ID",
          "Full Name",
          "Email",
          "Phone",
          "Looking To",
          "Contact Method",
          "Created At",
        ],
      ],
      body: rows.map((row) => [
        row.id,
        row.full_name,
        row.email,
        row.phone,
        row.looking_to,
        row.contact_method || "-",
        formatDateTime(row.created_at),
      ]),
      styles: {
        fontSize: 8,
      },
      headStyles: {
        fillColor: [41, 128, 185],
      },
    });

    doc.save("inquiries-report.pdf");
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-6">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Inquiry Reports</h1>
          <p className="text-slate-600">
            View submitted form data, filter by date, and export as CSV or PDF.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-6">
          <div className="grid md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={filters.startDate}
                onChange={handleFilterChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={filters.endDate}
                onChange={handleFilterChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-4 py-3"
            >
              Filter Data
            </button>

            <button
              onClick={handleReset}
              className="bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-xl px-4 py-3"
            >
              Reset
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={downloadCSV}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl px-5 py-3"
            >
              Download CSV
            </button>

            <button
              onClick={downloadPDF}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl px-5 py-3"
            >
              Download PDF
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">Submitted Inquiries</h2>
            <span className="text-sm font-medium text-slate-500">
              Total: {rows.length}
            </span>
          </div>

          {loading && (
            <div className="py-10 text-center text-slate-600">Loading data...</div>
          )}

          {!loading && errorMsg && (
            <div className="py-4 px-4 rounded-xl bg-red-100 text-red-700 mb-4">
              {errorMsg}
            </div>
          )}

          {!loading && !errorMsg && rows.length === 0 && (
            <div className="py-10 text-center text-slate-500">No inquiries found.</div>
          )}

          {!loading && !errorMsg && rows.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm">ID</th>
                    <th className="px-4 py-3 text-left text-sm">Full Name</th>
                    <th className="px-4 py-3 text-left text-sm">Email</th>
                    <th className="px-4 py-3 text-left text-sm">Phone</th>
                    <th className="px-4 py-3 text-left text-sm">Looking To</th>
                    <th className="px-4 py-3 text-left text-sm">Contact Method</th>
                    <th className="px-4 py-3 text-left text-sm">Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr
                      key={row.id}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-4 py-3 border-t border-slate-200">{row.id}</td>
                      <td className="px-4 py-3 border-t border-slate-200">{row.full_name}</td>
                      <td className="px-4 py-3 border-t border-slate-200">{row.email}</td>
                      <td className="px-4 py-3 border-t border-slate-200">{row.phone}</td>
                      <td className="px-4 py-3 border-t border-slate-200">{row.looking_to}</td>
                      <td className="px-4 py-3 border-t border-slate-200">
                        {row.contact_method || "-"}
                      </td>
                      <td className="px-4 py-3 border-t border-slate-200">
                        {formatDateTime(row.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}