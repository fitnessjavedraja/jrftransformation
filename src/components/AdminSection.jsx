import { useMemo, useState } from 'react';

const ADMIN_EMAIL = 'fitness.javedraja@gmail.com';
const ADMIN_PASSWORD = 'raja001122';

const emptyForm = {
  name: '',
  duration: '',
  result: '',
  before: '',
  after: '',
};

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Unable to read file'));
    reader.readAsDataURL(file);
  });
}

export default function AdminPage({ transformations, onSaveTransformations }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [authError, setAuthError] = useState('');
  const [formData, setFormData] = useState(emptyForm);
  const [editingIndex, setEditingIndex] = useState(null);
  const [uploadingField, setUploadingField] = useState('');

  const isEditing = useMemo(() => editingIndex !== null, [editingIndex]);

  const handleLogin = (event) => {
    event.preventDefault();
    if (credentials.email === ADMIN_EMAIL && credentials.password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setAuthError('');
      return;
    }

    setAuthError('Invalid email or password.');
  };

  const handleImageUpload = async (field, event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploadingField(field);
      const dataUrl = await fileToDataUrl(file);
      setFormData((prev) => ({ ...prev, [field]: dataUrl }));
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setUploadingField('');
    }
  };

  const resetForm = () => {
    setEditingIndex(null);
    setFormData(emptyForm);
  };

  const saveItem = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.duration || !formData.result || !formData.before || !formData.after) {
      setAuthError('Please complete all fields before saving.');
      return;
    }

    const nextItem = { ...formData };
    const nextList = [...transformations];

    if (isEditing) {
      nextList[editingIndex] = nextItem;
    } else {
      nextList.push(nextItem);
    }

    onSaveTransformations(nextList);
    setAuthError('');
    resetForm();
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setFormData(transformations[index]);
    setAuthError('');
  };

  const deleteItem = (index) => {
    const itemName = transformations[index]?.name || 'this record';
    const confirmed = window.confirm(`Delete ${itemName}? This cannot be undone.`);
    if (!confirmed) return;

    const nextList = transformations.filter((_, itemIndex) => itemIndex !== index);
    onSaveTransformations(nextList);
    if (editingIndex === index) {
      resetForm();
    }
  };

  return (
    <section id="admin-page" className="section-block bg-[#f8fafc] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="section-kicker">Admin Panel</p>
          <h2 className="section-title">Manage Results Section</h2>
        </div>

        {!isLoggedIn ? (
          <form className="admin-card" onSubmit={handleLogin}>
            <p className="admin-note">Sign in to manage all transformation images and text.</p>
            <input
              className="form-input"
              type="email"
              placeholder="Admin email"
              value={credentials.email}
              onChange={(event) => setCredentials((prev) => ({ ...prev, email: event.target.value }))}
              required
            />
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(event) => setCredentials((prev) => ({ ...prev, password: event.target.value }))}
              required
            />
            {authError ? <p className="admin-error">{authError}</p> : null}
            <button type="submit" className="btn-gold admin-btn">Login</button>
          </form>
        ) : (
          <div className="admin-layout">
            <form className="admin-card admin-form-card" onSubmit={saveItem}>
              <p className="admin-note">{isEditing ? 'Editing transformation' : 'Add new transformation'}</p>
              <div className="admin-form-grid">
                <label className="admin-field">
                  <span className="admin-label">Client name</span>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Enter client name"
                    value={formData.name}
                    onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  />
                </label>
                <label className="admin-field">
                  <span className="admin-label">Program duration</span>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Example: 4 Months Program"
                    value={formData.duration}
                    onChange={(event) => setFormData((prev) => ({ ...prev, duration: event.target.value }))}
                  />
                </label>
                <label className="admin-field admin-field-wide">
                  <span className="admin-label">Result text</span>
                  <textarea
                    className="form-input"
                    placeholder="Example: Lost 18 kg and improved overall fitness"
                    rows={4}
                    value={formData.result}
                    onChange={(event) => setFormData((prev) => ({ ...prev, result: event.target.value }))}
                  />
                </label>
              </div>

              <div className="admin-upload-grid">
                <div className="admin-upload-card">
                  <p className="admin-label">Before photo</p>
                  <div className="admin-preview-box">
                    {formData.before ? (
                      <img className="admin-preview-image" src={formData.before} alt="Before preview" />
                    ) : (
                      <span className="admin-preview-placeholder">No image selected</span>
                    )}
                  </div>
                  <label className="admin-upload-btn">
                    Upload before image
                    <input type="file" accept="image/*" onChange={(event) => handleImageUpload('before', event)} />
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Or paste before image URL"
                    value={formData.before}
                    onChange={(event) => setFormData((prev) => ({ ...prev, before: event.target.value }))}
                  />
                </div>

                <div className="admin-upload-card">
                  <p className="admin-label">After photo</p>
                  <div className="admin-preview-box">
                    {formData.after ? (
                      <img className="admin-preview-image" src={formData.after} alt="After preview" />
                    ) : (
                      <span className="admin-preview-placeholder">No image selected</span>
                    )}
                  </div>
                  <label className="admin-upload-btn">
                    Upload after image
                    <input type="file" accept="image/*" onChange={(event) => handleImageUpload('after', event)} />
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Or paste after image URL"
                    value={formData.after}
                    onChange={(event) => setFormData((prev) => ({ ...prev, after: event.target.value }))}
                  />
                </div>
              </div>

              {uploadingField ? <p className="admin-note">Uploading {uploadingField} image...</p> : null}
              {authError ? <p className="admin-error">{authError}</p> : null}

              <div className="admin-actions">
                <button type="submit" className="btn-gold admin-btn">{isEditing ? 'Update' : 'Add'}</button>
                {isEditing ? (
                  <button type="button" className="btn-outline admin-btn" onClick={resetForm}>Cancel Edit</button>
                ) : null}
                <button type="button" className="btn-outline admin-btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
              </div>
            </form>

            <div className="admin-card admin-table-card">
              <div className="admin-table-header">
                <p className="admin-note">Existing transformations</p>
                <p className="admin-count">{transformations.length} total records</p>
              </div>
              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Duration</th>
                      <th>Result</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transformations.map((item, index) => (
                      <tr key={`${item.name}-${index}`}>
                        <td>
                          <img className="admin-thumb" src={item.before} alt={`${item.name} before`} />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.duration}</td>
                        <td>{item.result}</td>
                        <td>
                          <div className="admin-actions">
                            <button type="button" className="admin-btn admin-btn-edit" onClick={() => startEdit(index)}>Edit</button>
                            <button type="button" className="admin-btn admin-btn-delete" onClick={() => deleteItem(index)}>Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
