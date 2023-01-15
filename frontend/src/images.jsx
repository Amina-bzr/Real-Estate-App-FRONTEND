import React, { useState } from "react";
import './images.css';

const images = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
     <div className="photo">
<section>
      <label>
        + Ajouter Image
        <br />
        <span>5 photos max</span>
        <input
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
      </label>
      <br />

      <input type="file" multiple />

      {selectedImages.length > 0 &&
        (selectedImages.length > 5 ? (
          <p className="error">
            vous ne pouvez pas deposer + de 5! <br />
            <span>
             supprimez <b> {selectedImages.length - 5} </b> photos{" "}
            </span>
          </p>
        ) : (
          <button
            className="upload-btn"
            onClick={() => {
              console.log(selectedImages);
            }}
          >
            UPLOAD {selectedImages.length} IMAGES
            {selectedImages.length === 1 ? "" : "S"}
          </button>
        ))}

      <div className="images">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="100" alt="upload" />
                <button onClick={() => deleteHandler(image)}>
                  supprimer
                </button>
                <p>{index + 1}</p>
              </div>
            );
          })}
      </div>
    </section>
     </div>
    
  );
};

export default images;