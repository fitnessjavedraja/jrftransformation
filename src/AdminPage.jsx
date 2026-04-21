import AdminPageContent from './components/AdminSection';

export default function AdminPage({ transformationsData, setTransformationsData }) {
  return (
    <div id="admin-root" className="w-full h-full overflow-auto">
      <AdminPageContent
        transformations={transformationsData}
        onSaveTransformations={setTransformationsData}
      />
    </div>
  );
}
