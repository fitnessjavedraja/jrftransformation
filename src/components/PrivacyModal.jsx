export default function PrivacyModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-[rgba(15,23,42,0.25)]" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-sm w-full max-w-3xl border border-slate-200">
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-[#0f172a]">Privacy Policy</h2>
          <button className="p-1 text-[#0f172a]" onClick={onClose} aria-label="Close privacy modal">
            <i data-lucide="x" style={{ width: 24, height: 24 }} />
          </button>
        </div>
        <div className="p-6 text-lg leading-8 text-[#334155]">
          We collect submitted form data to respond to coaching inquiries. Contact: fitness.javedraja@gmail.com
        </div>
      </div>
    </div>
  );
}
