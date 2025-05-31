import React, { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_BASE_URL +"/api/project";

// Helper to check if a value is a plain object
const isObject = (val) => val && typeof val === "object" && !Array.isArray(val);

const gherkinProduct = {
  product_name: "Temp",
  product_range_description:
    "At Desai Group, we offer a wide variety of freshly harvested gherkins, meticulously graded and processed to meet stringent international quality standards. Our gherkins are available in multiple preservation mediums and packaging formats to suit the needs of global markets.",
  product_categories: [
    "Gherkins in Brine",
    "Gherkins in Acetic Acid (Vinegar)",
    "Gherkins in Natural Vinegar",
  ],
  size_grades: {
    description:
      "We offer a comprehensive range of size grades tailored to regional preferences and buyer requirements.",
    grades_by_market: {
      "United States": ["60/160", "30/60"],
      Europe: ["10/30", "60/80", "80/150", "150/300", "300+"],
      Russia: ["3–6 cm", "6–9 cm", "9–12 cm"],
      "Middle East & South America": ["150/300", "300+"],
    },
    custom_grades:
      "Custom grades are available upon request to meet specific buyer specifications.",
  },
  packing_details: {
    description:
      "To ensure product integrity and safety during transit and storage, we maintain world-class packaging standards:",
    bulk_packaging:
      "Supplied in 270–280 kg HDPE barrels, manufactured using certified food-grade material.",
    retail_packaging:
      "Customized food-grade packaging tailored to individual client requirements.",
  },
  certifications: {
    standard_certifications: [
      "HACCP Certified",
      "FSSAI Compliant",
      "ISO 22000:2018 Certified",
      "APEDA Registered",
    ],
    additional_certifications:
      "Additional certifications such as BRC or USDA Organic are available upon request.",
  },
};

function EditProjects() {
  const [projects, setProjects] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({});
  const [creating, setCreating] = useState(false);
  const [editingKeys, setEditingKeys] = useState({});

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle input change for dynamic fields (top-level or nested)
  const handleChange = (key, value, parent = null) => {
    if (parent) {
      setForm({
        ...form,
        [parent]: { ...form[parent], [key]: value },
      });
    } else {
      setForm({ ...form, [key]: value });
    }
  };

  // Add a new empty field (top-level or nested)
  const handleAddField = (parent = null) => {
    if (parent) {
      setForm({
        ...form,
        [parent]: { ...form[parent], "": "" },
      });
    } else {
      setForm({ ...form, "": "" });
    }
  };

  // Remove a field by key (top-level or nested)
  const handleRemoveField = (key, parent = null) => {
    if (parent) {
      const pathArr = parent.split(".");
      const updatedForm = deleteNestedKey(form, pathArr, key);
      setForm(updatedForm);
    } else {
      const updated = { ...form };
      delete updated[key];
      setForm(updated);
    }
  };

  // Convert a value to an object (for nested fields)
  const handleConvertToObject = (key) => {
    setForm({ ...form, [key]: {} });
  };

  // Convert a nested value to a string
  const handleConvertToString = (key) => {
    setForm({ ...form, [key]: "" });
  };

  // For nested fields
  const handleConvertSubToObject = (parent, key) => {
    setForm({
      ...form,
      [parent]: { ...form[parent], [key]: {} },
    });
  };

  const handleConvertSubToString = (parent, key) => {
    setForm({
      ...form,
      [parent]: { ...form[parent], [key]: "" },
    });
  };

  // Start editing a project
  const handleEdit = (project) => {
    setEditing(project._id);
    setForm(project);
    setCreating(false);
  };

  // Save (update) a project
  const handleSave = async () => {
    try {
      const { _id, __v, ...payload } = form;
      const cleanedPayload = removeEmptyObjects(payload);
      await fetch(`${API_URL}/${editing}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanedPayload),
      });
      setEditing(null);
      setForm({});
      fetchProjects();
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  // Delete a project
  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this project?")) {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        fetchProjects();
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  // Start creating a new project
  const handleCreateNew = () => {
    setForm({ ...gherkinProduct }); // Use the template as default
    setCreating(true);
    setEditing(null);
  };

  // Save new project
  const handleCreate = async () => {
    try {
      const { _id, __v, ...payload } = form;
      const cleanedPayload = removeEmptyObjects(payload);
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanedPayload),
      });
      setCreating(false);
      setForm({});
      fetchProjects();
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  // Cancel editing/creating
  const handleCancel = () => {
    setEditing(null);
    setCreating(false);
    setForm({});
  };

  // Render dynamic fields (supports nested)
  const renderFields = (obj = form, parent = null, path = "") => (
    <div>
      {Object.entries(obj).map(([key, value], idx) => {
        const fieldPath = path ? `${path}.${key}` : key;
        return (
          <div key={fieldPath + idx} className="flex flex-col mb-2">
            <div className="flex items-center">
              <input
                className="p-2 border mr-2 w-1/3"
                value={editingKeys[fieldPath] !== undefined ? editingKeys[fieldPath] : key}
                onChange={(e) => {
                  setEditingKeys({ ...editingKeys, [fieldPath]: e.target.value });
                }}
                onBlur={(e) => {
                  const newKey = e.target.value;
                  if (newKey === key || !newKey) {
                    setEditingKeys((prev) => {
                      const updated = { ...prev };
                      delete updated[fieldPath];
                      return updated;
                    });
                    return;
                  }
                  if (parent) {
                    const pathArr = parent.split(".");
                    const updatedForm = renameKeyInObject(form, pathArr, key, newKey);
                    setForm(updatedForm);
                  } else {
                    const updated = { ...form };
                    updated[newKey] = updated[key];
                    delete updated[key];
                    setForm(updated);
                  }
                  setEditingKeys((prev) => {
                    const updated = { ...prev };
                    delete updated[fieldPath];
                    return updated;
                  });
                }}
                placeholder="Key"
              />
              {!isObject(value) ? (
                <>
                  <input
                    className="p-2 border mr-2 w-1/2"
                    value={value}
                    onChange={(e) =>
                      parent
                        ? handleChange(key, e.target.value, parent)
                        : handleChange(key, e.target.value)
                    }
                    placeholder="Value"
                  />
                  <button
                    type="button"
                    title="Convert to Object"
                    onClick={() =>
                      parent
                        ? handleConvertSubToObject(parent, key)
                        : handleConvertToObject(key)
                    }
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded mr-2 flex items-center justify-center"
                  >
                    <span role="img" aria-label="To Object">
                      🗂️
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    title="Convert to String"
                    onClick={() =>
                      parent
                        ? handleConvertSubToString(parent, key)
                        : handleConvertToString(key)
                    }
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded mr-2 flex items-center justify-center"
                  >
                    <span role="img" aria-label="To String">
                      🔤
                    </span>
                  </button>
                </>
              )}
              <button
                type="button"
                title="Remove Field"
                onClick={() =>
                  parent
                    ? handleRemoveField(key, parent)
                    : handleRemoveField(key)
                }
                className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded mr-2 flex items-center justify-center"
              >
                <span role="img" aria-label="Remove Field">
                  ❌
                </span>
              </button>
              {isObject(obj) && (
                <button
                  type="button"
                  title="Add Field"
                  onClick={() =>
                    parent
                      ? handleAddField(parent)
                      : handleAddField(key)
                  }
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded flex items-center justify-center"
                >
                  <span role="img" aria-label="Add Field">
                    ➕
                  </span>
                </button>
              )}
            </div>
            {/* Render nested fields if value is object */}
            {isObject(value) && (
              <div className="ml-8 mt-2 border-l pl-4">
                {renderFields(value, parent ? `${parent}.${key}` : key, fieldPath)}
              </div>
            )}
          </div>
        );
      })}
      {/* Always show Add Field button if no fields at this level */}
      {0 === 0 && (
        <button
          type="button"
          title="Add Field"
          onClick={() => (parent ? handleAddField(parent) : handleAddField())}
          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded flex items-center justify-center"
        >
          <span role="img" aria-label="Add Field">
            ➕
          </span>
        </button>
      )}
    </div>
  );

  function renameKeyInObject(obj, pathArr, oldKey, newKey) {
    if (pathArr.length === 0) {
      const updated = { ...obj };
      updated[newKey] = updated[oldKey];
      delete updated[oldKey];
      return updated;
    }
    const [first, ...rest] = pathArr;
    return {
      ...obj,
      [first]: renameKeyInObject(obj[first], rest, oldKey, newKey),
    };
  }

  function deleteNestedKey(obj, pathArr, key) {
    if (pathArr.length === 0) {
      const updated = { ...obj };
      delete updated[key];
      return updated;
    }
    const [first, ...rest] = pathArr;
    return {
      ...obj,
      [first]: deleteNestedKey(obj[first], rest, key),
    };
  }

  function removeEmptyObjects(obj) {
    if (Array.isArray(obj)) {
      return obj.map(removeEmptyObjects).filter((v) => v !== undefined);
    } else if (isObject(obj)) {
      const cleaned = Object.entries(obj)
        .map(([k, v]) => [k, removeEmptyObjects(v)])
        .filter(([, v]) => v !== undefined && (typeof v !== "object" || Object.keys(v).length > 0));
      if (cleaned.length === 0) return undefined;
      return Object.fromEntries(cleaned);
    } else if (obj === "" || obj === undefined) {
      return undefined;
    }
    return obj;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>
      <button
        onClick={handleCreateNew}
        className="mb-4 bg-green-700 text-white px-4 py-2 rounded"
      >
        + Create New Product
      </button>
      {/* Create or Edit Form */}
      {(editing || creating) && (
        <div className="mb-6 p-4 border rounded bg-gray-50">
          {renderFields()}
          <button
            onClick={creating ? handleCreate : handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      )}
      {/* Project List */}
      {projects.map((project) => (
        <div
          key={project._id}
          className="mb-2 flex justify-between items-center border-b pb-2"
        >
          <div className="flex-1">
            <span className="font-semibold">
              {project.name || project.title || project.product_name || project._id}
            </span>
            {/* <div className="text-xs text-gray-500">
              {Object.entries(project)
                .filter(([k]) => k !== "_id" && k !== "__v")
                .map(([k, v]) => (
                  <span key={k} className="mr-2">
                    <b>{k}:</b>{" "}
                    {isObject(v) ? JSON.stringify(v) : String(v)}
                  </span>
                ))}
            </div> */}
          </div>
          <div>
            <button
              onClick={() => handleEdit(project)}
              className="bg-blue-600 text-white px-2 py-1 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(project._id)}
              className="bg-red-600 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditProjects;