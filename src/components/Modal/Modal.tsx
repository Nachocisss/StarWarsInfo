import React from "react";
import { useDetails } from "../../context/DetailContext.tsx";
import "./Modal.css";
import { IoIosCloseCircle } from "react-icons/io";
import categories from "../../constants/categories.json";
import swLogo1 from "../../assets/star-wars1.svg";

const sectionRender = (selected) => {
  return (
    <div className="sectionInfo">
      {categories.map((section) => {
        return (
          <ul key={section.title}>
            <h2 className="sectionTitle">{section.title}</h2>
            {section.categories.map((category) => {
              return (
                <li>
                  <strong>{category.title}</strong> {selected[category.value]}
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

const contentRender = (selected) => {
  return (
    <>
      <div className="contentHeader">
        <span className="modalTitle"> {selected.name}</span>
        <IoIosCloseCircle fill="white" size={30} className="closeIcon" />
      </div>
      <div className="contentBody">
        <div className="imageContainer">
          <img src={swLogo1} alt="star wars logo 1" className="ModalImage" />
        </div>
        <div className="detailsContainer">{sectionRender(selected)}</div>
      </div>
    </>
  );
};

export function Modal() {
  const { selected, selectCharacter } = useDetails();
  return (
    selected.name && (
      <div
        className="modalContainer"
        onClick={() => {
          selectCharacter({});
        }}
      >
        <div className="modal">{contentRender(selected)}</div>
      </div>
    )
  );
}
