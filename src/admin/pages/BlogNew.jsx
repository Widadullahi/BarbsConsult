// src/admin/pages/BlogNew.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import slugify from "slugify";
import Select from "react-select";

const BlogNew = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    tags: [],
    featured: false,
    status: "Draft",
    featuredImage: null,
    metaTitle: "",
    metaDescription: "",
    readingTime: 0,
  });

  const categories = [
    "Market Trends",
    "Investment Tips",
    "Buyer Guides",
    "Legal Updates",
    "Property Management",
    "Technology",
    "Market News",
  ];

  const tagOptions = [
    { value: "Investment", label: "Investment" },
    { value: "Lagos", label: "Lagos" },
    { value: "Trends", label: "Trends" },
    { value: "Real Estate", label: "Real Estate" },
    { value: "Property", label: "Property" },
  ];

  const quillRef = useRef(null);

  useEffect(() => {
    const words = form.content.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;
    const minutes = Math.ceil(words / 200);
    setForm((prev) => ({ ...prev, readingTime: minutes }));
  }, [form.content]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (type === "file") {
      setForm({ ...form, featuredImage: files[0] });
    } else {
      setForm({ ...form, [name]: value });
      if (name === "title") {
        setForm((prev) => ({ ...prev, slug: slugify(value, { lower: true }) }));
      }
    }
  };

  const handleTagsChange = (selected) => {
    setForm({ ...form, tags: selected || [] });
  };

  const handleContentChange = (value) => {
    setForm({ ...form, content: value });
  };

  const handleEditorImageUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("file", file);
      try {
        const res = await axios.post("/api/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        const url = res.data.url;
        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, "image", url);
      } catch (err) {
        console.error(err);
        alert("Image upload failed");
      }
    };
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
      handlers: {
        image: handleEditorImageUpload,
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      ...form,
      tags: form.tags.map((t) => t.value),
      featuredImage: form.featuredImage ? form.featuredImage.name : null,
    };
    console.log("Submitting Blog Post:", postData);
    alert("Blog post saved successfully!");
    navigate("/admin/blog");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Create New Blog Post
          </h1>
          <p className="text-gray-600 mt-1">Add a new article to your website</p>
        </div>
        <Link
          to="/admin/blog"
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Blog
        </Link>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6"
      >
        {/* Title & Slug */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Slug (auto-generated)
            </label>
            <input
              type="text"
              name="slug"
              value={form.slug}
              onChange={handleChange}
              placeholder="post-slug"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
            />
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Excerpt / Summary
          </label>
          <textarea
            name="excerpt"
            value={form.excerpt}
            onChange={handleChange}
            placeholder="Short summary"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            rows={3}
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <ReactQuill
            ref={quillRef}
            value={form.content}
            onChange={handleContentChange}
            modules={modules}
            placeholder="Write full content here..."
            className="bg-white border border-gray-300 rounded-lg"
          />
        </div>

        {/* Category & Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags
            </label>
            <Select
              isMulti
              options={tagOptions}
              value={form.tags}
              onChange={handleTagsChange}
            />
          </div>
        </div>

        {/* Featured Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Featured Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {form.featuredImage && (
            <p className="mt-2 text-sm text-gray-600">
              Selected file: {form.featuredImage.name}
            </p>
          )}
        </div>

        {/* Status & Featured */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
              <option value="Scheduled">Scheduled</option>
            </select>
          </div>
          <div className="flex items-center mt-5 md:mt-0">
            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-gray-700">Mark as Featured</label>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              Reading Time: {form.readingTime} min
            </p>
          </div>
        </div>

        {/* SEO Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Meta Title
            </label>
            <input
              type="text"
              name="metaTitle"
              value={form.metaTitle}
              onChange={handleChange}
              placeholder="SEO meta title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Meta Description
            </label>
            <input
              type="text"
              name="metaDescription"
              value={form.metaDescription}
              onChange={handleChange}
              placeholder="SEO meta description"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => navigate("/admin/blog")}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaSave className="mr-2" /> Save Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogNew;
