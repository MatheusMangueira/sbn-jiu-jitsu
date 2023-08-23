import { GalleryPage } from "..";
import { photos } from "../GalleryPage/photo";
import { Title } from "../Title";

export const PhotoPage = () => {
  return (
    <div className="sm:p-10 p-4 min-h-[100vh]">
      <div className="w-full flex items-center justify-center pb-10">
        <Title color="text-primary" title="Galeria" />
      </div>
      {/* <GalleryPage /> */}
      <div>
        <GalleryPage 
        
        galleryID="my-test-gallery" images={photos} />
      </div>
    </div>
  );
};
