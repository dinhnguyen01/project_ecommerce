import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoSearch, IoClose } from "react-icons/io5";
import Zoom from "@mui/material/Zoom";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom in={true} ref={ref} {...props} />;
});

const LocationDropdown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [locationList, setLocationList] = useState([]);
  const [filteredLocationList, setFilteredLocationList] = useState([]);

  const context = useContext(MyContext);

  useEffect(() => {
    setLocationList(context.locationList);
    setFilteredLocationList(context.locationList);
  }, [context.locationList]);

  const selectLocation = (location) => {
    setIsOpenModal(false);
    context.setSelectedLocation(location);
  };

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = locationList.filter((item) =>
        item.province_name.toLowerCase().includes(keyword)
      );
      setFilteredLocationList(list);
    } else {
      setFilteredLocationList(locationList);
    }
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
    setFilteredLocationList(locationList);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Button className="header_location-dropdown" onClick={handleOpenModal}>
        <div className="info d-flex flex-column">
          <span className="label">Vị trí của bạn</span>
          <span className="name">
            {context.selectedLocation !== ""
              ? context.selectedLocation
              : "Chọn vị trí"}
          </span>
        </div>
        <span className="ms-auto text-black">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={handleCloseModal}
        TransitionComponent={Transition}
        className="location-modal"
      >
        <Button className="modal_close" onClick={handleCloseModal}>
          <IoClose />
        </Button>
        <p className="modal-title">Chọn địa điểm của bạn</p>
        <p className="modal-subtitle">
          Nhập địa chỉ để biết chính xác ưu đãi cho khu vực của bạn.
        </p>

        <div className="modal_search-location">
          <span className="modal_button-search">
            <IoSearch />
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm khu vực"
            onChange={filterList}
          />
        </div>

        <ul className="modal_list-location">
          {filteredLocationList?.length !== 0 ? (
            filteredLocationList.map((item, index) => {
              const locationName = item.province_name.replace(
                /Thành phố|Tỉnh/g,
                ""
              );
              return (
                <li
                  key={index}
                  className={`modal_location-item ${
                    locationName === context.selectedLocation ? "active" : ""
                  }`}
                  onClick={() => selectLocation(locationName)}
                >
                  <span>{locationName}</span>
                </li>
              );
            })
          ) : (
            <li className="not-found">
              <span>Không có kết quả nào được tìm thấy</span>
            </li>
          )}
        </ul>
      </Dialog>
    </>
  );
};

export default LocationDropdown;

// import React, { useContext, useEffect } from "react";
// import Button from "@mui/material/Button";
// import { FaAngleDown } from "react-icons/fa6";
// import Dialog from "@mui/material/Dialog";
// import { IoSearch, IoClose } from "react-icons/io5";
// import { useState } from "react";
// import Zoom from "@mui/material/Zoom";
// import { MyContext } from "../../App";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Zoom in={true} ref={ref} {...props} />;
// });

// const LocationDropdown = () => {
//   const [isOpenModal, setisOpenModal] = useState(false);
//   const [selectTab, setSelectTab] = useState(null);
//   const [locationList, setLocationList] = useState([]);
//   const [filteredLocationList, setFilteredLocationList] = useState([]);

//   const context = useContext(MyContext);

//   useEffect(() => {
//     setLocationList(context.locationList);
//     setFilteredLocationList(context.locationList);
//   }, [context.locationList]);

//   const selectLocation = (index, location) => {
//     setSelectTab(index);
//     setisOpenModal(false);
//     context.setSelectedLocation(location);
//   };

//   const filterList = (e) => {
//     const keyword = e.target.value.toLowerCase();

//     if (keyword !== "") {
//       const list = locationList.filter((item) => {
//         return item.province_name.toLowerCase().includes(keyword);
//       });
//       setFilteredLocationList(list);
//     } else {
//       setFilteredLocationList(locationList);
//     }
//   };

//   return (
//     <>
//       <Button
//         className="header_location-dropdown"
//         onClick={() => setisOpenModal(true)}
//       >
//         <div className="info d-flex flex-column">
//           <span className="label">Vị trí của bạn</span>
//           <span className="name">
//             {context.selectedLocation !== ""
//               ? context.selectedLocation
//               : "Chọn vị trí"}
//           </span>
//         </div>
//         <span className="ms-auto text-black">
//           <FaAngleDown />
//         </span>
//       </Button>

//       <Dialog
//         open={isOpenModal}
//         onClose={() => setisOpenModal(false)}
//         TransitionComponent={Transition}
//         className="location-modal"
//       >
//         <Button className="modal_close" onClick={() => setisOpenModal(false)}>
//           <IoClose />
//         </Button>
//         <p className="modal-title">Chọn địa điểm của bạn</p>
//         <p className="modal-subtitle">
//           Nhập địa chỉ để biết chính xác ưu đãi cho khu vực của bạn.
//         </p>

//         <div className="modal_search-location">
//           <span className="modal_button-search">
//             <IoSearch />
//           </span>
//           <input
//             type="text"
//             placeholder="Tìm kiếm khu vực"
//             onChange={filterList}
//           />
//         </div>

//         <ul className="modal_list-location">
//           {filteredLocationList?.length !== 0 ? (
//             filteredLocationList.map((item, index) => {
//               return (
//                 <li
//                   key={index}
//                   className={modal_location-item ${
//                     selectTab === index ? "active" : ""
//                   }}
//                   onClick={() =>
//                     selectLocation(
//                       index,
//                       item.province_name.replace(/Thành phố|Tỉnh/g, "")
//                     )
//                   }
//                 >
//                   <span>
//                     {item.province_name.replace(/Thành phố|Tỉnh/g, "")}
//                   </span>
//                 </li>
//               );
//             })
//           ) : (
//             <li className="not-found">
//               <span>Không có kết quả nào được tìm thấy</span>
//             </li>
//           )}
//         </ul>
//       </Dialog>
//     </>
//   );
// };
