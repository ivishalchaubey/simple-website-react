import axios from "axios";
import { useEffect, useState } from "react";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);
  const PhotoAPI = async () => {
    const data = await axios(
      `https://jsonplaceholder.typicode.com/photos?_limit=9&_page=${page}`
    );
    const allData = data.data;
    setPhotos((prev) => [...prev, ...allData]);
    setloading(false);
    console.log(photos);
  };
  useEffect(() => {
    PhotoAPI();
  }, [page]);
  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setloading(true);
        setpage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);
  return (
    <>
      <div className="row">
        {photos.map((items, key) => (
          <div className="col-md-4 my-2" key={key}>
            <div className="card text-dark" style={{ width: "18rem" }}>
              <img src={items.url} className="card-img-top" alt="Image" />
              <div className="card-body">
                <div className="card-footer bg-transparent border-success">
                  {items.title}
                </div>
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PhotoGallery;
