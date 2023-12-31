import { AcademyCard, Title } from "../components";
import { academyList } from "./academyList";

export default function Academy() {
  return (
    <div className="sm:p-10 p-4">
      <div className="w-full flex items-center justify-center pb-10">
        <Title title="Academias" color="primary" />
      </div>
     
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {academyList.map((item) => (
          <AcademyCard
            key={item.id}
            nameAcademy={item.nameAcademy}
            address={item.address}
            gallery={item.gallery}
            hours={item.hours}
            logo={item.logo}
            insta={item.insta}
            teachers={item.teachers}
          />
        ))}
      </div>
    </div>
  );
}
