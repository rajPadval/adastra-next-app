export const uploadImg = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "blog-thumbnails");
  formData.append("api_key", "844826729493658");
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dkygcoyhb/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );
  const data = await res.json();
  if (!data) {
    return console.log("Error occured while uplaoding image");
  }
  return data.secure_url;
};
